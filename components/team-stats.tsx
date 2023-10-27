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
        <TableColumn>
          Win probability
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

          function estimateWinProbability(winRateA: number, winRateB: number): number {
            return winRateA / 2 - winRateB / 2 + 0.5;
          }

          let winProbability = NaN
          if (teamAStats && teamBStats) {
            const winRateA = teamAStats.won / (teamAStats.won + teamAStats.lost)
            const winRateB = teamBStats.won / (teamBStats.won + teamBStats.lost)
            winProbability = winRateA / 2 - winRateB / 2 + 0.5
            const roundWinRateA = teamAStats.roundsWon / (teamAStats.roundsWon + teamAStats.roundsLost)
            const roundWinRateB = teamBStats.roundsWon / (teamBStats.roundsWon + teamBStats.roundsLost)
            winProbability = roundWinRateA / 2 - roundWinRateB / 2 + 0.5
            const attackWinRateA = teamAStats.attackRoundsWon / (teamAStats.attackRoundsWon + teamAStats.attackRoundsLost)
            const attackWinRateB = teamBStats.attackRoundsWon / (teamBStats.attackRoundsWon + teamBStats.attackRoundsLost)
            const defenseWinRateA = teamAStats.defenseRoundsWon / (teamAStats.defenseRoundsWon + teamAStats.defenseRoundsLost)
            const defenseWinRateB = teamBStats.defenseRoundsWon / (teamBStats.defenseRoundsWon + teamBStats.defenseRoundsLost)
            const attackWinProbability = estimateWinProbability(attackWinRateA, attackWinRateB)
            const defenseWinProbability = estimateWinProbability(defenseWinRateA, defenseWinRateB)
            
            type Score = {
              w: number,
              l: number
            }
            
            const attackFirst = true
            
            const possibleFirstHalfScores: Score[] = [...Array(13).keys()].map(w => ({ w, l: 12 - w}))
            const possibleSecondHalfScores = [...Array(14).keys()].flatMap(w => [...Array(14).keys()].map(l => ({w, l})))
            const possibleScores = possibleFirstHalfScores.flatMap(firstHalfScore => possibleSecondHalfScores.map(secondHalfScore => [firstHalfScore, secondHalfScore]))
              .filter(([firstHalfScore, secondHalfScore]) => (firstHalfScore.w + secondHalfScore.w == 13 && firstHalfScore.l + secondHalfScore.l < 13) || (firstHalfScore.l + secondHalfScore.l == 13 && firstHalfScore.w + secondHalfScore.w < 13))
            
            function factorial(n: number): number {
              let result = 1;
              for (let i = 2; i <= n; i++) {
                result = result * i;
              }
              return result;
            }
            
            function binomialCoefficient(n: number, k: number): number {
              return factorial(n) / (factorial(k) * factorial(n - k))
            }

            function probabilityMassFunction(n: number, k: number, p: number): number {
              return binomialCoefficient(n, k) * Math.pow(p, k) * Math.pow(1 - p, n - k)
            }
            
            const scoreProbabilities = possibleScores.map(([firstHalfScore, secondHalfScore]) => {
              const firstHalfWinProbability = attackFirst ? attackWinProbability : defenseWinProbability
              const secondHalfWinProbability = attackFirst ? defenseWinProbability : attackWinProbability
              const firstHalfProbability = probabilityMassFunction(12, firstHalfScore.w, firstHalfWinProbability)
              // problem in this next line - variable n means these probabilities aren't comparable across possible scores
              const secondHalfProbability = probabilityMassFunction(secondHalfScore.w + secondHalfScore.l, secondHalfScore.w, secondHalfWinProbability)
              const scoreProbability = firstHalfProbability * secondHalfProbability
              return [firstHalfScore, secondHalfScore, scoreProbability] as const
            })
            
            console.log(scoreProbabilities.map(([, , scoreProbability]) => scoreProbability).reduce((a, b) => a + b))
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
              <TableCell>
                {winProbability}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
