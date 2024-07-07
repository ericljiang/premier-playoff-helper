import { Affinities, PremierConferences } from '@/valorant-api';
import { TRPCError, initTRPC } from '@trpc/server';
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch';
import { z } from 'zod';
import { henrikApiKey, henrikBetaUrl, henrikRootUrl } from '../../environment';
import { isDefined } from '@/util';
import { auth } from '@/auth';
import createClient, { Middleware } from 'openapi-fetch';
import type { components, paths } from '@/generated/henrik-4.0.0';

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
};

const publicProcedure = t.procedure;
const rsoProtectedProcedure = t.procedure.use(async (opts) => {
  if (!opts.ctx.session?.accessToken || !opts.ctx.account) {
    throw new TRPCError({ code: 'UNAUTHORIZED' });
  }
  return opts.next();
});

const henrikClientMiddleware: Middleware = {
  onRequest: ({ request }) => {
    if (henrikApiKey) request.headers.set("Authorization", henrikApiKey);
    return request;
  }
};

const henrikClient = createClient<paths>({ baseUrl: henrikRootUrl.toString() });
const henrikBetaClient = createClient<paths>({ baseUrl: henrikBetaUrl.toString() });
henrikClient.use(henrikClientMiddleware);
henrikBetaClient.use(henrikClientMiddleware);

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
      } as const)[input.conference];
      // TODO switch off beta when prod works
      // https://discord.com/channels/704231681309278228/1259038206008102922/1259038206008102922
      const { data, error } = await henrikBetaClient.GET("/valorant/v1/premier/leaderboard/{region}/{conference}/{division}", {
        params: {
          path: {
            region: affinity,
            conference: input.conference,
            division: input.division
          }
        }
      });
      if (error) {
        throw Error(JSON.stringify(error));
      }
      if (!data.data) {
        throw Error("No data");
      }
      // if duplicates exist, take most recent record
      return Array.from(data.data
        .reduce((map, current) => {
          const existing = map.get(current.id!);
          const shouldUpdate = !existing || (
            "updated_at" in current
            && typeof current.updated_at === "string"
            && "updated_at" in existing
            && typeof existing.updated_at === "string"
            && current.updated_at > existing.updated_at
          ) || (
              current.wins && existing.wins && current.wins > existing.wins
            ) || (
              current.losses && existing.losses && current.losses > existing.losses
            );
          if (shouldUpdate) {
            map.set(current.id!, current);
          }
          return map;
        }, new Map<string, components["schemas"]["v1_partial_premier_team"]>())
        .values());
    }),
  getPremierMatchHistory: publicProcedure
    .input(z.object({
      teamId: z.string()
    }))
    .query(async ({ input }) => {
      const { data, error } = await henrikBetaClient.GET("/valorant/v1/premier/{team_id}/history", {
        params: {
          path: {
            team_id: input.teamId
          }
        }
      });
      if (error) {
        throw Error(JSON.stringify(error));
      }
      if (!data.data?.league_matches) {
        throw Error("No data");
      }
      return data.data.league_matches
        // matches before Premier's Launch stage 404 in both Riot and Henrik APIs
        .filter(match => match.started_at && match.started_at > new Date(2023, 8, 29).toISOString())
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
