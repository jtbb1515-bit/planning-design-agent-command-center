"use client";

import { useMemo, useState } from "react";
import { CheckReviewPanel } from "@/components/gpdcrf/CheckReviewPanel";
import { ContinuousRecordPanel } from "@/components/gpdcrf/ContinuousRecordPanel";
import { DataReadinessPanel } from "@/components/gpdcrf/DataReadinessPanel";
import { DoProductionPanel } from "@/components/gpdcrf/DoProductionPanel";
import { FeedbackImprovementPanel } from "@/components/gpdcrf/FeedbackImprovementPanel";
import { GoalDefinitionPanel } from "@/components/gpdcrf/GoalDefinitionPanel";
import { GPDCRFWorkflowPanel } from "@/components/gpdcrf/GPDCRFWorkflowPanel";
import { HumanReviewGate } from "@/components/gpdcrf/HumanReviewGate";
import { mockDataReadinessItems } from "@/data/mockDataReadiness";
import { mockDecisionRecords } from "@/data/mockDecisionRecords";
import { mockFeedbackImprovements } from "@/data/mockFeedbackImprovements";
import { initialGoalDefinition, initialHumanReviewGates, mockGPDCRFSteps } from "@/data/mockGPDCRF";
import { getAllPhaseStates } from "@/lib/gpdcrfRules";
import type { DataReadinessItem, DataReadinessStatus, DraftStatus, GPDCRFPhase, GoalDefinition, HumanReviewGate as Gate, ReviewStatus } from "@/types/gpdcrf";

export function GPDCRFSystemPanel() {
  const [activePhase, setActivePhase] = useState<GPDCRFPhase>("goal");
  const [goal, setGoal] = useState<GoalDefinition>(initialGoalDefinition);
  const [dataReadiness, setDataReadiness] = useState<DataReadinessItem[]>(mockDataReadinessItems);
  const [draftStatus, setDraftStatus] = useState<DraftStatus>("ai_draft");
  const [gates, setGates] = useState<Gate[]>(initialHumanReviewGates);

  const phaseStates = useMemo(() => getAllPhaseStates(gates, dataReadiness, draftStatus), [gates, dataReadiness, draftStatus]);
  const activeStep = mockGPDCRFSteps.find((step) => step.phase === activePhase);
  const activeState = phaseStates.find((item) => item.phase === activePhase);

  function updateDataReadiness(itemId: string, status: DataReadinessStatus) {
    setDataReadiness((current) => current.map((item) => (item.id === itemId ? { ...item, status } : item)));
  }

  function updateGate(gateId: string, status: ReviewStatus) {
    setGates((current) =>
      current.map((gate) =>
        gate.id === gateId
          ? {
              ...gate,
              status,
              reviewedAt: new Date().toLocaleString("zh-TW", { hour12: false }),
              approvedBy: status === "approved" ? gate.reviewerRole : gate.approvedBy
            }
          : gate
      )
    );
  }

  return (
    <section className="panel gpdcrfPanel" aria-label="GPDCRF 2.0 Workflow System">
      <div className="panelHeader horizontal">
        <div>
          <p className="eyebrow">GPDCRF 2.0</p>
          <h2>GPDCRF 2.0 Workflow System</h2>
        </div>
        <span className="thinTag">Project / Task / Output Lifecycle</span>
      </div>

      <GPDCRFWorkflowPanel phaseStates={phaseStates} activePhase={activePhase} onSelectPhase={setActivePhase} />

      <div className="gpdcrfContent">
        <main className="gpdcrfMain">
          <div className={`gpdcrfStateBanner state-${activeState?.state ?? "open"}`}>
            <strong>{activePhase.toUpperCase()}｜{activeState?.state}</strong>
            <span>{activeState?.reason}</span>
            {activeState?.blockingItems.length ? <small>缺資料：{activeState.blockingItems.join("、")}</small> : null}
          </div>

          {activeStep ? (
            <div className="gpdcrfStepBrief">
              <strong>{activeStep.title}</strong>
              <p>{activeStep.description}</p>
              <dl>
                <div><dt>AI Responsibility</dt><dd>{activeStep.aiResponsibility}</dd></div>
                <div><dt>Human Review Focus</dt><dd>{activeStep.humanReviewFocus}</dd></div>
                <div><dt>Required Output</dt><dd>{activeStep.requiredOutput}</dd></div>
              </dl>
            </div>
          ) : null}

          {activePhase === "goal" ? <GoalDefinitionPanel goal={goal} onChange={setGoal} /> : null}
          {activePhase === "plan" ? <DataReadinessPanel items={dataReadiness} onStatusChange={updateDataReadiness} /> : null}
          {activePhase === "do" ? <DoProductionPanel draftStatus={draftStatus} onChange={setDraftStatus} /> : null}
          {activePhase === "check" ? <CheckReviewPanel gates={gates} /> : null}
          {activePhase === "record" ? <ContinuousRecordPanel records={mockDecisionRecords} /> : null}
          {activePhase === "feedback" ? <FeedbackImprovementPanel improvements={mockFeedbackImprovements} /> : null}
        </main>

        <HumanReviewGate gates={gates} activePhase={activePhase} onChange={updateGate} />
      </div>
    </section>
  );
}
