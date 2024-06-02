import { Affinities, DefaultApi, PremierConferences, createConfiguration } from '@/valorant-api';
import { initTRPC } from '@trpc/server';
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { z } from 'zod';
import { henrikApiKey } from '../../environment';
import { isDefined } from '@/util';

export const dynamic = 'force-dynamic';

const t = initTRPC.create();
const router = t.router;
const publicProcedure = t.procedure;

const config = createConfiguration({
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
const api = new DefaultApi(config);

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
      const response = await api.valorantV1PremierLeaderboardAffinityConferenceDivisionGet(affinity, input.conference, input.division);
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
      const response = await api.valorantV1PremierTeamIdHistoryGet(input.teamId);
      if (response.status !== 200 || !response.data || !response.data.leagueMatches) {
        throw Error();
      }
      return response.data.leagueMatches
        // matches before Premier's Launch stage 404 in both Riot and Henrik APIs
        .filter(match => match.startedAt && match.startedAt > new Date(2023, 8, 29))
        .map(match => match.id)
        .filter(isDefined);
    })
});

export type AppRouter = typeof appRouter;

function handler(request: Request) {
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req: request,
    router: appRouter
  });
}

export { handler as GET, handler as POST };
