"use client"; // https://github.com/nextui-org/nextui/issues/1403
import { V1PartialPremierTeam } from "@/valorant-api";
import { Autocomplete, AutocompleteItem } from "@nextui-org/autocomplete";
import { Button } from "@nextui-org/button";
import { useEffect, useState } from "react";

type Inputs = {
  teamA: string;
  teamB: string;
};

export type TeamSelectProps = {
  teams: V1PartialPremierTeam[];
  onSelect: (teams: Inputs) => void;
  isLoading: boolean
};

export function TeamSelect({ teams, onSelect, isLoading }: TeamSelectProps) {
  const [teamA, setTeamA] = useState<string>();
  const [teamB, setTeamB] = useState<string>();

  useEffect(() => {
    setTeamA(undefined);
    setTeamB(undefined);
  }, [teams])

  return (
    <div
      className="flex w-full flex-wrap md:flex-nowrap gap-4 items-center justify-center"
    >
      <Autocomplete
        label="Your team"
        selectedKey={teamA ?? null}
        onSelectionChange={key => setTeamA(key as string)}
      >
        {teams.map(team => (
          <AutocompleteItem key={team.id!}>
            {team.name}
          </AutocompleteItem>
        ))}
      </Autocomplete>
      vs
      <Autocomplete
        label="Opponent team"
        selectedKey={teamB ?? null}
        onSelectionChange={key => setTeamB(key as string)}
      >
        {teams.map(team => (
          <AutocompleteItem key={team.id!}>
            {team.name}
          </AutocompleteItem>
        ))}
      </Autocomplete>
      <Button
        size="lg"
        color="primary"
        type="submit"
        isDisabled={!teamA || !teamB || isLoading}
        isLoading={isLoading}
        onPress={() => teamA && teamB && onSelect({ teamA, teamB })}
      >
        {isLoading ? "" : "Next"}
      </Button>
    </div>
  );
}
