"use client";

import { useState } from "react";
import { cases, Category } from "../data/cases";
import CaseCard from "./CaseCard";
import FilterBar from "./FilterBar";

export default function CasesGrid() {
  const [active, setActive] = useState<Category>("all");

  const visible =
    active === "all" ? cases : cases.filter((c) => c.category === active);

  return (
    <div>
      <FilterBar active={active} onChange={setActive} />

      <div
        className="m-cases-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "1.5rem",
          marginTop: "2rem",
        }}
      >
        {visible.length === 0 ? (
          <p
            style={{
              fontSize: "0.88rem",
              color: "var(--g400)",
              padding: "2rem 0",
            }}
          >
            No hay casos en esta categoría aún.
          </p>
        ) : (
          visible.map((c) => <CaseCard key={c.id} c={c} />)
        )}
      </div>
    </div>
  );
}
