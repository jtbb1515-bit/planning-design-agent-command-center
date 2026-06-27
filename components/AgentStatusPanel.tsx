import type { SpecialistAgent } from "@/types/agent";
import { StatusPill } from "@/components/StatusPill";

type AgentStatusPanelProps = {
  agents: SpecialistAgent[];
  selectedAgentId: string | null;
  onSelectAgent: (agentId: string) => void;
  onBackToMenu: () => void;
};

export function AgentStatusPanel({ agents, selectedAgentId, onSelectAgent, onBackToMenu }: AgentStatusPanelProps) {
  const selectedAgent = agents.find((agent) => agent.id === selectedAgentId) ?? null;

  return (
    <section className="panel statusPanel" aria-label="科室任務狀態區">
      <div className="panelHeader">
        <p className="eyebrow">Department Menu</p>
        <h2>{selectedAgent ? selectedAgent.departmentName : "選擇科室"}</h2>
      </div>

      {selectedAgent ? (
        <DepartmentDetail agent={selectedAgent} onBackToMenu={onBackToMenu} />
      ) : (
        <DepartmentMenu agents={agents} onSelectAgent={onSelectAgent} />
      )}
    </section>
  );
}

function DepartmentMenu({
  agents,
  onSelectAgent
}: {
  agents: SpecialistAgent[];
  onSelectAgent: (agentId: string) => void;
}) {
  return (
    <div className="departmentMenu">
      {agents.map((agent) => (
        <button className="departmentMenuItem" key={agent.id} type="button" onClick={() => onSelectAgent(agent.id)}>
          <span className="departmentCode">{agent.sectionCode}</span>
          <strong>{agent.departmentName}</strong>
          <span className="departmentAgentName">{agent.name}</span>
          <span className="departmentMeta">
            {agent.subAgents.length} 個小 Agent
            <StatusPill status={agent.status} />
          </span>
        </button>
      ))}
    </div>
  );
}

function DepartmentDetail({ agent, onBackToMenu }: { agent: SpecialistAgent; onBackToMenu: () => void }) {
  return (
    <div className="departmentDetail">
      <button className="backButton" type="button" onClick={onBackToMenu}>
        ← 返回科室選單
      </button>

      <article className="agentStatusCard isDepartmentDetail">
        <div className="agentTopline">
          <div>
            <span className="departmentCode">{agent.sectionCode}</span>
            <strong>{agent.name}</strong>
            <span>
              {agent.departmentName}｜管理 {agent.subAgents.length} 個小 Agent
            </span>
          </div>
          <StatusPill status={agent.status} />
        </div>

        <p>{agent.currentTask}</p>

        <div className="progressTrack" aria-label={`${agent.name} progress`}>
          <span style={{ width: `${agent.progress}%` }} />
        </div>

        <div className="agentFoot">
          <span>{agent.progress}%</span>
          <span>{agent.lastUpdated}</span>
        </div>

        <div className="subAgentList" aria-label={`${agent.name} sub agents`}>
          {agent.subAgents.map((subAgent) => (
            <article className="subAgentCard" key={subAgent.id}>
              <div className="subAgentTopline">
                <div>
                  <strong>{subAgent.name}</strong>
                  <span>{subAgent.role}</span>
                </div>
                <StatusPill status={subAgent.status} />
              </div>

              <p>{subAgent.task}</p>

              <dl className="subAgentMeta">
                <div>
                  <dt>知識庫</dt>
                  <dd>{subAgent.knowledgeBase}</dd>
                </div>
                <div>
                  <dt>模板</dt>
                  <dd>{subAgent.template}</dd>
                </div>
                <div>
                  <dt>輸出</dt>
                  <dd>{subAgent.outputType}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </article>
    </div>
  );
}
