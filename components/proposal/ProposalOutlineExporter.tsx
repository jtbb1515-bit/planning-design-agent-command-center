"use client";

type ProposalOutlineExporterProps = {
  markdown: string;
  onGenerate: () => void;
};

export function ProposalOutlineExporter({ markdown, onGenerate }: ProposalOutlineExporterProps) {
  return (
    <section className="panel proposalPanel" aria-label="Export Proposal Outline">
      <div className="panelHeader horizontal">
        <div>
          <p className="eyebrow">Proposal Outline</p>
          <h2>匯出服務建議書大綱</h2>
        </div>
        <button className="secondaryButton" type="button" onClick={onGenerate}>
          Export Proposal Outline
        </button>
      </div>
      <textarea className="proposalMarkdown" readOnly value={markdown} aria-label="Proposal markdown outline" />
    </section>
  );
}
