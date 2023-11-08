import { AggregatedMapStats, MapStats, reduceStats } from "@/analysis";
import { useMemo, useState } from "react";
import { WinRateAnalysis } from "./win-rate-analysis";
import { AgentPickAnalysis } from "./agent-pick-analysis";

type StatsTableProps = {
  teamAMatches: ReadonlyArray<MapStats>;
  teamBMatches: ReadonlyArray<MapStats>;
};

export function StatsTable({ teamAMatches, teamBMatches }: StatsTableProps) {
  const [selectedMap, setSelectedMap] = useState<string>();

  const teamAStats = useMemo(() => {
    return teamAMatches.reduce(reduceStats, new Map<string, AggregatedMapStats>());
  }, [teamAMatches]);
  const teamBStats = useMemo(() => {
    return teamBMatches.reduce(reduceStats, new Map<string, AggregatedMapStats>());
  }, [teamBMatches]);

  const teamCompositions = selectedMap
    ? teamBStats.get(selectedMap)?.teamCompositions ?? new Map<string, number>()
    : Array.from(teamBStats.entries())
      .flatMap(([, aggregatedStats]) => Array.from(aggregatedStats.teamCompositions.entries()))
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
      <WinRateAnalysis
        teamAStats={teamAStats}
        teamBStats={teamBStats}
        onSelectMap={setSelectedMap}
      />
      <AgentPickAnalysis teamCompositions={teamCompositions} />
    </>
  );
}
