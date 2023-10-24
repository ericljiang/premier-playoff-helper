import { MapStats } from "@/analysis";
import { Maps } from "@/valorant-api";
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/table";

export function TeamStats({ teamStats }: {
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
      </TableHeader>
      <TableBody>
        {Array.from(new Set([
          ...teamStats.teamA.keys(),
          ...teamStats.teamB.keys()
        ])).sort().map((map) => {
          const teamAStats = teamStats.teamA.get(map);
          const teamBStats = teamStats.teamB.get(map);

          function renderRate(wins: number | undefined, losses: number | undefined): string {
            if (wins === undefined || losses === undefined) {
              return "--%";
            }
            return `${(wins / (wins + losses) * 100).toFixed(0)}%`;
          }

          function renderCell(winStat: (mapStats: MapStats) => number, loseStat: (mapStats: MapStats) => number): string {
            const statA = teamAStats === undefined ? "--%" : renderRate(winStat(teamAStats), loseStat(teamAStats));
            const statB = teamBStats === undefined ? "--%" : renderRate(winStat(teamBStats), loseStat(teamBStats));
            return `${statA}\xA0/\xA0${statB}`;
          }

          return (
            <TableRow key={map}>
              <TableCell>
                {map}
              </TableCell>
              <TableCell>
                {renderCell(stats => stats.won, stats => stats.lost)}
              </TableCell>
              <TableCell>
                {renderCell(stats => stats.roundsWon, stats => stats.roundsLost)}
              </TableCell>
              <TableCell>
                {renderCell(stats => stats.attackRoundsWon, stats => stats.attackRoundsLost)}
              </TableCell>
              <TableCell>
                {renderCell(stats => stats.defenseRoundsWon, stats => stats.defenseRoundsLost)}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
