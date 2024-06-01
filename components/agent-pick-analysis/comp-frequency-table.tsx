import { renderPercentage } from "@/util";
import { Button, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import { useState } from "react";
import { z } from "zod";
import { AgentAvatar } from "../agent-avatar";
import { HorizontalScrollShadow } from "../horizontal-scroll-shadow";
import { AgentPickAnalysisProps } from "./agent-pick-analysis";

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
                  <AgentAvatar
                    key={agent}
                    agentId={agent}
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
