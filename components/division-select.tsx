"use client"; // https://github.com/nextui-org/nextui/issues/1403
import { PremierConferences } from "@/valorant-api";
import { Autocomplete, AutocompleteItem } from "@nextui-org/autocomplete";
import { Button } from "@nextui-org/button";
import { useState } from "react";

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
  const [conference, setConference] = useState<PremierConferences>();
  const [division, setDivision] = useState<number>();

  return (
    <div
      className="flex w-full flex-wrap md:flex-nowrap gap-4 items-center justify-center"
    >
      <Autocomplete
        size={"lg"}
        label="Zone"
        selectedKey={conference ?? null}
        onSelectionChange={key => setConference(key as PremierConferences)}
      >
        {Object.values(PremierConferences)
          .map(conference => (
            <AutocompleteItem key={conference} value={conference}>
              {conferenceNames[conference]}
            </AutocompleteItem>
          ))}
      </Autocomplete>
      <Autocomplete
        size={"lg"}
        label="Division"
        selectedKey={division ?? null}
        onSelectionChange={key => setDivision(key as number)}
      >
        {Array.from(Array(21).keys())
          .map(i => i + 1)
          .filter(i => i >= 2)
          .map(division => (
            <AutocompleteItem key={division} value={division}>
              {divisionNames[division]}
            </AutocompleteItem>
          ))}
      </Autocomplete>
      <Button
        size="lg"
        color="primary"
        type="submit"
        isDisabled={!conference || !division || isLoading}
        isLoading={isLoading}
        onPress={() => conference && division && onSelect({ conference, division })}
      >
        {isLoading ? "" : "Next"}
      </Button>
    </div>
  );
}
