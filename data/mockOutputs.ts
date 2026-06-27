import type { Output } from "@/types/output";

export const initialOutputs: Output[] = [
  {
    id: "urban-site-analysis",
    agentId: "urban",
    agentName: "都市設計小 U",
    discipline: "urban",
    title: "基地條件分析表",
    summary: "彙整基地、交通、周邊界面與公共開放空間條件。",
    tableTitle: "基地條件分析表",
    columns: ["分析項目", "初步觀察", "設計影響", "建議回應"],
    rows: [
      {
        item: "基地可及性",
        observation: "基地臨主要道路，具備公共服務入口辨識度。",
        implication: "入口與人行動線需避免與車行動線衝突。",
        recommendation: "優先確認主要入口、無障礙路徑與臨停需求。"
      },
      {
        item: "周邊公共界面",
        observation: "周邊可形成地方展示與活動前場。",
        implication: "前場尺度會影響建築退縮與廣場配置。",
        recommendation: "以半開放前庭串接展示、等候與活動空間。"
      }
    ]
  },
  {
    id: "urban-interface",
    agentId: "urban",
    agentName: "都市設計小 U",
    discipline: "urban",
    title: "都市界面策略表",
    summary: "提出街道、入口、停留節點與公共開放空間策略。",
    tableTitle: "都市界面策略表",
    columns: ["界面位置", "現況課題", "策略方向", "後續檢核"],
    rows: [
      {
        item: "主要街道側",
        observation: "需兼顧公共辨識與行人安全。",
        implication: "入口退縮與騎樓/雨遮關係需整合。",
        recommendation: "建立清楚門廳節點與遮蔭步行帶。"
      }
    ]
  },
  {
    id: "arch-code-risk",
    agentId: "architecture",
    agentName: "建築設計小 A",
    discipline: "architecture",
    title: "法規風險初判表",
    summary: "整理初步法規、容積、退縮、停車與消防避難風險。",
    tableTitle: "法規風險初判表",
    columns: ["法規項目", "初步判斷", "設計影響", "待確認資料"],
    rows: [
      {
        item: "使用分區",
        observation: "需確認公共服務與展示使用是否符合分區允許項目。",
        implication: "可能影響申請路徑與使用類組判定。",
        recommendation: "取得都市計畫土地使用分區證明。"
      },
      {
        item: "停車檢討",
        observation: "公共服務與活動使用可能衍生尖峰停車需求。",
        implication: "會影響基地配置與地下/地面停車策略。",
        recommendation: "確認法定停車數與業主營運需求。"
      }
    ]
  },
  {
    id: "arch-massing",
    agentId: "architecture",
    agentName: "建築設計小 A",
    discipline: "architecture",
    title: "量體配置策略表",
    summary: "提出量體、入口、機能分層與公共界面的初步配置策略。",
    tableTitle: "量體配置策略表",
    columns: ["配置議題", "初步方向", "設計理由", "需協調事項"],
    rows: [
      {
        item: "量體高度",
        observation: "建議以低層水平量體降低公共設施壓迫感。",
        implication: "有助於與地方尺度銜接。",
        recommendation: "搭配院落與前場形成可停留公共空間。"
      }
    ]
  },
  {
    id: "interior-program",
    agentId: "interior",
    agentName: "室內設計小 I",
    discipline: "interior",
    title: "空間需求分析表",
    summary: "整理接待、展示、洽詢、等候、活動與後勤空間需求。",
    tableTitle: "空間需求分析表",
    columns: ["空間項目", "使用需求", "設計影響", "建議配置"],
    rows: [
      {
        item: "接待等候",
        observation: "需支援一般洽公與活動尖峰人流。",
        implication: "入口附近需有彈性等候與導引視線。",
        recommendation: "接待、展示與等候採開放式鄰接。"
      }
    ]
  },
  {
    id: "interior-flow",
    agentId: "interior",
    agentName: "室內設計小 I",
    discipline: "interior",
    title: "動線衝突檢查表",
    summary: "檢查民眾、工作人員、展示參觀與後勤補給動線。",
    tableTitle: "動線衝突檢查表",
    columns: ["動線類型", "潛在衝突", "風險影響", "修正建議"],
    rows: [
      {
        item: "民眾洽詢與展示參觀",
        observation: "兩種使用可能在入口大廳交會。",
        implication: "尖峰時段易造成櫃台前壅塞。",
        recommendation: "以導引牆面或家具配置分流。"
      }
    ]
  },
  {
    id: "interior-material",
    agentId: "interior",
    agentName: "室內設計小 I",
    discipline: "interior",
    title: "材料與設備建議表",
    summary: "提出公共空間耐用、低維護、易清潔的材料與設備方向。",
    tableTitle: "材料與設備建議表",
    columns: ["部位", "建議材料/設備", "採用理由", "注意事項"],
    rows: [
      {
        item: "公共大廳地坪",
        observation: "建議使用耐磨、防滑、易維護材料。",
        implication: "降低長期維護成本並提升公共安全。",
        recommendation: "下一階段確認預算等級與樣品。"
      }
    ]
  },
  {
    id: "landscape-strategy",
    agentId: "landscape",
    agentName: "景觀設計小 L",
    discipline: "landscape",
    title: "景觀策略表",
    summary: "提出植栽、鋪面、遮蔭、雨水與停留空間策略。",
    tableTitle: "景觀策略表",
    columns: ["策略項目", "初步觀察", "設計影響", "建議作法"],
    rows: [
      {
        item: "遮蔭與停留",
        observation: "公共前場需兼顧日間停留舒適度。",
        implication: "植栽與雨遮會影響入口辨識。",
        recommendation: "以喬木、座椅與雨遮形成連續停留帶。"
      }
    ]
  },
  {
    id: "landscape-courtyard",
    agentId: "landscape",
    agentName: "景觀設計小 L",
    discipline: "landscape",
    title: "院落與開放空間分析表",
    summary: "分析院落尺度、活動彈性、地方展示與雨水管理。",
    tableTitle: "院落與開放空間分析表",
    columns: ["空間類型", "使用情境", "設計影響", "建議配置"],
    rows: [
      {
        item: "活動院落",
        observation: "需支援小型集會、展示、市集與等待。",
        implication: "鋪面、電源、排水與座椅需同步規劃。",
        recommendation: "建立可彈性佈置的硬鋪面核心。"
      }
    ]
  },
  {
    id: "quality-missing",
    agentId: "quality",
    agentName: "Quality Agent",
    discipline: "quality",
    title: "缺資料清單",
    summary: "彙整目前影響判斷與交付品質的缺資料項目。",
    tableTitle: "缺資料清單",
    columns: ["缺資料項目", "影響範圍", "風險說明", "建議補件"],
    rows: [
      {
        item: "基地邊界與地籍資料",
        observation: "影響基地面積、退縮與量體配置。",
        implication: "可能導致法規與方案判斷偏差。",
        recommendation: "請業主提供地籍圖、測量圖與土地使用分區證明。"
      }
    ]
  },
  {
    id: "quality-conflict",
    agentId: "quality",
    agentName: "Quality Agent",
    discipline: "quality",
    title: "邏輯矛盾檢查表",
    summary: "檢查各 Agent 產出間的假設矛盾與待協調事項。",
    tableTitle: "邏輯矛盾檢查表",
    columns: ["檢查項目", "可能矛盾", "影響", "修正建議"],
    rows: [
      {
        item: "入口位置與景觀前場",
        observation: "建築入口與景觀活動前場需確認主從關係。",
        implication: "若入口與活動廣場重疊，尖峰人流可能干擾洽公動線。",
        recommendation: "下一輪以入口、前場、車行分流作為整合重點。"
      }
    ]
  },
  {
    id: "quality-next-round",
    agentId: "quality",
    agentName: "Quality Agent",
    discipline: "quality",
    title: "下一輪修正建議表",
    summary: "提出下輪工作需要補強的資料、決策與協調項目。",
    tableTitle: "下一輪修正建議表",
    columns: ["修正主題", "目前狀態", "建議行動", "負責對象"],
    rows: [
      {
        item: "業主需求確認",
        observation: "活動型態、營運人員與展示內容尚未明確。",
        implication: "會影響空間面積、動線與設備需求。",
        recommendation: "安排業主訪談並更新 Project Context Form。"
      }
    ]
  }
];
