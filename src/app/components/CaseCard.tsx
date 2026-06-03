"use client";

import { CaseStudy } from "../data/cases";

const fd = "var(--font-display), sans-serif";
const fb = "var(--font-body), sans-serif";

export default function CaseCard({ c }: { c: CaseStudy }) {
  return (
    <article className="case-card" style={{ fontFamily: fb }}>
      {/* ── TOP BAR: category + region ── */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0.85rem 1.5rem",
          borderBottom: "0.5px solid var(--g200)",
          background: "var(--off)",
        }}
      >
        <span
          style={{
            fontSize: "0.65rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            fontWeight: 600,
            color: "var(--red)",
          }}
        >
          {c.categoryLabel}
        </span>
        <span
          style={{
            fontSize: "0.65rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "var(--g400)",
            fontWeight: 400,
          }}
        >
          {c.region}
        </span>
      </div>

      {/* ── BODY ── */}
      <div
        className="m-case-body"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
        }}
      >
        {/* LEFT — narrative */}
        <div
          style={{
            padding: "2rem 2rem",
            borderRight: "0.5px solid var(--g200)",
          }}
        >
          {/* Client name */}
          <div
            style={{
              fontFamily: fd,
              fontSize: "2rem",
              fontWeight: 900,
              textTransform: "uppercase",
              color: "var(--black)",
              lineHeight: 1,
              marginBottom: "0.2rem",
            }}
          >
            {c.client}
          </div>
          <div
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--g400)",
              marginBottom: "1.75rem",
              fontWeight: 300,
            }}
          >
            {c.tagline}
          </div>

          {/* Challenge */}
          <div style={{ marginBottom: "1.25rem" }}>
            <div
              style={{
                fontSize: "0.62rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--g400)",
                fontWeight: 600,
                marginBottom: "0.5rem",
              }}
            >
              El problema
            </div>
            <div
              style={{
                background: "var(--off)",
                borderLeft: "2px solid rgba(241,42,41,0.35)",
                borderRadius: "0 6px 6px 0",
                padding: "0.9rem 1rem",
              }}
            >
              <p
                style={{
                  fontSize: "0.86rem",
                  fontWeight: 300,
                  lineHeight: 1.7,
                  color: "var(--g600)",
                }}
              >
                {c.challenge}
              </p>
            </div>
          </div>

          {/* Solution */}
          <div style={{ marginBottom: "1.25rem" }}>
            <div
              style={{
                fontSize: "0.62rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--g400)",
                fontWeight: 600,
                marginBottom: "0.5rem",
              }}
            >
              Qué cambió
            </div>
            <p
              style={{
                fontSize: "0.86rem",
                fontWeight: 300,
                lineHeight: 1.7,
                color: "var(--g600)",
              }}
            >
              {c.solution}
            </p>
          </div>

          {/* Outcome */}
          <div
            style={{
              background: "rgba(241,42,41,0.05)",
              border: "0.5px solid rgba(241,42,41,0.15)",
              borderRadius: 6,
              padding: "0.9rem 1rem",
            }}
          >
            <div
              style={{
                fontSize: "0.62rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--red)",
                fontWeight: 600,
                marginBottom: "0.4rem",
              }}
            >
              Resultado
            </div>
            <p
              style={{
                fontSize: "0.86rem",
                fontWeight: 400,
                lineHeight: 1.65,
                color: "var(--black)",
              }}
            >
              {c.outcome}
            </p>
          </div>
        </div>

        {/* RIGHT — metrics + quote */}
        <div
          style={{
            padding: "2rem 2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            background: "var(--white)",
          }}
        >
          {/* Hero metric */}
          <div
            style={{
              background: "var(--black)",
              borderRadius: 10,
              padding: "1.5rem",
            }}
          >
            <div
              style={{
                fontSize: "0.6rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
                marginBottom: "0.5rem",
                fontWeight: 500,
              }}
            >
              Resultado clave
            </div>
            <div
              style={{
                fontFamily: fd,
                fontSize: "3.2rem",
                fontWeight: 900,
                color: "var(--red)",
                lineHeight: 1,
              }}
            >
              {c.heroMetric}
            </div>
            <div
              style={{
                fontSize: "0.82rem",
                color: "rgba(255,255,255,0.6)",
                fontWeight: 300,
                marginTop: "0.35rem",
                lineHeight: 1.45,
              }}
            >
              {c.heroCaption}
            </div>
          </div>

          {/* Supporting metrics grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "0.6rem",
            }}
          >
            {c.metrics.map((m, i) => (
              <div
                key={i}
                style={{
                  border: "0.5px solid var(--g200)",
                  borderRadius: 8,
                  padding: "0.85rem 0.9rem",
                  background: "var(--off)",
                }}
              >
                <div
                  style={{
                    fontFamily: fd,
                    fontSize: "1.4rem",
                    fontWeight: 800,
                    color: "var(--black)",
                    lineHeight: 1,
                  }}
                >
                  {m.value}
                </div>
                <div
                  style={{
                    fontSize: "0.68rem",
                    color: "var(--g400)",
                    fontWeight: 300,
                    marginTop: 3,
                    lineHeight: 1.4,
                  }}
                >
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          {/* Quote */}
          <div
            style={{
              borderTop: "0.5px solid var(--g200)",
              paddingTop: "1.25rem",
            }}
          >
            <div
              style={{
                fontFamily: fd,
                fontSize: "1.8rem",
                fontWeight: 900,
                color: "var(--red)",
                lineHeight: 0.8,
                marginBottom: "0.4rem",
              }}
            >
              &ldquo;
            </div>
            <blockquote style={{ margin: 0, padding: 0 }}>
              <p
                style={{
                  fontSize: "0.84rem",
                  fontWeight: 300,
                  lineHeight: 1.65,
                  color: "var(--g600)",
                  fontStyle: "normal",
                  marginBottom: "0.85rem",
                }}
              >
                {c.quote}
              </p>
            </blockquote>
            <cite
              style={{
                fontStyle: "normal",
                display: "flex",
                alignItems: "center",
                gap: "0.65rem",
              }}
            >
              <img
                src={c.quotePhoto}
                alt={c.quoteName}
                loading="lazy"
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  objectFit: "cover",
                  flexShrink: 0,
                  background: "var(--g200)",
                }}
              />
              <div>
                <div
                  style={{
                    fontWeight: 600,
                    fontSize: "0.82rem",
                    color: "var(--black)",
                  }}
                >
                  {c.quoteName}
                </div>
                <div
                  style={{
                    fontSize: "0.68rem",
                    color: "var(--g400)",
                  }}
                >
                  {c.quoteRole}
                </div>
              </div>
            </cite>
          </div>
        </div>
      </div>
    </article>
  );
}
