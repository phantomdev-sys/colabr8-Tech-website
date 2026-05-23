"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import CTASection from "@/components/cta-section";
import type { LucideIcon } from "lucide-react";
import {
  Users, Building2, BarChart2,
  Package, Calendar, FileText, CheckSquare, FileCheck,
  Mail, Inbox, Globe, Link2,
  Sparkles, Target, Eye, PieChart, Activity, LineChart,
  MessageSquare, CheckCircle2,
  Shield, LayoutGrid, CreditCard, Bell, Palette, Network, Lock, Smartphone,
  ChevronRight,
} from "lucide-react";

// ─── Types ───────────────────────────────────────────────────────────────────

interface Feature {
  icon: LucideIcon;
  name: string;
  subtitle: string;
  description: string;
  bullets: string[];
}

interface Category {
  id: string;
  label: string;
  headline: string;
  description: string;
  features: Feature[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const categories: Category[] = [
  {
    id: "crm",
    label: "CRM",
    headline: "Customer relationships at the core of everything.",
    description:
      "Build a complete picture of every contact, company, and deal. Every interaction tracked, every relationship connected — nothing falls through the gaps.",
    features: [
      {
        icon: Users,
        name: "Contacts",
        subtitle: "Your entire network, perfectly organised",
        description:
          "Store unlimited contacts with multi-value emails, phone numbers, and structured addresses. Every contact has a full activity timeline — calls, emails, bookings, deals, invoices — all connected automatically.",
        bullets: [
          "Unlimited contacts",
          "Multi-value emails & phone numbers",
          "Structured address fields",
          "Attachment storage",
          "Smart deduplication",
          "CSV import & export",
          "Full activity timeline",
          "Linked deals, bookings & invoices",
        ],
      },
      {
        icon: Building2,
        name: "Companies",
        subtitle: "Know every account inside out",
        description:
          "Company profiles with linked contacts, deals, and documents. Domain-based matching helps you associate new contacts to the right company automatically, keeping your database structured without the manual effort.",
        bullets: [
          "Unlimited companies",
          "Linked contacts & deals",
          "Domain-based auto-matching",
          "Company-level activity timeline",
          "Custom field support",
          "Attachment storage",
        ],
      },
      {
        icon: BarChart2,
        name: "Deals Pipeline",
        subtitle: "Drag-and-drop Kanban with real forecasting",
        description:
          "Manage your entire sales pipeline with a visual Kanban board. Weighted deal values give you an accurate revenue forecast, while approval workflows prevent premature stage transitions on high-value opportunities.",
        bullets: [
          "Drag-and-drop Kanban board",
          "Weighted pipeline forecast",
          "Approval workflows for key stages",
          "Deal-linked documents & services",
          "Activity timeline per deal",
          "Win/loss reporting",
          "Multi-pipeline support",
        ],
      },
    ],
  },
  {
    id: "operations",
    label: "Operations",
    headline: "Run every client engagement from one system.",
    description:
      "Service delivery, scheduling, billing, and task management — fully integrated and connected to your CRM contacts and companies.",
    features: [
      {
        icon: Package,
        name: "Service Catalogue",
        subtitle: "Define exactly what you offer",
        description:
          "Build a catalogue of your services with names, descriptions, pricing, and duration. Services link directly to deals, bookings, and invoices — so your quote is always consistent with what gets delivered and billed.",
        bullets: [
          "Unlimited service definitions",
          "Per-service pricing & duration",
          "Linked to deals & bookings",
          "Used in quote line items",
          "Assignable to staff members",
          "VAT & tax configuration",
        ],
      },
      {
        icon: Calendar,
        name: "Bookings & Scheduling",
        subtitle: "Per-staff calendars connected to CRM",
        description:
          "Staff calendars with configurable availability windows, buffer times, and per-service durations. Bookings are automatically linked to CRM contacts — so you always know who you're meeting and why.",
        bullets: [
          "Per-staff availability rules",
          "Multi-service scheduling",
          "Automated confirmation emails",
          "CRM-linked bookings",
          "Buffer time configuration",
          "Public booking links",
          "Calendar sync ready",
        ],
      },
      {
        icon: FileText,
        name: "Invoices & Quotes",
        subtitle: "From quote to cash without leaving the CRM",
        description:
          "Create branded quotes linked to deals and convert them to invoices in one click. Support for multi-currency, VAT, and custom line items. Track payment status from issued to paid — all against the CRM record.",
        bullets: [
          "Branded PDF generation",
          "Quote-to-invoice conversion",
          "Multi-currency support",
          "VAT & tax line items",
          "Payment status tracking",
          "Deal-linked invoices",
          "Custom payment terms",
        ],
      },
      {
        icon: CheckSquare,
        name: "Tasks",
        subtitle: "Keep your team on track, nothing missed",
        description:
          "Create tasks for yourself or assign them to team members, linked to contacts, companies, or deals. Set priorities and due dates, and track completion across your whole team from a unified task board.",
        bullets: [
          "Individual & team tasks",
          "Due dates & priorities",
          "Linked to CRM records",
          "Team assignment",
          "Completion tracking",
          "Notification on assignment",
          "Task board view",
        ],
      },
      {
        icon: FileCheck,
        name: "Contracts",
        subtitle: "Store agreements against the right records",
        description:
          "Attach contract documents directly to deals and companies. Keep signed agreements, statements of work, and NDAs organised and accessible — always linked to the relevant client record.",
        bullets: [
          "Document storage per deal",
          "Linked to companies & contacts",
          "Version management",
          "Accessible from any linked record",
          "Secure storage",
        ],
      },
    ],
  },
  {
    id: "marketing",
    label: "Marketing",
    headline: "Reach, engage, and convert — all from one platform.",
    description:
      "Email campaigns, social media, inbox management, and lead capture — deeply integrated with your CRM data so every marketing action connects back to a real contact or company.",
    features: [
      {
        icon: Mail,
        name: "Email Campaigns",
        subtitle: "Campaigns that convert, built in minutes",
        description:
          "Drag-and-drop email template builder with real-time preview, AI-powered template generation, and detailed analytics. Manage your sender domain, control send limits, and track every open, click, and unsubscribe against CRM contacts.",
        bullets: [
          "Visual drag-and-drop builder",
          "AI template generation",
          "Sender domain enforcement",
          "Open & click analytics",
          "Link tracking",
          "Recipient list management",
          "Send-time scheduling",
          "Unsubscribe management",
        ],
      },
      {
        icon: Inbox,
        name: "Inbox",
        subtitle: "Native email inbox, CRM-connected",
        description:
          "A native IMAP/SMTP inbox built into the CRM. Emails are automatically linked to the matching CRM contact or company — so your team sees every conversation in context, right next to the deal or booking it relates to.",
        bullets: [
          "Native IMAP/SMTP support",
          "Auto-linked to CRM contacts",
          "Folder & label management",
          "Threaded conversations",
          "Team inbox sharing",
          "Reply from CRM context",
          "Sent mail tracking",
        ],
      },
      {
        icon: Globe,
        name: "Social Media",
        subtitle: "Schedule once. Publish everywhere.",
        description:
          "Connect Meta, LinkedIn, Instagram, and TikTok and manage your entire social presence from a single calendar. Plan and queue content across channels, with engagement analytics to track what performs.",
        bullets: [
          "Multi-platform scheduling",
          "Facebook, Instagram, LinkedIn, TikTok",
          "Unified content calendar",
          "Engagement analytics",
          "Publishing queue management",
          "Post preview per network",
          "Cross-channel scheduling",
        ],
      },
      {
        icon: Link2,
        name: "Website Lead Capture",
        subtitle: "Turn website visitors into CRM contacts instantly",
        description:
          "Embed lead capture forms on your website that feed directly into your CRM. Every submission creates or updates a contact record automatically — no manual data entry, no missed enquiries.",
        bullets: [
          "Embeddable form builder",
          "Automatic CRM contact creation",
          "Webhook delivery",
          "Source tracking",
          "Custom field mapping",
          "Real-time notifications",
          "Spam filtering",
        ],
      },
    ],
  },
  {
    id: "intelligence",
    label: "Intelligence",
    headline: "Know exactly what's happening across your business.",
    description:
      "AI, analytics, and real-time intelligence built into the core of the platform — not bolted on as an afterthought.",
    features: [
      {
        icon: Sparkles,
        name: "AI Workspace",
        subtitle: "An AI that actually knows your business",
        description:
          "A dedicated AI workspace scoped entirely to your CRM data. Ask about pending payments, research a company before outreach, draft a sales follow-up, or generate campaign ideas. Always one click away from any page via the header — with its own chat history, projects, and folders.",
        bullets: [
          "CRM-aware context",
          "Dedicated workspace with projects & folders",
          "Always accessible from header",
          "Pre-built prompt suggestions",
          "Conversation history saved & searchable",
          "Sales & marketing templates",
          "Company & contact research",
        ],
      },
      {
        icon: Target,
        name: "Opportunity Radar",
        subtitle: "Surface revenue signals before they disappear",
        description:
          "The Opportunity Radar analyses your CRM data in real time to surface upsell, retention, and churn signals. Know which clients are at risk, who's ready to expand, and where your team should focus this week.",
        bullets: [
          "Upsell signal detection",
          "Churn & retention risk scoring",
          "Real-time surfacing",
          "Client health indicators",
          "Revenue opportunity alerts",
          "Actionable recommendations",
          "Linked to CRM contacts",
        ],
      },
      {
        icon: Eye,
        name: "Visitor Intelligence",
        subtitle: "Identify the companies visiting your website",
        description:
          "See which companies are browsing your website even before they fill in a form. Visitor Intelligence maps IP data to company profiles and surfaces them directly in your CRM — so your sales team can reach out at exactly the right moment.",
        bullets: [
          "Company identification from IP",
          "Real-time visitor alerts",
          "CRM contact matching",
          "Industry & company size data",
          "Page-level visit tracking",
          "Lead score integration",
          "GDPR-compliant processing",
        ],
      },
      {
        icon: PieChart,
        name: "Portfolio Intelligence",
        subtitle: "Your entire client base, at a glance",
        description:
          "Portfolio Intelligence gives you a radial sunburst view of your entire customer base — broken down by service, revenue, and health. Track MRR, ARR, and renewal risk scores across all clients in a single dashboard.",
        bullets: [
          "Radial sunburst portfolio view",
          "MRR & ARR tracking",
          "Renewal risk scoring",
          "Service distribution analysis",
          "Revenue health indicators",
          "Per-client drill-down",
          "Export & reporting ready",
        ],
      },
      {
        icon: Activity,
        name: "Activity Timeline",
        subtitle: "The complete history of every relationship",
        description:
          "Every email, call, booking, deal update, invoice, and note is automatically logged to an unbroken activity timeline against the relevant contact, company, and deal. Nothing is ever lost or disconnected.",
        bullets: [
          "Auto-logged across all modules",
          "Contact-level timeline",
          "Company-level timeline",
          "Deal-level timeline",
          "Searchable history",
          "User attribution",
          "Exportable audit trail",
        ],
      },
      {
        icon: LineChart,
        name: "Attribution & Ad Performance",
        subtitle: "Know what's actually driving revenue",
        description:
          "Connect your advertising and marketing data to CRM outcomes. Track which campaigns, channels, and sources are generating contacts, deals, and revenue — so every marketing pound is accountable.",
        bullets: [
          "Campaign source tracking",
          "Multi-channel attribution",
          "Ad platform integration",
          "Revenue attribution to campaigns",
          "Contact source reporting",
          "ROI dashboard",
          "UTM parameter support",
        ],
      },
    ],
  },
  {
    id: "collaboration",
    label: "Collaboration",
    headline: "Keep your team aligned and decisions accountable.",
    description:
      "Built-in collaboration tools that plug directly into your workflows — so nothing falls through the cracks between team members.",
    features: [
      {
        icon: MessageSquare,
        name: "Feedback",
        subtitle: "Structured internal feedback loops",
        description:
          "Capture and manage internal feedback directly within the platform. Whether it's review cycles, client satisfaction inputs, or internal process improvements — structured and linked to the relevant records.",
        bullets: [
          "Internal feedback collection",
          "Linked to CRM records",
          "Structured response formats",
          "Team visibility controls",
          "Feedback tracking & follow-up",
          "Review cycle management",
        ],
      },
      {
        icon: CheckCircle2,
        name: "Approvals",
        subtitle: "Prevent mistakes with enforced approval gates",
        description:
          "Configure approval workflows for high-impact actions — deal stage transitions, invoice dispatch, contract signing, or access changes. Requests route to the right approver and nothing moves forward without sign-off.",
        bullets: [
          "Multi-step approval chains",
          "Deal stage gate approvals",
          "Invoice dispatch approvals",
          "Approver notifications",
          "Full audit trail",
          "Configurable approval rules",
          "Override controls for admins",
        ],
      },
    ],
  },
  {
    id: "platform",
    label: "Platform",
    headline: "Enterprise-grade infrastructure. Simple enough for a five-person team.",
    description:
      "The underpinning platform that makes COLABR8 TECH secure, scalable, and white-label ready — from your first deal to your thousandth client.",
    features: [
      {
        icon: Shield,
        name: "Three-Tier Access Control",
        subtitle: "The right permissions for every role",
        description:
          "Role-based access control with three tiers — Owner, Manager, and Staff. Each tier has configurable permissions across every module. You control exactly who can see, edit, or delete any record in the system.",
        bullets: [
          "Owner / Manager / Staff tiers",
          "Module-level permissions",
          "Read / write / delete controls",
          "Invitation management",
          "Session & login controls",
          "Per-user audit logging",
          "Access revocation",
        ],
      },
      {
        icon: LayoutGrid,
        name: "Industry Templates",
        subtitle: "Pre-configured for your sector",
        description:
          "Industry templates give you a pre-configured CRM setup tailored to your vertical — from pipeline stages to service catalogues. Get running faster with sensible defaults that match how your industry actually works.",
        bullets: [
          "Pre-built pipeline templates",
          "Industry-specific stages",
          "Service catalogue defaults",
          "Custom field presets",
          "Email template libraries",
          "Booking service templates",
          "One-click setup",
        ],
      },
      {
        icon: CreditCard,
        name: "Stripe Subscriptions",
        subtitle: "Billing and subscription management built in",
        description:
          "Native Stripe integration for managing client subscriptions, recurring billing, and payment collection. Track subscription status, handle renewals, and reconcile payments against CRM accounts — all from inside the platform.",
        bullets: [
          "Native Stripe integration",
          "Subscription lifecycle management",
          "Renewal tracking",
          "Payment failure handling",
          "CRM-linked billing records",
          "Invoice reconciliation",
          "Plan management",
        ],
      },
      {
        icon: Bell,
        name: "Notifications",
        subtitle: "Stay informed on everything that matters",
        description:
          "Real-time notifications across every module — new leads, deal updates, booking confirmations, invoice payments, task assignments, and approval requests. Configurable per user so you only hear about what you need to.",
        bullets: [
          "Real-time in-app notifications",
          "Email notification delivery",
          "Per-module configuration",
          "Team mention alerts",
          "Task assignment notices",
          "Approval request alerts",
          "Digest mode available",
        ],
      },
      {
        icon: Palette,
        name: "White-Label Branding",
        subtitle: "Your brand. Your platform. Zero COLABR8 TECH visible.",
        description:
          "Full white-label capability on the Enterprise plan. Replace every instance of COLABR8 TECH branding with your own logo, colours, and name. Your clients see your platform — not ours. Available across the full UI and all system emails.",
        bullets: [
          "Custom logo & brand colours",
          "No Colabr8 branding shown to end users",
          "White-label system emails",
          "Custom domain support",
          "Custom sidebar labels per industry",
          "Resellable to your own clients",
        ],
      },
      {
        icon: Network,
        name: "Multi-Tenant Architecture",
        subtitle: "Run multiple client accounts from one system",
        description:
          "Built for agencies and service businesses that manage multiple client accounts. Each tenant is fully isolated with its own data, users, and configuration — managed from a single operator interface.",
        bullets: [
          "Fully isolated tenant accounts",
          "Row-level security per tenant",
          "Centralised operator dashboard",
          "Per-tenant configuration",
          "Scalable to hundreds of tenants",
          "GDPR-compliant data isolation",
        ],
      },
      {
        icon: Lock,
        name: "Data Security",
        subtitle: "Your data is yours, and it's protected",
        description:
          "Every account is isolated using row-level security. Data is encrypted in transit and at rest. Role-based access controls limit exposure internally. Full audit trails give you visibility of every action taken in the platform.",
        bullets: [
          "Row-level security",
          "Encryption in transit & at rest",
          "Full audit logging",
          "Access control per user",
          "GDPR-compliant by design",
          "Data deletion workflows",
        ],
      },
      {
        icon: Smartphone,
        name: "Mobile-Friendly UI",
        subtitle: "Full functionality on any device",
        description:
          "COLABR8 TECH is fully responsive and optimised for mobile use. Whether your team is checking a deal on the go, confirming a booking from the field, or approving an invoice from their phone — the platform works exactly as expected.",
        bullets: [
          "Fully responsive design",
          "Mobile-optimised navigation",
          "Touch-friendly interactions",
          "Fast loading on mobile networks",
          "Consistent experience across devices",
        ],
      },
    ],
  },
];

// ─── Feature Card ─────────────────────────────────────────────────────────────

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const Icon = feature.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      className="group relative bg-surface border border-divider rounded-2xl p-7 hover:border-primary/30 hover:bg-surface-elevated transition-all duration-300 flex flex-col gap-5"
    >
      {/* Top glow on hover */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />

      {/* Icon + header */}
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-300">
          <Icon className="w-5 h-5 text-primary" strokeWidth={1.75} />
        </div>
        <div>
          <h3 className="font-display font-bold text-white text-lg leading-tight">
            {feature.name}
          </h3>
          <p className="text-secondary text-sm mt-0.5">{feature.subtitle}</p>
        </div>
      </div>

      {/* Description */}
      <p className="text-secondary text-sm leading-relaxed">{feature.description}</p>

      {/* Divider */}
      <div className="border-t border-divider" />

      {/* Bullets */}
      <ul className="grid grid-cols-1 gap-2">
        {feature.bullets.map((bullet, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm text-secondary">
            <ChevronRight className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
            {bullet}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

// ─── Category Section ─────────────────────────────────────────────────────────

function CategorySection({ category }: { category: Category }) {
  const headerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section id={category.id} className="py-24 scroll-mt-28">
      {/* Section header */}
      <div ref={headerRef} className="mb-14">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-3.5 py-1.5 mb-5"
        >
          <span className="text-primary text-xs font-semibold tracking-wider uppercase">
            {category.label}
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-extrabold text-3xl md:text-4xl text-white mb-4 leading-tight max-w-2xl"
        >
          {category.headline}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-secondary text-lg max-w-2xl"
        >
          {category.description}
        </motion.p>
      </div>

      {/* Feature cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {category.features.map((feature, i) => (
          <FeatureCard key={feature.name} feature={feature} index={i} />
        ))}
      </div>
    </section>
  );
}

// ─── Sticky Category Nav ──────────────────────────────────────────────────────

function StickyNav({ activeId }: { activeId: string }) {
  const navRef = useRef<HTMLDivElement>(null);
  const activeItemRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (activeItemRef.current && navRef.current) {
      const nav = navRef.current;
      const item = activeItemRef.current;
      const navLeft = nav.getBoundingClientRect().left;
      const itemLeft = item.getBoundingClientRect().left;
      const scrollOffset = itemLeft - navLeft - nav.clientWidth / 2 + item.clientWidth / 2;
      nav.scrollBy({ left: scrollOffset, behavior: "smooth" });
    }
  }, [activeId]);

  return (
    <div className="sticky top-16 z-40 bg-bg/90 backdrop-blur-xl border-b border-divider">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={navRef}
          className="flex items-center gap-1 overflow-x-auto scrollbar-hide py-0"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {categories.map((cat) => {
            const isActive = activeId === cat.id;
            return (
              <button
                key={cat.id}
                ref={isActive ? activeItemRef : null}
                onClick={() => {
                  const el = document.getElementById(cat.id);
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className={`relative flex-shrink-0 px-4 py-4 text-sm font-medium transition-colors duration-200 ${
                  isActive ? "text-white" : "text-secondary hover:text-white"
                }`}
              >
                {cat.label}
                {isActive && (
                  <motion.div
                    layoutId="active-cat"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 500, damping: 40 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function FeaturesPage() {
  const [activeId, setActiveId] = useState<string>(categories[0].id);

  // Intersection observer to track active section
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    categories.forEach((cat) => {
      const el = document.getElementById(cat.id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(cat.id);
        },
        { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <div className="min-h-screen bg-bg">
      <Nav />

      {/* ── Hero ── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 60% 0%, rgba(61,237,122,0.1) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(61,237,122,0.05) 0%, transparent 50%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-3.5 py-1.5 mb-7"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-primary text-xs font-semibold tracking-wider uppercase">
              Full Feature Inventory
            </span>
          </motion.div>

          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-extrabold text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] mb-7"
            >
              Every feature you need.{" "}
              <span className="text-primary">Nothing you don&apos;t.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="text-secondary text-xl leading-relaxed mb-10 max-w-2xl"
            >
              One platform covering CRM, operations, marketing, and intelligence. Every
              feature built to connect — not to be sold to you separately.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/pricing"
                className="inline-flex items-center bg-primary text-bg font-semibold text-base px-7 py-3.5 rounded-full hover:bg-primary/90 transition-all duration-200 hover:shadow-[0_0_40px_rgba(61,237,122,0.35)]"
              >
                Start free trial
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center border border-white/20 text-white text-base px-7 py-3.5 rounded-full hover:border-white/40 hover:bg-white/5 transition-all duration-200"
              >
                Request a demo
              </Link>
            </motion.div>
          </div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-x-10 gap-y-4 mt-16 pt-16 border-t border-divider"
          >
            {[
              { value: "6", label: "Feature categories" },
              { value: "30+", label: "Individual features" },
              { value: "£49", label: "All-in from /month" },
              { value: "0", label: "Per-seat fees" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-mono font-bold text-3xl text-primary">{stat.value}</div>
                <div className="text-secondary text-sm mt-0.5">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Sticky Nav ── */}
      <StickyNav activeId={activeId} />

      {/* ── Feature Sections ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 divide-y divide-divider">
        {categories.map((cat) => (
          <CategorySection key={cat.id} category={cat} />
        ))}
      </div>

      {/* ── CTA ── */}
      <CTASection />

      <Footer />
    </div>
  );
}
