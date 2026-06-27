"use client";

type MainAgentCommandProps = {
  prompt: string;
  onPromptChange: (value: string) => void;
  onDispatch: () => void;
  lastDispatchSummary: string;
};

export function MainAgentCommand({ prompt, onPromptChange, onDispatch, lastDispatchSummary }: MainAgentCommandProps) {
  return (
    <section className="panel chatPanel" aria-label="Main Agent Command Center">
      <div className="panelHeader horizontal">
        <div>
          <p className="eyebrow">Master Agent</p>
          <h2>規劃設計總管 Agent</h2>
        </div>
        <span className="thinTag">任務判斷 / 分派 / 整合</span>
      </div>

      <div className="commandBrief">
        <strong>目前流程</strong>
        <p>輸入專案需求後，系統會用 mock rule 建立任務清單，分派給都市、建築、室內、景觀 Agent，並同步更新 Task Board。</p>
        {lastDispatchSummary ? <p className="dispatchSummary">{lastDispatchSummary}</p> : null}
      </div>

      <div className="composer commandComposer">
        <textarea
          value={prompt}
          onChange={(event) => onPromptChange(event.target.value)}
          placeholder="輸入專案需求，例如：請依基地條件提出第一輪服務建議書架構，包含基地分析、量體策略、室內機能與景觀廣場。"
          rows={6}
        />
        <button type="button" onClick={onDispatch} disabled={!prompt.trim()}>
          分派任務
        </button>
      </div>
    </section>
  );
}
