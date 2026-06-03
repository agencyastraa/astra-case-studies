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
              Every brand below came to us with a real problem. Here&apos;s
              what happened when we got to work.
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
            <div className="case-name">OneTool</div>
            <p className="case-intro">
              They were doing 35 to 40 orders a day. Decent numbers — until they
              weren&apos;t. Month after month, the same ceiling. More spend, same
              orders. The kind of plateau that makes you wonder if you&apos;ve hit
              the limit of what&apos;s possible for your store.
            </p>
            <p className="case-intro">They hadn&apos;t.</p>

            <div className="case-grid">
              <div className="story-panel">
                <p className="panel-label">What happened</p>
                <p className="story-text">
                  Their campaigns were running — but nothing was actually working
                  together. Budget was being spent, ads were live, but the orders
                  stayed flat. No clear signal on what was driving revenue and
                  what was just burning cash.
                </p>
                <div className="story-highlight">
                  <p>
                    75 days after Astra took over, they had a new problem: they
                    couldn&apos;t fulfill the orders fast enough.
                  </p>
                </div>
                <p className="story-text">
                  Demand grew faster than their warehouse could handle. They had
                  to <strong>pause their campaigns</strong> — not because they
                  ran out of budget, but because they ran out of product.
                </p>
                <p className="story-text">
                  They restocked, scaled their supply chain — and we turned the
                  campaigns back on. Same system, more inventory,{" "}
                  <strong>more room to grow.</strong>
                </p>
              </div>

              <div className="metrics-panel">
                <p className="panel-label" style={{ color: "rgba(255,255,255,0.35)" }}>
                  Results · 12-month period
                </p>
                <div className="metric-hero">
                  <div className="metric-hero-num">8.4x</div>
                  <div className="metric-hero-label">
                    Return on ad spend — every dollar put in came back as $8.40 in revenue
                  </div>
                </div>
                <div className="metric-row">
                  <div>
                    <div className="metric-item-num">$549K</div>
                    <div className="metric-item-label">Revenue from $65K in ad spend</div>
                  </div>
                  <div>
                    <div className="metric-item-num">75 days</div>
                    <div className="metric-item-label">From plateau to full-scale demand</div>
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
                They restocked, scaled their supply chain — and we turned the
                campaigns back on.{" "}
                <strong>Same system, more inventory, more room to grow.</strong>
              </p>
            </div>

            <div className="testimonial-placeholder">
              <div className="testi-quote-icon">&ldquo;</div>
              <div>
                <div className="testi-placeholder-badge">⚠ Add real testimonial</div>
                <p className="testi-placeholder-text">
                  [Real client quote — ideally mentioning the problem before, the
                  concrete result, and what it was like working with Astra.]
                </p>
                <div className="testi-placeholder-author">
                  <div className="testi-avatar">photo</div>
                  <div>
                    <div className="testi-name-placeholder">[Client name]</div>
                    <div className="testi-role-placeholder">[Role] · OneTool</div>
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
            <div className="case-name">Compumax</div>
            <p className="case-intro">
              At their peak, Compumax was doing $30K to $40K a month. Then,
              slowly, it started slipping. Not a crash — a slow bleed. Month
              after month, a little less. Until they hit $18K. Below break-even.
            </p>

            <div className="case-grid">
              <div className="story-panel">
                <p className="panel-label">What happened</p>
                <p className="story-text">
                  The instinct when revenue drops is to spend more on ads. They
                  did. It didn&apos;t help — because the problem wasn&apos;t the
                  budget. <strong>It was everything else.</strong>
                </p>
                <p className="story-text">
                  Their campaigns had no structure. Their creative was running on
                  fumes. And for every laptop they sold, they were spending 25 to
                  30 cents of every dollar just to get that customer in the door.
                </p>
                <div className="story-highlight">
                  <p>When you&apos;re already below break-even, that math doesn&apos;t work.</p>
                </div>
                <p className="story-text">
                  We rebuilt everything from scratch — campaigns, creative,
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
                    Monthly revenue — up from $18K at their lowest point
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
                    <span className="dv">$18K/mo — below break-even</span>
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

            <div className="testimonial-placeholder">
              <div className="testi-quote-icon">&ldquo;</div>
              <div>
                <div className="testi-placeholder-badge">⚠ Add real testimonial</div>
                <p className="testi-placeholder-text">
                  [Real client quote — ideally mentioning the problem before, the
                  concrete result, and what it was like working with Astra.]
                </p>
                <div className="testi-placeholder-author">
                  <div className="testi-avatar">photo</div>
                  <div>
                    <div className="testi-name-placeholder">[Client name]</div>
                    <div className="testi-role-placeholder">[Role] · Compumax</div>
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
            <div className="case-name">Tu Mundo Salud</div>
            <p className="case-intro">
              They were already running ads. Already spending money. Already
              getting some sales. The problem wasn&apos;t that nothing was working
              — it was that they had no idea <em>what</em> was working or why.
            </p>

            <div className="case-grid">
              <div className="story-panel">
                <p className="panel-label">What happened</p>
                <p className="story-text">
                  Their ad account was a mess — not the visible kind, where
                  everything&apos;s obviously broken. The quiet kind, where
                  you&apos;re running campaigns, spending budget, and things seem
                  to move just enough to feel like progress. But the numbers
                  don&apos;t add up.
                </p>
                <p className="story-text">
                  Events weren&apos;t tracking correctly. Products were being
                  promoted at random with no strategy behind what to push or when.
                  There was no structure connecting their ads to actual revenue.
                </p>
                <div className="story-highlight">
                  <p>They didn&apos;t need to spend more. They needed to spend smarter.</p>
                </div>
                <p className="story-text">
                  We came in, fixed the tracking, built a real campaign structure,
                  and gave every dollar a job.{" "}
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
                    Revenue growth — without increasing their ad budget by a single dollar
                  </div>
                </div>
                <div className="metric-row">
                  <div>
                    <div className="metric-item-num">$0</div>
                    <div className="metric-item-label">Additional ad spend required</div>
                  </div>
                  <div>
                    <div className="metric-item-num">2 mo.</div>
                    <div className="metric-item-label">To see the full impact</div>
                  </div>
                </div>
                <div className="detail-list">
                  <div className="detail-row">
                    <span className="dk">What changed</span>
                    <span className="dv">Structure, tracking &amp; strategy</span>
                  </div>
                  <div className="detail-row">
                    <span className="dk">What didn&apos;t change</span>
                    <span className="dv">The budget</span>
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
                Same budget. Same products.{" "}
                <strong>2.5x the revenue.</strong> The only thing that changed
                was the system behind the ads.
              </p>
            </div>

            <div className="testimonial-placeholder">
              <div className="testi-quote-icon">&ldquo;</div>
              <div>
                <div className="testi-placeholder-badge">⚠ Add real testimonial</div>
                <p className="testi-placeholder-text">
                  [Real client quote — ideally mentioning the problem before, the
                  concrete result, and what it was like working with Astra.]
                </p>
                <div className="testi-placeholder-author">
                  <div className="testi-avatar">photo</div>
                  <div>
                    <div className="testi-name-placeholder">[Client name]</div>
                    <div className="testi-role-placeholder">[Role] · Tu Mundo Salud</div>
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
            We&apos;ll look at your real account, identify exactly where the
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
