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
  onSelect: (teams: Inputs) => void;
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
    <form onSubmit={handleSubmit(onSelect)} className="flex w-full flex-wrap md:flex-nowrap gap-4">
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
      VS
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
