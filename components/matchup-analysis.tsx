import { MapStats, MatchStats, reduceStats } from "@/analysis";
import { useMemo } from "react";
import { NewAnalysis } from "./new-analysis";

type StatsTableProps = {
  teamAMatches: ReadonlyArray<MatchStats>;
  teamBMatches: ReadonlyArray<MatchStats>;
};

export function MatchupAnalysis({ teamAMatches, teamBMatches }: StatsTableProps) {

  const teamAStats = useMemo(() => {
    return teamAMatches.reduce(reduceStats, new Map<string, MapStats>());
  }, [teamAMatches]);
  const teamBStats = useMemo(() => {
    return teamBMatches.reduce(reduceStats, new Map<string, MapStats>());
  }, [teamBMatches]);

  return (
    <NewAnalysis teamAStats={teamAStats} teamBStats={teamBStats} />
  );
}
