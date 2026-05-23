"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Users, Kanban, CalendarDays, Mail, Share2, Inbox,
  FileText, Sparkles, Eye, BarChart3, Palette, Building2,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "CRM & Contacts",
    description: "Unlimited contacts, companies, and relationships. Smart deduplication. Full activity timeline.",
  },
  {
    icon: Kanban,
    title: "Sales Pipelines",
    description: "Drag-and-drop Kanban with weighted forecasts, approval workflows, and deal-linked documents.",
  },
  {
    icon: CalendarDays,
    title: "Bookings & Scheduling",
    description: "Per-staff calendars, availability rules, automated confirmations. Set up in minutes.",
  },
  {
    icon: Mail,
    title: "Email Campaigns",
    description: "Drag-and-drop builder, analytics, send limits, AI template generation.",
  },
  {
    icon: Share2,
    title: "Social Media",
    description: "Schedule across Facebook, Instagram, LinkedIn, TikTok from one calendar.",
  },
  {
    icon: Inbox,
    title: "Inbox",
    description: "Native IMAP/SMTP inbox, auto-linked to CRM contacts and companies.",
  },
  {
    icon: FileText,
    title: "Invoices & Quotes",
    description: "Branded PDFs, multi-currency, quote-to-invoice conversion, status tracking.",
  },
  {
    icon: Sparkles,
    title: "AI Workspace",
    description: "CRM-aware AI assistant scoped to your data. Ask anything about your contacts, deals, or tasks.",
  },
  {
    icon: Eye,
    title: "Visitor Intelligence",
    description: "Identify the companies behind your anonymous website traffic.",
  },
  {
    icon: BarChart3,
    title: "Portfolio Intelligence",
    description: "Radial revenue dashboards, renewal risk scoring, MRR/ARR tracking.",
  },
  {
    icon: Palette,
    title: "White-Label Ready",
    description: "Your brand. Your colours. No COLABR8 TECH branding visible to your customers.",
  },
  {
    icon: Building2,
    title: "Multi-Tenant",
    description: "Built for agencies running multiple client accounts from one system.",
  },
];

export default function FeaturesGrid() {
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
            One platform. Zero compromise.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-secondary text-lg max-w-2xl mx-auto"
          >
            Replace the stack of disconnected tools with a single system your whole team can rely on.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="group relative bg-surface border border-divider rounded-2xl p-6 hover:border-primary/40 transition-all duration-300 hover:bg-surface-elevated cursor-default"
              >
                {/* Subtle green glow on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ boxShadow: "inset 0 0 0 1px rgba(61,237,122,0.15)" }}
                />

                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: "rgba(61,237,122,0.1)" }}
                >
                  <Icon size={18} color="#3DED7A" strokeWidth={1.75} />
                </div>

                <h3 className="text-white font-semibold text-sm mb-2 font-body">{feature.title}</h3>
                <p className="text-secondary text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
