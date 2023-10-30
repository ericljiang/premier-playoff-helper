import { MapStats } from "@/analysis";
import { Maps } from "@/valorant-api";
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/table";

export function StatsTable({ teamStats }: {
  teamStats: {
    teamA: Map<Maps, MapStats>;
    teamB: Map<Maps, MapStats>;
  };
}) {
  return (
    <Table aria-label="Team stats per map">
      <TableHeader>
        <TableColumn>
          Map
        </TableColumn>
        <TableColumn>
          Win rate
        </TableColumn>
        <TableColumn>
          Round win rate
        </TableColumn>
        <TableColumn>
          Attack win rate
        </TableColumn>
        <TableColumn>
          Defense win rate
        </TableColumn>
        <TableColumn>
          Win probability ✨
        </TableColumn>
      </TableHeader>
      <TableBody>
        {Array.from(new Set([
          ...teamStats.teamA.keys(),
          ...teamStats.teamB.keys()
        ])).sort().map((map) => {
          const teamAStats = teamStats.teamA.get(map);
          const teamBStats = teamStats.teamB.get(map);

          function renderPercentage(n: number | undefined): string {
            if (n === undefined || isNaN(n)) {
              return "--%";
            }
            return `${(n * 100).toFixed(0)}%`;
          }

          function winLossRate(wins: number, losses: number): number {
            return wins / (wins + losses);
          }

          function renderWinRateComparison(
            winStat: (mapStats: MapStats) => number,
            loseStat: (mapStats: MapStats) => number
          ): string {
            const statA = teamAStats === undefined ? "--%" : renderPercentage(winLossRate(winStat(teamAStats), loseStat(teamAStats)));
            const statB = teamBStats === undefined ? "--%" : renderPercentage(winLossRate(winStat(teamBStats), loseStat(teamBStats)));
            return `${statA}\xA0/\xA0${statB}`;
          }

          function estimateWinProbabilityByOpposingWinRates(
            winRateA: number,
            winRateB: number
          ): number {
            return (winRateA + 1 - winRateB) / 2;
          }

          function weightedAverage(weightedEntries: [number, number][]): number {
            const [weightedSum, sumOfWeights] = weightedEntries
              .reduce(([weightedSum, sumOfWeights], [n, w]) =>
                [weightedSum + w * n, sumOfWeights + w], [0, 0]);
            return weightedSum / sumOfWeights;
          }

          function doTimes<T>(n: number, action: () => T): T[] {
            return Array.from(Array(n)).map(action);
          }

          function estimateWinProbability(teamAStats: MapStats, teamBStats: MapStats): number {
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

            const simulationIterations = 100000;
            const winProbabilityAtk = doTimes(
              simulationIterations,
              () => simulateMatch(attackWinProbability, defenseWinProbability, true)
            ).filter(x => x).length / simulationIterations;
            const winProbabilityDef = doTimes(
              simulationIterations,
              () => simulateMatch(attackWinProbability, defenseWinProbability, false)
            ).filter(x => x).length / simulationIterations;

            return weightedAverage([
              [winProbabilityByMatchWinRate, 1],
              [winProbabilityByRoundWinRate, 1],
              [winProbabilityAtk, 0.5],
              [winProbabilityDef, 0.5],
            ]);
          }

          return (
            <TableRow key={map}>
              <TableCell>
                {map}
              </TableCell>
              <TableCell>
                {renderWinRateComparison(
                  stats => stats.won,
                  stats => stats.lost)}
              </TableCell>
              <TableCell>
                {renderWinRateComparison(
                  stats => stats.roundsWon,
                  stats => stats.roundsLost)}
              </TableCell>
              <TableCell>
                {renderWinRateComparison(
                  stats => stats.attackRoundsWon,
                  stats => stats.attackRoundsLost)}
              </TableCell>
              <TableCell>
                {renderWinRateComparison(
                  stats => stats.defenseRoundsWon,
                  stats => stats.defenseRoundsLost)}
              </TableCell>
              <TableCell>
                {renderPercentage(teamAStats && teamBStats ? estimateWinProbability(teamAStats, teamBStats) : undefined)}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
