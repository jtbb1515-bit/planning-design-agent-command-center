import type { HumanReviewGate } from "@/types/gpdcrf";

const aiChecks = ["完整性", "一致性", "格式", "邏輯", "風險提示", "缺資料", "法規風險提醒"];
const humanRoles = [
  "設計主持人：檢查設計方向、論述、業主策略",
  "專案負責人：檢查時程、人力、交付物、簡報完整度",
  "專業負責人：檢查都市、建築、室內、景觀、法規專業正確性",
  "建築師：檢查對外承諾、法規風險、簽證責任"
];

export function CheckReviewPanel({ gates }: { gates: HumanReviewGate[] }) {
  return (
    <div className="checkGrid">
      <section className="checkColumn">
        <h3>AI Check</h3>
        {aiChecks.map((check) => (
          <div className="checkItem" key={check}>
            <strong>{check}</strong>
            <span>以 mock rule 檢查，目前不接 OpenAI API。</span>
          </div>
        ))}
      </section>
      <section className="checkColumn">
        <h3>Human Check</h3>
        {humanRoles.map((role) => (
          <div className="checkItem" key={role}>
            <strong>{role.split("：")[0]}</strong>
            <span>{role.split("：")[1]}</span>
          </div>
        ))}
        <div className="gpdcrfNotice">
          <strong>目前 Gate</strong>
          <p>{gates.find((gate) => gate.phase === "check")?.comment}</p>
        </div>
      </section>
    </div>
  );
}
