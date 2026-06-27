import type { AgentStatus } from "@/types/agent";

const statusLabels: Record<AgentStatus, string> = {
  idle: "待命",
  assigned: "已分派",
  working: "執行中",
  review: "待審核",
  completed: "已完成",
  blocked: "缺資料"
};

export function StatusBadge({ status }: { status: AgentStatus }) {
  return <span className={`statusBadge status-${status}`}>{statusLabels[status]}</span>;
}
