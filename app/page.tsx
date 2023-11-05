"use client";
import { title } from "@/components/primitives";
import { V1PartialPremierTeam } from "@/valorant-api";
import { useState } from "react";
import { DivisionSelect } from "@/components/division-select";
import { getMatch, getPremierConference, getPremierMatchHistory } from "@/api";
import { TeamSelect } from "@/components/team-select";
import { StatsTable } from "@/components/stats-table";
import { MapStats, getStats } from "@/analysis";
import { Snippet } from "@nextui-org/snippet";
import { Toaster, toast } from "sonner";
import { useTheme } from "next-themes";
import he from "he";
import { Progress } from "@nextui-org/progress";

export default function Home() {
  const { theme } = useTheme()

  const [isLoadingTeams, setLoadingTeams] = useState<boolean>(false);
  const [divisionTeams, setDivisionTeams] = useState<V1PartialPremierTeam[]>();
  const [isLoadingStats, setLoadingStats] = useState<boolean>(false);
  const [expectedMatches, setExpectedMatches] = useState<number>();
  const [teamAMatches, setTeamAMatches] = useState<ReadonlyArray<MapStats>>([]);
  const [teamBMatches, setTeamBMatches] = useState<ReadonlyArray<MapStats>>([]);

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
              setExpectedMatches(undefined);
              setTeamAMatches([]);
              setTeamBMatches([]);
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
                setExpectedMatches(undefined);
                setTeamAMatches([]);
                setTeamBMatches([]);

                const teamAMatchHistory = await getPremierMatchHistory(teamA);
                const teamBMatchHistory = await getPremierMatchHistory(teamB);
                setExpectedMatches(teamAMatchHistory.length + teamBMatchHistory.length);

                async function addMatch(matchId: string, team: "a" | "b"): Promise<void> {
                  try {
                    const match = await getMatch(matchId);
                    const stats = getStats(match, team === "a" ? teamA : teamB);
                    if (team === "a") {
                      setTeamAMatches(prev => [...prev, stats]);
                    } else {
                      setTeamBMatches(prev => [...prev, stats]);
                    }
                  } catch (e) {
                    if (e && typeof e === "object" && "code" in e && e.code === 429) {
                      await new Promise(resolve => setTimeout(resolve, 9000 + Math.random() * 2000));
                      await addMatch(matchId, team);
                    }
                  }
                }

                await Promise.all([
                  ...teamAMatchHistory.map(matchId => addMatch(matchId, "a")),
                  ...teamBMatchHistory.map(matchId => addMatch(matchId, "b"))
                ]);
                setLoadingStats(false);
              }}
              isLoading={isLoadingStats}
            />
          </>
        )}

        {expectedMatches &&
          <Progress
            value={teamAMatches.length + teamBMatches.length}
            maxValue={expectedMatches}
            label={`Retrieved ${teamAMatches.length + teamBMatches.length}/${expectedMatches ?? "?"} matches`}
          />
        }

        {(teamAMatches.length > 0 || teamBMatches.length > 0) && (
          <StatsTable teamAMatches={teamAMatches} teamBMatches={teamBMatches} />
        )}
      </section>
    </>
  );
}
