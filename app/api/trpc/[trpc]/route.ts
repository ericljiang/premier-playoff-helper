import { Affinities, DefaultApi, PremierConferences, createConfiguration } from '@/valorant-api';
import { TRPCError, initTRPC } from '@trpc/server';
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch';
import { z } from 'zod';
import { henrikApiKey } from '../../environment';
import { isDefined } from '@/util';
import { auth } from '@/auth';

export const dynamic = 'force-dynamic';

const t = initTRPC.context<typeof createContext>().create();
const router = t.router;

const createContext = async (_opts: FetchCreateContextFnOptions) => {
  const session = await auth();
  if (session?.accessToken) {
    const res = await fetch("https://americas.api.riotgames.com/riot/account/v1/accounts/me", {
      headers: {
        "Authorization": `Bearer ${session.accessToken}`
      }
    });
    const accountSchema = z.object({
      puuid: z.string().min(1),
      gameName: z.string().min(1),
      tagLine: z.string().min(1)
    });
    if (res.status === 200) {
      const account = accountSchema.safeParse(await res.json());
      if (account.success) {
        return {
          session,
          account: account.data
        };
      }
    }
  }
  return {
    session,
  };
}

const publicProcedure = t.procedure;
const rsoProtectedProcedure = t.procedure.use(async (opts) => {
  if (!opts.ctx.session?.accessToken || !opts.ctx.account) {
    throw new TRPCError({ code: 'UNAUTHORIZED' });
  }
  return opts.next();
})

const henrikApiConfig = createConfiguration({
  promiseMiddleware: [
    {
      pre: (context) => {
        if (henrikApiKey) context.setHeaderParam("Authorization", henrikApiKey);
        return Promise.resolve(context);
      },
      post: (context) => Promise.resolve(context)
    }
  ]
});
const henrikApi = new DefaultApi(henrikApiConfig);

export const appRouter = router({
  ping: publicProcedure.query(() => "pong"),
  getPremierConference: publicProcedure
    .input(z.object({
      conference: z.nativeEnum(PremierConferences),
      division: z.number()
    }))
    .query(async ({ input }) => {
      const affinity = ({
        [PremierConferences.EuCentralEast]: Affinities.Eu,
        [PremierConferences.EuWest]: Affinities.Eu,
        [PremierConferences.EuMiddleEast]: Affinities.Eu,
        [PremierConferences.EuTurkey]: Affinities.Eu,
        [PremierConferences.NaUsEast]: Affinities.Na,
        [PremierConferences.NaUsWest]: Affinities.Na,
        [PremierConferences.LatamNorth]: Affinities.Latam,
        [PremierConferences.LatamSouth]: Affinities.Latam,
        [PremierConferences.BrBrazil]: Affinities.Br,
        [PremierConferences.KrKorea]: Affinities.Kr,
        [PremierConferences.ApAsia]: Affinities.Ap,
        [PremierConferences.ApJapan]: Affinities.Ap,
        [PremierConferences.ApOceania]: Affinities.Ap,
        [PremierConferences.ApSouthAsia]: Affinities.Ap
      } satisfies Record<PremierConferences, Affinities>)[input.conference];
      const response = await henrikApi.valorantV1PremierLeaderboardAffinityConferenceDivisionGet(affinity, input.conference, input.division);
      if (response.status !== 200 || !response.data) {
        throw Error();
      }
      return response.data;
    }),
  getPremierMatchHistory: publicProcedure
    .input(z.object({
      teamId: z.string()
    }))
    .query(async ({ input }) => {
      const response = await henrikApi.valorantV1PremierTeamIdHistoryGet(input.teamId);
      if (response.status !== 200 || !response.data || !response.data.leagueMatches) {
        throw Error();
      }
      return response.data.leagueMatches
        // matches before Premier's Launch stage 404 in both Riot and Henrik APIs
        .filter(match => match.startedAt && match.startedAt > new Date(2023, 8, 29))
        .map(match => match.id)
        .filter(isDefined);
    }),
  rsoTest: rsoProtectedProcedure
    .query(({ ctx }) => `hello ${ctx.account?.gameName}`)
});

export type AppRouter = typeof appRouter;

function handler(request: Request) {
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req: request,
    router: appRouter,
    createContext
  });
}

export { handler as GET, handler as POST };
