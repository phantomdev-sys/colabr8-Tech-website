"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

function CheckIcon() {
  return (
    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full" style={{ backgroundColor: "rgba(61,237,122,0.12)" }}>
      <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
        <path d="M2 5.5l2.5 2.5 4.5-4.5" stroke="#3DED7A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function CrossIcon({ label }: { label?: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full" style={{ backgroundColor: "rgba(239,68,68,0.1)" }}>
        <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
          <path d="M1.5 1.5l6 6M7.5 1.5l-6 6" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </span>
      {label && <span className="text-[10px] text-muted leading-tight text-center max-w-[80px]">{label}</span>}
    </div>
  );
}

function WarnIcon({ label }: { label?: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full text-amber-400 font-bold text-xs" style={{ backgroundColor: "rgba(251,191,36,0.1)" }}>
        !
      </span>
      {label && <span className="text-[10px] text-muted leading-tight text-center max-w-[80px]">{label}</span>}
    </div>
  );
}

const C = () => <CheckIcon />;
const X = ({ l }: { l?: string }) => <CrossIcon label={l} />;
const W = ({ l }: { l?: string }) => <WarnIcon label={l} />;

const rows: { feature: string; colabr8: React.ReactNode; hubspot: React.ReactNode; ghl: React.ReactNode; zoho: React.ReactNode }[] = [
  { feature: "Starting Price", colabr8: <span className="text-primary font-mono text-sm font-semibold">£49/mo</span>, hubspot: <span className="text-secondary text-sm">£45/mo</span>, ghl: <span className="text-secondary text-sm">£97/mo</span>, zoho: <span className="text-secondary text-sm">£20/user/mo</span> },
  { feature: "Usable CRM at base tier", colabr8: <C />, hubspot: <X />, ghl: <C />, zoho: <W l="Limited" /> },
  { feature: "Per-seat pricing", colabr8: <X l="None" />, hubspot: <C />, ghl: <X l="None" />, zoho: <C /> },
  { feature: "Unlimited contacts", colabr8: <C />, hubspot: <X />, ghl: <C />, zoho: <W l="Capped" /> },
  { feature: "Deals & Pipelines", colabr8: <C />, hubspot: <W l="Paid add-on" />, ghl: <C />, zoho: <C /> },
  { feature: "Drag & drop pipelines", colabr8: <C />, hubspot: <X />, ghl: <C />, zoho: <X /> },
  { feature: "Bookings & Scheduling", colabr8: <C />, hubspot: <W l="Paid add-on" />, ghl: <C />, zoho: <X l="Not native" /> },
  { feature: "Customer-linked bookings", colabr8: <C />, hubspot: <X />, ghl: <W l="Partial" />, zoho: <X /> },
  { feature: "Social media scheduling", colabr8: <C />, hubspot: <X />, ghl: <C />, zoho: <W l="Add-on" /> },
  { feature: "Multi-platform social", colabr8: <C />, hubspot: <W l="Partial" />, ghl: <C />, zoho: <W l="Partial" /> },
  { feature: "Email campaigns", colabr8: <C />, hubspot: <W l="Expensive add-on" />, ghl: <C />, zoho: <W l="Add-on" /> },
  { feature: "Native inbox (IMAP/SMTP)", colabr8: <C />, hubspot: <X />, ghl: <X />, zoho: <W l="Limited" /> },
  { feature: "AI workspace", colabr8: <C />, hubspot: <W l="Extra cost" />, ghl: <W l="Basic" />, zoho: <W l="Basic" /> },
  { feature: "Visitor intelligence", colabr8: <C />, hubspot: <X />, ghl: <X />, zoho: <X /> },
  { feature: "White-label ready", colabr8: <C />, hubspot: <X />, ghl: <C />, zoho: <X /> },
  { feature: "Multi-tenant architecture", colabr8: <C />, hubspot: <X />, ghl: <W l="Limited" />, zoho: <X /> },
  { feature: "Role-based access control", colabr8: <C />, hubspot: <W l="Higher tiers" />, ghl: <W l="Limited" />, zoho: <C /> },
  { feature: "Mobile-friendly UI", colabr8: <C />, hubspot: <W l="Average" />, ghl: <W l="Average" />, zoho: <W l="Average" /> },
];

export default function ComparisonTable() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-display font-bold text-4xl lg:text-5xl text-white mb-4"
          >
            Why teams switch to COLABR8 TECH
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-secondary text-lg"
          >
            More features. Lower price. No gotchas.
          </motion.p>
        </div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="overflow-x-auto rounded-2xl border border-divider"
        >
          <table className="w-full min-w-[640px] border-collapse">
            <thead>
              <tr className="border-b border-divider">
                <th className="sticky left-0 bg-surface-elevated text-left px-6 py-4 text-sm text-secondary font-medium w-52">
                  Feature
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-center w-36" style={{ backgroundColor: "rgba(61,237,122,0.08)", borderLeft: "2px solid #3DED7A", color: "#3DED7A" }}>
                  COLABR8 TECH
                </th>
                <th className="px-6 py-4 text-sm font-medium text-secondary text-center w-32 bg-surface-elevated">
                  HubSpot
                </th>
                <th className="px-6 py-4 text-sm font-medium text-secondary text-center w-36 bg-surface-elevated">
                  GoHighLevel
                </th>
                <th className="px-6 py-4 text-sm font-medium text-secondary text-center w-28 bg-surface-elevated">
                  Zoho
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <motion.tr
                  key={row.feature}
                  initial={{ opacity: 0, x: -12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.03 }}
                  className="border-b border-divider last:border-0 hover:bg-surface-elevated/50 transition-colors"
                >
                  <td className="sticky left-0 bg-bg hover:bg-surface-elevated/50 px-6 py-4 text-sm text-secondary font-body">
                    {row.feature}
                  </td>
                  <td className="px-6 py-4 text-center" style={{ backgroundColor: "rgba(61,237,122,0.04)", borderLeft: "2px solid rgba(61,237,122,0.3)" }}>
                    <div className="flex justify-center">{row.colabr8}</div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex justify-center">{row.hubspot}</div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex justify-center">{row.ghl}</div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex justify-center">{row.zoho}</div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
