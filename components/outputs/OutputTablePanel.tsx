"use client";

import { useMemo, useState } from "react";
import type { Output } from "@/types/output";

type OutputTablePanelProps = {
  outputs: Output[];
};

export function OutputTablePanel({ outputs }: OutputTablePanelProps) {
  const [selectedOutputId, setSelectedOutputId] = useState(outputs[0]?.id ?? "");
  const selectedOutput = useMemo(
    () => outputs.find((output) => output.id === selectedOutputId) ?? outputs[0],
    [outputs, selectedOutputId]
  );

  return (
    <section className="panel outputPanel" aria-label="Outputs">
      <div className="panelHeader horizontal">
        <div>
          <p className="eyebrow">Structured Outputs</p>
          <h2>成果物表格</h2>
        </div>
        <span className="thinTag">{outputs.length} templates</span>
      </div>

      <div className="outputLayout">
        <nav className="outputNav" aria-label="Output list">
          {outputs.map((output) => (
            <button
              className={output.id === selectedOutput?.id ? "isActive" : ""}
              key={output.id}
              type="button"
              onClick={() => setSelectedOutputId(output.id)}
            >
              <span>{output.agentName}</span>
              <strong>{output.title}</strong>
            </button>
          ))}
        </nav>

        {selectedOutput ? (
          <article className="outputDetail">
            <div className="outputIntro">
              <span>{selectedOutput.agentName}</span>
              <h3>{selectedOutput.tableTitle}</h3>
              <p>{selectedOutput.summary}</p>
            </div>
            <div className="tableWrap">
              <table>
                <thead>
                  <tr>
                    {selectedOutput.columns.map((column) => (
                      <th key={column}>{column}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {selectedOutput.rows.map((row) => (
                    <tr key={`${selectedOutput.id}-${row.item}`}>
                      <td>{row.item}</td>
                      <td>{row.observation}</td>
                      <td>{row.implication}</td>
                      <td>{row.recommendation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>
        ) : null}
      </div>
    </section>
  );
}
