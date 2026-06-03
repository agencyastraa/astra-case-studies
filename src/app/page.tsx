import CasesGrid from "./components/CasesGrid";

const fd = "var(--font-display), sans-serif";
const fb = "var(--font-body), sans-serif";

const STATS = [
  { num: "15+", lbl: "Founders respaldados" },
  { num: "$1M+", lbl: "En profit generado" },
  { num: "3.2x", lbl: "ROAS lift promedio" },
  { num: "4 años", lbl: "Corriendo cuentas Meta rentables" },
];

export default function Home() {
  return (
    <div style={{ fontFamily: fb }}>

      {/* ── NAV ── */}
      <nav className="m-nav" style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1.25rem 4rem",
        borderBottom: "0.5px solid var(--g200)",
        background: "var(--white)",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}>
        <a href="https://agencyastra.com" style={{ display: "block" }}>
          <img
            src="/logo-astra.png"
            alt="Astra Agency"
            style={{ height: 52, mixBlendMode: "multiply" }}
          />
        </a>
        <a
          href="https://calendly.com/admin-agencyastra/30-min-profit-strategy-call"
          target="_blank"
          rel="noopener noreferrer"
          className="m-nav-cta"
          style={{
            fontFamily: fb,
            fontSize: "0.85rem",
            fontWeight: 500,
            padding: "0.65rem 1.4rem",
            background: "var(--red)",
            color: "var(--white)",
            border: "none",
            borderRadius: 5,
            textDecoration: "none",
            display: "inline-block",
          }}
        >
          Habla con nosotros →
        </a>
      </nav>

      {/* ── HERO ── */}
      <section className="m-hero" style={{
        padding: "4.5rem 4rem 4rem",
        maxWidth: 960,
        margin: "0 auto",
        textAlign: "center",
      }}>
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          fontSize: "0.72rem",
          fontWeight: 500,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "var(--g600)",
          marginBottom: "1.5rem",
          border: "0.5px solid var(--g200)",
          padding: "0.4rem 1.1rem",
          borderRadius: 100,
          background: "var(--white)",
        }}>
          <span style={{
            width: 6, height: 6, borderRadius: "50%",
            background: "var(--red)", flexShrink: 0, display: "inline-block",
          }} />
          Resultados de clientes activos · Sin outliers
        </div>

        <h1 style={{
          fontFamily: fd,
          fontSize: "clamp(2.5rem, 5.5vw, 4.2rem)",
          fontWeight: 900,
          lineHeight: 1.0,
          letterSpacing: "-0.01em",
          textTransform: "uppercase",
          color: "var(--black)",
          marginBottom: "1.25rem",
        }}>
          Cuentas reales.
          <br />
          Números reales.
          <br />
          <em style={{ color: "var(--red)" }}>Sin teatro.</em>
        </h1>

        <p className="m-hero-sub" style={{
          fontSize: "0.95rem",
          fontWeight: 300,
          lineHeight: 1.75,
          color: "var(--g600)",
          maxWidth: 580,
          margin: "0 auto 2rem",
        }}>
          Estos son los resultados de founders que dejaron de adivinar
          y empezaron a escalar con un sistema que ata cada peso de ads
          a revenue real.
        </p>

        <a
          href="https://calendly.com/admin-agencyastra/30-min-profit-strategy-call"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary m-btn-full"
        >
          Quiero resultados así →
        </a>
        <p style={{ marginTop: "0.75rem", fontSize: "0.75rem", color: "var(--g400)" }}>
          Auditoría gratuita. Sin deck. Sin pitch.
        </p>
      </section>

      {/* ── STATS BAR ── */}
      <div className="m-stats" style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        background: "var(--black)",
        borderTop: "0.5px solid rgba(255,255,255,0.06)",
        borderBottom: "0.5px solid rgba(255,255,255,0.06)",
      }}>
        {STATS.map((s, i, arr) => (
          <div
            key={i}
            className="m-stat-item"
            style={{
              padding: "1.5rem 1.75rem",
              borderRight: i < arr.length - 1
                ? "0.5px solid rgba(255,255,255,0.06)"
                : "none",
              display: "flex",
              flexDirection: "column",
              gap: "0.3rem",
            }}
          >
            <div style={{
              fontFamily: fd,
              fontSize: "2.2rem",
              fontWeight: 900,
              color: "var(--white)",
              lineHeight: 1,
              letterSpacing: "-0.02em",
            }}>
              {s.num}
            </div>
            <div style={{
              fontSize: "0.68rem",
              color: "rgba(255,255,255,0.35)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontWeight: 400,
            }}>
              {s.lbl}
            </div>
          </div>
        ))}
      </div>

      {/* ── CASES ── */}
      <section className="m-section" style={{
        padding: "4rem 4rem",
        background: "var(--off)",
        borderBottom: "0.5px solid var(--g200)",
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p className="section-label">Casos de éxito</p>
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "2rem",
            flexWrap: "wrap",
            gap: "1rem",
          }}>
            <h2 style={{
              fontFamily: fd,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              textTransform: "uppercase",
              color: "var(--black)",
              lineHeight: 1.1,
            }}>
              Lo que pasa cuando<br />
              <span style={{ color: "var(--red)" }}>arreglamos lo correcto.</span>
            </h2>
            <p style={{
              fontSize: "0.82rem",
              color: "var(--g600)",
              maxWidth: 280,
              textAlign: "right",
              lineHeight: 1.55,
              fontWeight: 300,
            }}>
              Cada caso es un sistema arreglado, no
              un presupuesto subido.
            </p>
          </div>

          <CasesGrid />
        </div>
      </section>

      {/* ── METHODOLOGY NOTE ── */}
      <section className="m-section" style={{
        padding: "3.5rem 4rem",
        background: "var(--white)",
        borderBottom: "0.5px solid var(--g200)",
      }}>
        <div style={{
          maxWidth: 760,
          margin: "0 auto",
          display: "flex",
          gap: "2rem",
          alignItems: "flex-start",
        }}>
          <div style={{
            width: 3,
            minHeight: 60,
            background: "var(--red)",
            flexShrink: 0,
            borderRadius: 2,
          }} />
          <div>
            <div style={{
              fontFamily: fd,
              fontSize: "1.15rem",
              fontWeight: 800,
              textTransform: "uppercase",
              color: "var(--black)",
              marginBottom: "0.6rem",
              lineHeight: 1.25,
            }}>
              Metodología: ningún resultado está inflado.
            </div>
            <p style={{
              fontSize: "0.88rem",
              fontWeight: 300,
              color: "var(--g600)",
              lineHeight: 1.75,
            }}>
              Cada número viene de la cuenta de ads del cliente, de su
              CRM o de su reporte de órdenes. No comparamos con periodos
              de baja estacional. No usamos outliers como promedio.
              Si no podemos atribuirlo, no lo reportamos.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="m-cta" style={{
        background: "var(--red)",
        padding: "8rem 4rem",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <p style={{
            fontSize: "0.68rem",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.6)",
            marginBottom: "1.25rem",
            fontWeight: 500,
          }}>
            Auditoría gratuita de cuenta
          </p>
          <h2 style={{
            fontFamily: fd,
            fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
            fontWeight: 900,
            textTransform: "uppercase",
            color: "var(--white)",
            lineHeight: 1.05,
            marginBottom: "1.25rem",
          }}>
            ¿Tu cuenta podría estar aquí?
          </h2>
          <p style={{
            fontSize: "0.95rem",
            fontWeight: 300,
            color: "rgba(255,255,255,0.75)",
            lineHeight: 1.75,
            marginBottom: "2.5rem",
          }}>
            Mándanos tu cuenta. Un senior la revisa. Agendamos 20 minutos
            y te mostramos en vivo los 3 puntos de fuga más grandes —
            qué te está costando dinero, qué está oculto, y qué movería
            la aguja si se arregla este mes.
          </p>
          <a
            href="https://calendly.com/admin-agencyastra/30-min-profit-strategy-call"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-white m-btn-full"
          >
            Agenda el teardown →
          </a>
          <p style={{
            marginTop: "1.25rem",
            fontSize: "0.72rem",
            color: "rgba(255,255,255,0.45)",
          }}>
            Para SaaS y DTC que gastan $10K+/mes en Meta Ads.
          </p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="m-footer" style={{
        padding: "1.75rem 4rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "var(--black)",
        borderTop: "0.5px solid rgba(255,255,255,0.06)",
      }}>
        <img
          src="/logo-astra.png"
          alt="Astra Agency"
          style={{ height: 90, filter: "brightness(0) invert(1)" }}
        />
        <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.3)" }}>
          © 2026 Astra Agency. All rights reserved.
        </p>
      </footer>

    </div>
  );
}
