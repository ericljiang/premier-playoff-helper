import { Affinities, PremierConferences } from "@/valorant-api";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { z } from "zod";
import { riotApiKey } from "../../environment";
import type { components } from "@/generated/henrik-4.0.0";
import { retrieveMatchFromRiot } from "../../match/riot";
import { getPremierMatchHistoryAndRoster } from "./getPremierMatchHistoryAndRoster";
import {
  createContext,
  publicProcedure,
  router,
  rsoProtectedProcedure,
} from "./trpc";
import { henrikClient } from "./henrik";

export const dynamic = "force-dynamic";

export const appRouter = router({
  ping: publicProcedure.query(() => "pong"),
  getPremierConference: publicProcedure
    .input(
      z.object({
        conference: z.nativeEnum(PremierConferences),
        division: z.number(),
      })
    )
    .query(async ({ input }) => {
      const affinity = (
        {
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
          [PremierConferences.ApSouthAsia]: Affinities.Ap,
        } as const
      )[input.conference];
      const { data, error } = await henrikClient.GET(
        "/valorant/v1/premier/leaderboard/{region}/{conference}/{division}",
        {
          params: {
            path: {
              region: affinity,
              conference: input.conference,
              division: input.division,
            },
          },
        }
      );
      if (error) {
        throw Error(JSON.stringify(error));
      }
      if (!data.data) {
        throw Error("No data");
      }
      // if duplicates exist, take most recent record
      return Array.from(
        data.data
          .reduce((map, current) => {
            const existing = map.get(current.id!);
            const shouldUpdate =
              !existing ||
              ("updated_at" in current &&
                typeof current.updated_at === "string" &&
                "updated_at" in existing &&
                typeof existing.updated_at === "string" &&
                current.updated_at > existing.updated_at) ||
              (current.wins && existing.wins && current.wins > existing.wins) ||
              (current.losses &&
                existing.losses &&
                current.losses > existing.losses);
            if (shouldUpdate) {
              map.set(current.id!, current);
            }
            return map;
          }, new Map<string, components["schemas"]["v1_partial_premier_team"]>())
          .values()
      );
    }),
  getPremierMatchHistoryAndRoster,
  getMatch: publicProcedure
    .input(
      z.object({
        matchId: z.string(),
      })
    )
    .query(async ({ input }) => {
      if (riotApiKey) {
        return retrieveMatchFromRiot(input.matchId, riotApiKey);
      } else {
        throw Error("Riot API key not set");
      }
    }),
  rsoTest: rsoProtectedProcedure.query(
    ({ ctx }) => `hello ${ctx.account?.gameName}`
  ),
});

export type AppRouter = typeof appRouter;

function handler(request: Request) {
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req: request,
    router: appRouter,
    createContext,
    onError: ({ error, path, input }) => {
      console.error(
        `Error occurred for path ${path} with input ${JSON.stringify(input)}`
      );
      console.error(error);
    },
  });
}

export { handler as GET, handler as POST };
