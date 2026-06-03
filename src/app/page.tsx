import OtherCases from "./components/OtherCases";

const CALENDLY = "https://calendly.com/admin-agencyastra/30-min-profit-strategy-call";

export default function Home() {
  return (
    <>
      {/* ── NAV ── */}
      <nav className="nav">
        <div className="nav-left">
          <div className="nav-logo">
            <img src="/logo-astra.png" alt="Astra Agency" style={{ filter: "brightness(0)" }} />
          </div>
        </div>
        <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="nav-cta">
          Get a free audit →
        </a>
      </nav>

      <div style={{ paddingTop: "var(--nav-h)" }}>

        {/* ── PAGE HERO ── */}
        <div className="page-hero">
          <div className="case-inner">
            <p className="page-hero-label">Case Studies</p>
            <h1>
              Real brands.<br />
              <em>Real numbers.</em>
            </h1>
            <p className="page-hero-sub">
              Each brand here came to us with a real problem.
              Here&apos;s what happened when we got involved.
            </p>
          </div>
        </div>

        {/* ══════════════════════════════════════
            CASE 1 — ONETOOL
        ══════════════════════════════════════ */}
        <section className="case-section" id="onetool">
          <div className="case-inner">
            <div className="case-eyebrow">
              <span className="case-tag">DTC</span>
              <span className="case-tag-divider" />
              <span className="case-industry">Construction Supply · E-commerce</span>
            </div>
            <div className="case-name-row">
              <div className="case-name">OneTool</div>
              <img src="/logo-onetool.png" alt="OneTool" className="case-logo" style={{ height: 52 }} />
            </div>
            <p className="case-intro">
              OneTool was already doing 35 to 40 orders a day. Solid numbers,
              but completely stuck. For months, every time they pushed harder on
              spend, orders stayed flat. The ceiling felt real.
            </p>
            <p className="case-intro">It wasn&apos;t.</p>

            <div className="case-grid">
              <div className="story-panel">
                <p className="panel-label">What happened</p>
                <p className="story-text">
                  The problem wasn&apos;t budget. The campaigns were live, money
                  was going out, but everything was running in isolation. There
                  was no structure connecting what they spent to what they
                  actually sold. Scaling the budget just meant scaling the waste.
                </p>
                <div className="story-highlight">
                  <p>
                    75 days after we started working together, they had a new
                    problem: they couldn&apos;t fulfill orders fast enough.
                  </p>
                </div>
                <p className="story-text">
                  Demand grew faster than their warehouse could handle. They had
                  to <strong>pause their campaigns</strong> not because they ran
                  out of budget, but because they ran out of product.
                </p>
                <p className="story-text">
                  They restocked, built out the supply chain, and we started
                  everything back up.{" "}
                  <strong>Same system, more room to grow.</strong>
                </p>
              </div>

              <div className="metrics-panel">
                <p className="panel-label" style={{ color: "rgba(255,255,255,0.35)" }}>
                  Results · 12-month period
                </p>
                <div className="metric-hero">
                  <div className="metric-hero-num">8.4x</div>
                  <div className="metric-hero-label">
                    Return on ad spend over 12 months. Every dollar in, $8.40 back.
                  </div>
                </div>
                <div className="metric-row">
                  <div>
                    <div className="metric-item-num">$549K</div>
                    <div className="metric-item-label">Revenue generated from $65K in ad spend over 12 months</div>
                  </div>
                  <div>
                    <div className="metric-item-num">75 days</div>
                    <div className="metric-item-label">To go from plateau to 100+ orders a day</div>
                  </div>
                </div>
                <div className="detail-list">
                  <div className="detail-row">
                    <span className="dk">Daily orders before</span>
                    <span className="dv">35–40 / day</span>
                  </div>
                  <div className="detail-row">
                    <span className="dk">Daily orders after</span>
                    <span className="dv">100+ / day</span>
                  </div>
                  <div className="detail-row">
                    <span className="dk">Channel</span>
                    <span className="dv">Meta Ads</span>
                  </div>
                  <div className="detail-row">
                    <span className="dk">Period</span>
                    <span className="dv">12 months</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="case-strip">
              <span className="strip-arrow">→</span>
              <p className="strip-text">
                They restocked, built out their supply chain, and we turned
                everything back on.{" "}
                <strong>Same system, more inventory, more room to grow.</strong>
              </p>
            </div>

            <div className="testimonial">
              <div className="testi-quote-icon">&ldquo;</div>
              <div>
                <p className="testi-text">
                  I spent months thinking we&apos;d hit the ceiling for our market.
                  Turns out the ceiling was in the campaigns, not the product. We
                  actually had to pause ads because we ran out of stock. Never
                  had that problem before.
                </p>
                <div className="testi-author">
                  <img src="/testimonial-onetool.png" alt="Oswaldo Arias" className="testi-photo" width={38} height={38} />
                  <div>
                    <div className="testi-name">Oswaldo Arias</div>
                    <div className="testi-role">CEO · OneTool</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            CASE 2 — COMPUMAX
        ══════════════════════════════════════ */}
        <section className="case-section" id="compumax" style={{ background: "var(--g100)" }}>
          <div className="case-inner">
            <div className="case-eyebrow">
              <span className="case-tag">DTC</span>
              <span className="case-tag-divider" />
              <span className="case-industry">Laptops &amp; Tech Accessories · E-commerce</span>
            </div>
            <div className="case-name-row">
              <div className="case-name">Compumax</div>
              <img src="/logo-compumax.png" alt="Compumax" className="case-logo" />
            </div>
            <p className="case-intro">
              At their peak, Compumax was hitting $30K to $40K a month. Then it
              started slipping. Not a crash, just a slow, quiet drop. Month after
              month a little less, until they landed at $18K. Below break-even.
            </p>

            <div className="case-grid">
              <div className="story-panel">
                <p className="panel-label">What happened</p>
                <p className="story-text">
                  When revenue drops, the first instinct is to spend more on ads.
                  They tried that. It didn&apos;t move the needle, because the
                  problem had nothing to do with budget.
                </p>
                <p className="story-text">
                  Their campaigns had no structure. Creative was running on fumes.
                  For every laptop they sold, they were spending 25 to 30 cents of
                  every dollar just to get that customer in the door.
                </p>
                <div className="story-highlight">
                  <p>When you&apos;re already below break-even, that math doesn&apos;t work.</p>
                </div>
                <p className="story-text">
                  We rebuilt everything from scratch. Campaigns, creative,
                  structure. Not one thing at a time.{" "}
                  <strong>All of it, at once.</strong> Because everything was
                  broken at once.
                </p>
                <p className="story-text">
                  Four months later, they weren&apos;t just back. They{" "}
                  <strong>passed their previous peak and kept going.</strong>
                </p>
              </div>

              <div className="metrics-panel">
                <p className="panel-label" style={{ color: "rgba(255,255,255,0.35)" }}>
                  Results · Jan → Apr 2026
                </p>
                <div className="metric-hero">
                  <div className="metric-hero-num">$50K+</div>
                  <div className="metric-hero-label">
                    Monthly revenue, up from $18K at their lowest point
                  </div>
                </div>
                <div className="metric-row">
                  <div>
                    <div className="metric-item-num green">+178%</div>
                    <div className="metric-item-label">Revenue growth in 4 months</div>
                  </div>
                  <div>
                    <div className="metric-item-num">4 mo.</div>
                    <div className="metric-item-label">From below break-even to new peak</div>
                  </div>
                </div>
                <div className="ba-block">
                  <p className="ba-label-top">Cost to acquire a customer</p>
                  <div className="ba-row">
                    <span className="ba-tag">Before</span>
                    <div className="ba-bar-wrap"><div className="ba-bar before" /></div>
                    <span className="ba-val before">30%</span>
                  </div>
                  <div className="ba-row">
                    <span className="ba-tag">After</span>
                    <div className="ba-bar-wrap"><div className="ba-bar after" /></div>
                    <span className="ba-val after">18%</span>
                  </div>
                </div>
                <div className="detail-list">
                  <div className="detail-row">
                    <span className="dk">Starting point</span>
                    <span className="dv">$18K/mo, below break-even</span>
                  </div>
                  <div className="detail-row">
                    <span className="dk">Channel</span>
                    <span className="dv">Meta Ads</span>
                  </div>
                  <div className="detail-row">
                    <span className="dk">Timeline</span>
                    <span className="dv">4 months</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="case-strip">
              <span className="strip-arrow">→</span>
              <p className="strip-text">
                They passed their previous peak in month three.{" "}
                <strong>Month four, they kept going.</strong>
              </p>
            </div>

            <div className="testimonial">
              <div className="testi-quote-icon">&ldquo;</div>
              <div>
                <p className="testi-text">
                  The scary part wasn&apos;t one bad month. It was that every month
                  was worse than the last and I couldn&apos;t figure out why. The
                  team didn&apos;t just tweak things, they rebuilt everything from
                  zero. By month three we were already past our old best.
                </p>
                <div className="testi-author">
                  <img src="/testimonial-compumax.png" alt="Luis Scocia" className="testi-photo" width={38} height={38} />
                  <div>
                    <div className="testi-name">Luis Scocia</div>
                    <div className="testi-role">CEO · Compumax</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            CASE 3 — TU MUNDO SALUD
        ══════════════════════════════════════ */}
        <section className="case-section" id="tumundosalud">
          <div className="case-inner">
            <div className="case-eyebrow">
              <span className="case-tag">DTC</span>
              <span className="case-tag-divider" />
              <span className="case-industry">Health Supplements · E-commerce</span>
            </div>
            <div className="case-name-row">
              <div className="case-name">Tu Mundo Salud</div>
              <img src="/logo-tumundosalud.png" alt="Tu Mundo Salud" className="case-logo" style={{ height: 48, mixBlendMode: "multiply" }} />
            </div>
            <p className="case-intro">
              Tu Mundo Salud was already running ads and getting sales. The
              budget wasn&apos;t the issue. The issue was that nobody on the team
              could explain where those sales were actually coming from.
            </p>

            <div className="case-grid">
              <div className="story-panel">
                <p className="panel-label">What happened</p>
                <p className="story-text">
                  The account wasn&apos;t obviously broken. Campaigns were
                  running, some sales were coming in. But the tracking was off,
                  products were being promoted without any real logic, and there
                  was nothing connecting ad spend to actual revenue.
                </p>
                <p className="story-text">
                  When you can&apos;t see what&apos;s working, you can&apos;t
                  lean into it. You just spread budget around and hope something
                  sticks.
                </p>
                <div className="story-highlight">
                  <p>They didn&apos;t need to spend more. They needed to spend smarter.</p>
                </div>
                <p className="story-text">
                  We fixed the tracking, built a real campaign structure, and gave
                  every dollar a clear purpose.{" "}
                  <strong>The budget didn&apos;t change. The results did.</strong>
                </p>
              </div>

              <div className="metrics-panel">
                <p className="panel-label" style={{ color: "rgba(255,255,255,0.35)" }}>
                  Results · 2 months
                </p>
                <div className="metric-hero">
                  <div className="metric-hero-num">2.5x</div>
                  <div className="metric-hero-label">
                    Revenue growth, without touching the ad budget
                  </div>
                </div>
                <div className="metric-row">
                  <div>
                    <div className="metric-item-num">675</div>
                    <div className="metric-item-label">Monthly sales, up from 270</div>
                  </div>
                  <div>
                    <div className="metric-item-num">2 mo.</div>
                    <div className="metric-item-label">To see the full impact</div>
                  </div>
                </div>
                <div className="detail-list">
                  <div className="detail-row">
                    <span className="dk">Sales before</span>
                    <span className="dv">270 / month</span>
                  </div>
                  <div className="detail-row">
                    <span className="dk">Sales after</span>
                    <span className="dv">675 / month</span>
                  </div>
                  <div className="detail-row">
                    <span className="dk">Budget change</span>
                    <span className="dv">$0 extra spend</span>
                  </div>
                  <div className="detail-row">
                    <span className="dk">What changed</span>
                    <span className="dv">Structure, tracking &amp; strategy</span>
                  </div>
                  <div className="detail-row">
                    <span className="dk">Channel</span>
                    <span className="dv">Meta Ads</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="case-strip">
              <span className="strip-arrow">→</span>
              <p className="strip-text">
                Same budget. Same products. From 270 to 675 sales a month.{" "}
                <strong>2.5x the revenue.</strong> The only thing that changed
                was the system behind the ads.
              </p>
            </div>

            <div className="testimonial">
              <div className="testi-quote-icon">&ldquo;</div>
              <div>
                <p className="testi-text">
                  I thought we just needed to spend more. The team reviewed
                  everything and showed me the budget was already there, it was
                  just going nowhere useful. They rebuilt the whole structure and
                  our sales almost tripled. Same spend, completely different result.
                </p>
                <div className="testi-author">
                  <img src="/testimonial-tumundosalud.png" alt="Javier Lupi" className="testi-photo" width={38} height={38} />
                  <div>
                    <div className="testi-name">Javier Lupi</div>
                    <div className="testi-role">Owner · Tu Mundo Salud</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── OTHER CASES ── */}
        <OtherCases />

        {/* ── CTA ── */}
        <section className="cta-section">
          <p className="cta-label">Free account audit</p>
          <h2>
            Your store is next.<br />
            <em>Let&apos;s find the gap.</em>
          </h2>
          <p className="cta-sub">
            We&apos;ll look at your real account, find exactly where the
            leaks are, and show you what a realistic path to growth looks like.
            No pitch, no pressure.
          </p>
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-white"
          >
            See exactly where your money is going →
          </a>
          <p className="cta-fine">
            Takes 15 minutes. Available for brands spending $10K+/mo in ads.
          </p>
        </section>

        {/* ── FOOTER ── */}
        <footer className="footer">
          <img
            src="/logo-astra.png"
            alt="Astra Agency"
            style={{ filter: "brightness(0) invert(1) sepia(1) saturate(3) hue-rotate(320deg)" }}
          />
          <p className="footer-copy">© 2026 Astra Agency. All rights reserved.</p>
        </footer>

      </div>
    </>
  );
}
