"use client";

import type { DraftStatus } from "@/types/gpdcrf";

const draftLabels: Record<DraftStatus, string> = {
  ai_draft: "AI Draft｜AI 初稿，不可對外",
  internal_draft: "Human Edit｜內部可討論",
  review_draft: "Formal Output｜可送主持人檢核",
  external_draft: "External Draft｜可進入簡報或服務建議書"
};

const draftStatuses: DraftStatus[] = ["ai_draft", "internal_draft", "review_draft", "external_draft"];

export function DoProductionPanel({ draftStatus, onChange }: { draftStatus: DraftStatus; onChange: (status: DraftStatus) => void }) {
  return (
    <div className="doProduction">
      {draftStatuses.map((status) => (
        <button className={`draftStage ${draftStatus === status ? "isActive" : ""}`} key={status} type="button" onClick={() => onChange(status)}>
          <strong>{draftLabels[status].split("｜")[0]}</strong>
          <span>{draftLabels[status].split("｜")[1]}</span>
        </button>
      ))}
      <div className="gpdcrfNotice">
        <strong>Do 階段規則</strong>
        <p>AI Draft 只供內部判斷；必須經 Human Edit 形成 review_draft，才能進入 Check 階段。</p>
      </div>
    </div>
  );
}
