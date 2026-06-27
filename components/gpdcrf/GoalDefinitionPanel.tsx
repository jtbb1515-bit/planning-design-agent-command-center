"use client";

import type { GoalDefinition } from "@/types/gpdcrf";

type GoalDefinitionPanelProps = {
  goal: GoalDefinition;
  onChange: (goal: GoalDefinition) => void;
};

export function GoalDefinitionPanel({ goal, onChange }: GoalDefinitionPanelProps) {
  function update<K extends keyof GoalDefinition>(key: K, value: GoalDefinition[K]) {
    onChange({ ...goal, [key]: value });
  }

  return (
    <div className="gpdcrfDetailGrid">
      <EditableField label="核心目標" value={goal.coreGoal} onChange={(value) => update("coreGoal", value)} />
      <EditableField label="表面需求" value={goal.surfaceRequest} onChange={(value) => update("surfaceRequest", value)} />
      <EditableField label="服務範圍" value={goal.serviceScope} onChange={(value) => update("serviceScope", value)} />
      <EditableField label="非服務範圍" value={goal.nonServiceScope} onChange={(value) => update("nonServiceScope", value)} />
      <EditableField label="成功標準" value={goal.successCriteria} onChange={(value) => update("successCriteria", value)} />
      <EditableField label="主要限制" value={goal.majorConstraints} onChange={(value) => update("majorConstraints", value)} />
      <EditableField label="主要假設" value={goal.keyAssumptions} onChange={(value) => update("keyAssumptions", value)} />
      <EditableField label="人工確認人" value={goal.humanConfirmer} onChange={(value) => update("humanConfirmer", value)} />
    </div>
  );
}

function EditableField({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  return (
    <label className="gpdcrfField">
      <span>{label}</span>
      <textarea value={value} onChange={(event) => onChange(event.target.value)} rows={3} />
    </label>
  );
}
