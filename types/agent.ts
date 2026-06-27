export type AgentStatus = "idle" | "assigned" | "working" | "review" | "completed" | "blocked";

export type AgentDiscipline = "urban" | "architecture" | "interior" | "landscape" | "quality";

export type Agent = {
  id: string;
  sectionCode: string;
  displayName: string;
  formalName: string;
  discipline: AgentDiscipline;
  description: string;
  status: AgentStatus;
  progress: number;
  lastUpdated: string;
  knowledgeSources: string[];
  templates: string[];
  childAgents: ChildAgent[];
};

export type ChildAgent = {
  id: string;
  name: string;
  responsibility: string;
  status: AgentStatus;
  knowledgeSource: string;
  template: string;
  expectedOutput: string;
};
