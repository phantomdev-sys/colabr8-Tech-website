"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import CTASection from "@/components/cta-section";
import { Check, Minus, ChevronDown, ChevronUp } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

type CellValue = true | false | string;

interface FeatureRow {
  name: string;
  starter: CellValue;
  growth: CellValue;
  enterprise: CellValue;
  tooltip?: string;
}

interface FeatureGroup {
  group: string;
  rows: FeatureRow[];
}

// ─── Plans ────────────────────────────────────────────────────────────────────

const plans = [
  {
    name: "Starter",
    tagline: "For small teams getting organised",
    monthly: 49,
    annual: 41,
    highlight: false,
    cta: "Start free trial",
    ctaHref: "https://crm.colabr8.tech",
    features: [
      "Core CRM — companies & contacts",
      "Unlimited contacts",
      "Sales pipelines and deals",
      "Basic bookings and scheduling",
      "Tasks management",
      "Team access controls",
      "CSV import & export",
      "Activity timeline",
      "Email support",
    ],
  },
  {
    name: "Growth",
    tagline: "For growing service businesses",
    monthly: 69,
    annual: 58,
    highlight: true,
    badge: "Most Popular",
    cta: "Start free trial",
    ctaHref: "https://crm.colabr8.tech",
    features: [
      "Everything in Starter",
      "Quotes and deal-linked services",
      "Advanced bookings & calendars",
      "Invoices with branded PDFs",
      "Social media scheduling",
      "Email campaigns (usage-based)",
      "Native inbox (IMAP/SMTP)",
      "AI workspace",
      "Opportunity Radar",
      "Feedback & approvals",
      "Custom dashboards",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    tagline: "For agencies and multi-team operations",
    monthly: 99,
    annual: 83,
    highlight: false,
    cta: "Contact us",
    ctaHref: "/contact",
    features: [
      "Everything in Growth",
      "Full white-label branding",
      "Advanced permissions & roles",
      "Multi-tenant architecture",
      "Visitor intelligence",
      "Portfolio intelligence & radar",
      "Attribution & ad performance",
      "Industry templates",
      "Stripe subscription management",
      "Dedicated onboarding",
      "SLA-backed support",
      "Custom terms available",
    ],
  },
];

// ─── Feature Comparison Table Data ───────────────────────────────────────────

const comparisonData: FeatureGroup[] = [
  {
    group: "CRM",
    rows: [
      { name: "Contacts & Companies", starter: true, growth: true, enterprise: true },
      { name: "Unlimited contacts", starter: true, growth: true, enterprise: true },
      { name: "Deals pipeline (Kanban)", starter: true, growth: true, enterprise: true },
      { name: "Weighted pipeline forecast", starter: true, growth: true, enterprise: true },
      { name: "Activity timeline", starter: true, growth: true, enterprise: true },
      { name: "Smart deduplication", starter: true, growth: true, enterprise: true },
      { name: "CSV import & export", starter: true, growth: true, enterprise: true },
      { name: "Deal-linked documents", starter: true, growth: true, enterprise: true },
    ],
  },
  {
    group: "Operations",
    rows: [
      { name: "Basic bookings & scheduling", starter: true, growth: true, enterprise: true },
      { name: "Advanced bookings & calendars", starter: false, growth: true, enterprise: true },
      { name: "Per-staff availability rules", starter: false, growth: true, enterprise: true },
      { name: "Service catalogue", starter: false, growth: true, enterprise: true },
      { name: "Invoices & quotes", starter: false, growth: true, enterprise: true },
      { name: "Branded PDF generation", starter: false, growth: true, enterprise: true },
      { name: "Quote-to-invoice conversion", starter: false, growth: true, enterprise: true },
      { name: "Tasks & assignments", starter: true, growth: true, enterprise: true },
      { name: "Contracts & document storage", starter: false, growth: true, enterprise: true },
    ],
  },
  {
    group: "Marketing",
    rows: [
      { name: "Email campaigns", starter: false, growth: "Usage-based", enterprise: "Usage-based" },
      { name: "Visual email builder", starter: false, growth: true, enterprise: true },
      { name: "AI template generation", starter: false, growth: true, enterprise: true },
      { name: "Native inbox (IMAP/SMTP)", starter: false, growth: true, enterprise: true },
      { name: "Social media scheduling", starter: false, growth: true, enterprise: true },
      { name: "Multi-platform social (FB, IG, LI, TT)", starter: false, growth: true, enterprise: true },
      { name: "Website lead capture", starter: false, growth: true, enterprise: true },
    ],
  },
  {
    group: "Intelligence",
    rows: [
      { name: "AI workspace", starter: false, growth: true, enterprise: true },
      { name: "Opportunity Radar", starter: false, growth: true, enterprise: true },
      { name: "Visitor intelligence", starter: false, growth: false, enterprise: true },
      { name: "Portfolio intelligence", starter: false, growth: false, enterprise: true },
      { name: "MRR / ARR tracking", starter: false, growth: false, enterprise: true },
      { name: "Attribution & ad performance", starter: false, growth: false, enterprise: true },
    ],
  },
  {
    group: "Collaboration",
    rows: [
      { name: "Feedback tools", starter: false, growth: true, enterprise: true },
      { name: "Approval workflows", starter: false, growth: true, enterprise: true },
      { name: "Custom dashboards", starter: false, growth: true, enterprise: true },
    ],
  },
  {
    group: "Platform",
    rows: [
      { name: "Team access controls", starter: true, growth: true, enterprise: true },
      { name: "Advanced permissions & roles", starter: false, growth: false, enterprise: true },
      { name: "White-label branding", starter: false, growth: false, enterprise: true },
      { name: "Multi-tenant architecture", starter: false, growth: false, enterprise: true },
      { name: "Industry templates", starter: false, growth: false, enterprise: true },
      { name: "Stripe subscription management", starter: false, growth: false, enterprise: true },
      { name: "GDPR-compliant data isolation", starter: true, growth: true, enterprise: true },
    ],
  },
  {
    group: "Support",
    rows: [
      { name: "Email support", starter: true, growth: false, enterprise: false },
      { name: "Priority support", starter: false, growth: true, enterprise: false },
      { name: "SLA-backed support", starter: false, growth: false, enterprise: true },
      { name: "Dedicated onboarding", starter: false, growth: false, enterprise: true },
      { name: "Custom terms available", starter: false, growth: false, enterprise: true },
    ],
  },
];

// ─── FAQ ──────────────────────────────────────────────────────────────────────

const faqs = [
  {
    q: "Is there a free trial?",
    a: "Yes — every plan includes a 14-day free trial. No credit card required to start.",
  },
  {
    q: "Can I change my plan?",
    a: "Yes. You can upgrade or downgrade at any time. Changes take effect at the next billing cycle.",
  },
  {
    q: "Is pricing per user or per account?",
    a: "Per account. There are no per-seat fees on any plan. You can add your whole team at no extra cost.",
  },
  {
    q: "Is my data isolated from other accounts?",
    a: "Yes. Every account is fully isolated using row-level security in the database. Your data is never accessible to other tenants.",
  },
  {
    q: "Do you support white-label branding?",
    a: "Yes, on the Enterprise plan. Your logo, brand colours, and domain throughout — no Colabr8 branding visible to your customers.",
  },
  {
    q: "What kind of support do you offer?",
    a: "Email support on Starter, priority support on Growth, and SLA-backed support with dedicated onboarding on Enterprise.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. No long-term contracts. Cancel at any time from your account settings and you won't be charged again.",
  },
  {
    q: "Do you offer annual pricing?",
    a: "Yes — annual billing gives you the equivalent of 2 months free. Prices are shown for both monthly and annual on the pricing cards above.",
  },
];

// ─── Cell Renderer ────────────────────────────────────────────────────────────

function Cell({ value, highlight }: { value: CellValue; highlight?: boolean }) {
  if (value === true) {
    return (
      <div className="flex justify-center">
        <div className={`w-5 h-5 rounded-full flex items-center justify-center ${highlight ? "bg-primary/20" : "bg-primary/10"}`}>
          <Check className="w-3 h-3 text-primary" strokeWidth={2.5} />
        </div>
      </div>
    );
  }
  if (value === false) {
    return (
      <div className="flex justify-center">
        <Minus className="w-4 h-4 text-muted" strokeWidth={1.5} />
      </div>
    );
  }
  return (
    <div className="flex justify-center">
      <span className="text-xs font-medium text-primary/80 bg-primary/10 rounded-full px-2 py-0.5">
        {value}
      </span>
    </div>
  );
}

// ─── FAQ Item ─────────────────────────────────────────────────────────────────

function FaqItem({ faq, index }: { faq: { q: string; a: string }; index: number }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className="border border-divider rounded-xl overflow-hidden"
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-surface-elevated transition-colors"
        aria-expanded={open}
      >
        <span className="font-medium text-white text-sm pr-4">{faq.q}</span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-primary flex-shrink-0" />
        ) : (
          <ChevronDown className="w-4 h-4 text-secondary flex-shrink-0" />
        )}
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-secondary text-sm leading-relaxed border-t border-divider pt-4">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true });
  const tableRef = useRef<HTMLDivElement>(null);
  const tableInView = useInView(tableRef, { once: true, margin: "-60px" });

  return (
    <div className="min-h-screen bg-bg">
      <Nav />

      {/* ── Hero ── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% -10%, rgba(61,237,122,0.12) 0%, transparent 60%)",
          }}
        />
        <div ref={heroRef} className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-3.5 py-1.5 mb-7"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-primary text-xs font-semibold tracking-wider uppercase">
              Simple Pricing
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-extrabold text-5xl md:text-6xl text-white leading-tight mb-6"
          >
            Simple pricing that{" "}
            <span className="text-primary">scales with your business</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="text-secondary text-xl leading-relaxed max-w-2xl mx-auto"
          >
            Choose a plan based on your team size and operational needs. Upgrade or change
            at any time. No per-seat fees on any plan.
          </motion.p>
        </div>
      </section>

      {/* ── Pricing Cards ── */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-sm ${!annual ? "text-white" : "text-secondary"}`}>Monthly</span>
            <button
              onClick={() => setAnnual((v) => !v)}
              className="relative w-12 h-6 rounded-full border border-divider bg-surface transition-colors"
              aria-label="Toggle annual billing"
            >
              <motion.div
                animate={{ x: annual ? 24 : 2 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="absolute top-0.5 w-5 h-5 rounded-full bg-primary"
              />
            </button>
            <span className={`text-sm flex items-center gap-2 ${annual ? "text-white" : "text-secondary"}`}>
              Annual
              <AnimatePresence>
                {annual && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-primary/15 text-primary"
                  >
                    Save 2 months
                  </motion.span>
                )}
              </AnimatePresence>
            </span>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4 }}
                className={`relative rounded-2xl p-8 flex flex-col transition-all duration-300 ${
                  plan.highlight
                    ? "bg-bg border-2"
                    : "bg-surface border border-divider"
                }`}
                style={
                  plan.highlight
                    ? { borderColor: "#3DED7A", boxShadow: "0 0 50px rgba(61,237,122,0.15)" }
                    : {}
                }
              >
                {plan.highlight && (
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
                )}
                {"badge" in plan && plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-xs font-bold px-3 py-1 rounded-full bg-primary text-bg">
                    {plan.badge}
                  </div>
                )}

                <div className="mb-8">
                  <h2 className="font-display font-bold text-xl text-white mb-1">{plan.name}</h2>
                  <p className="text-secondary text-sm mb-6">{plan.tagline}</p>
                  <div className="flex items-end gap-1.5">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={annual ? "annual" : "monthly"}
                        initial={{ opacity: 0, y: -12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 12 }}
                        transition={{ duration: 0.2 }}
                        className="font-display font-extrabold text-5xl text-white"
                      >
                        £{annual ? plan.annual : plan.monthly}
                      </motion.span>
                    </AnimatePresence>
                    <span className="text-secondary text-sm mb-2">/mo</span>
                  </div>
                  {annual && (
                    <p className="text-muted text-xs mt-1">
                      Billed annually — £{(annual ? plan.annual : plan.monthly) * 10}/yr
                    </p>
                  )}
                </div>

                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check size={13} color="#3DED7A" className="flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                      <span className="text-secondary text-sm">{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.ctaHref}
                  className={`w-full text-center text-sm font-semibold py-3.5 rounded-full transition-all duration-200 ${
                    plan.highlight
                      ? "bg-primary text-bg hover:bg-primary/90 hover:shadow-[0_0_24px_rgba(61,237,122,0.35)]"
                      : "border border-divider text-white hover:border-white/30 hover:bg-white/5"
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-muted text-sm mt-8">
            * Flat monthly pricing — no per-seat fees. Price is per account, not per user.
          </p>
        </div>
      </section>

      {/* ── Feature Comparison Table ── */}
      <section className="py-20 bg-surface border-y border-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={tableRef} className="text-center mb-14">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={tableInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="font-display font-extrabold text-4xl text-white mb-4"
            >
              What&apos;s included in each plan
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={tableInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-secondary text-lg"
            >
              A complete breakdown of every feature by tier.
            </motion.p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-divider">
            <table className="w-full min-w-[640px]">
              {/* Sticky header */}
              <thead>
                <tr className="border-b border-divider">
                  <th className="text-left px-6 py-5 text-secondary text-sm font-medium w-1/2">
                    Feature
                  </th>
                  {["Starter", "Growth", "Enterprise"].map((plan, i) => (
                    <th
                      key={plan}
                      className={`px-4 py-5 text-sm font-bold w-1/6 ${
                        i === 1 ? "text-primary" : "text-white"
                      }`}
                    >
                      <div className="flex flex-col items-center gap-1">
                        {plan}
                        <span className="font-normal text-secondary text-xs">
                          {i === 0 ? "£49/mo" : i === 1 ? "£69/mo" : "£99/mo"}
                        </span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((group, gi) => (
                  <>
                    {/* Group header */}
                    <tr key={`group-${gi}`} className="bg-surface-elevated">
                      <td
                        colSpan={4}
                        className="px-6 py-3 text-xs font-semibold text-primary uppercase tracking-wider"
                      >
                        {group.group}
                      </td>
                    </tr>
                    {/* Feature rows */}
                    {group.rows.map((row, ri) => (
                      <motion.tr
                        key={`${gi}-${ri}`}
                        initial={{ opacity: 0, x: -12 }}
                        animate={tableInView ? { opacity: 1, x: 0 } : {}}
                        transition={{
                          duration: 0.4,
                          delay: gi * 0.05 + ri * 0.03,
                          ease: "easeOut",
                        }}
                        className="border-t border-divider hover:bg-surface-elevated/50 transition-colors"
                      >
                        <td className="px-6 py-3.5 text-sm text-secondary">{row.name}</td>
                        <td className="px-4 py-3.5">
                          <Cell value={row.starter} />
                        </td>
                        <td className="px-4 py-3.5 bg-primary/[0.03]">
                          <Cell value={row.growth} highlight />
                        </td>
                        <td className="px-4 py-3.5">
                          <Cell value={row.enterprise} />
                        </td>
                      </motion.tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-display font-extrabold text-4xl text-white mb-4">
              Frequently asked questions
            </h2>
            <p className="text-secondary text-lg">
              Everything you need to know before you start.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <FaqItem key={i} faq={faq} index={i} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-secondary text-sm mb-4">Still have questions?</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-divider text-white text-sm px-6 py-2.5 rounded-full hover:border-white/30 hover:bg-white/5 transition-all"
            >
              Talk to us
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTASection />

      <Footer />
    </div>
  );
}
