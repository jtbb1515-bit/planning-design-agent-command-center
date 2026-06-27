import type { MissingInfoItem } from "@/types/quality";

export const initialMissingInfo: MissingInfoItem[] = [
  {
    id: "missing-site-boundary",
    name: "基地資料不足",
    agentId: "urban",
    agentName: "都市設計小 U",
    discipline: "urban",
    importance: "high",
    status: "open",
    description: "尚缺基地界線、地籍資料與可確認的現況測量圖，會影響都市界面與量體配置判斷。"
  },
  {
    id: "missing-code",
    name: "法規資料不足",
    agentId: "architecture",
    agentName: "建築設計小 A",
    discipline: "architecture",
    importance: "high",
    status: "open",
    description: "需確認都市計畫分區、建蔽率、容積率、退縮及停車檢討條件。"
  },
  {
    id: "missing-client",
    name: "業主需求未確認",
    agentId: "interior",
    agentName: "室內設計小 I",
    discipline: "interior",
    importance: "medium",
    status: "open",
    description: "需確認服務櫃台數量、展示內容、活動型態與未來營運人員編制。"
  },
  {
    id: "missing-mep",
    name: "機電與消防條件未確認",
    agentId: "quality",
    agentName: "Quality Agent",
    discipline: "quality",
    importance: "medium",
    status: "open",
    description: "缺少機電容量、消防分區與設備空間需求，後續需納入法規與配置整合。"
  }
];
