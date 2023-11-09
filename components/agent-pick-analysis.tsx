import { Avatar } from "@nextui-org/avatar"
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/table"
import { Tabs, Tab } from "@nextui-org/tabs"
import { z } from "zod"
import { agentIcons } from "@/resources/agent-icons.json"


export type AgentPickAnalysis = {
  teamCompositions: Map<string, number>;
}

export function AgentPickAnalysis({ teamCompositions }: AgentPickAnalysis) {
  const numMatches = Array.from(teamCompositions.entries()).map(([, n]) => n).reduce((a, b) => a + b, 0);
  return (
    <div className="flex w-full flex-col">
      {/* https://github.com/nextui-org/nextui/issues/1467#issuecomment-1695747288 */}
      <Tabs disableAnimation>
        <Tab key="individual" title="Individual">
          <Table aria-label="Table of most common agents">
            <TableHeader>
              <TableColumn>Agent</TableColumn>
              <TableColumn>Frequency</TableColumn>
            </TableHeader>
            <TableBody emptyContent="No data">
              {Array.from(Array.from(teamCompositions.entries())
                .flatMap(([comp, n]) => {
                  const agents = z.array(z.string()).parse(JSON.parse(comp))
                  return agents.map(agent => [agent, n] as const)
                })
                .reduce((agentCounts, [agent, n]) => {
                  const sum = agentCounts.get(agent)
                  agentCounts.set(agent, sum ? sum + n : n)
                  return agentCounts;
                }, new Map<string, number>())
                .entries()
              ).sort(([, a], [, b]) => b - a).map(([agent, n]) =>
                <TableRow key={agent}>
                  <TableCell className="flex gap-3 items-center">
                    <Avatar
                      key={agent}
                      name={agent}
                      showFallback
                      radius="sm"
                      src={agentIcons.find(e => e.displayName === agent)?.displayIcon}
                    />
                    {agent}
                  </TableCell>
                  <TableCell>
                    {renderPercentage(n / numMatches)}
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </Tab>
        <Tab key="team" title="Team">
          <Table aria-label="Table of most common team compositions">
            <TableHeader>
              <TableColumn>Team composition</TableColumn>
              <TableColumn>Frequency</TableColumn>
            </TableHeader>
            <TableBody emptyContent="No data">
              {Array.from(teamCompositions.entries())
                .sort(([, a], [, b]) => b - a)
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
        </Tab>
      </Tabs>
    </div>
  )
}

function renderPercentage(n: number | undefined): string {
  if (n === undefined || isNaN(n)) {
    return "--%";
  }
  return `${(n * 100).toFixed(0)}%`;
}
