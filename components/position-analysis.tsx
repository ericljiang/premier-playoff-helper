import * as Plot from "@observablehq/plot";
import { KillEvent } from "@/analysis";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { maps } from "@/resources/maps.json"
import { z } from "zod";
import { Card, CardBody } from "@nextui-org/card";
import { Slider } from "@nextui-org/slider";
import { Tab, Tabs } from "@nextui-org/tabs";

const mapSchema = z.object({
  displayName: z.string(),
  displayIcon: z.string(),
  xMultiplier: z.number(),
  yMultiplier: z.number(),
  xScalarToAdd: z.number(),
  yScalarToAdd: z.number()
})

type PositionAnalysisProps = {
  map: string;
  killEvents: KillEvent[],
  teamName: string,
}

export function PositionAnalysis(props: PositionAnalysisProps) {
  const map = maps.filter((map): map is z.infer<typeof mapSchema> => mapSchema.safeParse(map).success)
    .find(map => map.displayName === props.map)

  return (
    <Card className="w-full">
      <CardBody>
        {!map || !map.displayIcon
          ? <>{`${props.map} is not yet supported :(`}</>
          : <Heatmap map={map} killEvents={props.killEvents} teamName={props.teamName} />}
      </CardBody>
    </Card>
  )
}

function Heatmap({
  map: {
    displayIcon,
    xMultiplier,
    yMultiplier,
    xScalarToAdd,
    yScalarToAdd
  },
  killEvents,
  teamName
}: {
  map: z.infer<typeof mapSchema>
  killEvents: KillEvent[],
  teamName: string
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>()
  const [selectedKillsOrDeaths, setSelectedKillsOrDeaths] = useState<"kills" | "deaths">("kills");
  const [selectedHalf, setSelectedHalf] = useState<"attack" | "defense">("attack");
  const [timeRange, setTimeRange] = useState<[number, number]>([0, 100]);

  function transformGameCoordinates(coordinates: { x: number, y: number }): { x: number, y: number } {
    return {
      // Not a bug. Riot switched x and y at some point.
      x: coordinates.y * xMultiplier + xScalarToAdd,
      // coordinate system puts 0,0 at top-left
      y: 1 - (coordinates.x * yMultiplier + yScalarToAdd)
    }
  }

  const filteredKillEvents = killEvents
    .filter(({ killer, victim }) => {
      switch (selectedKillsOrDeaths) {
        case "kills":
          return killer.team === "friendly";
        case "deaths":
          return victim.team === "friendly";
      }
    })
    .filter(({ half }) => half === selectedHalf)
    .filter(({ timeInRound }) => timeRange[0] <= timeInRound / 1000 && timeInRound / 1000 <= timeRange[1])
  const data = filteredKillEvents.flatMap(killEvent => [
    {
      ...killEvent,
      ...transformGameCoordinates(killEvent.killer),
      team: killEvent.killer.team,
      name: killEvent.killer.name,
      symbol: "square2",
      stroke: "#0fe",
    },
    {
      ...killEvent,
      ...transformGameCoordinates(killEvent.victim),
      team: killEvent.victim.team,
      name: killEvent.victim.name,
      symbol: "times",
      stroke: "#a00",
    }
  ]);
  const links = data
    .map(({ killer, victim }) => {
      const { x: x1, y: y1 } = transformGameCoordinates(killer)
      const { x: x2, y: y2 } = transformGameCoordinates(victim)
      return { x1, y1, x2, y2 };
    });

  useLayoutEffect(() => {
    const updateWidth = () => setWidth(containerRef.current?.offsetWidth);
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  })

  // https://observablehq.com/plot/getting-started#plot-in-react
  useEffect(() => {
    const plot = Plot.plot({
      aspectRatio: 1,
      margin: 0,
      width, // Match map image size. Plot will resize if > 100%.
      x: { domain: [0, 1], axis: null },
      y: { domain: [0, 1], axis: null },
      marks: [
        // Plot.density(data, {
        //   x: "x",
        //   y: "y",
        //   fill: "density",
        //   fillOpacity: 0.02,
        //   bandwidth: 10,
        //   thresholds: 100
        // }),
        Plot.link(links, { x1: "x1", y1: "y1", x2: "x2", y2: "y2", stroke: "white" }),
        Plot.dot(data, {
          x: "x",
          y: "y",
          symbol: "symbol",
          stroke: "stroke",
          strokeWidth: 2,
          r: 5,
          channels: {
            half: "half",
            round: "round",
            timeInRound: "timeInRound",
            team: "team",
            name: "name"
          },
          tip: {
            format: {
              timeInRound: (t) => `${(t / 1000).toFixed(0)}s`
            }
          },
        }),
      ],
      style: {
        background: `url(${displayIcon})`,
        backgroundSize: "100% 100%",
        color: "black"
      },
    })
    containerRef.current?.append(plot);
    return () => plot.remove();
  });

  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex flex-wrap gap-1 items-center">
        <Tabs
          selectedKey={selectedKillsOrDeaths}
          onSelectionChange={key => {
            if (key !== "kills" && key !== "deaths") {
              throw Error();
            }
            setSelectedKillsOrDeaths(key);
          }}
        >
          <Tab key="kills" title="Kills" />
          <Tab key="deaths" title="Deaths" />
        </Tabs>
        <Tabs
          selectedKey={selectedHalf}
          onSelectionChange={key => {
            if (key !== "attack" && key !== "defense") {
              throw Error();
            }
            setSelectedHalf(key);
          }}
        >
          <Tab key="attack" title="Attack" />
          <Tab key="defense" title="Defense" />
        </Tabs>
      </div>
      <Slider
        className="max-w"
        label="Time Range"
        step={1}
        minValue={0}
        maxValue={100}
        defaultValue={[0, 100]}
        formatOptions={{ style: "unit", unit: "second", unitDisplay: "narrow" }}
        onChange={(value) => {
          setTimeRange(value as [number, number])
        }}
      />
      <div className="flex justify-center align-center" ref={containerRef} />
    </div>
  )
}
