"use client"; // https://github.com/nextui-org/nextui/issues/1403
import { PremierConferences } from "@/valorant-api";
import { Button } from "@nextui-org/button";
import { Select, SelectItem } from "@nextui-org/select";
import { useForm } from "react-hook-form";

type Inputs = {
  conference: PremierConferences;
  division: number;
};

export type DivisionSelectProps = {
  onSelect: (selection: Inputs) => void;
  isLoading: boolean
};

const conferenceNames: Record<PremierConferences, string> = {
  [PremierConferences.EuCentralEast]: "Central & Eastern Europe",
  [PremierConferences.EuWest]: "Western Europe",
  [PremierConferences.EuMiddleEast]: "Middle East",
  [PremierConferences.EuTurkey]: "Türkiye",
  [PremierConferences.NaUsEast]: "US East",
  [PremierConferences.NaUsWest]: "US West",
  [PremierConferences.LatamNorth]: "Latin America North",
  [PremierConferences.LatamSouth]: "Latin America South",
  [PremierConferences.BrBrazil]: "Brazil",
  [PremierConferences.KrKorea]: "Korea",
  [PremierConferences.ApAsia]: "Asia",
  [PremierConferences.ApJapan]: "Japan",
  [PremierConferences.ApOceania]: "Oceania",
  [PremierConferences.ApSouthAsia]: "South Asia"
}

const divisionNames = [
  null,
  null,
  "Open 2",
  "Open 3",
  "Open 4",
  "Open 5",
  "Intermediate 1",
  "Intermediate 2",
  "Intermediate 3",
  "Intermediate 4",
  "Intermediate 5",
  "Advanced 1",
  "Advanced 2",
  "Advanced 3",
  "Advanced 4",
  "Advanced 5",
  "Elite 1",
  "Elite 2",
  "Elite 3",
  "Elite 4",
  "Elite 5",
  "Contender"
]

export function DivisionSelect({ onSelect, isLoading }: DivisionSelectProps) {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<Inputs>();

  return (
    <form onSubmit={handleSubmit(onSelect)} className="flex w-full flex-wrap md:flex-nowrap gap-4 items-center">
      <Select
        label="Zone"
        {...register("conference", { required: true })}
      >
        {Object.values(PremierConferences)
          .map(conference => (
            <SelectItem key={conference} value={conference}>
              {conferenceNames[conference]}
            </SelectItem>
          ))}
      </Select>
      <Select
        label="Division"
        {...register("division", { required: true })}
      >
        {Array.from(Array(21).keys())
          .map(i => i + 1)
          .filter(i => i >= 2)
          .map(division => (
            <SelectItem key={division} value={division}>
              {divisionNames[division]}
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
