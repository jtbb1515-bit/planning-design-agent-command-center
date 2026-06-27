import type { Agent } from "@/types/agent";
import type { Project } from "@/types/project";
import type { Task } from "@/types/task";

export function OverviewBar({ project, agents, tasks }: { project: Project; agents: Agent[]; tasks: Task[] }) {
  const activeAgents = agents.filter((agent) => agent.status === "working" || agent.status === "review").length;
  const openTasks = tasks.filter((task) => task.status !== "completed").length;

  return (
    <section className="overviewBar" aria-label="overview">
      <div>
        <span>Active Agents</span>
        <strong>
          {activeAgents}/{agents.length}
        </strong>
      </div>
      <div>
        <span>Project Stage</span>
        <strong>{project.designStage}</strong>
      </div>
      <div>
        <span>Open Tasks</span>
        <strong>{openTasks}</strong>
      </div>
    </section>
  );
}
