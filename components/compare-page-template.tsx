"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import CTASection from "@/components/cta-section";
import { Check, X, type LucideIcon } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

type CellValue = true | false | string;

interface CompareRow {
  feature: string;
  colabr8: CellValue;
  competitor: CellValue;
}

interface DiffCard {
  icon: LucideIcon;
  title: string;
  body: string;
}

interface PricingTier {
  label: string;
  colabr8Price: string;
  competitorPrice: string;
  note?: string;
}

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface ComparePageData {
  competitor: string;
  competitorSlug: string;
  heroHeadline: string;
  heroSubtext: string;
  introParagraph: string;
  tableRows: CompareRow[];
  diffCards: DiffCard[];
  pricingTiers: PricingTier[];
  testimonials: Testimonial[];
}

// ─── Cell Renderer ────────────────────────────────────────────────────────────

function Cell({ value, brand }: { value: CellValue; brand: "colabr8" | "competitor" }) {
  const isColabr8 = brand === "colabr8";

  if (value === true) {
    return (
      <div className="flex justify-center">
        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${isColabr8 ? "bg-primary/20" : "bg-white/5"}`}>
          <Check className={`w-3.5 h-3.5 ${isColabr8 ? "text-primary" : "text-white/50"}`} strokeWidth={2.5} />
        </div>
      </div>
    );
  }
  if (value === false) {
    return (
      <div className="flex justify-center">
        <div className="w-6 h-6 rounded-full flex items-center justify-center bg-red-500/10">
          <X className="w-3 h-3 text-red-400/70" strokeWidth={2} />
        </div>
      </div>
    );
  }
  return (
    <div className="flex justify-center">
      <span className={`text-xs font-medium rounded-full px-2.5 py-0.5 ${
        isColabr8
          ? "bg-primary/10 text-primary"
          : "bg-amber-500/10 text-amber-400"
      }`}>
        {value}
      </span>
    </div>
  );
}

// ─── Template ─────────────────────────────────────────────────────────────────

export default function ComparePageTemplate({ data }: { data: ComparePageData }) {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true });
  const tableRef = useRef<HTMLDivElement>(null);
  const tableInView = useInView(tableRef, { once: true, margin: "-60px" });
  const diffRef = useRef<HTMLDivElement>(null);
  const diffInView = useInView(diffRef, { once: true, margin: "-60px" });
  const pricingRef = useRef<HTMLDivElement>(null);
  const pricingInView = useInView(pricingRef, { once: true, margin: "-60px" });

  return (
    <div className="min-h-screen bg-bg">
      <Nav />

      {/* ── Hero ── */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 60% 0%, rgba(61,237,122,0.1) 0%, transparent 55%)",
          }}
        />

        <div ref={heroRef} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-surface border border-divider rounded-full px-4 py-1.5 mb-8"
          >
            <span className="text-secondary text-xs font-medium tracking-wide uppercase">
              COLABR8 TECH vs {data.competitor}
            </span>
          </motion.div>

          <div className="max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-extrabold text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] mb-7"
            >
              {data.heroHeadline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
              className="text-secondary text-xl leading-relaxed mb-10 max-w-2xl"
            >
              {data.heroSubtext}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/pricing"
                className="inline-flex items-center bg-primary text-bg font-semibold text-base px-7 py-3.5 rounded-full hover:bg-primary/90 transition-all duration-200 hover:shadow-[0_0_40px_rgba(61,237,122,0.35)]"
              >
                Try COLABR8 TECH free
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center border border-white/20 text-white text-base px-7 py-3.5 rounded-full hover:border-white/40 hover:bg-white/5 transition-all duration-200"
              >
                Book a demo
              </Link>
            </motion.div>
          </div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="flex flex-wrap gap-6 mt-14 pt-14 border-t border-divider"
          >
            {[
              "14-day free trial",
              "No credit card required",
              "No per-seat fees",
              "Cancel anytime",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-secondary">
                <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" strokeWidth={2.5} />
                {item}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="py-16 bg-surface border-y border-divider">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-secondary text-lg leading-relaxed">{data.introParagraph}</p>
        </div>
      </section>

      {/* ── Comparison Table ── */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={tableRef} className="text-center mb-14">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={tableInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="font-display font-extrabold text-4xl text-white mb-4"
            >
              Feature by feature
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={tableInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-secondary text-lg"
            >
              See exactly what each platform includes — no marketing spin.
            </motion.p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-divider">
            <table className="w-full min-w-[540px]">
              <thead>
                <tr className="border-b border-divider">
                  <th className="text-left px-6 py-5 text-secondary text-sm font-medium w-1/2">
                    Feature
                  </th>
                  <th className="px-6 py-5 text-center w-1/4">
                    <div className="flex flex-col items-center gap-1">
                      <span className="font-bold text-sm text-primary">COLABR8 TECH</span>
                      <span className="text-xs text-secondary font-normal">from £49/mo</span>
                    </div>
                  </th>
                  <th className="px-6 py-5 text-center w-1/4">
                    <div className="flex flex-col items-center gap-1">
                      <span className="font-bold text-sm text-white">{data.competitor}</span>
                      <span className="text-xs text-secondary font-normal">see notes</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.tableRows.map((row, i) => (
                  <motion.tr
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={tableInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: i * 0.025, ease: "easeOut" }}
                    className="border-t border-divider hover:bg-surface transition-colors"
                  >
                    <td className="px-6 py-4 text-sm text-secondary">{row.feature}</td>
                    <td className="px-6 py-4 bg-primary/[0.02]">
                      <Cell value={row.colabr8} brand="colabr8" />
                    </td>
                    <td className="px-6 py-4">
                      <Cell value={row.competitor} brand="competitor" />
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Why Teams Switch ── */}
      <section className="py-24 bg-surface border-y border-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={diffRef} className="text-center mb-14">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={diffInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="font-display font-extrabold text-4xl text-white mb-4"
            >
              Why teams switch to COLABR8 TECH
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.diffCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 28 }}
                  animate={diffInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="group bg-surface-elevated border border-divider rounded-2xl p-7 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                    <Icon className="w-5 h-5 text-primary" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-display font-bold text-white text-lg mb-3">{card.title}</h3>
                  <p className="text-secondary text-sm leading-relaxed">{card.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Pricing Comparison ── */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={pricingRef} className="text-center mb-14">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={pricingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="font-display font-extrabold text-4xl text-white mb-4"
            >
              The real cost difference
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={pricingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-secondary text-lg"
            >
              What you actually pay at different team sizes.
            </motion.p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-divider">
            <table className="w-full min-w-[480px]">
              <thead>
                <tr className="border-b border-divider bg-surface-elevated">
                  <th className="text-left px-6 py-4 text-sm font-medium text-secondary">Scenario</th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-primary">COLABR8 TECH</th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-white">{data.competitor}</th>
                </tr>
              </thead>
              <tbody>
                {data.pricingTiers.map((tier, i) => (
                  <motion.tr
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    animate={pricingInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="border-t border-divider"
                  >
                    <td className="px-6 py-4">
                      <div className="text-sm text-white font-medium">{tier.label}</div>
                      {tier.note && <div className="text-xs text-muted mt-0.5">{tier.note}</div>}
                    </td>
                    <td className="px-6 py-4 text-center bg-primary/[0.02]">
                      <span className="font-mono font-bold text-primary text-base">{tier.colabr8Price}</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="font-mono font-bold text-white/70 text-base">{tier.competitorPrice}</span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-24 bg-surface border-y border-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-extrabold text-3xl text-white mb-12 text-center">
            What our customers say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-surface-elevated border border-divider rounded-2xl p-7"
              >
                <div className="text-3xl font-serif text-primary mb-4 leading-none">&ldquo;</div>
                <p className="text-secondary text-sm leading-relaxed mb-6">{t.quote}</p>
                <div>
                  <div className="text-white text-sm font-semibold">{t.author}</div>
                  <div className="text-muted text-xs mt-0.5">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <CTASection />

      <Footer />
    </div>
  );
}
