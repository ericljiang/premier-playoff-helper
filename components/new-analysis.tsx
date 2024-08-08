import { useMaps } from "@/app/accessor/valorant-api";
import { Accordion, AccordionItem, Card, CardBody, CardFooter } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import NextImage from "next/image";
import { MapStats as OldMapStats } from "@/analysis";
import { AgentPickAnalysis } from "./agent-pick-analysis/agent-pick-analysis";
import { PositionAnalysis } from "./position-analysis";

const Stat = (props: {
  name: string,
  value: string,
  subtitle?: string;
  align: "start" | "end";
}) =>
  <div className={`flex-auto flex flex-col items-${props.align}`}>
    <p className="uppercase">
      {props.name}
    </p>
    <p className="font-display font-semibold text-4xl">
      {props.value}
    </p>
    <p className={`text-sm uppercase text-${props.align}`}>
      {props.subtitle ?? "-"}
    </p>
  </div>;

/** Stats for one team on one map */
export type MapStats = {
  mapWinRatio: number;
  timesPlayed: number;
  attackWinRatio: number;
  attackRoundsPlayed: number;
  defenseWinRatio: number;
  defenseRoundsPlayed: number;
};

function renderRatio(ratio: number): string {
  return isNaN(ratio) ? "--" : (ratio * 100).toFixed(1);
}
const TeamMapStats = (props: { stats: MapStats; position: "left" | "right"; }) => {
  const alignment = props.position === "left" ? "start" : "end";
  return <>
    <Stat name={"MAP WIN%"} value={renderRatio(props.stats.mapWinRatio)} subtitle={`${props.stats.timesPlayed} times played`} align={alignment} />
    <Stat name={"ATK WIN%"} value={renderRatio(props.stats.attackWinRatio)} subtitle={`${props.stats.attackRoundsPlayed} rounds played`} align={alignment} />
    <Stat name={"DEF WIN%"} value={renderRatio(props.stats.defenseWinRatio)} subtitle={`${props.stats.defenseRoundsPlayed} rounds played`} align={alignment} />
  </>;
};

/** Renders stats for two teams on one map */
const MapStats = (props: {
  /** Map identifier - displayName or mapUrl */
  map: string;
  stats: [MapStats, MapStats];
}) => {
  const maps = useMaps();
  const { displayName, listViewIconTall } = maps?.find(m => m.displayName === props.map || m.mapUrl === props.map) || {};
  return <Card
    isBlurred
    className="bg-background/60 dark:bg-default-100/80 w-full"
    shadow="sm"
  >
    <CardBody className="flex flex-row items-center">
      <TeamMapStats stats={props.stats[0]} position="left" />
      <Card className="flex-0">
        <Image removeWrapper isZoomed as={NextImage} className="z-0 object-cover aspect-square" src={listViewIconTall ?? undefined} width={128} height={128} alt={""} />
        <CardFooter className="absolute z-10 bottom-0 justify-center">
          <p className="text-center uppercase font-display font-semibold text-2xl backdrop-blur-xl">
            {displayName ?? props.map}
          </p>
        </CardFooter>
      </Card>
      <TeamMapStats stats={props.stats[1]} position="right" />
    </CardBody>
  </Card>;
};

const convertStats = (stats: OldMapStats | undefined): MapStats => {
  if (!stats) {
    return {
      mapWinRatio: NaN,
      timesPlayed: 0,
      attackWinRatio: NaN,
      attackRoundsPlayed: 0,
      defenseWinRatio: NaN,
      defenseRoundsPlayed: 0
    };
  }
  return {
    mapWinRatio: stats.won / (stats.won + stats.lost),
    timesPlayed: stats.won + stats.lost,
    attackWinRatio: stats.attackRoundsWon / (stats.attackRoundsWon + stats.attackRoundsLost),
    attackRoundsPlayed: stats.attackRoundsWon + stats.attackRoundsLost,
    defenseWinRatio: stats.defenseRoundsWon / (stats.defenseRoundsWon + stats.defenseRoundsLost),
    defenseRoundsPlayed: stats.defenseRoundsWon + stats.defenseRoundsLost
  };
};

export const NewAnalysis = (props: {
  teamAStats: Map<string, OldMapStats>;
  teamBStats: Map<string, OldMapStats>;
}) => {
  const maps = useMaps();

  const newStats = [...new Set([...props.teamAStats.keys(), ...props.teamBStats.keys()])]
    .toSorted((a: string, b: string) => {
      const displayNameA = maps?.find(m => m.displayName === a || m.mapUrl === a)?.displayName ?? a;
      const displayNameB = maps?.find(m => m.displayName === b || m.mapUrl === b)?.displayName ?? b;
      return displayNameA.localeCompare(displayNameB);
    })
    .map((map): [string, [MapStats, MapStats]] =>
      [map, [convertStats(props.teamAStats.get(map)), convertStats(props.teamBStats.get(map))]])
    .reduce((acc, [map, statPair]) => {
      acc.set(map, statPair);
      return acc;
    }, new Map<string, [MapStats, MapStats]>());
  return <Card className="w-full bg-orange-500">
    <CardBody className="gap-3">
      <Accordion isCompact variant="light" showDivider={false}>
        {Array.from(newStats.entries(), ([map, stats]) => (
          <AccordionItem key={map} title={<MapStats key={map} map={map} stats={stats} />}>
            <div className="flex flex-col gap-4">
              <AgentPickAnalysis teamCompositions={props.teamBStats.get(map)?.teamCompositions} />
              <PositionAnalysis
                map={map}
                killEvents={props.teamBStats.get(map)?.killEvents}
              />
            </div>
          </AccordionItem>
        ))}
      </Accordion>
    </CardBody>
  </Card>;
};
