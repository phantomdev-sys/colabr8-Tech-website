"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";

const bullets = [
  "Your logo and brand colours throughout",
  "Custom sidebar labels per industry",
  "No COLABR8 TECH branding visible to end users",
  "White-label compliance across UI and emails",
];

// ─── Sidebar mockup ────────────────────────────────────────────────────────────

function SidebarMockup({
  brandName,
  accentColor,
  logo,
  items,
}: {
  brandName: string;
  accentColor: string;
  logo: React.ReactNode;
  items: string[];
}) {
  return (
    <div
      className="rounded-xl border overflow-hidden flex flex-col"
      style={{
        backgroundColor: "#0D0D0D",
        borderColor: "#222",
        width: "160px",
        boxShadow: "0 16px 48px rgba(0,0,0,0.5)",
      }}
    >
      {/* Header */}
      <div
        className="px-4 py-3.5 border-b flex items-center gap-2.5"
        style={{ borderColor: "#1a1a1a" }}
      >
        {logo}
        <span
          className="font-display font-bold text-[12px] tracking-wide"
          style={{ color: accentColor }}
        >
          {brandName}
        </span>
      </div>

      {/* Nav items */}
      <nav className="p-2 flex flex-col gap-0.5">
        {items.map((item, i) => (
          <div
            key={item}
            className="flex items-center gap-2 px-2.5 py-2 rounded-lg text-[11px] transition-colors"
            style={{
              backgroundColor: i === 0 ? `${accentColor}15` : "transparent",
              color: i === 0 ? accentColor : "#71717A",
            }}
          >
            <div
              className="w-3.5 h-3.5 rounded-sm flex-shrink-0"
              style={{ backgroundColor: i === 0 ? `${accentColor}30` : "#1a1a1a" }}
            />
            {item}
          </div>
        ))}
      </nav>

      {/* Bottom user row */}
      <div className="mt-auto border-t p-3 flex items-center gap-2" style={{ borderColor: "#1a1a1a" }}>
        <div
          className="w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-semibold flex-shrink-0"
          style={{ backgroundColor: `${accentColor}20`, color: accentColor }}
        >
          AJ
        </div>
        <div>
          <div className="text-[10px] text-white leading-none mb-0.5">Alex J.</div>
          <div className="text-[9px]" style={{ color: "#52525B" }}>Admin</div>
        </div>
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function WhiteLabel() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const phantomItems = ["Dashboard", "Contacts", "Pipelines", "Projects", "Invoices", "Reports"];
  const genericItems = ["Home", "Leads", "Deals", "Activities", "Billing", "Analytics"];

  return (
    <section ref={ref} className="py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-lg"
          >
            <div
              className="inline-flex items-center gap-2 border rounded-full px-3 py-1.5 mb-6 text-xs font-medium"
              style={{ borderColor: "rgba(61,237,122,0.3)", color: "#3DED7A", backgroundColor: "rgba(61,237,122,0.06)" }}
            >
              Enterprise Feature
            </div>

            <h2 className="font-display font-bold text-4xl lg:text-5xl text-white mb-6 leading-tight">
              Your brand.{" "}
              <span className="text-primary">Your platform.</span>
            </h2>

            <p className="text-secondary leading-relaxed mb-10">
              COLABR8 TECH is fully white-label. Your customers see your logo, your colours, your name.
              Not ours. Agencies and service businesses use COLABR8 TECH to deliver a premium, branded
              operations platform to their own clients — without building anything.
            </p>

            <ul className="space-y-4">
              {bullets.map((bullet, i) => (
                <motion.li
                  key={bullet}
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-start gap-3"
                >
                  <span
                    className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                    style={{ backgroundColor: "rgba(61,237,122,0.12)" }}
                  >
                    <Check size={11} color="#3DED7A" strokeWidth={2.5} />
                  </span>
                  <span className="text-secondary">{bullet}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right: comparison mockup */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
          >
            {/* Glow */}
            <div
              className="absolute pointer-events-none"
              style={{
                width: "400px",
                height: "300px",
                background: "radial-gradient(ellipse at center, rgba(61,237,122,0.1) 0%, transparent 70%)",
                filter: "blur(40px)",
              }}
            />

            <div className="relative z-10 flex items-start justify-center gap-6">
              {/* PHANTOM branded */}
              <div className="flex flex-col items-center gap-3">
                <span
                  className="text-[10px] font-semibold px-2 py-1 rounded-full border"
                  style={{
                    backgroundColor: "rgba(61,237,122,0.08)",
                    borderColor: "rgba(61,237,122,0.25)",
                    color: "#3DED7A",
                  }}
                >
                  Your branded instance
                </span>
                <SidebarMockup
                  brandName="PHANTOM"
                  accentColor="#3DED7A"
                  logo={
                    <div
                      className="w-5 h-5 rounded-md flex items-center justify-center text-[9px] font-bold"
                      style={{ backgroundColor: "rgba(61,237,122,0.2)", color: "#3DED7A" }}
                    >
                      P
                    </div>
                  }
                  items={phantomItems}
                />
              </div>

              {/* Divider */}
              <div className="flex flex-col items-center self-center gap-2 py-4">
                <div className="text-muted text-[11px]">vs</div>
              </div>

              {/* Generic */}
              <div className="flex flex-col items-center gap-3">
                <span
                  className="text-[10px] font-semibold px-2 py-1 rounded-full border"
                  style={{
                    backgroundColor: "rgba(239,68,68,0.06)",
                    borderColor: "rgba(239,68,68,0.2)",
                    color: "#EF4444",
                  }}
                >
                  Generic CRM
                </span>
                <SidebarMockup
                  brandName="Generic CRM"
                  accentColor="#60A5FA"
                  logo={
                    <div
                      className="w-5 h-5 rounded-md flex items-center justify-center"
                      style={{ backgroundColor: "#1a1a1a" }}
                    >
                      <div className="w-2.5 h-2.5 rounded-sm bg-[#333]" />
                    </div>
                  }
                  items={genericItems}
                />
              </div>
            </div>

            {/* Caption */}
            <p className="text-muted text-xs text-center mt-6 max-w-xs leading-relaxed">
              Screenshots show a white-labelled instance under &ldquo;PHANTOM&rdquo; branding — demonstrating how agencies deliver COLABR8 TECH to their own clients.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
