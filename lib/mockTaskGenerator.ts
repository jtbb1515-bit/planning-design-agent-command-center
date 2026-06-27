import type { Agent } from "@/types/agent";
import type { Project } from "@/types/project";
import type { Task } from "@/types/task";

export function generateMockTasks(projectContext: Project, userPrompt: string, agents: Agent[]): Task[] {
  const createdAt = new Date().toLocaleTimeString("zh-TW", { hour: "2-digit", minute: "2-digit" });
  const prompt = userPrompt.trim() || projectContext.clientNeeds;

  return agents
    .filter((agent) => agent.discipline !== "quality")
    .map((agent, index) => ({
      id: `task-${agent.id}-${Date.now()}-${index}`,
      title: `${agent.displayName}｜${getTaskTitle(agent.id)}`,
      agentId: agent.id,
      agentName: agent.displayName,
      discipline: agent.discipline,
      status: "assigned",
      priority: index <= 1 ? "high" : "medium",
      brief: `依據「${projectContext.projectName}」與需求「${truncate(prompt, 48)}」進行第一輪分析。`,
      expectedOutput: agent.templates.join("、"),
      createdAt,
      currentGpdcrfPhase: index === 0 ? "plan" : "goal",
      humanReviewGate: index === 0 ? "blocked" : "pending",
      evidenceSources: agent.knowledgeSources.slice(0, 2),
      missingInfo: index === 0 ? ["現況圖面不足", "機電消防資料未確認"] : ["業主需求未確認"],
      dataReadiness: index === 0 ? "blocked" : "insufficient",
      draftStatus: "ai_draft",
      reviewStatus: "pending",
      version: "v0.1",
      canEnterNextPhase: false,
      nextPhaseReason: index === 0 ? "Plan 階段資料成熟度不足，Do blocked。" : "Goal 尚待人工確認。"
    }));
}

function getTaskTitle(agentId: string) {
  const titles: Record<string, string> = {
    urban: "基地與都市界面初判",
    architecture: "法規風險與量體策略",
    interior: "空間需求與動線檢查",
    landscape: "景觀策略與開放空間分析"
  };

  return titles[agentId] ?? "專業分析任務";
}

function truncate(value: string, length: number) {
  return value.length > length ? `${value.slice(0, length)}...` : value;
}
