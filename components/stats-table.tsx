import { AggregatedMapStats, MapStats, estimateWinProbability, reduceStats, winLossRate } from "@/analysis";
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/table";
import { Avatar } from "@nextui-org/avatar";
import { Tab, Tabs } from "@nextui-org/tabs";
import { useState } from "react";
import { agentIcons } from "@/agent-icons.json"
import { z } from "zod";

type StatsTableProps = {
  teamAMatches: ReadonlyArray<MapStats>;
  teamBMatches: ReadonlyArray<MapStats>;
};

function renderPercentage(n: number | undefined): string {
  if (n === undefined || isNaN(n)) {
    return "--%";
  }
  return `${(n * 100).toFixed(0)}%`;
}

export function StatsTable({ teamAMatches, teamBMatches }: StatsTableProps) {
  const [selectedMap, setSelectedMap] = useState<string>();

  const teamAStats = teamAMatches.reduce(reduceStats, new Map<string, AggregatedMapStats>());
  const teamBStats = teamBMatches.reduce(reduceStats, new Map<string, AggregatedMapStats>())

  const teamCompositions = selectedMap
    ? teamBStats.get(selectedMap)?.teamComposition
    : Array.from(teamBStats.entries())
      .flatMap(([, aggregatedStats]) => Array.from(aggregatedStats.teamComposition.entries()))
      .reduce((agg, [comp, n]) => {
        const sum = agg.get(comp)
        if (sum) {
          agg.set(comp, sum + n)
        } else {
          agg.set(comp, n)
        }
        return agg;
      }, new Map<string, number>())

  return (
    <>
      <Table
        aria-label="Team stats per map"
        selectionMode="single"
        color="primary"
        onSelectionChange={(keys) => {
          if (keys !== "all") {
            const lastKey = [...keys].pop();
            if (typeof lastKey !== "number") {
              setSelectedMap(lastKey);
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
            ...teamAStats.keys(),
            ...teamBStats.keys()
          ])).sort().map((map) => {
            const teamAMapStats = teamAStats.get(map);
            const teamBMapStats = teamBStats.get(map);

            function renderWinRateComparison(
              winStat: (mapStats: AggregatedMapStats) => number,
              loseStat: (mapStats: AggregatedMapStats) => number
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
      <div className="flex w-full flex-col">
        <Tabs disableAnimation>
          <Tab key="individual" title="Individual">
            <Table aria-label="Table of most common agents">
              <TableHeader>
                <TableColumn>Agent</TableColumn>
                <TableColumn>Frequency</TableColumn>
              </TableHeader>
              <TableBody emptyContent="No data">
                {Array.from(Array.from(teamCompositions?.entries() ?? [])
                  .flatMap(([comp, n]) => {
                    const agents = z.array(z.string()).parse(JSON.parse(comp))
                    return agents.map(agent => [agent, n] as const)
                  })
                  .reduce((agentCounts, [agent, n]) => {
                    const sum = agentCounts.get(agent)
                    agentCounts.set(agent, sum ? sum + n : n)
                    return agentCounts;
                  }, new Map<string, number>())
                  .entries()
                ).sort(([, a], [, b]) => b - a).map(([agent, n]) =>
                  <TableRow key={agent}>
                    <TableCell className="flex gap-3 items-center">
                      <Avatar
                        key={agent}
                        name={agent}
                        showFallback
                        radius="sm"
                        src={agentIcons.find(e => e.displayName === agent)?.displayIcon}
                      />
                      {agent}
                    </TableCell>
                    <TableCell>
                      {renderPercentage(n / teamBMatches.filter(m => selectedMap ? m.map === selectedMap : true).length)}
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </Tab>
          <Tab key="team" title="Team">
            <Table aria-label="Table of most common team compositions">
              <TableHeader>
                <TableColumn>Team composition</TableColumn>
                <TableColumn>Frequency</TableColumn>
              </TableHeader>
              <TableBody emptyContent="No data">
                {Array.from(teamCompositions?.entries() ?? [])
                  .sort(([, a], [, b]) => b - a)
                  .map(([comp, n], index) =>
                    <TableRow key={index}>
                      <TableCell className="flex gap-3 items-center">
                        {z.array(z.string()).parse(JSON.parse(comp)).map(agent =>
                          <Avatar
                            key={agent}
                            name={agent}
                            showFallback
                            radius="sm"
                            src={agentIcons.find(e => e.displayName === agent)?.displayIcon}
                          />
                        )}
                      </TableCell>
                      <TableCell>
                        {renderPercentage(n / teamBMatches.filter(m => selectedMap ? m.map === selectedMap : true).length)}
                      </TableCell>
                    </TableRow>
                  )}
              </TableBody>
            </Table>
          </Tab>
        </Tabs>
      </div>
    </>
  );
}
