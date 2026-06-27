"use client";

import type { Agent } from "@/types/agent";
import { StatusBadge } from "@/components/agents/StatusBadge";

type AgentDirectoryProps = {
  agents: Agent[];
  selectedAgentId: string | null;
  onSelectAgent: (agentId: string) => void;
  onBackToMenu: () => void;
};

export function AgentDirectory({ agents, selectedAgentId, onSelectAgent, onBackToMenu }: AgentDirectoryProps) {
  const selectedAgent = agents.find((agent) => agent.id === selectedAgentId) ?? null;

  return (
    <section className="panel statusPanel" aria-label="Agent Directory">
      <div className="panelHeader">
        <p className="eyebrow">Agent Directory</p>
        <h2>{selectedAgent ? selectedAgent.displayName : "選擇科室"}</h2>
      </div>

      {selectedAgent ? (
        <div className="departmentDetail">
          <button className="backButton" type="button" onClick={onBackToMenu}>
            ← 返回科室選單
          </button>
          <article className="agentStatusCard isDepartmentDetail">
            <div className="agentTopline">
              <div>
                <span className="departmentCode">{selectedAgent.sectionCode}</span>
                <strong>{selectedAgent.formalName}</strong>
                <span>
                  {selectedAgent.displayName}｜管理 {selectedAgent.childAgents.length} 個小 Agent
                </span>
              </div>
              <StatusBadge status={selectedAgent.status} />
            </div>
            <p>{selectedAgent.description}</p>
            <div className="progressTrack">
              <span style={{ width: `${selectedAgent.progress}%` }} />
            </div>
            <div className="agentFoot">
              <span>{selectedAgent.progress}%</span>
              <span>{selectedAgent.lastUpdated}</span>
            </div>
            <div className="subAgentList">
              {selectedAgent.childAgents.map((childAgent) => (
                <article className="subAgentCard" key={childAgent.id}>
                  <div className="subAgentTopline">
                    <div>
                      <strong>{childAgent.name}</strong>
                      <span>{childAgent.responsibility}</span>
                    </div>
                    <StatusBadge status={childAgent.status} />
                  </div>
                  <dl className="subAgentMeta">
                    <div>
                      <dt>知識庫</dt>
                      <dd>{childAgent.knowledgeSource}</dd>
                    </div>
                    <div>
                      <dt>模板</dt>
                      <dd>{childAgent.template}</dd>
                    </div>
                    <div>
                      <dt>輸出</dt>
                      <dd>{childAgent.expectedOutput}</dd>
                    </div>
                  </dl>
                </article>
              ))}
            </div>
          </article>
        </div>
      ) : (
        <div className="departmentMenu">
          {agents.map((agent) => (
            <button className="departmentMenuItem" key={agent.id} type="button" onClick={() => onSelectAgent(agent.id)}>
              <span className="departmentCode">{agent.sectionCode}</span>
              <strong>{agent.displayName}</strong>
              <span className="departmentAgentName">{agent.formalName}</span>
              <span className="departmentMeta">
                {agent.childAgents.length} 個小 Agent
                <StatusBadge status={agent.status} />
              </span>
            </button>
          ))}
        </div>
      )}
    </section>
  );
}
