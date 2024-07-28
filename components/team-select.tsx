"use client"; // https://github.com/nextui-org/nextui/issues/1403
import { components } from "@/generated/henrik-4.0.0";
import { Autocomplete, AutocompleteItem, Button } from "@nextui-org/react";
import { useEffect, useState } from "react";

type Inputs = {
  teamA: string;
  teamB: string;
};

export type TeamSelectProps = {
  teams: components["schemas"]["v1_partial_premier_team"][];
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
        size={"lg"}
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
      <span className="font-display font-semibold">VS</span>
      <Autocomplete
        size={"lg"}
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
