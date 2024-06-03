"use client";
import { title } from "@/components/primitives";
import { V1PartialPremierTeam } from "@/valorant-api";
import { useState } from "react";
import { DivisionSelect } from "@/components/division-select";
import { getPremierConferenceTrpc as getPremierConference, getPremierMatchHistoryTrpc as getPremierMatchHistory } from "@/api";
import { TeamSelect } from "@/components/team-select";
import { MatchupAnalysis } from "@/components/matchup-analysis";
import { MatchStats, getStats } from "@/analysis";
import { Snippet } from "@nextui-org/react";
import { Toaster, toast } from "sonner";
import { useTheme } from "next-themes";
import he from "he";
import { MatchLoadingProgress } from "@/components/match-loading-progress";
import { SignIn } from "@/components/sign-in";
import UserAvatar from "@/components/user-avatar";

export default function Home() {
  const { theme } = useTheme()

  const [isLoadingTeams, setLoadingTeams] = useState<boolean>(false);
  const [divisionTeams, setDivisionTeams] = useState<V1PartialPremierTeam[]>();
  const [isLoadingStats, setLoadingStats] = useState<boolean>(false);
  const [expectedMatches, setExpectedMatches] = useState<number>();
  const [unretrievableMatches, setUnretrievableMatches] = useState<number>();
  const [teamAMatches, setTeamAMatches] = useState<ReadonlyArray<MatchStats>>([]);
  const [teamBMatches, setTeamBMatches] = useState<ReadonlyArray<MatchStats>>([]);

  return (
    <>
      <Toaster
        richColors
        theme={theme === "dark" || theme === "light" || theme === "system" ? theme : undefined}
      />
      <section className="flex flex-col items-center justify-center gap-8">

        <SignIn />
        {/* <UserAvatar /> */}

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
              teams={divisionTeams.sort((a, b) => a.name!.localeCompare(b.name!))}
              onSelect={async ({ teamA, teamB }) => {
                setLoadingStats(true);
                setExpectedMatches(undefined);
                setTeamAMatches([]);
                setTeamBMatches([]);

                const teamAMatchHistoryPromise = getPremierMatchHistory(teamA);
                const teamBMatchHistoryPromise = getPremierMatchHistory(teamB);
                const teamAMatchHistory = await teamAMatchHistoryPromise;
                const teamBMatchHistory = await teamBMatchHistoryPromise;
                setExpectedMatches(teamAMatchHistory.length + teamBMatchHistory.length);
                setUnretrievableMatches(0)

                async function addMatch(matchId: string, team: "a" | "b"): Promise<void> {
                  try {
                    const stats = await getStats(matchId, team === "a" ? teamA : teamB);
                    if (team === "a") {
                      setTeamAMatches(prev => [...prev, stats]);
                    } else {
                      setTeamBMatches(prev => [...prev, stats]);
                    }
                  } catch (e) {
                    setUnretrievableMatches(prev => (prev ?? 0) + 1);
                    console.warn(e);
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

        {expectedMatches && (
          <MatchLoadingProgress
            loaded={teamAMatches.length + teamBMatches.length}
            expected={expectedMatches}
            errors={unretrievableMatches ?? 0}
          />
        )}

        {(teamAMatches.length > 0 || teamBMatches.length > 0) && (
          <MatchupAnalysis teamAMatches={teamAMatches} teamBMatches={teamBMatches} />
        )}
      </section>
    </>
  );
}
