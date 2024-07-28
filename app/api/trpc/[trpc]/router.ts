import { z } from "zod";
import { riotApiKey } from "../../environment";
import { retrieveMatchFromRiot } from "../../match/riot";
import { getPremierConference } from "./getPremierConference";
import { getPremierMatchHistoryAndRoster } from "./getPremierMatchHistoryAndRoster";
import { publicProcedure, router, rsoProtectedProcedure } from "./trpc";

export const appRouter = router({
  ping: publicProcedure.query(() => "pong"),
  getPremierConference,
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
