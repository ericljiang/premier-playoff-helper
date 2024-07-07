import { DefaultApi, PremierConferences, createConfiguration } from "./valorant-api";
import { Match } from "@/app/api/types"
import retry from "async-retry";

import { createTRPCClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from "./app/api/trpc/[trpc]/route";

const client = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: '/api/trpc',
    }),
  ],
});

const config = createConfiguration();
const api = new DefaultApi(config);

const matchCache = new Map<string, Match>();

export async function getMatch(matchId: string): Promise<Match> {
  if (!matchCache.has(matchId)) {
    const match = await retry(async (bail) => {
      const response = await fetch(`/api/match?matchId=${matchId}`);
      if (response.status === 200) {
        return await response.json();
      } else if (response.status === 429 || response.status >= 500) {
        throw Error(`Got response code ${response.status} for https://tracker.gg/valorant/match/${matchId}`);
      } else {
        bail(new Error("Unretryable status " + response.status));
      }
    }, {
      retries: 2
    });
    matchCache.set(matchId, match);
  }
  return matchCache.get(matchId)!;
}

export async function getPremierConferenceTrpc(
  conference: PremierConferences,
  division: number
) {
  return await client.getPremierConference.query({ conference, division: Number(division) });
}

export async function getPremierMatchHistoryTrpc(teamId: string): Promise<string[]> {
  return await client.getPremierMatchHistory.query({ teamId });
}
