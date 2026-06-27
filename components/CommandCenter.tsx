"use client";

import { useMemo, useState } from "react";
import { AgentStatusPanel } from "@/components/AgentStatusPanel";
import { DeliverablesPanel } from "@/components/DeliverablesPanel";
import { MasterAgentChat } from "@/components/MasterAgentChat";
import { ProjectInfoPanel } from "@/components/ProjectInfoPanel";
import { ShellHeader } from "@/components/ShellHeader";
import { WorkflowPipeline } from "@/components/WorkflowPipeline";
import {
  mockAgents,
  mockDeliverables,
  mockMessages,
  mockProject,
  mockQualityChecks,
  mockWorkflowSteps
} from "@/lib/mockData";
import type { AgentStatus, ChatMessage, ProjectInfo, SpecialistAgent } from "@/types/agent";

export function CommandCenter() {
  const [project, setProject] = useState<ProjectInfo>(mockProject);
  const [agents, setAgents] = useState<SpecialistAgent[]>(mockAgents);
  const [messages, setMessages] = useState<ChatMessage[]>(mockMessages);
  const [draft, setDraft] = useState("");
  const [selectedAgentId, setSelectedAgentId] = useState<string | null>(null);

  const activeCount = useMemo(
    () => agents.filter((agent) => agent.status === "running" || agent.status === "review").length,
    [agents]
  );

  function sendRequirement() {
    const requirement = draft.trim();
    if (!requirement) return;

    const now = new Date().toLocaleTimeString("zh-TW", { hour: "2-digit", minute: "2-digit" });
    const userMessage: ChatMessage = {
      id: `m-${Date.now()}-user`,
      role: "user",
      author: "設計主持人",
      content: requirement,
      timestamp: now
    };
    const masterMessage: ChatMessage = {
      id: `m-${Date.now()}-master`,
      role: "master",
      author: "規劃設計總管 Agent",
      content: `已依「${project.projectName}」與目前設計階段「${project.designStage}」建立任務清單。請從右側四個科室選單進入各科室，檢視主 Agent 與底下小 Agent 的任務、知識庫、模板與輸出格式。`,
      timestamp: now
    };

    setMessages((current) => [...current, userMessage, masterMessage]);
    setAgents((current) =>
      current.map((agent, index) => ({
        ...agent,
        status: index === 0 ? "running" : index === 1 ? "queued" : index === 2 ? "review" : "running",
        currentTask: buildTask(agent.discipline, requirement),
        progress: Math.min(92, Math.max(agent.progress, 35 + index * 14)),
        lastUpdated: now,
        subAgents: agent.subAgents.map((subAgent, subIndex) => ({
          ...subAgent,
          status: getMockSubAgentStatus(index, subIndex),
          task: `${subAgent.role}：針對本次需求更新任務，查詢知識庫並套用「${subAgent.template}」。`
        }))
      }))
    );
    setDraft("");
  }

  return (
    <main className="commandCenter">
      <ShellHeader />

      <section className="overviewBar" aria-label="overview">
        <div>
          <span>Active Agents</span>
          <strong>{activeCount}/4</strong>
        </div>
        <div>
          <span>Project Stage</span>
          <strong>{project.designStage}</strong>
        </div>
        <div>
          <span>System Purpose</span>
          <strong>AI Design OS</strong>
        </div>
      </section>

      <div className="workspaceGrid">
        <ProjectInfoPanel project={project} onChange={setProject} />
        <MasterAgentChat messages={messages} draft={draft} onDraftChange={setDraft} onSend={sendRequirement} />
        <AgentStatusPanel
          agents={agents}
          selectedAgentId={selectedAgentId}
          onSelectAgent={setSelectedAgentId}
          onBackToMenu={() => setSelectedAgentId(null)}
        />
      </div>

      <WorkflowPipeline steps={mockWorkflowSteps} checks={mockQualityChecks} />
      <DeliverablesPanel deliverables={mockDeliverables} />
    </main>
  );
}

function buildTask(discipline: string, requirement: string) {
  const shortRequirement = requirement.length > 42 ? `${requirement.slice(0, 42)}...` : requirement;
  return `${discipline}任務：針對「${shortRequirement}」拆解小 Agent 任務，查詢知識庫與模板，回傳結構化成果供總管 Agent 整合。`;
}

function getMockSubAgentStatus(agentIndex: number, subAgentIndex: number): AgentStatus {
  const statusMatrix: AgentStatus[][] = [
    ["running", "review", "queued", "idle"],
    ["queued", "running", "queued", "idle", "idle"],
    ["review", "complete", "running", "queued"],
    ["running", "queued", "idle"]
  ];

  return statusMatrix[agentIndex]?.[subAgentIndex] ?? "queued";
}
