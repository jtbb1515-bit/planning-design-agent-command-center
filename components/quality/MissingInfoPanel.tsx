"use client";

import type { MissingInfoItem } from "@/types/quality";

type MissingInfoPanelProps = {
  items: MissingInfoItem[];
  onToggleStatus: (itemId: string) => void;
};

export function MissingInfoPanel({ items, onToggleStatus }: MissingInfoPanelProps) {
  return (
    <section className="panel missingInfoPanel" aria-label="Missing Information Panel">
      <div className="panelHeader horizontal">
        <div>
          <p className="eyebrow">Missing Information</p>
          <h2>缺資料清單</h2>
        </div>
        <span className="thinTag">{items.filter((item) => item.status === "open").length} open</span>
      </div>

      <div className="missingGrid">
        {items.map((item) => (
          <article className={`missingCard importance-${item.importance}`} key={item.id}>
            <div className="missingTopline">
              <div>
                <strong>{item.name}</strong>
                <span>{item.agentName}</span>
              </div>
              <button type="button" onClick={() => onToggleStatus(item.id)}>
                {item.status === "open" ? "open" : "resolved"}
              </button>
            </div>
            <p>{item.description}</p>
            <div className="missingFoot">
              <span>Importance: {item.importance}</span>
              <span>{item.status}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
