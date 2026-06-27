"use client";

import { useMemo, useState } from "react";
import type { Agent, AgentStatus } from "@/types/agent";
import type { MissingInfoItem } from "@/types/quality";
import type { Project } from "@/types/project";
import type { Task } from "@/types/task";
import { AgentDirectory } from "@/components/agents/AgentDirectory";
import { MainAgentCommand } from "@/components/dashboard/MainAgentCommand";
import { OverviewBar } from "@/components/dashboard/OverviewBar";
import { GPDCRFSystemPanel } from "@/components/gpdcrf/GPDCRFSystemPanel";
import { ShellHeader } from "@/components/layout/ShellHeader";
import { OutputTablePanel } from "@/components/outputs/OutputTablePanel";
import { ProposalOutlineExporter } from "@/components/proposal/ProposalOutlineExporter";
import { ProjectContextForm } from "@/components/projects/ProjectContextForm";
import { MissingInfoPanel } from "@/components/quality/MissingInfoPanel";
import { TaskBoard } from "@/components/tasks/TaskBoard";
import { mockAgents } from "@/data/mockAgents";
import { initialMissingInfo } from "@/data/mockMissingInfo";
import { initialOutputs } from "@/data/mockOutputs";
import { initialProject } from "@/data/mockProjects";
import { initialTasks } from "@/data/mockTasks";
import { generateMockTasks } from "@/lib/mockTaskGenerator";
import { generateProposalOutline } from "@/lib/proposalGenerator";

export function CommandCenter() {
  const [project, setProject] = useState<Project>(initialProject);
  const [agents, setAgents] = useState<Agent[]>(mockAgents);
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [missingInfo, setMissingInfo] = useState<MissingInfoItem[]>(initialMissingInfo);
  const [prompt, setPrompt] = useState("");
  const [selectedAgentId, setSelectedAgentId] = useState<string | null>(null);
  const [lastDispatchSummary, setLastDispatchSummary] = useState("");
  const [proposalMarkdown, setProposalMarkdown] = useState(() =>
    generateProposalOutline(initialProject, initialTasks, initialMissingInfo, initialOutputs)
  );

  const visibleAgents = useMemo(() => agents.filter((agent) => agent.discipline !== "quality"), [agents]);

  function dispatchTasks() {
    const generatedTasks = generateMockTasks(project, prompt, agents);
    const now = new Date().toLocaleTimeString("zh-TW", { hour: "2-digit", minute: "2-digit" });

    setTasks(generatedTasks);
    setAgents((current) =>
      current.map((agent) => {
        const task = generatedTasks.find((item) => item.agentId === agent.id);
        if (!task) {
          return agent.id === "quality" ? { ...agent, status: "review", progress: 45, lastUpdated: now } : agent;
        }

        return {
          ...agent,
          status: "assigned",
          progress: 25,
          lastUpdated: now,
          childAgents: agent.childAgents.map((childAgent) => ({ ...childAgent, status: "assigned" }))
        };
      })
    );
    setLastDispatchSummary(`已建立 ${generatedTasks.length} 項任務，分派給都市、建築、室內、景觀 Agent。`);
    setPrompt("");
  }

  function updateTaskStatus(taskId: string, status: AgentStatus) {
    setTasks((current) => current.map((task) => (task.id === taskId ? { ...task, status } : task)));
    setAgents((current) =>
      current.map((agent) => {
        const relatedTask = tasks.find((task) => task.id === taskId);
        if (!relatedTask || relatedTask.agentId !== agent.id) return agent;

        return {
          ...agent,
          status,
          progress: getProgressForStatus(status),
          lastUpdated: new Date().toLocaleTimeString("zh-TW", { hour: "2-digit", minute: "2-digit" })
        };
      })
    );
  }

  function toggleMissingInfo(itemId: string) {
    setMissingInfo((current) =>
      current.map((item) => (item.id === itemId ? { ...item, status: item.status === "open" ? "resolved" : "open" } : item))
    );
  }

  function generateOutline() {
    setProposalMarkdown(generateProposalOutline(project, tasks, missingInfo, initialOutputs));
  }

  return (
    <main className="commandCenter">
      <ShellHeader />
      <OverviewBar project={project} agents={agents} tasks={tasks} />

      <div className="workspaceGrid">
        <ProjectContextForm project={project} onChange={setProject} />
        <MainAgentCommand
          prompt={prompt}
          onPromptChange={setPrompt}
          onDispatch={dispatchTasks}
          lastDispatchSummary={lastDispatchSummary}
        />
        <AgentDirectory
          agents={visibleAgents}
          selectedAgentId={selectedAgentId}
          onSelectAgent={setSelectedAgentId}
          onBackToMenu={() => setSelectedAgentId(null)}
        />
      </div>

      <GPDCRFSystemPanel />
      <TaskBoard tasks={tasks} onStatusChange={updateTaskStatus} />
      <div className="operationsGrid">
        <MissingInfoPanel items={missingInfo} onToggleStatus={toggleMissingInfo} />
        <ProposalOutlineExporter markdown={proposalMarkdown} onGenerate={generateOutline} />
      </div>
      <OutputTablePanel outputs={initialOutputs} />
    </main>
  );
}

function getProgressForStatus(status: AgentStatus) {
  const progress: Record<AgentStatus, number> = {
    idle: 0,
    assigned: 25,
    working: 58,
    review: 82,
    completed: 100,
    blocked: 35
  };

  return progress[status];
}
