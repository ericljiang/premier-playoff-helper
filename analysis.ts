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

export function winLossRate(wins: number, losses: number): number {
  return wins / (wins + losses);
}

export function estimateWinProbability(teamAStats: MapStats, teamBStats: MapStats): number {
  const winProbabilityByMatchWinRate = estimateWinProbabilityByOpposingWinRates(
    winLossRate(teamAStats.won, teamAStats.lost),
    winLossRate(teamBStats.won, teamBStats.lost)
  );
  const winProbabilityByRoundWinRate = estimateWinProbabilityByOpposingWinRates(
    winLossRate(teamAStats.roundsWon, teamAStats.roundsLost),
    winLossRate(teamBStats.roundsWon, teamBStats.roundsLost)
  );

  const attackWinRateA = winLossRate(teamAStats.attackRoundsWon, teamAStats.attackRoundsLost);
  const attackWinRateB = winLossRate(teamBStats.attackRoundsWon, teamBStats.attackRoundsLost);
  const defenseWinRateA = winLossRate(teamAStats.defenseRoundsWon, teamAStats.defenseRoundsLost);
  const defenseWinRateB = winLossRate(teamBStats.defenseRoundsWon, teamBStats.defenseRoundsLost);
  const attackWinProbability = estimateWinProbabilityByOpposingWinRates(attackWinRateA, defenseWinRateB);
  const defenseWinProbability = estimateWinProbabilityByOpposingWinRates(defenseWinRateA, attackWinRateB);

  const simulationIterations = 100000;
  const winProbabilityAtk = computeWinProbabilityBySimulation(
    simulationIterations,
    attackWinProbability,
    defenseWinProbability,
    true
  );
  const winProbabilityDef = computeWinProbabilityBySimulation(
    simulationIterations,
    attackWinProbability,
    defenseWinProbability,
    false
  );

  return weightedAverage([
    [winProbabilityByMatchWinRate, 1],
    [winProbabilityByRoundWinRate, 1],
    [winProbabilityAtk, 0.5],
    [winProbabilityDef, 0.5],
  ]);
}

function estimateWinProbabilityByOpposingWinRates(
  winRateA: number,
  winRateB: number
): number {
  return (winRateA + 1 - winRateB) / 2;
}

function computeWinProbabilityBySimulation(
  simulationIterations: number,
  attackWinProbability: number,
  defenseWinProbability: number,
  attackFirst: boolean
) {
  return doTimes(
    simulationIterations,
    () => simulateMatch(attackWinProbability, defenseWinProbability, attackFirst)
  ).filter(x => x).length / simulationIterations;
}

function simulateMatch(attackWinProbability: number, defenseWinProbability: number, attackFirst: boolean): boolean {
  let roundsWon = 0;
  let roundsLost = 0;
  let attacking = attackFirst;
  while (roundsWon < 13 && roundsLost < 13) {
    const winProbability = attacking ? attackWinProbability : defenseWinProbability;
    if (Math.random() < winProbability) {
      roundsWon++;
    } else {
      roundsLost++;
    }
    if (roundsWon + roundsLost === 12) {
      attacking = !attacking;
    }
  }
  return roundsWon === 13;
}


function doTimes<T>(n: number, action: () => T): T[] {
  return Array.from(Array(n)).map(action);
}


function weightedAverage(weightedEntries: [number, number][]): number {
  const [weightedSum, sumOfWeights] = weightedEntries
    .reduce(([weightedSum, sumOfWeights], [n, w]) =>
      [weightedSum + w * n, sumOfWeights + w], [0, 0]);
  return weightedSum / sumOfWeights;
}
