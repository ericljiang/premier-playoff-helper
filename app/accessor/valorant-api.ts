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

let agents: z.infer<typeof agentsSchema> | undefined;

export async function getAgents() {
  if (!agents) {
    const response = await fetch("https://valorant-api.com/v1/agents?isPlayableCharacter=true");
    agents = agentsSchema.parse(await response.json());
  }
  return agents;
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
