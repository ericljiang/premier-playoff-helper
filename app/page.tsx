"use client";
import { title } from "@/components/primitives";
import { Maps, V1PartialPremierTeam } from "@/valorant-api";
import { useState } from "react";
import { DivisionSelect } from "@/components/division-select";
import { getPremierConference } from "@/api";
import { TeamSelect } from "@/components/team-select";
import { TeamStats } from "@/components/team-stats";
import { MapStats, getTeamStats } from "@/analysis";
import { Snippet } from "@nextui-org/snippet";

export default function Home() {

  const [isLoadingTeams, setLoadingTeams] = useState<boolean>(false);
  const [divisionTeams, setDivisionTeams] = useState<V1PartialPremierTeam[]>();

  const [isLoadingStats, setLoadingStats] = useState<boolean>(false);
  const [teamStats, setTeamStats] = useState<{
    teamA: Map<Maps, MapStats>;
    teamB: Map<Maps, MapStats>;
  }>();

  return (
    <section className="flex flex-col items-center justify-center gap-8">
      <Snippet hideCopyButton hideSymbol color="primary" size="sm">
        <span>The API used to retrieve Valorant data is</span>
        <span>rate limited to 30 requests per minute.</span>
        <span>Computing stats for one matchup can create</span>
        <span>up to 30 requests. If the page freezes,</span>
        <span>refresh and try again in a minute.</span>
      </Snippet>

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
