"use client"; // https://github.com/nextui-org/nextui/issues/1403

import { title } from "@/components/primitives";
import { Maps, Match, V1PartialPremierTeam } from "@/valorant-api";
import { useState } from "react";
import { DivisionSelect } from "@/components/division-select";
import { getPremierConference, getPremierMatches } from "@/api";
import { TeamSelect } from "@/components/team-select";
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/table";

export default function Home() {

  const [divisionTeams, setDivisionTeams] = useState<V1PartialPremierTeam[]>();
  const [teamStats, setTeamStats] = useState<{
    teamA: Map<Maps, MapStats>;
    teamB: Map<Maps, MapStats>;
  }>();

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
            const teamAStats = teamAMatches.map(match => getStats(match, teamA))
              .reduce(reduceStats, new Map<Maps, MapStats>());
            const teamBStats = teamBMatches.map(match => getStats(match, teamB))
              .reduce(reduceStats, new Map<Maps, MapStats>());
            setTeamStats({ teamA: teamAStats, teamB: teamBStats })
          }} />
        </>
      )}

      {teamStats && (
        <Table>
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
          </TableHeader>
          <TableBody>
            {Array.from(new Set([
              ...teamStats.teamA.keys(),
              ...teamStats.teamB.keys()
            ])).map((map) => {
              const teamAStats = teamStats.teamA.get(map);
              const teamBStats = teamStats.teamB.get(map);

              function renderRate(wins: number | undefined, losses: number | undefined): string {
                if (wins === undefined || losses === undefined) {
                  return "--%";
                }
                return `${(wins / (wins + losses) * 100).toFixed(0)}%`;
              }

              function renderCell(winStat: (mapStats: MapStats) => number, loseStat: (mapStats: MapStats) => number): string {
                const statA = teamAStats === undefined ? "--%" : renderRate(winStat(teamAStats), loseStat(teamAStats));
                const statB = teamBStats === undefined ? "--%" : renderRate(winStat(teamBStats), loseStat(teamBStats));
                return `${statA}\xA0/\xA0${statB}`;
              }

              return (
                <TableRow key={map}>
                  <TableCell>
                    {map}
                  </TableCell>
                  <TableCell>
                    {renderCell(stats => stats.won, stats => stats.lost)}
                  </TableCell>
                  <TableCell>
                    {renderCell(stats => stats.roundsWon, stats => stats.roundsLost)}
                  </TableCell>
                  <TableCell>
                    {renderCell(stats => stats.attackRoundsWon, stats => stats.attackRoundsLost)}
                  </TableCell>
                  <TableCell>
                    {renderCell(stats => stats.defenseRoundsWon, stats => stats.defenseRoundsLost)}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      )}
    </section>
  );
}

type MapStats = {
  won: number,
  lost: number,
  roundsWon: number,
  roundsLost: number,
  attackRoundsWon: number,
  attackRoundsLost: number,
  defenseRoundsWon: number,
  defenseRoundsLost: number,
};

function getStats(match: Match, teamId: string): MapStats & { map: Maps; } {
  const map = match.metadata?.map!;
  const teamColor = match.teams?.blue?.roster?.id === teamId ? "blue" : "red";

  const won = match.teams![teamColor]!.hasWon! ? 1 : 0;
  const lost = won === 0 ? 1 : 0;
  const roundsWon = match.teams![teamColor]!.roundsWon!;
  const roundsLost = match.teams![teamColor]!.roundsLost!;

  // assumption - blue team attacks first half
  const attackRounds = teamColor === "blue" ? match.rounds!.slice(0, 12) : match.rounds!.slice(12);
  const defenseRounds = teamColor === "red" ? match.rounds!.slice(0, 12) : match.rounds!.slice(12);
  const attackRoundsWon = attackRounds.filter(round => round.winningTeam?.toLowerCase() === teamColor).length;
  const attackRoundsLost = attackRounds.length - attackRoundsWon;
  const defenseRoundsWon = defenseRounds.filter(round => round.winningTeam?.toLowerCase() === teamColor).length;
  const defenseRoundsLost = defenseRounds.length - defenseRoundsWon;

  return {
    map,
    won,
    lost,
    roundsWon,
    roundsLost,
    attackRoundsWon,
    attackRoundsLost,
    defenseRoundsWon,
    defenseRoundsLost
  };
}

const reduceStats = (mapStats: Map<Maps, MapStats>, matchStats: MapStats & { map: Maps; }) => {
  const { map } = matchStats;
  if (mapStats.has(map)) {
    const current = mapStats.get(map)!;
    mapStats.set(map, {
      won: current.won + matchStats.won,
      lost: current.lost + matchStats.lost,
      roundsWon: current.roundsWon + matchStats.roundsWon,
      roundsLost: current.roundsLost + matchStats.roundsLost,
      attackRoundsWon: current.attackRoundsWon + matchStats.attackRoundsWon,
      attackRoundsLost: current.attackRoundsLost + matchStats.attackRoundsLost,
      defenseRoundsWon: current.defenseRoundsWon + matchStats.defenseRoundsWon,
      defenseRoundsLost: current.defenseRoundsLost + matchStats.defenseRoundsLost
    });
  } else {
    mapStats.set(map, matchStats);
  }
  return mapStats;
};
