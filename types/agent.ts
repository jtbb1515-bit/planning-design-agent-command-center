export type DesignStage = "概念設計" | "基本設計" | "細部設計" | "施工圖" | "監造服務";

export type ProjectInfo = {
  projectName: string;
  siteLocation: string;
  projectType: string;
  designStage: DesignStage;
};

export type AgentStatus = "idle" | "queued" | "running" | "review" | "complete";

export type SubAgent = {
  id: string;
  name: string;
  role: string;
  status: AgentStatus;
  task: string;
  knowledgeBase: string;
  template: string;
  outputType: "表格" | "文字" | "圖面清單" | "簡報段落";
};

export type SpecialistAgent = {
  id: string;
  sectionCode: string;
  departmentName: string;
  name: string;
  discipline: string;
  status: AgentStatus;
  currentTask: string;
  progress: number;
  lastUpdated: string;
  subAgents: SubAgent[];
};

export type ChatMessage = {
  id: string;
  role: "user" | "master";
  author: string;
  content: string;
  timestamp: string;
};

export type Deliverable = {
  id: string;
  agentId: string;
  agentName: string;
  title: string;
  summary: string;
  format: "分析報告" | "設計策略" | "圖面清單" | "簡報摘要";
  status: "draft" | "ready" | "review";
};

export type WorkflowStep = {
  id: string;
  title: string;
  description: string;
  status: "done" | "active" | "pending";
};

export type QualityCheck = {
  id: string;
  title: string;
  result: "pass" | "warning" | "pending";
  note: string;
};

export type DispatchPayload = {
  project: ProjectInfo;
  requirement: string;
  targetAgents: string[];
};
