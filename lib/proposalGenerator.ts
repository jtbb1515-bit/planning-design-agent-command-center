import type { Output } from "@/types/output";
import type { Project } from "@/types/project";
import type { MissingInfoItem } from "@/types/quality";
import type { Task } from "@/types/task";

export function generateProposalOutline(project: Project, tasks: Task[], missingInfo: MissingInfoItem[], outputs: Output[]) {
  const openMissing = missingInfo.filter((item) => item.status === "open");
  const taskLines = tasks.length
    ? tasks.map((task) => `- ${task.agentName}：${task.title}（${task.status}）`).join("\n")
    : "- 尚未分派正式任務，請先於主 Agent 對話區輸入需求並點擊分派任務。";

  return `# ${project.projectName}｜服務建議書大綱

## 1. 專案基本資料
- 案名：${project.projectName}
- 基地位置：${project.siteLocation}
- 專案類型：${project.projectType}
- 設計階段：${project.designStage}

## 2. 專案目標
${project.clientNeeds || "待補充業主需求與專案目標。"}

## 3. 基地與現況分析
- 基地位置與周邊交通需建立完整分析。
- 現況圖面、基地邊界與照片資料將作為下一輪判斷依據。

## 4. 都市設計策略
${findOutputSummary(outputs, "urban")}

## 5. 建築設計策略
${findOutputSummary(outputs, "architecture")}

## 6. 室內設計策略
${findOutputSummary(outputs, "interior")}

## 7. 景觀設計策略
${findOutputSummary(outputs, "landscape")}

## 8. 法規與風險初判
- 初步檢核使用分區、容積、退縮、停車、防火與避難風險。
- 待業主補充法規與基地資料後進行第二輪檢核。

## 9. 缺資料清單
${openMissing.map((item) => `- [${item.importance}] ${item.name}：${item.description}`).join("\n") || "- 目前無開放缺資料項目。"}

## 10. 後續工作計畫
${taskLines}

## 11. 預期成果物
${project.expectedDeliverables || "基地分析表、策略表、缺資料清單、服務建議書初稿。"}
`;
}

function findOutputSummary(outputs: Output[], discipline: Output["discipline"]) {
  return outputs
    .filter((output) => output.discipline === discipline)
    .slice(0, 2)
    .map((output) => `- ${output.title}：${output.summary}`)
    .join("\n");
}
