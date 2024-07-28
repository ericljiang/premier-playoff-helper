"use client"; // https://github.com/nextui-org/nextui/issues/1403
import { components } from "@/generated/henrik-4.0.0";
import { ExhaustiveTuple } from "@/util";
import { Autocomplete, AutocompleteItem, Button } from "@nextui-org/react";
import { useState } from "react";

type Inputs = {
  conference: components["schemas"]["premier_conferences"];
  division: number;
};

export type DivisionSelectProps = {
  onSelect: (selection: Inputs) => void;
  isLoading: boolean
};

const conferenceNames: Record<components["schemas"]["premier_conferences"], string> = {
  EU_CENTRAL_EAST: "Central & Eastern Europe",
  EU_WEST: "Western Europe",
  EU_MIDDLE_EAST: "Middle East",
  EU_TURKEY: "Türkiye",
  NA_US_EAST: "US East",
  NA_US_WEST: "US West",
  LATAM_NORTH: "Latin America North",
  LATAM_SOUTH: "Latin America South",
  BR_BRAZIL: "Brazil",
  KR_KOREA: "Korea",
  AP_ASIA: "Asia",
  AP_JAPAN: "Japan",
  AP_OCEANIA: "Oceania",
  AP_SOUTH_ASIA: "South Asia"
}

const _conferences = [
  "EU_CENTRAL_EAST",
  "EU_WEST",
  "EU_MIDDLE_EAST",
  "EU_TURKEY",
  "NA_US_EAST",
  "NA_US_WEST",
  "LATAM_NORTH",
  "LATAM_SOUTH",
  "BR_BRAZIL",
  "KR_KOREA",
  "AP_ASIA",
  "AP_JAPAN",
  "AP_OCEANIA",
  "AP_SOUTH_ASIA",
] as const satisfies readonly components["schemas"]["premier_conferences"][];
const conferences: ExhaustiveTuple<components["schemas"]["premier_conferences"], typeof _conferences> = _conferences;

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
  const [conference, setConference] = useState<components["schemas"]["premier_conferences"]>();
  const [division, setDivision] = useState<number>();

  return (
    <div
      className="flex w-full flex-wrap md:flex-nowrap gap-4 items-center justify-center"
    >
      <Autocomplete
        size={"lg"}
        label="Zone"
        selectedKey={conference ?? null}
        onSelectionChange={key => setConference(key as components["schemas"]["premier_conferences"])}
      >
        {conferences
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
