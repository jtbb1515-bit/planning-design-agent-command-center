import type { DataReadinessItem, GPDCRFPhase, HumanReviewGate, ReviewStatus } from "@/types/gpdcrf";

const phaseOrder: GPDCRFPhase[] = ["goal", "plan", "do", "check", "record", "feedback"];

export type PhaseRuleResult = {
  phase: GPDCRFPhase;
  state: "open" | "locked" | "blocked" | "revise" | "rejected";
  reason: string;
  blockingItems: string[];
};

export function getPreviousPhase(phase: GPDCRFPhase) {
  const index = phaseOrder.indexOf(phase);
  return index > 0 ? phaseOrder[index - 1] : null;
}

export function hasRequiredDataForDo(items: DataReadinessItem[]) {
  return items
    .filter((item) => item.requiredForPhase === "plan")
    .every((item) => !["missing", "incomplete", "unconfirmed", "unverified"].includes(item.status));
}

export function getBlockingDataItems(items: DataReadinessItem[]) {
  return items.filter((item) => ["missing", "incomplete", "unconfirmed", "unverified"].includes(item.status));
}

export function getGateStatus(gates: HumanReviewGate[], phase: GPDCRFPhase): ReviewStatus {
  return gates.find((gate) => gate.phase === phase)?.status ?? "pending";
}

export function canEnterPhase(phase: GPDCRFPhase, gates: HumanReviewGate[], dataReadiness: DataReadinessItem[], draftStatus: string): PhaseRuleResult {
  const blockingData = getBlockingDataItems(dataReadiness);
  const gateStatus = getGateStatus(gates, phase);

  if (gateStatus === "rejected") {
    return { phase, state: "rejected", reason: "此階段審核為 rejected，需退回前一階段重新判斷。", blockingItems: [] };
  }

  if (gateStatus === "revise") {
    return { phase, state: "revise", reason: "此階段需修正後再審，保留在目前階段。", blockingItems: [] };
  }

  if (phase === "goal") {
    return { phase, state: "open", reason: "Goal 是流程起點，可編輯目標、範圍與成功標準。", blockingItems: [] };
  }

  if (phase === "plan" && getGateStatus(gates, "goal") !== "approved") {
    return { phase, state: "locked", reason: "Goal 未 approved，Plan 鎖定。", blockingItems: [] };
  }

  if (phase === "do") {
    if (getGateStatus(gates, "plan") !== "approved" && getGateStatus(gates, "plan") !== "blocked") {
      return { phase, state: "locked", reason: "Plan 未 approved，Do 鎖定。", blockingItems: [] };
    }
    if (!hasRequiredDataForDo(dataReadiness)) {
      return {
        phase,
        state: "blocked",
        reason: "Plan 階段資料成熟度不足，Do 顯示 blocked。",
        blockingItems: blockingData.map((item) => item.name)
      };
    }
  }

  if (phase === "check" && draftStatus !== "review_draft" && draftStatus !== "external_draft") {
    return { phase, state: "locked", reason: "Do 尚未形成 review_draft，Check 鎖定。", blockingItems: [] };
  }

  if (phase === "record" && getGateStatus(gates, "check") !== "approved") {
    return { phase, state: "locked", reason: "Check 未 approved，Record 鎖定。", blockingItems: [] };
  }

  if (phase === "feedback" && getGateStatus(gates, "record") !== "approved") {
    return { phase, state: "locked", reason: "Record 未 approved，Feedback 鎖定。", blockingItems: [] };
  }

  return { phase, state: "open", reason: "此階段可操作。", blockingItems: [] };
}

export function getAllPhaseStates(gates: HumanReviewGate[], dataReadiness: DataReadinessItem[], draftStatus: string) {
  return phaseOrder.map((phase) => canEnterPhase(phase, gates, dataReadiness, draftStatus));
}
