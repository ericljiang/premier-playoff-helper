import { PremierConferences } from "./valorant-api";
import { Match } from "@/app/api/types";

import { createTRPCClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "./app/api/trpc/[trpc]/route";

const client = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "/api/trpc",
    }),
  ],
});

const matchCache = new Map<string, Match>();

export async function getMatch(matchId: string): Promise<Match> {
  if (!matchCache.has(matchId)) {
    const match = await client.getMatch.query({ matchId });
    matchCache.set(matchId, match);
  }
  return matchCache.get(matchId)!;
}

export async function getPremierConferenceTrpc(
  conference: PremierConferences,
  division: number
) {
  return await client.getPremierConference.query({
    conference,
    division: Number(division),
  });
}

export async function getPremierMatchHistoryTrpc(teamId: string) {
  return await client.getPremierMatchHistoryAndRoster.query({ teamId });
}
