"use client"; // https://github.com/nextui-org/nextui/issues/1403

import { title } from "@/components/primitives";
import { Match, V1PartialPremierTeam } from "@/valorant-api";
import { useState } from "react";
import { DivisionSelect } from "@/components/division-select";
import { getPremierConference, getPremierMatches } from "@/api";
import { TeamSelect } from "@/components/team-select";

export default function Home() {

  const [divisionTeams, setDivisionTeams] = useState<V1PartialPremierTeam[]>();

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <h1 className={title()}>Select your Premier division</h1>

      <DivisionSelect onSelect={async ({ conference, division }) => {
        const teams = await getPremierConference(conference, division);
        setDivisionTeams(teams);
      }} />

      {divisionTeams && (
        <>
          <h1 className={title()}>Select matchup</h1>
          <TeamSelect teams={divisionTeams} onSelect={async ({ teamA, teamB }) => {
            const [teamAMatches, teamBMatches] = await Promise.all([
              getPremierMatches(teamA),
              getPremierMatches(teamB)
            ]);
            teamAMatches.map(match => getStats(match, teamA));
            teamBMatches.map(match => getStats(match, teamB));
          }} />
        </>
      )}
    </section>
  );
}

function getStats(match: Match, teamId: string) {
  const map = match.metadata?.map!;
  const teamColor = match.teams?.blue?.roster?.id === teamId ? "blue" : "red";

  const won = match.teams![teamColor]!.hasWon!;

  const roundsWon = match.teams![teamColor]!.roundsWon!;
  const roundsLost = match.teams![teamColor]!.roundsLost!;
  const roundWinRate = roundsWon / (roundsWon + roundsLost);

  // assumption - blue team attacks first half
  const attackRounds = teamColor === "blue" ? match.rounds!.slice(0, 12) : match.rounds!.slice(12);
  const defenseRounds = teamColor === "red" ? match.rounds!.slice(0, 12) : match.rounds!.slice(12);
  const attackRoundsWon = attackRounds.filter(round => round.winningTeam?.toLowerCase() === teamColor).length;
  const defenseRoundsWon = defenseRounds.filter(round => round.winningTeam?.toLowerCase() === teamColor).length;
  const attackWinRate = attackRoundsWon / attackRounds.length;
  const defenseWinRate = defenseRoundsWon / defenseRounds.length;

  console.log({
    map,
    won,
    roundWinRate,
    attackWinRate,
    defenseWinRate
  });

  return {
    map,
    won,
    roundWinRate,
    attackWinRate,
    defenseWinRate
  };
}
