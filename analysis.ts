import { getPremierMatches } from "./api";
import { Maps, Match } from "./valorant-api";

const statsCacheExpirationTime = 24 * 60 * 60 * 1000;

export type MapStats = {
  map: Maps,
  won: number,
  lost: number,
  roundsWon: number,
  roundsLost: number,
  attackRoundsWon: number,
  attackRoundsLost: number,
  defenseRoundsWon: number,
  defenseRoundsLost: number,
};

export async function getTeamStats(teamId: string): Promise<Map<Maps, MapStats>> {
  const storageKey = `getTeamStats:${teamId}`
  const cached = getCachedStats(teamId);
  if (cached) {
    console.log(`Found cached stats for ${teamId}`);
    return cached;
  } else {
    const teamMatches = await getPremierMatches(teamId);
    const teamStats = (await Promise.all(teamMatches.map(match => getStats(match, teamId))))
      .reduce(reduceStats, new Map<Maps, MapStats>());
    localStorage.setItem(storageKey, JSON.stringify({
      // https://stackoverflow.com/a/53461519/6497736
      stats: Array.from(teamStats.entries()),
      computedTime: Date.now()
    }))
    return teamStats;
  }
}

function getCachedStats(teamId: string): Map<Maps, MapStats> | undefined {
  const storageKey = `getTeamStats:${teamId}`;
  const cached = localStorage.getItem(storageKey);
  if (!cached) {
    console.log(`No cached stats for ${teamId}`);
    return undefined;
  }
  const parsed = JSON.parse(cached) as unknown;
  if (!parsed || typeof parsed !== "object" || !("computedTime" in parsed) || typeof parsed.computedTime !== "number") {
    console.log(`Found cached stats for ${teamId} but old or invalid format`);
    return undefined;
  }
  if (Date.now() - parsed.computedTime > statsCacheExpirationTime) {
    console.log(`Found cached stats for ${teamId} but expired`);
    return undefined;
  }
  if ("stats" in parsed && Array.isArray(parsed.stats)) {
    return new Map(parsed.stats);
  }
  return undefined;
}

export function getStats(match: Match, teamId: string): MapStats {
  const map = match.metadata?.map!;
  const teamColor = match.teams?.blue?.roster?.id === teamId ? "blue" : "red";

  const won = match.teams![teamColor]!.hasWon! ? 1 : 0;
  const lost = won === 0 ? 1 : 0;
  const roundsWon = match.teams![teamColor]!.roundsWon!;
  const roundsLost = match.teams![teamColor]!.roundsLost!;

  // assumption - blue team attacks first half
  const attackRounds = teamColor === "blue" ? match.rounds!.slice(0, 12) : match.rounds!.slice(12);
  const defenseRounds = teamColor === "red" ? match.rounds!.slice(0, 12) : match.rounds!.slice(12);
  const attackRoundsWon = attackRounds.filter(round => round.winningTeam?.toLowerCase() === teamColor).length;
  const attackRoundsLost = attackRounds.length - attackRoundsWon;
  const defenseRoundsWon = defenseRounds.filter(round => round.winningTeam?.toLowerCase() === teamColor).length;
  const defenseRoundsLost = defenseRounds.length - defenseRoundsWon;

  return {
    map,
    won,
    lost,
    roundsWon,
    roundsLost,
    attackRoundsWon,
    attackRoundsLost,
    defenseRoundsWon,
    defenseRoundsLost
  };
}

export const reduceStats = (mapStats: Map<Maps, MapStats>, matchStats: MapStats) => {
  const { map } = matchStats;
  if (mapStats.has(map)) {
    const current = mapStats.get(map)!;
    mapStats.set(map, {
      map,
      won: current.won + matchStats.won,
      lost: current.lost + matchStats.lost,
      roundsWon: current.roundsWon + matchStats.roundsWon,
      roundsLost: current.roundsLost + matchStats.roundsLost,
      attackRoundsWon: current.attackRoundsWon + matchStats.attackRoundsWon,
      attackRoundsLost: current.attackRoundsLost + matchStats.attackRoundsLost,
      defenseRoundsWon: current.defenseRoundsWon + matchStats.defenseRoundsWon,
      defenseRoundsLost: current.defenseRoundsLost + matchStats.defenseRoundsLost
    });
  } else {
    mapStats.set(map, matchStats);
  }
  return mapStats;
};
