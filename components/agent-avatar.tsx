import { useAgents } from "@/app/accessor/valorant-api";
import { Avatar, Skeleton } from "@nextui-org/react";

export type AgentAvatarProps = {
  agentId: string;
};

export function AgentAvatar({ agentId }: AgentAvatarProps) {
  const agents = useAgents();

  return (
    <Skeleton isLoaded={!!agents}>
      <Avatar
        name={agents?.find(agent => agent.uuid === agentId)?.displayName ?? agentId}
        showFallback
        radius="sm"
        src={agents?.find(agent => agent.uuid === agentId)?.displayIcon}
      />
    </Skeleton>
  );
}
