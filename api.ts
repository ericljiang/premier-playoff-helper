import { isDefined } from "./util";
import { Affinities, DefaultApi, PremierConferences, V1PartialPremierTeam, createConfiguration } from "./valorant-api";
import { Match } from "@/app/api/types"
import retry from "async-retry";

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
        throw Error();
      } else {
        bail(new Error("Unretryable status " + response.status));
      }
    });
    matchCache.set(matchId, match);
  }
  return matchCache.get(matchId)!;
}

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

export async function getPremierMatchHistory(teamId: string): Promise<string[]> {
  const response = await api.valorantV1PremierTeamIdHistoryGet(teamId);
  if (response.status !== 200 || !response.data || !response.data.leagueMatches) {
    throw Error();
  }
  return response.data.leagueMatches.map(match => match.id).filter(isDefined);
}
