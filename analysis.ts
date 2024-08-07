import { getMatch } from "./api";
import { z } from "zod";
import { Match } from "./app/api/types";

const playerLocationSchema = z.object({
  x: z.number(),
  y: z.number(),
  team: z.literal("friendly").or(z.literal("hostile")),
  name: z.string(),
});
const killEventSchema = z.object({
  killer: playerLocationSchema,
  victim: playerLocationSchema,
  half: z.literal("attack").or(z.literal("defense")),
  round: z.number(),
  timeInRound: z.number(),
});

export type KillEvent = z.infer<typeof killEventSchema>;

export type MatchStats = {
  map: string;
  won: number;
  lost: number;
  roundsWon: number;
  roundsLost: number;
  attackRoundsWon: number;
  attackRoundsLost: number;
  defenseRoundsWon: number;
  defenseRoundsLost: number;
  teamComposition: string[];
  killEvents: KillEvent[];
};

export type MapStats = Omit<MatchStats, "teamComposition"> & {
  teamCompositions: Map<string, number>;
};

const cachedMatchStatsSchema = z.object({
  version: z.literal("2024-04-13"),
  stats: z.object({
    map: z.string(),
    won: z.number(),
    lost: z.number(),
    roundsWon: z.number(),
    roundsLost: z.number(),
    attackRoundsWon: z.number(),
    attackRoundsLost: z.number(),
    defenseRoundsWon: z.number(),
    defenseRoundsLost: z.number(),
    teamComposition: z.array(z.string()),
    killEvents: z.array(killEventSchema),
  }),
});

export async function getStats(
  matchId: string,
  teamId: string,
  roster: { name: string; tag: string }[]
): Promise<MatchStats> {
  const cacheKey = `MatchStats:matchId=${matchId}:teamId=${teamId}`;
  const cached = getCachedStats(cacheKey);
  if (cached) {
    return cached;
  } else {
    const computed = await computeStats(matchId, teamId, roster);
    cacheStats(cacheKey, computed);
    return computed;
  }
}

function getCachedStats(key: string): MatchStats | undefined {
  const stored = localStorage.getItem(key);
  if (!stored) {
    console.log(`No cached stats for key "${key}"`);
    return undefined;
  }
  console.log(`Found cached stats for key "${key}"`);
  try {
    const parsed = cachedMatchStatsSchema.parse(JSON.parse(stored) as unknown);
    return parsed.stats;
  } catch {
    console.error(`Failed to parse cached value "${stored}"`);
    return undefined;
  }
}

function cacheStats(key: string, stats: MatchStats): void {
  const valueToCache: z.infer<typeof cachedMatchStatsSchema> = {
    version: "2024-04-13",
    stats,
  };
  try {
    localStorage.setItem(key, JSON.stringify(valueToCache));
  } catch (error) {
    console.error("Error writing to cache, clearing localStorage.");
    console.error(error);
    localStorage.clear();
  }
}

function getTeamColor(
  match: Match,
  teamId: string,
  roster: { name: string; tag: string }[]
): "red" | "blue" {
  if (match.teams.blue.premierTeamId === teamId) {
    return "blue";
  }
  if (match.teams.red.premierTeamId === teamId) {
    return "red";
  }
  const rosterSet = new Set(roster.map((p) => `${p.name}#${p.tag}`));
  const isBlue = match.players.blue
    .map((p) => `${p.gameName}#${p.tagLine}`)
    .some(Set.prototype.has, rosterSet);
  const isRed = match.players.red
    .map((p) => `${p.gameName}#${p.tagLine}`)
    .some(Set.prototype.has, rosterSet);
  if (isBlue && !isRed) {
    return "blue";
  }
  if (!isBlue && isRed) {
    return "red";
  }
  throw Error("Could not determine teams");
}

async function computeStats(
  matchId: string,
  teamId: string,
  roster: { name: string; tag: string }[]
): Promise<MatchStats> {
  const match = await getMatch(matchId);
  const map = match.map;
  const teamColor = getTeamColor(match, teamId, roster);

  const won = match.teams[teamColor].won! ? 1 : 0;
  const lost = won === 0 ? 1 : 0;
  const roundsWon = match.teams[teamColor].roundsWon;
  const roundsLost = match.teams[teamColor].roundsLost;

  // assumption - red team attacks first half
  // https://discord.com/channels/704231681309278228/884402649322115082/1089297118516232293
  const attackRounds =
    teamColor === "red" ? match.rounds.slice(0, 12) : match.rounds.slice(12);
  const defenseRounds =
    teamColor === "blue" ? match.rounds.slice(0, 12) : match.rounds.slice(12);
  const attackRoundsWon = attackRounds.filter(
    (round) => round.winningTeam.toLowerCase() === teamColor
  ).length;
  const attackRoundsLost = attackRounds.length - attackRoundsWon;
  const defenseRoundsWon = defenseRounds.filter(
    (round) => round.winningTeam.toLowerCase() === teamColor
  ).length;
  const defenseRoundsLost = defenseRounds.length - defenseRoundsWon;

  const teamComposition = match.players[teamColor]
    .map((p) => p.character!)
    .sort();

  const unsafeKillEvents: KillEvent[] =
    match.rounds?.flatMap(
      (round, roundIndex) =>
        round.playerStats.flatMap(
          (playerStats) =>
            playerStats.kills.map((killEvent): KillEvent => {
              const half =
                (roundIndex < 12 && teamColor === "red") ||
                (roundIndex >= 12 && teamColor === "blue")
                  ? "attack"
                  : "defense";
              const timeInRound = killEvent.timeSinceRoundStartMillis;
              const victim = {
                x: killEvent.victimLocation.x,
                y: killEvent.victimLocation.y,
                team:
                  killEvent.victimTeam.toLowerCase() === teamColor
                    ? ("friendly" as const)
                    : ("hostile" as const),
                name: killEvent.victimPuuid,
              };
              const killer = killEvent.playerLocations
                .filter(
                  (otherPlayer) => otherPlayer.puuid === playerStats.puuid
                )
                .map((otherPlayer) => ({
                  x: otherPlayer.location.x,
                  y: otherPlayer.location.y,
                  team:
                    otherPlayer.team.toLowerCase() === teamColor
                      ? ("friendly" as const)
                      : ("hostile" as const),
                  name: otherPlayer.puuid,
                }))
                .find(() => true)!;
              return {
                killer,
                victim,
                half,
                round: roundIndex,
                timeInRound,
              };
            }) ?? []
        ) ?? []
    ) ?? [];
  const killEvents = unsafeKillEvents.filter(
    (k) => killEventSchema.safeParse(k).success
  );

  return {
    map,
    won,
    lost,
    roundsWon,
    roundsLost,
    attackRoundsWon,
    attackRoundsLost,
    defenseRoundsWon,
    defenseRoundsLost,
    teamComposition,
    killEvents,
  };
}

export const reduceStats = (
  mapStats: Map<string, MapStats>,
  matchStats: MatchStats
): Map<string, MapStats> => {
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
      defenseRoundsLost:
        current.defenseRoundsLost + matchStats.defenseRoundsLost,
      teamCompositions: current.teamCompositions.set(
        JSON.stringify(matchStats.teamComposition),
        (current.teamCompositions.get(
          JSON.stringify(matchStats.teamComposition)
        ) ?? 0) + 1
      ),
      killEvents: [...current.killEvents, ...matchStats.killEvents],
    });
  } else {
    mapStats.set(map, {
      ...matchStats,
      teamCompositions: new Map<string, number>().set(
        JSON.stringify(matchStats.teamComposition),
        1
      ),
    });
  }
  return mapStats;
};

export function winLossRate(wins: number, losses: number): number {
  return wins / (wins + losses);
}

export function estimateWinProbability(
  teamAStats: MapStats,
  teamBStats: MapStats
): number {
  const winProbabilityByMatchWinRate = estimateWinProbabilityByOpposingWinRates(
    winLossRate(teamAStats.won, teamAStats.lost),
    winLossRate(teamBStats.won, teamBStats.lost)
  );
  const winProbabilityByRoundWinRate = estimateWinProbabilityByOpposingWinRates(
    winLossRate(teamAStats.roundsWon, teamAStats.roundsLost),
    winLossRate(teamBStats.roundsWon, teamBStats.roundsLost)
  );

  const attackWinRateA = winLossRate(
    teamAStats.attackRoundsWon,
    teamAStats.attackRoundsLost
  );
  const attackWinRateB = winLossRate(
    teamBStats.attackRoundsWon,
    teamBStats.attackRoundsLost
  );
  const defenseWinRateA = winLossRate(
    teamAStats.defenseRoundsWon,
    teamAStats.defenseRoundsLost
  );
  const defenseWinRateB = winLossRate(
    teamBStats.defenseRoundsWon,
    teamBStats.defenseRoundsLost
  );
  const attackWinProbability = estimateWinProbabilityByOpposingWinRates(
    attackWinRateA,
    defenseWinRateB
  );
  const defenseWinProbability = estimateWinProbabilityByOpposingWinRates(
    defenseWinRateA,
    attackWinRateB
  );

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
  return (
    doTimes(simulationIterations, () =>
      simulateMatch(attackWinProbability, defenseWinProbability, attackFirst)
    ).filter((x) => x).length / simulationIterations
  );
}

function simulateMatch(
  attackWinProbability: number,
  defenseWinProbability: number,
  attackFirst: boolean
): boolean {
  let roundsWon = 0;
  let roundsLost = 0;
  let attacking = attackFirst;
  while (roundsWon < 13 && roundsLost < 13) {
    const winProbability = attacking
      ? attackWinProbability
      : defenseWinProbability;
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
  const [weightedSum, sumOfWeights] = weightedEntries.reduce(
    ([weightedSum, sumOfWeights], [n, w]) => [
      weightedSum + w * n,
      sumOfWeights + w,
    ],
    [0, 0]
  );
  return weightedSum / sumOfWeights;
}
