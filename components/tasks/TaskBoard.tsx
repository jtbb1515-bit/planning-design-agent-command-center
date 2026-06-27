"use client";

import type { AgentStatus } from "@/types/agent";
import type { Task } from "@/types/task";
import { StatusBadge } from "@/components/agents/StatusBadge";

const taskStatuses: AgentStatus[] = ["assigned", "working", "review", "completed", "blocked"];

type TaskBoardProps = {
  tasks: Task[];
  onStatusChange: (taskId: string, status: AgentStatus) => void;
};

export function TaskBoard({ tasks, onStatusChange }: TaskBoardProps) {
  return (
    <section className="panel taskBoardPanel" aria-label="Task Board">
      <div className="panelHeader horizontal">
        <div>
          <p className="eyebrow">Task Board</p>
          <h2>任務清單</h2>
        </div>
        <span className="thinTag">{tasks.length} tasks</span>
      </div>

      <div className="taskBoard">
        {tasks.length === 0 ? (
          <div className="emptyState">
            <strong>尚未建立任務</strong>
            <p>請在主 Agent 對話區輸入需求並點擊「分派任務」。</p>
          </div>
        ) : (
          tasks.map((task) => (
            <article className="taskCard" key={task.id}>
              <div className="taskTopline">
                <div>
                  <strong>{task.title}</strong>
                  <span>{task.agentName}</span>
                </div>
                <StatusBadge status={task.status} />
              </div>
              <p>{task.brief}</p>
              <div className="taskMeta">
                <span>Priority: {task.priority}</span>
                <span>{task.createdAt}</span>
              </div>
              <label className="statusSelect">
                <span>切換狀態</span>
                <select value={task.status} onChange={(event) => onStatusChange(task.id, event.target.value as AgentStatus)}>
                  {taskStatuses.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </label>
              <div className="taskExpected">預期成果：{task.expectedOutput}</div>
            </article>
          ))
        )}
      </div>
    </section>
  );
}
