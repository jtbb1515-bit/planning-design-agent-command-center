import type { PhaseRuleResult } from "@/lib/gpdcrfRules";
import type { GPDCRFPhase } from "@/types/gpdcrf";

const phaseLabels: Record<GPDCRFPhase, string> = {
  goal: "G Goal",
  plan: "P Plan",
  do: "D Do",
  check: "C Check",
  record: "R Record",
  feedback: "F Feedback"
};

type GPDCRFWorkflowPanelProps = {
  phaseStates: PhaseRuleResult[];
  activePhase: GPDCRFPhase;
  onSelectPhase: (phase: GPDCRFPhase) => void;
};

export function GPDCRFWorkflowPanel({ phaseStates, activePhase, onSelectPhase }: GPDCRFWorkflowPanelProps) {
  return (
    <div className="gpdcrfWorkflow">
      {phaseStates.map((item) => (
        <button
          className={`gpdcrfPhaseCard ${activePhase === item.phase ? "isActive" : ""} state-${item.state}`}
          key={item.phase}
          type="button"
          onClick={() => onSelectPhase(item.phase)}
        >
          <strong>{phaseLabels[item.phase]}</strong>
          <span>{item.state}</span>
          <small>{item.reason}</small>
        </button>
      ))}
    </div>
  );
}
