import type { AgentStatus } from "@/types/agent";

const statusLabel: Record<AgentStatus, string> = {
  idle: "待命",
  queued: "排程中",
  running: "執行中",
  review: "待審核",
  complete: "完成"
};

export function StatusPill({ status }: { status: AgentStatus }) {
  return <span className={`statusPill status-${status}`}>{statusLabel[status]}</span>;
}
