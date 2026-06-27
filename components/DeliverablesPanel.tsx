import type { Deliverable } from "@/types/agent";

const deliverableStatusLabel: Record<Deliverable["status"], string> = {
  draft: "草稿",
  ready: "可用",
  review: "審核中"
};

type DeliverablesPanelProps = {
  deliverables: Deliverable[];
};

export function DeliverablesPanel({ deliverables }: DeliverablesPanelProps) {
  return (
    <section className="panel deliverablesPanel" aria-label="成果物區">
      <div className="panelHeader horizontal">
        <div>
          <p className="eyebrow">Outputs</p>
          <h2>成果物</h2>
        </div>
        <span className="thinTag">{deliverables.length} items</span>
      </div>

      <div className="deliverableGrid">
        {deliverables.map((deliverable) => (
          <article key={deliverable.id} className="deliverableCard">
            <div className="deliverableMeta">
              <span>{deliverable.agentName}</span>
              <strong>{deliverableStatusLabel[deliverable.status]}</strong>
            </div>
            <h3>{deliverable.title}</h3>
            <p>{deliverable.summary}</p>
            <div className="formatLine">
              <span>{deliverable.format}</span>
              <button type="button">Open</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
