"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    tagline: "For small teams getting organised",
    monthly: 49,
    annual: 41,
    cta: "Start free trial",
    ctaHref: "/pricing",
    highlight: false,
    features: [
      "Core CRM — companies & contacts",
      "Unlimited contacts",
      "Sales pipelines and deals",
      "Basic bookings and scheduling",
      "Team access controls",
      "Email support",
    ],
  },
  {
    name: "Growth",
    tagline: "For growing service businesses",
    monthly: 69,
    annual: 58,
    cta: "Start free trial",
    ctaHref: "/pricing",
    highlight: true,
    badge: "Most Popular",
    features: [
      "Everything in Starter",
      "Quotes and deal-linked services",
      "Advanced bookings & calendars",
      "Social media scheduling",
      "Email campaigns (usage-based)",
      "Custom dashboards",
      "Native inbox (IMAP/SMTP)",
      "AI workspace",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    tagline: "For agencies and multi-team operations",
    monthly: 99,
    annual: 83,
    cta: "Contact us",
    ctaHref: "/contact",
    highlight: false,
    features: [
      "Everything in Growth",
      "Full white-label branding",
      "Advanced permissions & roles",
      "Multi-tenant architecture",
      "Visitor intelligence",
      "Portfolio intelligence & radar",
      "Industry templates",
      "Dedicated onboarding",
      "SLA-backed support",
      "Custom terms available",
    ],
  },
];

export default function PricingCards() {
  const [annual, setAnnual] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 bg-surface border-y border-divider">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-display font-bold text-4xl lg:text-5xl text-white mb-4"
          >
            Simple pricing that scales with your business
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-secondary text-lg"
          >
            No per-seat fees. No locked features. No surprises.
          </motion.p>
        </div>

        {/* Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center gap-4 mb-14"
        >
          <span className={`text-sm ${!annual ? "text-white" : "text-secondary"}`}>Monthly</span>
          <button
            onClick={() => setAnnual((v) => !v)}
            className="relative w-12 h-6 rounded-full border border-divider bg-bg transition-colors"
            aria-label="Toggle annual billing"
          >
            <motion.div
              animate={{ x: annual ? 24 : 2 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="absolute top-0.5 w-5 h-5 rounded-full"
              style={{ backgroundColor: "#3DED7A" }}
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
                  className="text-[11px] font-semibold px-2 py-0.5 rounded-full"
                  style={{ backgroundColor: "rgba(61,237,122,0.15)", color: "#3DED7A" }}
                >
                  Save 2 months
                </motion.span>
              )}
            </AnimatePresence>
          </span>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className={`relative rounded-2xl p-8 flex flex-col transition-all duration-300 ${
                plan.highlight
                  ? "bg-bg border-2"
                  : "bg-surface-elevated border border-divider"
              }`}
              style={
                plan.highlight
                  ? {
                      borderColor: "#3DED7A",
                      boxShadow: "0 0 40px rgba(61,237,122,0.15)",
                    }
                  : {}
              }
            >
              {/* Badge */}
              {plan.badge && (
                <div
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-xs font-semibold px-3 py-1 rounded-full"
                  style={{ backgroundColor: "#3DED7A", color: "#0A0A0A" }}
                >
                  {plan.badge}
                </div>
              )}

              <div className="mb-8">
                <h3 className="font-display font-bold text-xl text-white mb-1">{plan.name}</h3>
                <p className="text-secondary text-sm mb-6">{plan.tagline}</p>
                <div className="flex items-end gap-1">
                  <span className="font-display font-extrabold text-5xl text-white">
                    £{annual ? plan.annual : plan.monthly}
                  </span>
                  <span className="text-secondary text-sm mb-2">/mo</span>
                </div>
                {annual && (
                  <p className="text-muted text-xs mt-1">
                    Billed annually (£{(annual ? plan.annual : plan.monthly) * 10}/yr)
                  </p>
                )}
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check size={14} color="#3DED7A" className="flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-secondary text-sm">{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan.ctaHref}
                className={`w-full text-center text-sm font-semibold py-3 rounded-full transition-all duration-200 ${
                  plan.highlight
                    ? "bg-primary text-bg hover:bg-primary/90 hover:shadow-[0_0_24px_rgba(61,237,122,0.3)]"
                    : "border border-divider text-white hover:border-[#444] hover:bg-white/5"
                }`}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-muted text-sm mt-8"
        >
          * Flat monthly pricing — no per-seat fees. One price per account regardless of team size.
        </motion.p>
      </div>
    </section>
  );
}
