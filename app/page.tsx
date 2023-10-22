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
import { Toaster, toast } from "sonner";
import { useTheme } from "next-themes";
import he from "he";

export default function Home() {
  const { theme } = useTheme()

  const [isLoadingTeams, setLoadingTeams] = useState<boolean>(false);
  const [divisionTeams, setDivisionTeams] = useState<V1PartialPremierTeam[]>();

  const [isLoadingStats, setLoadingStats] = useState<boolean>(false);
  const [teamStats, setTeamStats] = useState<{
    teamA: Map<Maps, MapStats>;
    teamB: Map<Maps, MapStats>;
  }>();

  return (
    <>
      <Toaster
        richColors
        theme={theme === "dark" || theme === "light" || theme === "system" ? theme : undefined}
      />
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
            try {
              const teams = await getPremierConference(conference, division);
              setDivisionTeams(teams);
              setTeamStats(undefined);
            } catch (e) {
              console.error(e);
              if (e && typeof e === "object" && "toString" in e) {
                toast.error(he.decode(e.toString()), { duration: 10000 });
              } else {
                toast.error("Failed to load teams.");
              }
            }
            setLoadingTeams(false);
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
                try {
                  const [teamAStats, teamBStats] = await Promise.all([
                    getTeamStats(teamA),
                    getTeamStats(teamB)
                  ]);
                  setTeamStats({ teamA: teamAStats, teamB: teamBStats });
                } catch (e) {
                  console.error(e);
                  if (e && typeof e === "object" && "toString" in e) {
                    toast.error(he.decode(e.toString()), { duration: 10000 });
                  } else {
                    toast.error("Failed to load team stats.");
                  }
                }
                setLoadingStats(false);
              }}
              isLoading={isLoadingStats}
            />
          </>
        )}

        {teamStats && (
          <TeamStats teamStats={teamStats} />
        )}
      </section>
    </>
  );
}
