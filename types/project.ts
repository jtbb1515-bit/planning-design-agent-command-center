export type DesignStage = "概念設計" | "基本設計" | "細部設計" | "施工圖" | "監造服務";

export type Project = {
  projectName: string;
  siteLocation: string;
  projectType: string;
  designStage: DesignStage;
  clientNeeds: string;
  constraints: string;
  expectedDeliverables: string;
  notes: string;
};
