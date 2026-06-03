"use client";

import { useState } from "react";
import { otherCases } from "../data/otherCases";

export default function OtherCases() {
  const [active, setActive] = useState(0);
  const c = otherCases[active];

  return (
    <section className="other-cases-section" id="other-cases">
      <p className="other-cases-label">More results</p>
      <h2 className="other-cases-title">Beyond e-commerce.</h2>
      <p className="other-cases-sub">
        Paid media works across industries — here&apos;s proof.
      </p>

      {/* Tabs */}
      <div className="other-tabs">
        {otherCases.map((oc, i) => (
          <button
            key={oc.id}
            className={`other-tab${active === i ? " active" : ""}`}
            onClick={() => setActive(i)}
          >
            {oc.tab}
            <span className="other-tab-industry">{oc.tabIndustry}</span>
          </button>
        ))}
      </div>

      {/* Active panel */}
      <div className="other-panel active">
        <div className="other-panel-left">
          <p className="other-panel-label">The situation</p>
          <div className="other-client-name">{c.clientName}</div>
          <div className="other-client-tag">{c.clientTag}</div>
          <div className="other-problem-block">
            <div className="other-problem-title">Before Astra</div>
            <p className="other-problem-text">{c.problem}</p>
          </div>
        </div>

        <div className="other-panel-right">
          <p className="other-panel-label results">Results</p>
          <div className="other-big-num">{c.heroNum}</div>
          <div className="other-big-label">{c.heroLabel}</div>
          <div className="other-metrics-row">
            {c.metrics.map((m, i) => (
              <div key={i}>
                <div className="other-metric-val">{m.val}</div>
                <div className="other-metric-key">{m.key}</div>
              </div>
            ))}
          </div>
          <div className="other-detail-list">
            {c.details.map((d, i) => (
              <div key={i} className="other-drow">
                <span className="odk">{d.key}</span>
                <span className="odv">{d.val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
