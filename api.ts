import { Affinities, DefaultApi, Match, PremierConferences, V1LifetimeMatches, V1PartialPremierTeam, V1PremierLeaderboard, V1PremierTeamHistoryData, createConfiguration } from "./valorant-api";

const config = createConfiguration();
const api = new DefaultApi(config);

const matchCache = new Map<string, Match>();

export async function getMatch(matchId: string): Promise<Match> {
  if (!matchCache.has(matchId)) {
    matchCache.set(matchId, (await api.valorantV2MatchMatchIdGet(matchId)).data!);
  }
  return matchCache.get(matchId)!;
}

export async function getMatchHistory(name: string, tag: string): Promise<V1LifetimeMatches> {
  return await api.valorantV1LifetimeMatchesAffinityNameTagGet(Affinities.Na, name, tag);
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

export async function getPremierHistory(teamId: string): Promise<V1PremierTeamHistoryData> {
  const response = await api.valorantV1PremierTeamIdHistoryGet(teamId);
  if (response.status !== 200 || !response.data) {
    throw Error();
  }
  return response.data;
}

export async function getPremierMatches(teamId: string): Promise<Match[]> {
  const premierHistory = await getPremierHistory(teamId);
  return Promise.all(premierHistory.leagueMatches!
    .map(match => match.id)
    .map(matchId => getMatch(matchId!)));
}
