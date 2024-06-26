import { isDefined } from "./util";
import { Affinities, DefaultApi, PremierConferences, V1PartialPremierTeam, createConfiguration } from "./valorant-api";
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
): Promise<V1PartialPremierTeam[]> {
  return await client.getPremierConference.query({ conference, division: Number(division) });
}

/** @deprecated */
export async function getPremierConference(
  conference: PremierConferences,
  division: number
): Promise<V1PartialPremierTeam[]> {
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
  } satisfies Record<PremierConferences, Affinities>)[conference];
  const response = await api.valorantV1PremierLeaderboardAffinityConferenceDivisionGet(affinity, conference, division);
  if (response.status !== 200 || !response.data) {
    throw Error();
  }
  return response.data;
}

export async function getPremierMatchHistoryTrpc(teamId: string): Promise<string[]> {
  return await client.getPremierMatchHistory.query({ teamId });
}

/** @deprecated */
export async function getPremierMatchHistory(teamId: string): Promise<string[]> {
  const response = await api.valorantV1PremierTeamIdHistoryGet(teamId);
  if (response.status !== 200 || !response.data || !response.data.leagueMatches) {
    throw Error();
  }
  return response.data.leagueMatches
    // matches before Premier's Launch stage 404 in both Riot and Henrik APIs
    .filter(match => match.startedAt && match.startedAt > new Date(2023, 8, 29))
    .map(match => match.id)
    .filter(isDefined);
}
