"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

const cardIn = {
  hidden: { opacity: 0, y: 48 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.45 + i * 0.15,
      duration: 0.75,
      type: "spring" as const,
      stiffness: 75,
      damping: 18,
    },
  }),
};

// ─── Placeholder UI cards ──────────────────────────────────────────────────────
// Replace inner content with <Image> once screenshots are in /public/screenshots/

function BrowserFrame({ children, url = "crm.colabr8.tech" }: { children: React.ReactNode; url?: string }) {
  return (
    <div className="bg-surface rounded-xl border border-divider overflow-hidden shadow-2xl">
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

function DashboardCard() {
  return (
    <BrowserFrame>
      <div className="p-5 space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[11px] text-muted mb-0.5">Good afternoon,</p>
            <h3 className="text-white font-semibold text-xl font-display">Alex</h3>
          </div>
          <span className="text-[11px] text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-full whitespace-nowrap">
            14 tasks today
          </span>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "Revenue", value: "£24.6k" },
            { label: "Open Deals", value: "12" },
            { label: "Contacts", value: "847" },
          ].map((stat) => (
            <div key={stat.label} className="bg-surface-elevated rounded-lg p-3">
              <p className="text-[10px] text-muted mb-1">{stat.label}</p>
              <p className="text-white font-mono font-semibold text-sm">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Activity feed */}
        <div className="space-y-0">
          {[
            { icon: "📅", text: "New booking: Sarah M.", time: "2m ago" },
            { icon: "✅", text: "Deal closed: Tech Corp Ltd", time: "1h ago" },
            { icon: "💰", text: "Invoice paid: £1,200", time: "3h ago" },
            { icon: "📧", text: "Campaign sent to 342 contacts", time: "5h ago" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-between py-2.5 border-b border-divider last:border-0 gap-3"
            >
              <div className="flex items-center gap-2 min-w-0">
                <span className="text-sm flex-shrink-0">{item.icon}</span>
                <span className="text-[12px] text-secondary truncate">{item.text}</span>
              </div>
              <span className="text-[11px] text-muted flex-shrink-0">{item.time}</span>
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

function PipelineCard() {
  const stages = [
    { name: "Qualified", color: "#3DED7A", deals: ["Web Design · £3.2k", "CRM Setup · £1.8k"] },
    { name: "Proposal", color: "#60A5FA", deals: ["SEO Retainer · £950/m"] },
    { name: "Closed", color: "#A78BFA", deals: ["Brand Pack · £4.5k"] },
  ];

  return (
    <BrowserFrame url="crm.colabr8.tech/pipeline">
      <div className="p-3">
        <div className="flex items-center justify-between mb-3 px-1">
          <p className="text-white text-xs font-medium">Sales Pipeline</p>
          <span className="text-primary text-xs font-mono font-semibold">£48.2k</span>
        </div>
        <div className="flex gap-2">
          {stages.map((stage) => (
            <div key={stage.name} className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 mb-2">
                <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: stage.color }} />
                <p className="text-[10px] text-secondary truncate">{stage.name}</p>
              </div>
              {stage.deals.map((deal, i) => (
                <div key={i} className="bg-surface-elevated rounded-lg p-2 mb-1.5 last:mb-0">
                  <p className="text-[10px] text-secondary leading-tight">{deal}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

function SocialCalendarCard() {
  const scheduled = new Set([3, 7, 10, 14, 17, 21, 24, 28]);
  const days = ["M", "T", "W", "T", "F", "S", "S"];

  return (
    <BrowserFrame url="crm.colabr8.tech/social">
      <div className="p-3">
        <div className="flex items-center justify-between mb-2 px-1">
          <p className="text-white text-xs font-medium">Social Calendar</p>
          <span className="text-[10px] text-muted">May 2026</span>
        </div>
        <div className="grid grid-cols-7 gap-0.5 mb-1">
          {days.map((d, i) => (
            <div key={i} className="text-center text-[9px] text-muted py-1">{d}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-0.5">
          {/* May 2026 starts on Friday (offset 4) */}
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={`e${i}`} />
          ))}
          {Array.from({ length: 31 }).map((_, i) => {
            const day = i + 1;
            const isScheduled = scheduled.has(day);
            return (
              <div
                key={day}
                className={`aspect-square rounded flex items-center justify-center text-[10px] transition-colors ${
                  isScheduled
                    ? "bg-primary/20 text-primary font-medium"
                    : "text-muted hover:text-secondary"
                }`}
              >
                {day}
              </div>
            );
          })}
        </div>
        <div className="mt-2 flex items-center gap-1.5 px-1">
          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
          <p className="text-[10px] text-muted">8 posts scheduled</p>
        </div>
      </div>
    </BrowserFrame>
  );
}

// ─── Trust items ───────────────────────────────────────────────────────────────

const trustItems = [
  "14-day free trial",
  "Cancel anytime",
  "Fully white-label",
  "No per-seat pricing",
];

// ─── Hero ─────────────────────────────────────────────────────────────────────

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const cardsY = useTransform(scrollY, [0, 600], [0, -70]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-bg"
    >
      {/* Animated green gradient mesh — top right */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div
          className="absolute -top-40 -right-40 w-[700px] h-[700px] animate-green-glow"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(61,237,122,0.13) 0%, rgba(61,237,122,0.04) 40%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-1/3 right-1/3 w-[400px] h-[400px]"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(61,237,122,0.05) 0%, transparent 65%)",
          }}
        />
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* ── Left: copy ─────────────────────────────────────────────────── */}
          <div className="max-w-xl">

            {/* Live badge */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 bg-surface border border-divider rounded-full pl-3 pr-4 py-1.5 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse flex-shrink-0" />
              <span className="text-xs text-secondary">
                From £49/month · No per-seat fees
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="font-display font-extrabold text-5xl lg:text-6xl xl:text-[4rem] leading-[1.05] tracking-tight text-white mb-6 text-balance"
            >
              The CRM that{" "}
              <span className="text-primary">doesn&apos;t charge extra</span>
              {" "}for the things you actually need.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-lg text-secondary leading-relaxed mb-10"
            >
              Full CRM, bookings, invoicing, social media scheduling, email
              campaigns and AI — all in one platform. From £49/month. No
              per-seat fees. No locked features.
            </motion.p>

            {/* CTAs */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-3 mb-9"
            >
              <Link
                href="/pricing"
                className="inline-flex items-center bg-primary text-bg font-semibold text-base px-8 py-3.5 rounded-full hover:bg-primary/90 transition-all duration-200 hover:shadow-[0_0_32px_rgba(61,237,122,0.35)]"
              >
                Start free trial
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center border border-[#333] text-white text-base px-8 py-3.5 rounded-full hover:border-[#555] hover:bg-white/5 transition-all duration-200"
              >
                Request a demo
              </Link>
            </motion.div>

            {/* Trust bar */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-x-5 gap-y-2"
            >
              {trustItems.map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-1.5 text-sm text-secondary"
                >
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
                    <circle cx="7.5" cy="7.5" r="7.5" fill="#3DED7A" fillOpacity="0.12" />
                    <path
                      d="M4.5 7.5l2 2 4-4"
                      stroke="#3DED7A"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {item}
                </span>
              ))}
            </motion.div>
          </div>

          {/* ── Right: floating UI cards ────────────────────────────────────── */}
          <motion.div
            style={{ y: cardsY }}
            className="relative hidden lg:block"
          >
            {/* Green glow behind cards */}
            <div
              className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at 60% 50%, rgba(61,237,122,0.12) 0%, transparent 70%)",
                filter: "blur(48px)",
              }}
            />

            {/* Main dashboard card */}
            <motion.div
              custom={0}
              variants={cardIn}
              initial="hidden"
              animate="visible"
              className="relative z-10 w-full max-w-[420px] ml-auto"
            >
              <DashboardCard />
            </motion.div>

            {/* Pipeline card — bottom-left, overlapping */}
            <motion.div
              custom={1}
              variants={cardIn}
              initial="hidden"
              animate="visible"
              className="absolute -bottom-6 -left-10 w-[260px] z-20"
            >
              <PipelineCard />
            </motion.div>

            {/* Social calendar — top-right, overlapping */}
            <motion.div
              custom={2}
              variants={cardIn}
              initial="hidden"
              animate="visible"
              className="absolute -top-10 -right-6 w-[200px] z-20"
            >
              <SocialCalendarCard />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
