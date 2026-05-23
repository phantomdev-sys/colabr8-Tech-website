"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Check } from "lucide-react";

const tabs = [
  {
    id: "crm",
    label: "CRM",
    title: "Every contact, every conversation, every deal — connected.",
    copy: "Centralised contact management with multi-value emails and phones, structured addresses, attachment storage, and an unbroken activity timeline. Built-in deduplication keeps your database clean.",
    bullets: ["Unlimited contacts", "Smart deduplication", "CSV import", "Linked deals, bookings, invoices"],
  },
  {
    id: "pipeline",
    label: "Pipeline",
    title: "Close more deals with a pipeline that works the way you do.",
    copy: "Visual Kanban with drag-and-drop stage transitions, weighted forecasts, and per-deal activity history. High-impact transitions require approval — no accidental closes.",
    bullets: ["Drag-and-drop stages", "Weighted pipeline forecast", "Approval workflows", "Deal-linked documents"],
  },
  {
    id: "bookings",
    label: "Bookings",
    title: "Scheduling that actually connects to your customers.",
    copy: "Staff calendars with configurable availability, per-service durations, automated confirmation emails, and CRM-linked bookings. Your customers are never just a calendar entry.",
    bullets: ["Per-staff availability", "Multi-service booking", "Automated confirmations", "CRM-linked records"],
  },
  {
    id: "social",
    label: "Social",
    title: "Schedule once. Publish everywhere.",
    copy: "Connect Meta, LinkedIn, Instagram, TikTok and manage your entire social calendar from one place. Cross-channel scheduling with engagement analytics.",
    bullets: ["Multi-network", "Content calendar", "Engagement analytics", "Publishing queue"],
  },
  {
    id: "email",
    label: "Email",
    title: "Campaigns that convert, built in minutes.",
    copy: "Drag-and-drop email template builder with AI generation, recipient management, send-time controls, and detailed analytics. Your own sender domain, enforced.",
    bullets: ["Visual builder", "AI template generation", "Campaign analytics", "Link tracking"],
  },
  {
    id: "ai",
    label: "AI",
    title: "An AI that actually knows your business.",
    copy: "A dedicated AI workspace scoped entirely to your CRM data — with its own chat history, projects, and folders. Ask about pending payments, research a company before outreach, write a sales follow-up, or generate campaign ideas.",
    bullets: [
      "Always accessible from the header",
      "Dedicated workspace with project & folder organisation",
      "CRM-aware — asks about your actual data",
      "Conversation history saved and searchable",
    ],
  },
  {
    id: "intelligence",
    label: "Intelligence",
    title: "See what's happening before it becomes a problem.",
    copy: "Portfolio Intelligence gives you a radial view of your entire customer base — MRR, ARR, renewal risk, and service distribution. Opportunity Radar surfaces upsell, retention, and churn signals in real time.",
    bullets: ["Radial portfolio view", "MRR/ARR tracking", "Renewal risk scoring", "Opportunity Radar"],
  },
];

// ─── Browser chrome wrapper ───────────────────────────────────────────────────

function BrowserFrame({ url, children }: { url: string; children: React.ReactNode }) {
  return (
    <div
      className="rounded-xl border border-divider overflow-hidden bg-surface"
      style={{
        boxShadow:
          "0 0 0 1px #1a1a1a, 0 32px 80px rgba(0,0,0,0.7), 0 0 60px rgba(61,237,122,0.06)",
      }}
    >
      <div className="bg-[#0D0D0D] px-4 py-2.5 flex items-center gap-3 border-b border-divider">
        <div className="flex gap-1.5 flex-shrink-0">
          <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <div className="w-3 h-3 rounded-full bg-[#28CA41]" />
        </div>
        <div className="flex-1 bg-surface-elevated rounded px-3 py-1 text-[11px] text-muted truncate">
          {url}
        </div>
      </div>
      {children}
    </div>
  );
}

// ─── Tab previews ─────────────────────────────────────────────────────────────

function CRMPreview() {
  const contacts = [
    { initials: "SJ", name: "Sarah Johnson", company: "Apex Digital", tag: "Client", color: "#3DED7A" },
    { initials: "MT", name: "Marcus Taylor", company: "Bright & Co", tag: "Lead", color: "#60A5FA" },
    { initials: "EW", name: "Emma Wilson", company: "Nova Studios", tag: "Prospect", color: "#FBBF24" },
    { initials: "RB", name: "Ryan Bennett", company: "CoreTech Ltd", tag: "Client", color: "#3DED7A" },
    { initials: "PH", name: "Priya Hassan", company: "Vantage Group", tag: "Lead", color: "#60A5FA" },
  ];
  return (
    <BrowserFrame url="crm.colabr8.tech/contacts">
      <div className="px-4 py-3 border-b border-divider flex items-center gap-3">
        <div className="flex-1 bg-surface-elevated rounded-lg px-3 py-1.5 text-[11px] text-muted">
          Search contacts...
        </div>
        <span className="text-[10px] text-muted whitespace-nowrap">847 contacts</span>
      </div>
      <div className="grid px-4 py-2 border-b border-divider" style={{ gridTemplateColumns: "auto 1fr 1fr auto" }}>
        {["", "Name", "Company", "Tag"].map((h) => (
          <div key={h} className="text-[10px] text-muted uppercase tracking-wider pr-4 last:pr-0">{h}</div>
        ))}
      </div>
      {contacts.map((c, i) => (
        <div
          key={i}
          className="grid px-4 py-2.5 border-b border-divider last:border-0 items-center hover:bg-surface-elevated/40 transition-colors"
          style={{ gridTemplateColumns: "auto 1fr 1fr auto" }}
        >
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mr-2.5"
            style={{ backgroundColor: "rgba(61,237,122,0.12)" }}
          >
            <span className="text-primary text-[9px] font-semibold">{c.initials}</span>
          </div>
          <span className="text-[12px] text-white pr-4 truncate">{c.name}</span>
          <span className="text-[12px] text-secondary pr-4 truncate">{c.company}</span>
          <span
            className="text-[10px] px-2 py-0.5 rounded-full whitespace-nowrap"
            style={{ backgroundColor: `${c.color}20`, color: c.color }}
          >
            {c.tag}
          </span>
        </div>
      ))}
    </BrowserFrame>
  );
}

function PipelinePreview() {
  const stages = [
    {
      name: "Qualified",
      color: "#3DED7A",
      deals: [
        { name: "Web Design", value: "£3.2k" },
        { name: "Brand Pack", value: "£1.5k" },
      ],
    },
    { name: "Proposal", color: "#60A5FA", deals: [{ name: "SEO Retainer", value: "£950/m" }] },
    { name: "Negotiation", color: "#FBBF24", deals: [{ name: "CRM Setup", value: "£4.8k" }] },
    { name: "Closed Won", color: "#A78BFA", deals: [{ name: "App Dev", value: "£12k" }] },
  ];
  return (
    <BrowserFrame url="crm.colabr8.tech/pipeline">
      <div className="px-4 py-3 border-b border-divider flex items-center justify-between">
        <span className="text-[13px] text-white font-medium">Sales Pipeline</span>
        <span className="text-primary font-mono text-[12px] font-semibold">£48.2k total</span>
      </div>
      <div className="p-3 flex gap-2">
        {stages.map((stage) => (
          <div key={stage.name} className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 mb-2.5 px-1">
              <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: stage.color }} />
              <span className="text-[10px] text-secondary truncate">{stage.name}</span>
            </div>
            {stage.deals.map((deal, i) => (
              <div
                key={i}
                className="bg-surface-elevated border border-divider rounded-lg p-2.5 mb-1.5 last:mb-0"
              >
                <div className="text-[11px] text-white mb-0.5 truncate">{deal.name}</div>
                <div className="text-[11px] font-mono" style={{ color: stage.color }}>
                  {deal.value}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </BrowserFrame>
  );
}

function BookingsPreview() {
  const slots = [
    { time: "09:00", name: "Consultation — Alex P.", staff: "Sarah", color: "#3DED7A", duration: "60 min" },
    { time: "10:30", name: "Project Kickoff — Nova Studios", staff: "James", color: "#60A5FA", duration: "90 min" },
    { time: "13:00", name: "Discovery Call — CoreTech", staff: "Sarah", color: "#FBBF24", duration: "45 min" },
    { time: "14:30", name: "Training — Apex Digital", staff: "Mike", color: "#A78BFA", duration: "120 min" },
  ];
  return (
    <BrowserFrame url="crm.colabr8.tech/bookings">
      <div className="px-4 py-3 border-b border-divider flex items-center justify-between">
        <span className="text-[13px] text-white font-medium">Bookings</span>
        <span className="text-[10px] text-muted">Thursday, 21 May</span>
      </div>
      <div className="divide-y divide-divider">
        {slots.map((slot, i) => (
          <div key={i} className="flex items-start gap-3 px-4 py-3">
            <span className="text-[11px] text-muted w-11 flex-shrink-0 pt-0.5 font-mono">{slot.time}</span>
            <div
              className="flex-1 rounded-lg px-3 py-2"
              style={{ backgroundColor: `${slot.color}12`, borderLeft: `3px solid ${slot.color}` }}
            >
              <div className="text-[12px] text-white font-medium mb-0.5 truncate">{slot.name}</div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-muted">{slot.staff}</span>
                <span className="text-muted text-[10px]">·</span>
                <span className="text-[10px] text-muted">{slot.duration}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </BrowserFrame>
  );
}

function SocialPreview() {
  const posts = [
    { abbr: "Li", bg: "#0A66C2", text: "Excited to share our latest case study on automation...", time: "Mon 10:00", status: "Scheduled" },
    { abbr: "Ig", bg: "#E1306C", text: "Behind the scenes at our studio this week", time: "Tue 12:00", status: "Scheduled" },
    { abbr: "Fb", bg: "#1877F2", text: "We're hiring! Join our growing team across the UK...", time: "Wed 09:30", status: "Scheduled" },
    { abbr: "Tt", bg: "#111111", text: "Quick tip: automate your follow-ups with one click", time: "Thu 15:00", status: "Draft" },
  ];
  return (
    <BrowserFrame url="crm.colabr8.tech/social">
      <div className="px-4 py-3 border-b border-divider flex items-center justify-between">
        <span className="text-[13px] text-white font-medium">Social Calendar</span>
        <span className="text-[10px] text-muted">May 2026</span>
      </div>
      <div className="divide-y divide-divider">
        {posts.map((p, i) => (
          <div key={i} className="flex items-start gap-3 px-4 py-3">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 text-white text-[9px] font-bold"
              style={{ backgroundColor: p.bg }}
            >
              {p.abbr}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[12px] text-secondary truncate">{p.text}</p>
              <p className="text-[10px] text-muted mt-0.5">{p.time}</p>
            </div>
            <span
              className={`text-[10px] px-2 py-0.5 rounded-full flex-shrink-0 whitespace-nowrap ${
                p.status === "Scheduled" ? "bg-primary/15 text-primary" : "bg-surface-elevated text-muted"
              }`}
            >
              {p.status}
            </span>
          </div>
        ))}
      </div>
    </BrowserFrame>
  );
}

function EmailPreview() {
  const templates = [
    { name: "Welcome Email", opens: "68%", status: "Active" },
    { name: "Monthly Newsletter", opens: "42%", status: "Active" },
    { name: "Re-engagement Campaign", opens: "31%", status: "Draft" },
    { name: "Product Update", opens: "55%", status: "Sent" },
  ];
  return (
    <BrowserFrame url="crm.colabr8.tech/campaigns">
      <div className="px-4 py-3 border-b border-divider flex items-center justify-between">
        <span className="text-[13px] text-white font-medium">Email Campaigns</span>
        <span className="text-[10px] bg-primary/15 text-primary px-2 py-0.5 rounded-full">+ New campaign</span>
      </div>
      <div
        className="grid px-4 py-2 border-b border-divider"
        style={{ gridTemplateColumns: "1fr auto auto" }}
      >
        {["Template", "Open rate", "Status"].map((h) => (
          <div key={h} className="text-[10px] text-muted uppercase tracking-wider pr-4 last:pr-0">{h}</div>
        ))}
      </div>
      {templates.map((t, i) => (
        <div
          key={i}
          className="grid px-4 py-3 border-b border-divider last:border-0 items-center"
          style={{ gridTemplateColumns: "1fr auto auto" }}
        >
          <div className="flex items-center gap-2.5 pr-4">
            <div className="w-7 h-7 rounded-lg bg-surface-elevated border border-divider flex items-center justify-center flex-shrink-0">
              <div className="w-3.5 h-2.5 border border-[#444] rounded-sm" />
            </div>
            <span className="text-[12px] text-white truncate">{t.name}</span>
          </div>
          <span className="text-[12px] font-mono text-primary pr-4">{t.opens}</span>
          <span
            className={`text-[10px] px-2 py-0.5 rounded-full whitespace-nowrap ${
              t.status === "Active"
                ? "bg-primary/15 text-primary"
                : t.status === "Sent"
                ? "bg-blue-400/15 text-blue-400"
                : "bg-surface-elevated text-muted"
            }`}
          >
            {t.status}
          </span>
        </div>
      ))}
    </BrowserFrame>
  );
}

function AIPreview() {
  return (
    <BrowserFrame url="crm.colabr8.tech/ai-workspace">
      <div className="flex" style={{ height: "340px" }}>
        {/* Sidebar */}
        <div className="w-36 border-r border-divider p-3 flex flex-col gap-1 overflow-hidden flex-shrink-0">
          <p className="text-[9px] text-muted uppercase tracking-wider mb-1 px-2">Projects</p>
          {["Sales Outreach", "Campaign Ideas", "Weekly Report"].map((p) => (
            <div
              key={p}
              className="text-[11px] text-secondary px-2 py-1.5 rounded-lg hover:bg-surface-elevated cursor-pointer truncate"
            >
              {p}
            </div>
          ))}
          <p className="text-[9px] text-muted uppercase tracking-wider mt-3 mb-1 px-2">Recent</p>
          {["Contact research", "Follow-up draft", "Invoice summary"].map((p) => (
            <div
              key={p}
              className="text-[11px] text-muted px-2 py-1.5 rounded-lg hover:bg-surface-elevated cursor-pointer truncate"
            >
              {p}
            </div>
          ))}
        </div>

        {/* Chat area */}
        <div className="flex-1 flex flex-col min-w-0">
          <div className="flex-1 p-3 space-y-3 overflow-hidden">
            {/* User message */}
            <div className="flex justify-end">
              <div className="bg-surface-elevated rounded-xl rounded-tr-sm px-3 py-2 max-w-[80%]">
                <p className="text-[11px] text-white">How many open invoices do we have over £500?</p>
              </div>
            </div>
            {/* AI response */}
            <div className="flex gap-2 items-start">
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ backgroundColor: "rgba(61,237,122,0.2)" }}
              >
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>
              <div className="bg-surface border border-divider rounded-xl rounded-tl-sm px-3 py-2 max-w-[85%]">
                <p className="text-[11px] text-secondary leading-relaxed">
                  You have{" "}
                  <span className="text-primary font-semibold">14 open invoices</span> totalling{" "}
                  <span className="text-primary font-semibold">£18,340</span> over £500. The oldest
                  is 47 days overdue — want me to draft a follow-up?
                </p>
              </div>
            </div>
            {/* User follow-up */}
            <div className="flex justify-end">
              <div className="bg-surface-elevated rounded-xl rounded-tr-sm px-3 py-2 max-w-[80%]">
                <p className="text-[11px] text-white">
                  Yes, draft a polite but firm follow-up for the top 3.
                </p>
              </div>
            </div>
            {/* Typing indicator */}
            <div className="flex gap-2 items-start">
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "rgba(61,237,122,0.2)" }}
              >
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>
              <div className="bg-surface border border-divider rounded-xl rounded-tl-sm px-3 py-2">
                <div className="flex gap-1 items-center h-4">
                  {[0, 0.2, 0.4].map((d) => (
                    <div
                      key={d}
                      className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce"
                      style={{ animationDelay: `${d}s` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Input */}
          <div className="border-t border-divider p-3">
            <div className="bg-surface-elevated rounded-lg px-3 py-2 flex items-center gap-2">
              <span className="text-[11px] text-muted flex-1">Ask anything about your business...</span>
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "rgba(61,237,122,0.2)" }}
              >
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M2 5h6M6 2l3 3-3 3" stroke="#3DED7A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

function IntelligencePreview() {
  // Circumference = 2π × 40 = 251.327
  const C = 251.327;
  const segments = [
    { label: "Enterprise", pct: 35, color: "#3DED7A", offsetPct: 0 },
    { label: "Growth", pct: 40, color: "#60A5FA", offsetPct: 35 },
    { label: "Starter", pct: 25, color: "#A78BFA", offsetPct: 75 },
  ];

  return (
    <BrowserFrame url="crm.colabr8.tech/intelligence">
      <div className="px-4 py-3 border-b border-divider flex items-center justify-between">
        <span className="text-[13px] text-white font-medium">Portfolio Intelligence</span>
        <span className="text-[10px] text-muted">May 2026</span>
      </div>
      <div className="p-4">
        {/* KPI row */}
        <div className="grid grid-cols-3 gap-2 mb-5">
          {[
            { label: "MRR", value: "£24.6k", positive: true },
            { label: "ARR", value: "£295k", positive: true },
            { label: "At Risk", value: "3 accounts", positive: false },
          ].map((s) => (
            <div key={s.label} className="bg-surface-elevated rounded-lg p-3">
              <p className="text-[10px] text-muted mb-1">{s.label}</p>
              <p
                className="text-[12px] font-mono font-semibold"
                style={{ color: s.positive ? "#3DED7A" : "#EF4444" }}
              >
                {s.value}
              </p>
            </div>
          ))}
        </div>

        {/* Radial chart + legend */}
        <div className="flex items-center gap-6">
          <div className="relative w-28 h-28 flex-shrink-0">
            <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
              {segments.map((s) => (
                <circle
                  key={s.label}
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke={s.color}
                  strokeWidth="13"
                  strokeLinecap="butt"
                  strokeDasharray={`${(s.pct / 100) * C} ${C}`}
                  strokeDashoffset={-(s.offsetPct / 100) * C}
                />
              ))}
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-white font-mono text-sm font-bold leading-none">£295k</span>
              <span className="text-muted text-[9px] mt-0.5">ARR</span>
            </div>
          </div>

          <div className="space-y-2.5 flex-1">
            {segments.map((s) => (
              <div key={s.label} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: s.color }} />
                <span className="text-[11px] text-secondary flex-1">{s.label}</span>
                <span className="text-[11px] font-mono font-semibold" style={{ color: s.color }}>
                  {s.pct}%
                </span>
              </div>
            ))}
            <div className="pt-2.5 mt-1 border-t border-divider">
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                <span className="text-[10px] text-amber-400">3 renewal risks detected</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

const previewMap: Record<string, React.ReactNode> = {
  crm: <CRMPreview />,
  pipeline: <PipelinePreview />,
  bookings: <BookingsPreview />,
  social: <SocialPreview />,
  email: <EmailPreview />,
  ai: <AIPreview />,
  intelligence: <IntelligencePreview />,
};

// ─── Main component ───────────────────────────────────────────────────────────

export default function FeatureTabs() {
  const [active, setActive] = useState(tabs[0].id);
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const current = tabs.find((t) => t.id === active)!;

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
            See it in action
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-secondary text-lg max-w-2xl mx-auto"
          >
            Every feature built to work together — not bolted on as an afterthought.
          </motion.p>
        </div>

        {/* Tab list */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-2 mb-14"
          role="tablist"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={active === tab.id}
              onClick={() => setActive(tab.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                active === tab.id
                  ? "bg-primary text-bg"
                  : "bg-surface-elevated border border-divider text-secondary hover:text-white hover:border-[#333]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center"
            >
              {/* Left: text */}
              <div className="max-w-lg">
                <h3 className="font-display font-bold text-2xl lg:text-3xl text-white mb-5 leading-tight">
                  {current.title}
                </h3>
                <p className="text-secondary leading-relaxed mb-8">{current.copy}</p>
                <ul className="space-y-3">
                  {current.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span
                        className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                        style={{ backgroundColor: "rgba(61,237,122,0.12)" }}
                      >
                        <Check size={11} color="#3DED7A" strokeWidth={2.5} />
                      </span>
                      <span className="text-secondary text-[15px]">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: preview */}
              <div className="relative">
                <div
                  className="absolute inset-0 rounded-3xl pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse at 50% 50%, rgba(61,237,122,0.08) 0%, transparent 70%)",
                    filter: "blur(40px)",
                  }}
                />
                <div className="relative z-10">{previewMap[active]}</div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
