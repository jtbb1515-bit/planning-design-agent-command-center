import type { FeedbackImprovement } from "@/types/gpdcrf";

export function FeedbackImprovementPanel({ improvements }: { improvements: FeedbackImprovement[] }) {
  return (
    <div className="feedbackGrid">
      {improvements.map((item) => (
        <article className="feedbackCard" key={item.id}>
          <span>{item.type.toUpperCase()}｜{item.status}</span>
          <strong>{item.title}</strong>
          <p>{item.problem}</p>
          <div>
            <b>建議</b>
            <p>{item.suggestion}</p>
          </div>
          <small>Target: {item.target}</small>
        </article>
      ))}
    </div>
  );
}
