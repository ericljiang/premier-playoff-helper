import { getPremierMatches } from "./api";
import { Maps, Match } from "./valorant-api";

export type MapStats = {
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
  const teamMatches = await getPremierMatches(teamId);
  return teamMatches.map(match => getStats(match, teamId))
    .reduce(reduceStats, new Map<Maps, MapStats>());
}

function getStats(match: Match, teamId: string): MapStats & { map: Maps; } {
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

const reduceStats = (mapStats: Map<Maps, MapStats>, matchStats: MapStats & { map: Maps; }) => {
  const { map } = matchStats;
  if (mapStats.has(map)) {
    const current = mapStats.get(map)!;
    mapStats.set(map, {
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
