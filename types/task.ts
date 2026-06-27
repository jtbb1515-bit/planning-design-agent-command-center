import type { AgentDiscipline, AgentStatus } from "@/types/agent";

export type Task = {
  id: string;
  title: string;
  agentId: string;
  agentName: string;
  discipline: AgentDiscipline;
  status: AgentStatus;
  priority: "high" | "medium" | "low";
  brief: string;
  expectedOutput: string;
  createdAt: string;
};
