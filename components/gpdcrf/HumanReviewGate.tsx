"use client";

import type { GPDCRFPhase, HumanReviewGate as HumanReviewGateType, ReviewStatus } from "@/types/gpdcrf";

const reviewStatuses: ReviewStatus[] = ["pending", "approved", "revise", "rejected", "blocked"];

type HumanReviewGateProps = {
  gates: HumanReviewGateType[];
  activePhase: GPDCRFPhase;
  onChange: (gateId: string, status: ReviewStatus) => void;
};

export function HumanReviewGate({ gates, activePhase, onChange }: HumanReviewGateProps) {
  const gate = gates.find((item) => item.phase === activePhase);
  if (!gate) return null;

  return (
    <aside className="humanGate">
      <p className="eyebrow">Human Review Gate</p>
      <h3>{gate.reviewerRole}</h3>
      <select value={gate.status} onChange={(event) => onChange(gate.id, event.target.value as ReviewStatus)}>
        {reviewStatuses.map((status) => (
          <option key={status} value={status}>
            {status}
          </option>
        ))}
      </select>
      <p>{gate.comment}</p>
      <small>{gate.approvedBy || "尚未核准"} {gate.reviewedAt}</small>
    </aside>
  );
}
