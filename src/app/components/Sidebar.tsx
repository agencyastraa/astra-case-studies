"use client";

import { useEffect, useState } from "react";

const SECTIONS = ["onetool", "compumax", "tumundosalud", "other-cases"] as const;
type SectionId = (typeof SECTIONS)[number];

export default function Sidebar() {
  const [active, setActive] = useState<SectionId>("onetool");

  useEffect(() => {
    const handleScroll = () => {
      let current: SectionId = "onetool";
      SECTIONS.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        if (window.scrollY >= el.offsetTop - 120) current = id;
      });
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside className="sidebar">
      <p className="sidebar-section-label">DTC Brands</p>

      <a
        className={`sidebar-link${active === "onetool" ? " active" : ""}`}
        href="#onetool"
      >
        <span className="sidebar-dot" />
        OneTool
      </a>
      <a
        className={`sidebar-link${active === "compumax" ? " active" : ""}`}
        href="#compumax"
      >
        <span className="sidebar-dot" />
        Compumax
      </a>
      <a
        className={`sidebar-link${active === "tumundosalud" ? " active" : ""}`}
        href="#tumundosalud"
      >
        <span className="sidebar-dot" />
        Tu Mundo Salud
      </a>

      <div className="sidebar-divider" />
      <p className="sidebar-section-label">Other Industries</p>

      <a
        className={`sidebar-link${active === "other-cases" ? " active" : ""}`}
        href="#other-cases"
      >
        <span className="sidebar-dot" />
        IDACA · Tu Proyecto · Xcore
      </a>

      <div className="sidebar-divider" />
      <p className="sidebar-section-label" style={{ marginTop: 0 }}>
        Ready to scale?
      </p>
      <div style={{ padding: "0.5rem 1.5rem 0" }}>
        <a
          href="https://calendly.com/admin-agencyastra/30-min-profit-strategy-call"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-cta"
          style={{ width: "100%", fontSize: "0.78rem", padding: "0.6rem 1rem", textAlign: "center" }}
        >
          Get a free audit →
        </a>
      </div>
    </aside>
  );
}
