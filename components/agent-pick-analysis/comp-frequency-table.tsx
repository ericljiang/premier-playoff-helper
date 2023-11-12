import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/table";
import { useState } from "react";
import { z } from "zod";
import { agentIcons } from "@/resources/agent-icons.json";
import { renderPercentage } from "@/util";
import { AgentPickAnalysisProps } from "./agent-pick-analysis";
import { HorizontalScrollShadow } from "../horizontal-scroll-shadow";

export function CompFrequencyTable({ teamCompositions, rowLimit }: AgentPickAnalysisProps & { rowLimit: number; }) {
  const [showMore, setShowMore] = useState(false);

  const numMatches = Array.from(teamCompositions.entries())
    .map(([, n]) => n)
    .reduce((a, b) => a + b, 0);

  const rows = Array.from(teamCompositions.entries())
    .sort(([, a], [, b]) => b - a);

  return (
    <Table
      BaseComponent={HorizontalScrollShadow}
      aria-label="Table of most common team compositions"
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
        <TableColumn>Team composition</TableColumn>
        <TableColumn>Frequency</TableColumn>
      </TableHeader>
      <TableBody emptyContent="No data">
        {rows
          .slice(0, showMore ? undefined : 8)
          .map(([comp, n], index) =>
            <TableRow key={index}>
              <TableCell className="flex gap-3 items-center">
                {z.array(z.string()).parse(JSON.parse(comp)).map(agent =>
                  <Avatar
                    key={agent}
                    name={agent}
                    showFallback
                    radius="sm"
                    src={agentIcons.find(e => e.displayName === agent)?.displayIcon}
                  />
                )}
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
