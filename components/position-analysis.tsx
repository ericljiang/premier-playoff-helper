import * as Plot from "@observablehq/plot";
import { PlayerLocation } from "@/analysis";
import { useEffect, useRef } from "react";
import { maps } from "@/resources/maps.json"
import { z } from "zod";
import { Card, CardBody } from "@nextui-org/card";

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
  positions: PlayerLocation[]
}

export function PositionAnalysis(props: PositionAnalysisProps) {
  const map = maps.filter((map): map is z.infer<typeof mapSchema> => mapSchema.safeParse(map).success)
    .find(map => map.displayName === props.map)

  return (
    <Card className="w-full">
      <CardBody>
        {!map || !map.displayIcon
          ? <>{`${props.map} is not yet supported :(`}</>
          : <Heatmap map={map} positions={props.positions} />}
      </CardBody>
    </Card>
  )
}

function Heatmap({ map: {
  displayIcon,
  xMultiplier,
  yMultiplier,
  xScalarToAdd,
  yScalarToAdd
}, positions }: {
  map: z.infer<typeof mapSchema>
  positions: PlayerLocation[]
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  const data = positions.map(({ x, y }) => ({
    // Not a bug. Riot switched x and y at some point.
    x: y * xMultiplier + xScalarToAdd,
    y: 1 - (x * yMultiplier + yScalarToAdd) // coordinate system puts 0,0 at top-left
  }))

  // https://observablehq.com/plot/getting-started#plot-in-react
  useEffect(() => {
    const plot = Plot.plot({
      aspectRatio: 1,
      margin: 0,
      width: 1024, // Match map image size. Plot will resize if > 100%.
      x: { domain: [0, 1], axis: null },
      y: { domain: [0, 1], axis: null },
      marks: [
        Plot.dot(data, { x: "x", y: "y" }),
        Plot.density(data, {
          x: "x",
          y: "y",
          fill: "density",
          fillOpacity: 0.03,
          bandwidth: 10,
          thresholds: 100
        })
      ],
      style: {
        background: `url(${displayIcon})`,
        backgroundSize: "100% 100%",
      },
    })
    containerRef.current?.append(plot);
    return () => plot.remove();
  })

  return (
    <div className="flex justify-center align-center" ref={containerRef} />
  )
}
