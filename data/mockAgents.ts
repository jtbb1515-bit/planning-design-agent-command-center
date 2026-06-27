import type { Agent } from "@/types/agent";

export const mockAgents: Agent[] = [
  {
    id: "urban",
    sectionCode: "第10科",
    displayName: "都市設計小 U",
    formalName: "都市設計 Agent",
    discipline: "urban",
    description: "負責基地脈絡、都市界面、交通動線與開放空間策略。",
    status: "idle",
    progress: 0,
    lastUpdated: "未啟動",
    knowledgeSources: ["都市設計案例庫", "基地 GIS 圖資", "開放空間與交通動線準則"],
    templates: ["基地條件分析表", "都市界面策略表"],
    childAgents: [
      {
        id: "urban-project",
        name: "都市專案小 Agent",
        responsibility: "建立都市設計工作計畫與任務範圍。",
        status: "idle",
        knowledgeSource: "都市設計服務範疇 / 案例工項表",
        template: "都市設計工作計畫表",
        expectedOutput: "工作項目與人力配置表"
      },
      {
        id: "urban-site",
        name: "基地分析小 Agent",
        responsibility: "彙整基地資料、周邊道路、使用分區與都市界面。",
        status: "idle",
        knowledgeSource: "GIS 圖資 / 法定分區 / 基地照片",
        template: "基地條件分析表",
        expectedOutput: "基地條件分析表"
      },
      {
        id: "urban-interface",
        name: "都市界面小 Agent",
        responsibility: "提出街廓、入口、開放空間與公共界面策略。",
        status: "idle",
        knowledgeSource: "都市界面案例庫 / 開放空間準則",
        template: "都市界面策略表",
        expectedOutput: "都市界面策略表"
      }
    ]
  },
  {
    id: "architecture",
    sectionCode: "第11科",
    displayName: "建築設計小 A",
    formalName: "建築設計 Agent",
    discipline: "architecture",
    description: "負責建築計畫、法規初判、量體配置與圖面交付策略。",
    status: "idle",
    progress: 0,
    lastUpdated: "未啟動",
    knowledgeSources: ["建築技術規則", "地方管制要點", "量體配置案例庫"],
    templates: ["法規風險初判表", "量體配置策略表"],
    childAgents: [
      {
        id: "arch-program",
        name: "建築計劃小 Agent",
        responsibility: "整理需求、面積、機能與工作範圍。",
        status: "idle",
        knowledgeSource: "空間需求表 / 業主訪談紀錄",
        template: "建築計劃表",
        expectedOutput: "空間與量體需求表"
      },
      {
        id: "arch-code",
        name: "法規分析小 Agent",
        responsibility: "檢核基地法規、容積、退縮、防火與避難風險。",
        status: "idle",
        knowledgeSource: "建築技術規則 / 都市計畫管制",
        template: "法規風險初判表",
        expectedOutput: "法規風險初判表"
      },
      {
        id: "arch-massing",
        name: "量體配置小 Agent",
        responsibility: "提出配置原則、入口關係、樓層機能與服務動線。",
        status: "idle",
        knowledgeSource: "公共建築案例庫 / 量體配置準則",
        template: "量體配置策略表",
        expectedOutput: "量體配置策略表"
      }
    ]
  },
  {
    id: "interior",
    sectionCode: "第12A科",
    displayName: "室內設計小 I",
    formalName: "室內設計 Agent",
    discipline: "interior",
    description: "負責室內需求、使用流程、動線衝突、材料與設備建議。",
    status: "idle",
    progress: 0,
    lastUpdated: "未啟動",
    knowledgeSources: ["空間鄰接表", "公共服務流程", "材料與設備樣板"],
    templates: ["空間需求分析表", "動線衝突檢查表", "材料與設備建議表"],
    childAgents: [
      {
        id: "interior-program",
        name: "室內計劃小 Agent",
        responsibility: "建立室內空間需求、服務流程與面積初估。",
        status: "idle",
        knowledgeSource: "空間鄰接表 / 公共服務流程",
        template: "空間需求分析表",
        expectedOutput: "空間需求分析表"
      },
      {
        id: "interior-flow",
        name: "動線檢查小 Agent",
        responsibility: "檢查接待、展示、等候、洽詢與後勤動線衝突。",
        status: "idle",
        knowledgeSource: "使用者旅程 / 現況圖面",
        template: "動線衝突檢查表",
        expectedOutput: "動線衝突檢查表"
      },
      {
        id: "interior-material",
        name: "材料設備小 Agent",
        responsibility: "提出低維護、耐用、具公共性格的材料與設備方向。",
        status: "idle",
        knowledgeSource: "材料樣板 / 設備清單",
        template: "材料與設備建議表",
        expectedOutput: "材料與設備建議表"
      }
    ]
  },
  {
    id: "landscape",
    sectionCode: "第12B科",
    displayName: "景觀設計小 L",
    formalName: "景觀設計 Agent",
    discipline: "landscape",
    description: "負責景觀策略、院落、開放空間、植栽與雨水管理方向。",
    status: "idle",
    progress: 0,
    lastUpdated: "未啟動",
    knowledgeSources: ["景觀案例庫", "植栽資料", "雨水花園與鋪面模板"],
    templates: ["景觀策略表", "院落與開放空間分析表"],
    childAgents: [
      {
        id: "landscape-program",
        name: "景觀計劃小 Agent",
        responsibility: "建立景觀設計範圍、開放空間目標與工作計畫。",
        status: "idle",
        knowledgeSource: "景觀服務範疇 / 開放空間案例",
        template: "景觀策略表",
        expectedOutput: "景觀策略表"
      },
      {
        id: "landscape-courtyard",
        name: "院落空間小 Agent",
        responsibility: "分析院落、廣場、遮蔭、停留與活動空間關係。",
        status: "idle",
        knowledgeSource: "廣場案例庫 / 鋪面與植栽模板",
        template: "院落與開放空間分析表",
        expectedOutput: "院落與開放空間分析表"
      }
    ]
  },
  {
    id: "quality",
    sectionCode: "QC",
    displayName: "Quality Agent",
    formalName: "Quality Agent",
    discipline: "quality",
    description: "負責檢查缺漏、矛盾、格式與交付品質。",
    status: "idle",
    progress: 0,
    lastUpdated: "未啟動",
    knowledgeSources: ["服務建議書檢核表", "品質管理 checklist", "缺資料分類規則"],
    templates: ["缺資料清單", "邏輯矛盾檢查表", "下一輪修正建議表"],
    childAgents: []
  }
];
