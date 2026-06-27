import type { AgentDiscipline } from "@/types/agent";

export type OutputRow = {
  item: string;
  observation: string;
  implication: string;
  recommendation: string;
};

export type Output = {
  id: string;
  agentId: string;
  agentName: string;
  discipline: AgentDiscipline;
  title: string;
  summary: string;
  tableTitle: string;
  columns: [string, string, string, string];
  rows: OutputRow[];
};
