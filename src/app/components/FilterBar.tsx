"use client";

import { Category } from "../data/cases";

const FILTERS: { value: Category; label: string }[] = [
  { value: "all", label: "Todos" },
  { value: "dtc", label: "DTC" },
  { value: "saas", label: "SaaS" },
  { value: "healthcare", label: "Healthcare" },
  { value: "services", label: "Servicios" },
];

export default function FilterBar({
  active,
  onChange,
}: {
  active: Category;
  onChange: (c: Category) => void;
}) {
  return (
    <div
      className="m-filter-bar"
      style={{
        display: "flex",
        gap: "0.6rem",
        flexWrap: "wrap",
      }}
    >
      {FILTERS.map((f) => (
        <button
          key={f.value}
          onClick={() => onChange(f.value)}
          className={`filter-tab${active === f.value ? " active" : ""}`}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}
