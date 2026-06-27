import type { AgentDiscipline } from "@/types/agent";

export type MissingInfoType =
  | "基地資料不足"
  | "法規資料不足"
  | "現況圖面不足"
  | "業主需求未確認"
  | "預算條件未確認"
  | "時程條件未確認"
  | "機電與消防條件未確認"
  | "使用者訪談資料不足";

export type MissingInfoItem = {
  id: string;
  name: MissingInfoType;
  agentId: string;
  agentName: string;
  discipline: AgentDiscipline;
  importance: "high" | "medium" | "low";
  status: "open" | "resolved";
  description: string;
};

export type QualityCheck = {
  id: string;
  title: string;
  result: "pass" | "warning" | "pending";
  note: string;
};

export type ProposalOutline = {
  markdown: string;
  generatedAt: string;
};
