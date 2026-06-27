import type { ChatMessage, Deliverable, ProjectInfo, QualityCheck, SpecialistAgent, WorkflowStep } from "@/types/agent";

export const mockProject: ProjectInfo = {
  projectName: "中埔公共服務節點更新案",
  siteLocation: "嘉義縣中埔鄉台18線周邊基地",
  projectType: "公共建築與地方創生複合開發",
  designStage: "概念設計"
};

export const mockAgents: SpecialistAgent[] = [
  {
    id: "urban",
    sectionCode: "第10科",
    departmentName: "都市設計小 U",
    name: "都市設計 Agent",
    discipline: "都市設計",
    status: "running",
    currentTask: "整合都市尺度、基地條件、交通動線與法定開放空間。",
    progress: 68,
    lastUpdated: "20:18",
    subAgents: [
      {
        id: "urban-planning",
        name: "都市專案小 Agent",
        role: "工作計畫與任務範圍",
        status: "running",
        task: "建立可行的解釋、人力與工作範圍。",
        knowledgeBase: "都市設計服務範疇 / 案例工項表",
        template: "都市設計工作計畫表",
        outputType: "表格"
      },
      {
        id: "urban-site",
        name: "基地分析小 Agent",
        role: "基地資料與都市脈絡",
        status: "review",
        task: "彙整即時且正確的基地資料、周邊道路與使用分區。",
        knowledgeBase: "GIS 圖資 / 法定分區 / 基地照片",
        template: "基地分析摘要表",
        outputType: "文字"
      },
      {
        id: "urban-scheme",
        name: "都市方案小 Agent",
        role: "都市設計策略",
        status: "queued",
        task: "提出符合業主需求的都市設計方案方向。",
        knowledgeBase: "都市設計案例庫 / 開放空間準則",
        template: "都市方案比較表",
        outputType: "表格"
      },
      {
        id: "urban-model",
        name: "發展模型小 Agent",
        role: "簡報模型與視覺輸出",
        status: "idle",
        task: "準備符合簡報需求的量體模型與說明圖。",
        knowledgeBase: "簡報圖面模板 / 量體模型規則",
        template: "都市簡報段落",
        outputType: "簡報段落"
      }
    ]
  },
  {
    id: "architecture",
    sectionCode: "第11科",
    departmentName: "建築設計小 A",
    name: "建築設計 Agent",
    discipline: "建築設計",
    status: "queued",
    currentTask: "等待總管 Agent 完成需求拆解，準備建立量體與機能配置。",
    progress: 24,
    lastUpdated: "20:12",
    subAgents: [
      {
        id: "arch-program",
        name: "建築計劃小 Agent",
        role: "需求與空間計畫",
        status: "queued",
        task: "整理可行的解釋、人力、工作範圍與空間需求。",
        knowledgeBase: "空間需求表 / 業主訪談紀錄",
        template: "建築計劃表",
        outputType: "表格"
      },
      {
        id: "arch-code",
        name: "法規分析小 Agent",
        role: "法規與限制條件",
        status: "running",
        task: "檢核專案執行所需的法規與分析建議。",
        knowledgeBase: "建築技術規則 / 地方管制要點",
        template: "法規檢核表",
        outputType: "表格"
      },
      {
        id: "arch-scheme",
        name: "建築方案小 Agent",
        role: "量體與配置方案",
        status: "queued",
        task: "提出符合業主需求的最佳建築設計方案。",
        knowledgeBase: "建築案例庫 / 量體配置準則",
        template: "建築方案比較表",
        outputType: "文字"
      },
      {
        id: "arch-drawing",
        name: "施工圖小 Agent",
        role: "圖說與文件清單",
        status: "idle",
        task: "列出符合施工所需的圖面項目與交付節點。",
        knowledgeBase: "施工圖清單 / 圖層與出圖標準",
        template: "施工圖項目表",
        outputType: "圖面清單"
      },
      {
        id: "arch-supervision",
        name: "圖誌監造小 Agent",
        role: "監造與圖說諮詢",
        status: "idle",
        task: "建立協助施工完成的圖說諮詢服務範圍。",
        knowledgeBase: "監造紀錄 / RFI 回覆模板",
        template: "監造服務摘要",
        outputType: "文字"
      }
    ]
  },
  {
    id: "interior",
    sectionCode: "第12A科",
    departmentName: "室內設計小 I",
    name: "室內設計 Agent",
    discipline: "室內設計",
    status: "review",
    currentTask: "檢核公共服務空間、接待流程、展示動線與室內材料方向。",
    progress: 82,
    lastUpdated: "20:06",
    subAgents: [
      {
        id: "interior-program",
        name: "室內計劃小 Agent",
        role: "室內機能與流程",
        status: "review",
        task: "建立室內空間需求、使用流程與工作計畫。",
        knowledgeBase: "空間鄰接表 / 公共服務流程",
        template: "室內計劃表",
        outputType: "表格"
      },
      {
        id: "interior-site",
        name: "現場分析小 Agent",
        role: "既有條件與限制",
        status: "complete",
        task: "整理現場尺寸、設備、開口與既有條件。",
        knowledgeBase: "現勘照片 / 既有圖說",
        template: "現場分析摘要",
        outputType: "文字"
      },
      {
        id: "interior-scheme",
        name: "室內方案小 Agent",
        role: "室內設計方案",
        status: "running",
        task: "提出符合業主需求的室內配置與氛圍方向。",
        knowledgeBase: "材料樣板 / 室內案例庫",
        template: "室內方案比較表",
        outputType: "表格"
      },
      {
        id: "interior-drawing",
        name: "施工圖小 Agent",
        role: "室內施工圖清單",
        status: "queued",
        task: "列出室內施工所需圖面與出圖順序。",
        knowledgeBase: "室內施工圖標準 / 大樣圖模板",
        template: "室內施工圖清單",
        outputType: "圖面清單"
      }
    ]
  },
  {
    id: "landscape",
    sectionCode: "第12B科",
    departmentName: "景觀設計小 L",
    name: "景觀設計 Agent",
    discipline: "景觀設計",
    status: "idle",
    currentTask: "尚未啟動，等待基地分析與建築配置結果。",
    progress: 0,
    lastUpdated: "19:55",
    subAgents: [
      {
        id: "landscape-program",
        name: "景觀計劃小 Agent",
        role: "景觀工作計畫",
        status: "idle",
        task: "建立景觀設計範圍、人力與工作計畫。",
        knowledgeBase: "景觀服務範疇 / 景觀設計準則",
        template: "景觀計劃表",
        outputType: "表格"
      },
      {
        id: "landscape-site",
        name: "基地分析小 Agent",
        role: "微氣候與開放空間條件",
        status: "queued",
        task: "整理日照、排水、植栽、動線與周邊景觀資源。",
        knowledgeBase: "基地照片 / 氣候資料 / 植栽資料",
        template: "景觀基地分析表",
        outputType: "表格"
      },
      {
        id: "landscape-scheme",
        name: "景觀方案小 Agent",
        role: "戶外空間策略",
        status: "idle",
        task: "提出符合業主需求的景觀與廣場設計方案。",
        knowledgeBase: "廣場案例庫 / 鋪面與植栽模板",
        template: "景觀方案摘要",
        outputType: "簡報段落"
      }
    ]
  }
];

export const mockMessages: ChatMessage[] = [
  {
    id: "m-1",
    role: "master",
    author: "規劃設計總管 Agent",
    content: "我已建立專案任務樹。請輸入本案的主要需求、基地條件或業主偏好，我會拆解給都市、建築、室內與景觀 Agent。",
    timestamp: "20:10"
  },
  {
    id: "m-2",
    role: "user",
    author: "設計主持人",
    content: "請先評估基地與周邊交通，提出一個能結合公共服務、地方展示與活動廣場的概念方案。",
    timestamp: "20:14"
  },
  {
    id: "m-3",
    role: "master",
    author: "規劃設計總管 Agent",
    content: "已分派初步任務：都市 Agent 處理交通與界面，建築 Agent 建立量體策略，室內 Agent 推演服務流程，景觀 Agent 準備開放空間框架。",
    timestamp: "20:15"
  }
];

export const mockDeliverables: Deliverable[] = [
  {
    id: "d-1",
    agentId: "urban",
    agentName: "都市設計 Agent",
    title: "基地脈絡與都市界面分析",
    summary: "整理主要道路、入口節點、步行連續性與鄰里活動界面，建議以南側作為公共開放前場。",
    format: "分析報告",
    status: "draft"
  },
  {
    id: "d-2",
    agentId: "architecture",
    agentName: "建築設計 Agent",
    title: "初步量體配置策略",
    summary: "以低層水平量體形成親民界面，將多功能廳、展示廳與行政服務分層配置。",
    format: "設計策略",
    status: "review"
  },
  {
    id: "d-3",
    agentId: "interior",
    agentName: "室內設計 Agent",
    title: "公共服務流程與空間清單",
    summary: "建立入口接待、洽詢、展示、等候與彈性活動空間的基本面積與鄰接關係。",
    format: "圖面清單",
    status: "ready"
  },
  {
    id: "d-4",
    agentId: "landscape",
    agentName: "景觀設計 Agent",
    title: "戶外活動廣場初步框架",
    summary: "提出遮蔭、雨水花園、地方活動鋪面與夜間照明的整合方向。",
    format: "簡報摘要",
    status: "draft"
  },
  {
    id: "d-5",
    agentId: "master",
    agentName: "規劃設計總管 Agent",
    title: "服務建議書初稿",
    summary: "整合四個專業 Agent 的分析輸出，形成可供建築師審核的專案服務範圍、工作項目與初步成果清單。",
    format: "設計策略",
    status: "review"
  }
];

export const mockWorkflowSteps: WorkflowStep[] = [
  {
    id: "input",
    title: "使用者輸入專案需求",
    description: "專案資料與需求文字進入總管 Agent context。",
    status: "done"
  },
  {
    id: "classify",
    title: "主 Agent 判斷任務類型",
    description: "辨識都市、建築、室內、景觀與整合文件需求。",
    status: "done"
  },
  {
    id: "task-list",
    title: "建立任務清單",
    description: "拆解為可追蹤、可交付、可品管的子任務。",
    status: "active"
  },
  {
    id: "dispatch",
    title: "分派給四個專業 Agent",
    description: "依任務屬性送往都市、建築、室內、景觀 Agent。",
    status: "active"
  },
  {
    id: "knowledge",
    title: "查詢知識庫與模板",
    description: "各 Agent 讀取內部案例、設計準則與輸出模板。",
    status: "pending"
  },
  {
    id: "structured-output",
    title: "回傳結構化成果",
    description: "回傳表格、文字摘要、圖面清單與建議策略。",
    status: "pending"
  },
  {
    id: "quality",
    title: "品管 Agent 檢查",
    description: "檢查缺漏、矛盾、格式與服務範圍一致性。",
    status: "pending"
  },
  {
    id: "proposal",
    title: "整合服務建議書初稿",
    description: "主 Agent 匯整為可供建築師人工審核的草案。",
    status: "pending"
  }
];

export const mockQualityChecks: QualityCheck[] = [
  {
    id: "scope",
    title: "服務範圍完整性",
    result: "pass",
    note: "四個專業領域皆已建立初步輸出項目。"
  },
  {
    id: "conflict",
    title: "設計假設矛盾",
    result: "warning",
    note: "景觀開放空間與建築入口位置需在下一輪整合確認。"
  },
  {
    id: "format",
    title: "成果格式一致性",
    result: "pending",
    note: "等待各 Agent 回傳表格欄位後進行格式比對。"
  }
];
