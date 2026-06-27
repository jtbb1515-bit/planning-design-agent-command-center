import type { DecisionRecord } from "@/types/gpdcrf";

export const mockDecisionRecords: DecisionRecord[] = [
  {
    id: "dr-001",
    phase: "goal",
    title: "服務範圍先界定為室內改建服務建議書",
    decision: "第一階段不承諾施工圖與正式預算，先完成需求、現況與風險初判。",
    decidedBy: "詹世州建築師",
    decidedAt: "2026-06-27 21:05",
    version: "v1.0",
    reason: "避免在現況資料不足時過早承諾設計深度。",
    evidenceSources: ["業主初談紀錄", "現況照片"],
    unresolvedIssues: ["工程預算上限尚未確認"]
  },
  {
    id: "dr-002",
    phase: "plan",
    title: "Plan 階段加入資料成熟度檢查",
    decision: "現況圖面、機電消防資料與使用者訪談列為 Do 階段前置條件。",
    decidedBy: "專案負責人",
    decidedAt: "2026-06-27 21:18",
    version: "v1.0",
    reason: "避免 AI 初稿建立在錯誤空間假設上。",
    evidenceSources: ["既有圖說清單", "現勘紀錄"],
    unresolvedIssues: ["尚未取得消防設備竣工圖"]
  },
  {
    id: "dr-003",
    phase: "do",
    title: "AI Draft 不可直接對外",
    decision: "AI 產出的空間需求表僅供內部討論，必須經 Human Edit 才可進入 review_draft。",
    decidedBy: "設計主持人",
    decidedAt: "2026-06-27 21:28",
    version: "v0.3",
    reason: "消防分隊實際值勤模式需人工判斷。",
    evidenceSources: ["消防分隊案例", "室內空間需求模板"],
    unresolvedIssues: ["尚缺使用者訪談"]
  },
  {
    id: "dr-004",
    phase: "check",
    title: "Check 階段拆分 AI Check 與 Human Check",
    decision: "AI 先檢查完整性與格式，建築師保留對外承諾與法規風險判斷。",
    decidedBy: "詹世州建築師",
    decidedAt: "2026-06-27 21:34",
    version: "v1.0",
    reason: "AI 不應取代建築師簽證與風險責任。",
    evidenceSources: ["品質檢核 SOP"],
    unresolvedIssues: ["檢核表權重尚待定義"]
  },
  {
    id: "dr-005",
    phase: "record",
    title: "Record 從 Goal 階段開始",
    decision: "每次目標、資料、任務、成果修正都需保留版本與原因。",
    decidedBy: "知識管理負責人",
    decidedAt: "2026-06-27 21:40",
    version: "v1.0",
    reason: "建立可回溯的事務所知識庫。",
    evidenceSources: ["專案管理 SOP"],
    unresolvedIssues: ["未來需接資料庫"]
  },
  {
    id: "dr-006",
    phase: "feedback",
    title: "Feedback 固定轉為 SOP / Prompt / Template 更新",
    decision: "專案結束或階段檢討時，必須產出至少一項可更新的知識資產。",
    decidedBy: "設計總監",
    decidedAt: "2026-06-27 21:45",
    version: "v1.0",
    reason: "讓每案經驗可以回饋到下一案。",
    evidenceSources: ["服務建議書檢討紀錄"],
    unresolvedIssues: ["尚未建立模板版控流程"]
  }
];
