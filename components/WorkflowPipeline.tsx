import type { QualityCheck, WorkflowStep } from "@/types/agent";

const stepStatusLabel: Record<WorkflowStep["status"], string> = {
  done: "完成",
  active: "進行中",
  pending: "等待"
};

const checkLabel: Record<QualityCheck["result"], string> = {
  pass: "通過",
  warning: "提醒",
  pending: "待檢查"
};

type WorkflowPipelineProps = {
  steps: WorkflowStep[];
  checks: QualityCheck[];
};

export function WorkflowPipeline({ steps, checks }: WorkflowPipelineProps) {
  return (
    <section className="panel workflowPanel" aria-label="AI 化設計組織流程">
      <div className="panelHeader horizontal">
        <div>
          <p className="eyebrow">Operating System</p>
          <h2>AI 化設計組織流程</h2>
        </div>
        <span className="thinTag">Phase 1 Prototype</span>
      </div>

      <div className="workflowBody">
        <div className="workflowSteps">
          {steps.map((step, index) => (
            <article className={`workflowStep workflow-${step.status}`} key={step.id}>
              <span className="stepIndex">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <div className="stepTopline">
                  <strong>{step.title}</strong>
                  <span>{stepStatusLabel[step.status]}</span>
                </div>
                <p>{step.description}</p>
              </div>
            </article>
          ))}
        </div>

        <aside className="qualityBox" aria-label="品管 Agent">
          <p className="eyebrow">Quality Agent</p>
          <h3>品管 Agent</h3>
          <p className="qualityIntro">目前以 mock 規則檢查缺漏、矛盾與輸出格式；第二階段可改接 OpenAI API 與文件檢索。</p>

          <div className="qualityList">
            {checks.map((check) => (
              <article key={check.id} className={`qualityItem quality-${check.result}`}>
                <div>
                  <strong>{check.title}</strong>
                  <span>{check.note}</span>
                </div>
                <b>{checkLabel[check.result]}</b>
              </article>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
