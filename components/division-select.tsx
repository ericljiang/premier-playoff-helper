"use client"; // https://github.com/nextui-org/nextui/issues/1403
import { getPremierConference } from "@/api";
import { PremierConferences, V1PartialPremierTeam } from "@/valorant-api";
import { Button } from "@nextui-org/button";
import { Select, SelectItem } from "@nextui-org/select";
import { useState } from "react";
import { useForm } from "react-hook-form";

type Inputs = {
  conference: PremierConferences;
  division: number;
};

export type DivisionSelectProps = {
  onSelect: (teams: V1PartialPremierTeam[]) => void;
};

export function DivisionSelect({ onSelect }: DivisionSelectProps) {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<Inputs>();

  const [isLoading, setLoading] = useState<boolean>(false);

  async function onSubmit(inputs: Inputs) {
    const { conference, division } = inputs;
    setLoading(true);
    const teams = await getPremierConference(conference, division);
    setLoading(false);
    onSelect(teams);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Select
        label="Conference"
        {...register("conference", { required: true })}
      >
        {Object.values(PremierConferences)
          .map(conference => (
            <SelectItem key={conference} value={conference}>
              {conference}
            </SelectItem>
          ))}
      </Select>
      <Select
        label="Division"
        {...register("division", { required: true })}
      >
        {Array.from(Array(20).keys())
          .map(i => i + 1)
          .map(division => (
            <SelectItem key={division} value={division}>
              {division.toString()}
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
