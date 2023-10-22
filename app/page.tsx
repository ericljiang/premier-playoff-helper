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

  const [isLoadingTeams, setLoadingTeams] = useState<boolean>(false);
  const [divisionTeams, setDivisionTeams] = useState<V1PartialPremierTeam[]>();

  const [isLoadingStats, setLoadingStats] = useState<boolean>(false);
  const [teamStats, setTeamStats] = useState<{
    teamA: Map<Maps, MapStats>;
    teamB: Map<Maps, MapStats>;
  }>();

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <h1 className={title()}>Select your Premier division</h1>

      <DivisionSelect
        onSelect={async ({ conference, division }) => {
          setLoadingTeams(true);
          const teams = await getPremierConference(conference, division);
          setLoadingTeams(false);
          setDivisionTeams(teams);
          setTeamStats(undefined);
        }}
        isLoading={isLoadingTeams}
      />

      {divisionTeams && (
        <>
          <h1 className={title()}>Select matchup</h1>
          <TeamSelect
            teams={divisionTeams}
            onSelect={async ({ teamA, teamB }) => {
              setLoadingStats(true);
              const [teamAStats, teamBStats] = await Promise.all([
                getTeamStats(teamA),
                getTeamStats(teamB)
              ]);
              setLoadingStats(false);
              setTeamStats({ teamA: teamAStats, teamB: teamBStats })
            }}
            isLoading={isLoadingStats}
          />
        </>
      )}

      {teamStats && (
        <TeamStats teamStats={teamStats} />
      )}
    </section>
  );
}
