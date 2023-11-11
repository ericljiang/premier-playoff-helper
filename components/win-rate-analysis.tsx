import { MapStats, estimateWinProbability, winLossRate } from "@/analysis";
import { renderPercentage } from "@/util";
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/table";
import { memo } from "react";

export type WinRateAnalysisProps = {
  teamAStats: Map<string, MapStats>;
  teamBStats: Map<string, MapStats>;
  onSelectMap: (map: string | undefined) => void;
}

export const WinRateAnalysis = memo(function WinRateAnalysis(props: WinRateAnalysisProps) {
  return (
    <Table
      aria-label="Team stats per map"
      selectionMode="single"
      color="primary"
      onSelectionChange={(keys) => {
        if (keys !== "all") {
          const lastKey = [...keys].pop();
          if (typeof lastKey !== "number") {
            props.onSelectMap(lastKey);
          }
        }
      }}
    >
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
          ...props.teamAStats.keys(),
          ...props.teamBStats.keys()
        ])).sort().map((map) => {
          const teamAMapStats = props.teamAStats.get(map);
          const teamBMapStats = props.teamBStats.get(map);

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
  );
});
