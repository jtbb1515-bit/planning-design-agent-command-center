import type { FeedbackImprovement } from "@/types/gpdcrf";

export const mockFeedbackImprovements: FeedbackImprovement[] = [
  {
    id: "fi-001",
    type: "prompt",
    title: "更新法規檢核 Prompt",
    problem: "AI 法規檢核常漏掉管道間、排煙與防火區劃相關問題。",
    suggestion: "在建築設計 Agent 的法規檢核 prompt 中加入管道間、排煙、防火區劃與消防設備條件檢核。",
    target: "建築設計小 A / 法規風險初判表",
    status: "open"
  },
  {
    id: "fi-002",
    type: "template",
    title: "更新室內空間需求表",
    problem: "空間需求表欄位不夠，無法反映消防分隊值勤、備勤、行政與民眾接待差異。",
    suggestion: "新增使用者類型、尖峰時段、設備需求、安靜/噪音條件與安全分區欄位。",
    target: "室內設計小 I / 空間需求分析表",
    status: "in_progress"
  },
  {
    id: "fi-003",
    type: "prompt",
    title: "更新簡報 Agent 文字風格",
    problem: "服務建議書太像制式報告，缺少顧問式論述與業主決策語氣。",
    suggestion: "要求 AI 以公共工程服務建議書語氣撰寫，先講決策價值，再講分析依據。",
    target: "服務建議書大綱 / 簡報文字 Prompt",
    status: "open"
  },
  {
    id: "fi-004",
    type: "sop",
    title: "Plan 階段加入資料成熟度檢查",
    problem: "缺資料太晚才發現，導致 Do 與 Check 階段反覆退回。",
    suggestion: "將 Data Readiness Check 設為 Plan 階段必要 gate，缺少現況圖、機電消防或訪談資料時 Do 自動 blocked。",
    target: "GPDCRF 2.0 SOP / Plan Gate",
    status: "applied"
  }
];
