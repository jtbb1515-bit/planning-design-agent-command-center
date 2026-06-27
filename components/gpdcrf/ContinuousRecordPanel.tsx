import type { DecisionRecord } from "@/types/gpdcrf";

export function ContinuousRecordPanel({ records }: { records: DecisionRecord[] }) {
  return (
    <div className="recordList">
      {records.map((record) => (
        <article className="recordCard" key={record.id}>
          <div>
            <span>{record.phase.toUpperCase()}｜{record.version}</span>
            <strong>{record.title}</strong>
          </div>
          <p>{record.decision}</p>
          <dl>
            <div><dt>決策者</dt><dd>{record.decidedBy}</dd></div>
            <div><dt>時間</dt><dd>{record.decidedAt}</dd></div>
            <div><dt>原因</dt><dd>{record.reason}</dd></div>
            <div><dt>資料來源</dt><dd>{record.evidenceSources.join("、")}</dd></div>
            <div><dt>未解問題</dt><dd>{record.unresolvedIssues.join("、") || "無"}</dd></div>
          </dl>
        </article>
      ))}
    </div>
  );
}
