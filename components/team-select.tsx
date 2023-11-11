"use client"; // https://github.com/nextui-org/nextui/issues/1403
import { V1PartialPremierTeam } from "@/valorant-api";
import { Button } from "@nextui-org/button";
import { Select, SelectItem } from "@nextui-org/select";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

type Inputs = {
  teamA: string;
  teamB: string;
};

export type TeamSelectProps = {
  teams: V1PartialPremierTeam[];
  onSelect: (teams: Inputs, opponentName?: string) => void;
  isLoading: boolean
};

export function TeamSelect({ teams, onSelect, isLoading }: TeamSelectProps) {
  const {
    register,
    handleSubmit,
    formState: { isValid },
    reset
  } = useForm<Inputs>();

  useEffect(() => {
    reset()
  }, [teams, reset])

  return (
    <form
      onSubmit={handleSubmit((inputs: Inputs) => {
        const opponentName = teams.find(team => team.id === inputs.teamB)?.name
        return onSelect(inputs, opponentName);
      })}
      className="flex w-full flex-wrap md:flex-nowrap gap-4 items-center justify-center"
    >
      <Select
        label="Your team"
        {...register("teamA", { required: true })}
      >
        {teams.map(team => (
          <SelectItem key={team.id!}>
            {team.name}
          </SelectItem>
        ))}
      </Select>
      vs
      <Select
        label="Opponent team"
        {...register("teamB", { required: true })}
      >
        {teams.map(team => (
          <SelectItem key={team.id!}>
            {team.name}
          </SelectItem>
        ))}
      </Select>
      <Button
        size="lg"
        color="primary"
        type="submit"
        isDisabled={!isValid || isLoading}
        isLoading={isLoading}
      >
        {isLoading ? "" : "Next"}
      </Button>
    </form>
  );
}
