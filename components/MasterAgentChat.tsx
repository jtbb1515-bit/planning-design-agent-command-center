"use client";

import type { ChatMessage } from "@/types/agent";

type MasterAgentChatProps = {
  messages: ChatMessage[];
  draft: string;
  onDraftChange: (value: string) => void;
  onSend: () => void;
};

export function MasterAgentChat({ messages, draft, onDraftChange, onSend }: MasterAgentChatProps) {
  return (
    <section className="panel chatPanel" aria-label="主 Agent 對話區">
      <div className="panelHeader horizontal">
        <div>
          <p className="eyebrow">Master Agent</p>
          <h2>規劃設計總管 Agent</h2>
        </div>
        <span className="thinTag">任務拆解 / 分派 / 審核</span>
      </div>

      <div className="messageList">
        {messages.map((message) => (
          <article key={message.id} className={`message ${message.role === "user" ? "messageUser" : "messageMaster"}`}>
            <div className="messageMeta">
              <strong>{message.author}</strong>
              <span>{message.timestamp}</span>
            </div>
            <p>{message.content}</p>
          </article>
        ))}
      </div>

      <div className="composer">
        <textarea
          value={draft}
          onChange={(event) => onDraftChange(event.target.value)}
          placeholder="輸入專案需求，例如：請依基地條件提出量體配置、動線策略與景觀開放空間方向。"
          rows={4}
        />
        <button type="button" onClick={onSend} disabled={!draft.trim()}>
          Dispatch to Agents
        </button>
      </div>
    </section>
  );
}
