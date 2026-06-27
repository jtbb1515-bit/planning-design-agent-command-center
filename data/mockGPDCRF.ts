import type { GPDCRFStep, GoalDefinition, HumanReviewGate } from "@/types/gpdcrf";

export const initialGoalDefinition: GoalDefinition = {
  coreGoal: "建立新竹埔頂消防分隊室內改建案第一階段服務建議書架構，釐清空間需求、現況限制與後續設計工作範圍。",
  surfaceRequest: "業主希望改善消防分隊既有室內空間，提升值勤、備勤、行政與民眾接待使用效率。",
  serviceScope: "室內空間需求盤點、現況圖面檢核、法規與機電消防初判、動線衝突檢查、服務建議書大綱。",
  nonServiceScope: "本階段不進行施工圖繪製、工程預算細估、設備採購規格確認與正式簽證文件。",
  successCriteria: "形成可供建築師與業主討論的服務範圍、缺資料清單、任務分派表與第一版成果物架構。",
  majorConstraints: "現況圖面不足、使用者訪談尚未完成、機電與消防既有條件需確認。",
  keyAssumptions: "基地與既有建物合法使用無重大變更；主要改建範圍以室內裝修與局部設備協調為主。",
  humanConfirmer: "設計主持人 / 詹世州建築師"
};

export const mockGPDCRFSteps: GPDCRFStep[] = [
  {
    id: "project-goal",
    scale: "project",
    phase: "goal",
    title: "專案目標、範圍與成功標準確認",
    description: "將業主表面需求轉換為可執行的設計服務範圍。",
    aiResponsibility: "整理需求、限制、不做事項與風險假設。",
    humanReviewFocus: "確認對外承諾是否合理，避免過早承諾法規與預算。",
    requiredOutput: "Goal Definition Sheet",
    reviewStatus: "approved",
    reviewerRole: "建築師",
    missingInfo: [],
    risks: ["業主口頭需求可能與實際預算不一致"],
    evidenceSources: ["業主初談紀錄", "現況照片"],
    decisionNote: "先以室內改建服務建議書為第一階段交付物。",
    version: "v1.0",
    updatedAt: "2026-06-27 21:10"
  },
  {
    id: "project-plan",
    scale: "project",
    phase: "plan",
    title: "資料成熟度與任務拆解",
    description: "確認是否具備進入 AI Draft 與設計分析的基本資料。",
    aiResponsibility: "檢核基地、現況圖、法規、訪談與機電消防資料缺口。",
    humanReviewFocus: "判斷缺資料是否會阻擋設計產出。",
    requiredOutput: "Data Readiness Check + Task Plan",
    reviewStatus: "blocked",
    reviewerRole: "專案負責人",
    missingInfo: ["現況圖面不足", "使用者訪談資料不足", "機電與消防條件未確認"],
    risks: ["缺乏現況尺寸將影響空間需求表準確性"],
    evidenceSources: ["現況照片", "既有平面圖"],
    decisionNote: "Do 階段可先產生 AI 初稿，但不可進入正式草稿。",
    version: "v1.0",
    updatedAt: "2026-06-27 21:20"
  },
  {
    id: "task-do",
    scale: "task",
    phase: "do",
    title: "空間需求表 AI Draft",
    description: "依消防分隊使用情境建立第一版空間需求與動線檢查。",
    aiResponsibility: "產出 AI Draft 表格與初步衝突提示。",
    humanReviewFocus: "修正不符合實際值勤流程的推論。",
    requiredOutput: "空間需求分析表 AI Draft",
    reviewStatus: "pending",
    reviewerRole: "室內設計專業負責人",
    missingInfo: ["使用者訪談資料不足"],
    risks: ["AI 推估人數與設備需求可能不符合消防分隊實際編制"],
    evidenceSources: ["公共建築空間需求模板", "消防分隊案例"],
    decisionNote: "需完成訪談後才能升級為 review_draft。",
    version: "v0.3",
    updatedAt: "2026-06-27 21:26"
  }
];

export const initialHumanReviewGates: HumanReviewGate[] = [
  {
    id: "gate-goal",
    phase: "goal",
    reviewerRole: "建築師",
    status: "approved",
    comment: "目標與非服務範圍已清楚，可進入資料成熟度檢查。",
    reviewedAt: "2026-06-27 21:12",
    approvedBy: "詹世州建築師"
  },
  {
    id: "gate-plan",
    phase: "plan",
    reviewerRole: "專案負責人",
    status: "blocked",
    comment: "現況圖面與機電消防條件不足，Do 階段需標示不可對外。",
    reviewedAt: "2026-06-27 21:22",
    approvedBy: ""
  },
  {
    id: "gate-do",
    phase: "do",
    reviewerRole: "設計主持人",
    status: "pending",
    comment: "等待 Human Edit 後送審。",
    reviewedAt: "",
    approvedBy: ""
  },
  {
    id: "gate-check",
    phase: "check",
    reviewerRole: "建築師",
    status: "pending",
    comment: "尚未進入正式檢核。",
    reviewedAt: "",
    approvedBy: ""
  },
  {
    id: "gate-record",
    phase: "record",
    reviewerRole: "專案負責人",
    status: "pending",
    comment: "待 Check 通過後記錄。",
    reviewedAt: "",
    approvedBy: ""
  },
  {
    id: "gate-feedback",
    phase: "feedback",
    reviewerRole: "知識管理負責人",
    status: "pending",
    comment: "待 Record 通過後提出 SOP/Prompt/Template 更新。",
    reviewedAt: "",
    approvedBy: ""
  }
];
