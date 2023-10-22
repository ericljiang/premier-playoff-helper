"use client";
import { title } from "@/components/primitives";
import { Maps, V1PartialPremierTeam } from "@/valorant-api";
import { useState } from "react";
import { DivisionSelect } from "@/components/division-select";
import { getPremierConference } from "@/api";
import { TeamSelect } from "@/components/team-select";
import { TeamStats } from "@/components/team-stats";
import { MapStats, getTeamStats } from "@/analysis";

export default function Home() {

  const [divisionTeams, setDivisionTeams] = useState<V1PartialPremierTeam[]>();
  const [teamStats, setTeamStats] = useState<{
    teamA: Map<Maps, MapStats>;
    teamB: Map<Maps, MapStats>;
  }>();

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <h1 className={title()}>Select your Premier division</h1>

      <DivisionSelect
        onSelect={teams => {
          setDivisionTeams(teams);
          setTeamStats(undefined);
        }}
      />

      {divisionTeams && (
        <>
          <h1 className={title()}>Select matchup</h1>
          <TeamSelect teams={divisionTeams} onSelect={async ({ teamA, teamB }) => {
            const [teamAStats, teamBStats] = await Promise.all([
              getTeamStats(teamA),
              getTeamStats(teamB)
            ]);
            setTeamStats({ teamA: teamAStats, teamB: teamBStats })
          }} />
        </>
      )}

      {teamStats && (
        <TeamStats teamStats={teamStats} />
      )}
    </section>
  );
}
