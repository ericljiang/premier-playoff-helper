import { useEffect, useState } from "react";
import { z } from "zod";

const agentsSchema = z.object({
  status: z.number(),
  data: z.array(z.object({
    uuid: z.string(),
    displayName: z.string(),
    displayIcon: z.string()
  }))
});
const mapsSchema = z.object({
  status: z.number(),
  data: z.array(z.object({
    mapUrl: z.string(),
    displayName: z.string(),
    displayIcon: z.union([z.string(), z.null()]),
    xMultiplier: z.number(),
    xScalarToAdd: z.number(),
    yMultiplier: z.number(),
    yScalarToAdd: z.number(),
  }))
});

let agents: z.infer<typeof agentsSchema> | undefined;
let maps: z.infer<typeof mapsSchema> | undefined;

export async function getAgents() {
  if (!agents) {
    const response = await fetch("https://valorant-api.com/v1/agents?isPlayableCharacter=true");
    agents = agentsSchema.parse(await response.json());
  }
  return agents;
}

export async function getMaps() {
  if (!maps) {
    const response = await fetch("https://valorant-api.com/v1/maps");
    maps = mapsSchema.parse(await response.json());
  }
  return maps;
}

export function useAgents() {
  const [agents, setAgents] = useState<Awaited<ReturnType<typeof getAgents>>["data"]>();
  async function populate() {
    const { data } = await getAgents();
    setAgents(data);
  }
  useEffect(() => {
    populate();
  });
  return agents;
}

export function useMaps() {
  const [maps, setMaps] = useState<Awaited<ReturnType<typeof getMaps>>["data"]>();
  async function populate() {
    const { data } = await getMaps();
    setMaps(data);
  }
  useEffect(() => {
    populate();
  });
  return maps;
}
