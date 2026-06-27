import type { AgentDiscipline } from "@/types/agent";

export type GPDCRFPhase = "goal" | "plan" | "do" | "check" | "record" | "feedback";
export type GPDCRFScale = "project" | "task" | "output";
export type ReviewStatus = "pending" | "approved" | "revise" | "rejected" | "blocked";
export type DataReadinessStatus = "complete" | "incomplete" | "confirmed" | "unconfirmed" | "verified" | "unverified" | "missing";
export type DraftStatus = "ai_draft" | "internal_draft" | "review_draft" | "external_draft";

export type GPDCRFStep = {
  id: string;
  scale: GPDCRFScale;
  phase: GPDCRFPhase;
  title: string;
  description: string;
  aiResponsibility: string;
  humanReviewFocus: string;
  requiredOutput: string;
  reviewStatus: ReviewStatus;
  reviewerRole: string;
  missingInfo: string[];
  risks: string[];
  evidenceSources: string[];
  decisionNote: string;
  version: string;
  updatedAt: string;
};

export type HumanReviewGate = {
  id: string;
  phase: GPDCRFPhase;
  reviewerRole: string;
  status: ReviewStatus;
  comment: string;
  reviewedAt: string;
  approvedBy: string;
};

export type DataReadinessItem = {
  id: string;
  name: string;
  category: string;
  status: DataReadinessStatus;
  requiredForPhase: GPDCRFPhase;
  relatedAgent: string;
  note: string;
};

export type DecisionRecord = {
  id: string;
  phase: GPDCRFPhase;
  title: string;
  decision: string;
  decidedBy: string;
  decidedAt: string;
  version: string;
  reason: string;
  evidenceSources: string[];
  unresolvedIssues: string[];
};

export type FeedbackImprovement = {
  id: string;
  type: "sop" | "prompt" | "template";
  title: string;
  problem: string;
  suggestion: string;
  target: string;
  status: "open" | "in_progress" | "applied";
};

export type GoalDefinition = {
  coreGoal: string;
  surfaceRequest: string;
  serviceScope: string;
  nonServiceScope: string;
  successCriteria: string;
  majorConstraints: string;
  keyAssumptions: string;
  humanConfirmer: string;
};

export type GPDCRFContext = {
  currentPhase: GPDCRFPhase;
  scale: GPDCRFScale;
  reviewGate: HumanReviewGate;
  dataReadinessSummary: DataReadinessStatus;
  draftStatus: DraftStatus;
  reviewStatus: ReviewStatus;
  evidenceSources: string[];
  missingInfo: string[];
  version: string;
};

export type GPDCRFTaskMeta = GPDCRFContext & {
  relatedDiscipline: AgentDiscipline;
};
