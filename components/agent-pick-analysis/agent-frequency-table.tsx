import { Button } from "@nextui-org/button";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/table";
import { useState } from "react";
import { z } from "zod";
import { renderPercentage } from "@/util";
import { AgentPickAnalysisProps } from "./agent-pick-analysis";
import { HorizontalScrollShadow } from "../horizontal-scroll-shadow";
import { AgentAvatar } from "../agent-avatar";
import { useAgents } from "@/app/accessor/valorant-api";

export function AgentFrequencyTable({ teamCompositions, rowLimit }: AgentPickAnalysisProps & { rowLimit: number; }) {
  const agents = useAgents();
  const [showMore, setShowMore] = useState(false);

  const numMatches = Array.from(teamCompositions.entries())
    .map(([, n]) => n)
    .reduce((a, b) => a + b, 0);

  const rows = Array.from(Array.from(teamCompositions.entries())
    .flatMap(([comp, n]) => {
      const agents = z.array(z.string()).parse(JSON.parse(comp));
      return agents.map(agent => [agent, n] as const);
    })
    .reduce((agentCounts, [agent, n]) => {
      const sum = agentCounts.get(agent);
      agentCounts.set(agent, sum ? sum + n : n);
      return agentCounts;
    }, new Map<string, number>())
    .entries())
    .sort(([, a], [, b]) => b - a);

  return (
    <Table
      BaseComponent={HorizontalScrollShadow}
      aria-label="Table of most common agents"
      bottomContent={
        rows.length > rowLimit && (
          <div className="flex w-full justify-center">
            <Button onClick={() => setShowMore(prev => !prev)}>
              {showMore ? "Show less" : "Show more"}
            </Button>
          </div>
        )
      }
    >
      <TableHeader>
        <TableColumn>Agent</TableColumn>
        <TableColumn>Frequency</TableColumn>
      </TableHeader>
      <TableBody emptyContent="No data">
        {rows.slice(0, showMore ? undefined : rowLimit)
          .map(([agent, n]) =>
            <TableRow key={agent}>
              <TableCell className="flex gap-3 items-center">
                <AgentAvatar
                  key={agent}
                  agentId={agent}
                />
                {agents?.find(a => a.uuid === agent)?.displayName ?? agent}
              </TableCell>
              <TableCell>
                {renderPercentage(n / numMatches)}
              </TableCell>
            </TableRow>
          )}
      </TableBody>
    </Table>
  );
}
