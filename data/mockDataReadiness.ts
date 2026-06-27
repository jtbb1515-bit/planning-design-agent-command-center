import type { DataReadinessItem } from "@/types/gpdcrf";

export const mockDataReadinessItems: DataReadinessItem[] = [
  { id: "site", name: "基地資料", category: "基地與現況", status: "incomplete", requiredForPhase: "plan", relatedAgent: "都市設計小 U", note: "需補基地界線、地籍與周邊道路資料。" },
  { id: "drawings", name: "現況圖面", category: "既有建物", status: "missing", requiredForPhase: "plan", relatedAgent: "室內設計小 I", note: "尚缺可量測的現況平面與天花設備圖。" },
  { id: "client-needs", name: "業主需求", category: "需求確認", status: "unconfirmed", requiredForPhase: "goal", relatedAgent: "規劃設計總管 Agent", note: "消防分隊值勤與備勤流程尚未完成訪談確認。" },
  { id: "code", name: "法規資料", category: "法規初判", status: "unverified", requiredForPhase: "plan", relatedAgent: "建築設計小 A", note: "室內裝修、消防與無障礙條件需二次確認。" },
  { id: "budget", name: "預算條件", category: "專案管理", status: "unconfirmed", requiredForPhase: "plan", relatedAgent: "專案負責人", note: "尚未取得工程經費上限與設計服務範圍邊界。" },
  { id: "schedule", name: "時程條件", category: "專案管理", status: "confirmed", requiredForPhase: "plan", relatedAgent: "專案負責人", note: "需於兩週內提出第一版服務建議書。" },
  { id: "mep-fire", name: "機電消防資料", category: "設備協調", status: "missing", requiredForPhase: "plan", relatedAgent: "Quality Agent", note: "缺少既有配電、消防立管、排煙與警報設備條件。" },
  { id: "interview", name: "使用者訪談資料", category: "需求確認", status: "missing", requiredForPhase: "goal", relatedAgent: "室內設計小 I", note: "消防隊員、行政人員、民眾接待流程尚未訪談。" }
];
