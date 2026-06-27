"use client";

import type { DataReadinessItem, DataReadinessStatus } from "@/types/gpdcrf";

const readinessStatuses: DataReadinessStatus[] = ["complete", "incomplete", "confirmed", "unconfirmed", "verified", "unverified", "missing"];

type DataReadinessPanelProps = {
  items: DataReadinessItem[];
  onStatusChange: (itemId: string, status: DataReadinessStatus) => void;
};

export function DataReadinessPanel({ items, onStatusChange }: DataReadinessPanelProps) {
  const blockingCount = items.filter((item) => ["missing", "incomplete", "unconfirmed", "unverified"].includes(item.status)).length;

  return (
    <div>
      <div className="gpdcrfNotice">
        <strong>Data Readiness Check</strong>
        <p>{blockingCount > 0 ? `目前有 ${blockingCount} 項資料不足，Do 階段會顯示 blocked。` : "必要資料已具備，可進入 Do 階段。"}</p>
      </div>
      <div className="readinessGrid">
        {items.map((item) => (
          <article className="readinessCard" key={item.id}>
            <div>
              <strong>{item.name}</strong>
              <span>{item.category}｜{item.relatedAgent}</span>
            </div>
            <select value={item.status} onChange={(event) => onStatusChange(item.id, event.target.value as DataReadinessStatus)}>
              {readinessStatuses.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
            <p>{item.note}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
