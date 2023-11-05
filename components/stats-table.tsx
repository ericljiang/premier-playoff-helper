import { MapStats, estimateWinProbability, reduceStats, winLossRate } from "@/analysis";
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/table";

type StatsTableProps = {
  teamAMatches: ReadonlyArray<MapStats>;
  teamBMatches: ReadonlyArray<MapStats>;
};

export function StatsTable({ teamAMatches, teamBMatches }: StatsTableProps) {
  const teamAStats = teamAMatches.reduce(reduceStats, new Map<string, MapStats>());
  const teamBStats = teamBMatches.reduce(reduceStats, new Map<string, MapStats>())

  return (
    <>
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
            ...teamAStats.keys(),
            ...teamBStats.keys()
          ])).sort().map((map) => {
            const teamAMapStats = teamAStats.get(map);
            const teamBMapStats = teamBStats.get(map);

            function renderPercentage(n: number | undefined): string {
              if (n === undefined || isNaN(n)) {
                return "--%";
              }
              return `${(n * 100).toFixed(0)}%`;
            }

            function renderWinRateComparison(
              winStat: (mapStats: MapStats) => number,
              loseStat: (mapStats: MapStats) => number
            ): string {
              const statA = teamAMapStats === undefined ? "--%" : renderPercentage(winLossRate(winStat(teamAMapStats), loseStat(teamAMapStats)));
              const statB = teamBMapStats === undefined ? "--%" : renderPercentage(winLossRate(winStat(teamBMapStats), loseStat(teamBMapStats)));
              return `${statA}\xA0/\xA0${statB}`;
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
                  {renderPercentage(teamAMapStats && teamBMapStats ? estimateWinProbability(teamAMapStats, teamBMapStats) : undefined)}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
}
