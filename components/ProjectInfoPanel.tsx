"use client";

import type { DesignStage, ProjectInfo } from "@/types/agent";

const designStages: DesignStage[] = ["概念設計", "基本設計", "細部設計", "施工圖", "監造服務"];

type ProjectInfoPanelProps = {
  project: ProjectInfo;
  onChange: (project: ProjectInfo) => void;
};

export function ProjectInfoPanel({ project, onChange }: ProjectInfoPanelProps) {
  function update<K extends keyof ProjectInfo>(key: K, value: ProjectInfo[K]) {
    onChange({ ...project, [key]: value });
  }

  return (
    <section className="panel projectPanel" aria-label="專案資料區">
      <div className="panelHeader">
        <p className="eyebrow">Project Brief</p>
        <h2>專案資料</h2>
      </div>

      <label className="field">
        <span>案名</span>
        <input value={project.projectName} onChange={(event) => update("projectName", event.target.value)} />
      </label>

      <label className="field">
        <span>基地位置</span>
        <input value={project.siteLocation} onChange={(event) => update("siteLocation", event.target.value)} />
      </label>

      <label className="field">
        <span>專案類型</span>
        <input value={project.projectType} onChange={(event) => update("projectType", event.target.value)} />
      </label>

      <label className="field">
        <span>設計階段</span>
        <select value={project.designStage} onChange={(event) => update("designStage", event.target.value as DesignStage)}>
          {designStages.map((stage) => (
            <option key={stage} value={stage}>
              {stage}
            </option>
          ))}
        </select>
      </label>

      <div className="briefCard">
        <span>總管 Agent 讀取欄位</span>
        <p>案名、基地、類型與階段會組成後續傳給 OpenAI API 的 project context。</p>
      </div>
    </section>
  );
}
