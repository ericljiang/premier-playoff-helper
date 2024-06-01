import { Tab, Tabs } from "@nextui-org/react";
import { Key } from '@react-types/shared';
import { useState } from "react";
import { AgentFrequencyTable } from "./agent-frequency-table";
import { CompFrequencyTable } from "./comp-frequency-table";

export type AgentPickAnalysisProps = {
  teamCompositions: Map<string, number>;
};

export function AgentPickAnalysis({ teamCompositions }: AgentPickAnalysisProps) {
  const [selectedTab, setSelectedTab] = useState<Key>("individual");

  return (
    <div className="flex w-full flex-col gap-y-3">
      {/* Uses controlled tabs instead of putting children in the Tab components
          because NextUI doesn't align Tab content with Tabs controls. */}
      <Tabs
        selectedKey={selectedTab}
        onSelectionChange={setSelectedTab}
      >
        <Tab key="individual" title="Individual" />
        <Tab key="team" title="Team" />
      </Tabs>
      {selectedTab === "individual" && (
        <AgentFrequencyTable teamCompositions={teamCompositions} rowLimit={8} />
      )}
      {selectedTab === "team" && (
        <CompFrequencyTable teamCompositions={teamCompositions} rowLimit={8} />
      )}
    </div>
  );
}
