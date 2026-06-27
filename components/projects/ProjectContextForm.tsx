"use client";

import type { DesignStage, Project } from "@/types/project";

const designStages: DesignStage[] = ["概念設計", "基本設計", "細部設計", "施工圖", "監造服務"];

type ProjectContextFormProps = {
  project: Project;
  onChange: (project: Project) => void;
};

export function ProjectContextForm({ project, onChange }: ProjectContextFormProps) {
  function update<K extends keyof Project>(key: K, value: Project[K]) {
    onChange({ ...project, [key]: value });
  }

  return (
    <section className="panel projectPanel" aria-label="Project Context Form">
      <div className="panelHeader">
        <p className="eyebrow">Project Context</p>
        <h2>專案資料表單</h2>
      </div>

      <div className="formStack">
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

        <label className="field">
          <span>業主需求</span>
          <textarea value={project.clientNeeds} onChange={(event) => update("clientNeeds", event.target.value)} rows={4} />
        </label>

        <label className="field">
          <span>限制條件</span>
          <textarea value={project.constraints} onChange={(event) => update("constraints", event.target.value)} rows={4} />
        </label>

        <label className="field">
          <span>預期成果物</span>
          <textarea value={project.expectedDeliverables} onChange={(event) => update("expectedDeliverables", event.target.value)} rows={3} />
        </label>

        <label className="field">
          <span>備註</span>
          <textarea value={project.notes} onChange={(event) => update("notes", event.target.value)} rows={3} />
        </label>
      </div>
    </section>
  );
}
