import type { AgentDiscipline, AgentStatus } from "@/types/agent";
import type { DraftStatus, GPDCRFPhase, ReviewStatus } from "@/types/gpdcrf";

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
  currentGpdcrfPhase: GPDCRFPhase;
  humanReviewGate: ReviewStatus;
  evidenceSources: string[];
  missingInfo: string[];
  dataReadiness: "ready" | "insufficient" | "blocked";
  draftStatus: DraftStatus;
  reviewStatus: ReviewStatus;
  version: string;
  canEnterNextPhase: boolean;
  nextPhaseReason: string;
};
