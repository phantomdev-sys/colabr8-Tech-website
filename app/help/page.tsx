"use client";

import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Link from "next/link";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import {
  Zap, LayoutGrid, Users, BarChart2, Package, Calendar, FileText, CheckSquare,
  Mail, Send, Layout, Inbox, Upload, Globe, Sparkles, Activity, PieChart, Target,
  UserPlus, CheckCircle2, MessageSquare, Settings, CreditCard, AlertCircle,
  Search, ChevronDown, ChevronRight, X, Eye,
  type LucideIcon,
} from "lucide-react";
import { helpSections, quickTips, type HelpSection, type QA } from "./data";

// ─── Icon maps ────────────────────────────────────────────────────────────────

const sectionIcons: Record<string, LucideIcon> = {
  "getting-started": Zap,
  dashboard: LayoutGrid,
  contacts: Users,
  deals: BarChart2,
  services: Package,
  bookings: Calendar,
  invoices: FileText,
  tasks: CheckSquare,
  "email-setup": Mail,
  campaigns: Send,
  templates: Layout,
  inbox: Inbox,
  "csv-import": Upload,
  "social-media": Globe,
  "media-library": Eye,
  "ai-assistant": Sparkles,
  "ai-workspace": Activity,
  "portfolio-intelligence": PieChart,
  "revenue-intelligence": Target,
  users: UserPlus,
  approvals: CheckCircle2,
  feedback: MessageSquare,
  settings: Settings,
  billing: CreditCard,
  troubleshooting: AlertCircle,
};

const tipIcons: Record<string, LucideIcon> = {
  zap: Zap,
  search: Search,
  users: Users,
  mail: Mail,
  upload: Upload,
  eye: Eye,
  sparkles: Sparkles,
  calendar: Calendar,
  "credit-card": CreditCard,
  target: Target,
  layout: Layout,
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

function escapeRegex(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function highlightParts(text: string, query: string): React.ReactNode {
  if (!query.trim()) return text;
  const parts = text.split(new RegExp(`(${escapeRegex(query)})`, "gi"));
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <mark
            key={i}
            className="bg-primary/25 text-primary not-italic rounded-sm px-0.5"
          >
            {part}
          </mark>
        ) : (
          part
        )
      )}
    </>
  );
}

function renderAnswer(text: string, query: string): React.ReactNode {
  const lines = text.split("\n");
  const elements: React.ReactNode[] = [];
  let bullets: string[] = [];
  let numbered: string[] = [];
  let key = 0;

  const flushBullets = () => {
    if (!bullets.length) return;
    elements.push(
      <ul key={key++} className="space-y-1.5 my-2">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2.5">
            <ChevronRight className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
            <span className="text-secondary text-sm leading-relaxed">
              {highlightParts(b, query)}
            </span>
          </li>
        ))}
      </ul>
    );
    bullets = [];
  };

  const flushNumbered = () => {
    if (!numbered.length) return;
    elements.push(
      <ol key={key++} className="space-y-1.5 my-2">
        {numbered.map((n, i) => (
          <li key={i} className="flex items-start gap-2.5">
            <span className="font-mono text-primary text-xs font-bold mt-0.5 w-4 flex-shrink-0">
              {i + 1}.
            </span>
            <span className="text-secondary text-sm leading-relaxed">
              {highlightParts(n, query)}
            </span>
          </li>
        ))}
      </ol>
    );
    numbered = [];
  };

  for (const line of lines) {
    const t = line.trim();
    if (!t) continue;

    if (t.startsWith("•")) {
      flushNumbered();
      bullets.push(t.slice(1).trim());
    } else if (/^\d+\.\s/.test(t)) {
      flushBullets();
      numbered.push(t.replace(/^\d+\.\s+/, ""));
    } else {
      flushBullets();
      flushNumbered();
      elements.push(
        <p key={key++} className="text-secondary text-sm leading-relaxed">
          {highlightParts(t, query)}
        </p>
      );
    }
  }

  flushBullets();
  flushNumbered();

  return <div className="space-y-2">{elements}</div>;
}

// ─── Accordion Item ───────────────────────────────────────────────────────────

function AccordionItem({
  qa,
  query,
  forceOpen,
  index,
  sectionInView,
}: {
  qa: QA;
  query: string;
  forceOpen: boolean;
  index: number;
  sectionInView: boolean;
}) {
  const [open, setOpen] = useState(false);
  const isOpen = forceOpen || open;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={sectionInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
      className="border border-divider rounded-xl overflow-hidden bg-surface"
    >
      <button
        onClick={() => !forceOpen && setOpen((v) => !v)}
        className={`w-full flex items-center justify-between px-5 py-4 text-left transition-colors group ${
          forceOpen ? "cursor-default" : "hover:bg-surface-elevated"
        }`}
        aria-expanded={isOpen}
      >
        <span className="font-medium text-white text-sm pr-4 leading-snug group-hover:text-primary transition-colors">
          {highlightParts(qa.q, query)}
        </span>
        {!forceOpen && (
          <ChevronDown
            className={`w-4 h-4 text-secondary flex-shrink-0 transition-transform duration-200 ${
              open ? "rotate-180 text-primary" : ""
            }`}
          />
        )}
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-1 border-t border-divider bg-surface-elevated/40">
              {renderAnswer(qa.a, query)}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Section Block ────────────────────────────────────────────────────────────

function SectionBlock({
  section,
  query,
}: {
  section: HelpSection;
  query: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const Icon = sectionIcons[section.id] ?? Zap;
  const forceOpen = query.trim().length > 0;

  return (
    <section id={section.id} ref={ref} className="scroll-mt-28 py-10 border-b border-divider last:border-b-0">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center gap-3 mb-6"
      >
        <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
          <Icon className="w-4 h-4 text-primary" strokeWidth={1.75} />
        </div>
        <h2 className="font-display font-bold text-xl text-white">{section.label}</h2>
        <span className="text-xs text-muted bg-surface border border-divider rounded-full px-2.5 py-0.5 ml-1">
          {section.qas.length} {section.qas.length === 1 ? "article" : "articles"}
        </span>
      </motion.div>

      <div className="flex flex-col gap-2">
        {section.qas.map((qa, i) => (
          <AccordionItem
            key={i}
            qa={qa}
            query={query}
            forceOpen={forceOpen}
            index={i}
            sectionInView={inView}
          />
        ))}
      </div>
    </section>
  );
}

// ─── Sticky Category Nav ──────────────────────────────────────────────────────

function CategoryNav({
  sections,
  activeId,
}: {
  sections: HelpSection[];
  activeId: string;
}) {
  const navRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (activeRef.current && navRef.current) {
      const nav = navRef.current;
      const item = activeRef.current;
      const offset =
        item.getBoundingClientRect().left -
        nav.getBoundingClientRect().left -
        nav.clientWidth / 2 +
        item.clientWidth / 2;
      nav.scrollBy({ left: offset, behavior: "smooth" });
    }
  }, [activeId]);

  return (
    <div className="sticky top-16 z-40 bg-bg/90 backdrop-blur-xl border-b border-divider">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={navRef}
          className="flex items-center gap-0.5 overflow-x-auto py-0"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {sections.map((s) => {
            const Icon = sectionIcons[s.id] ?? Zap;
            const isActive = activeId === s.id;
            return (
              <button
                key={s.id}
                ref={isActive ? activeRef : null}
                onClick={() => {
                  document
                    .getElementById(s.id)
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className={`relative flex-shrink-0 flex items-center gap-1.5 px-3 py-3.5 text-xs font-medium transition-colors duration-150 whitespace-nowrap ${
                  isActive ? "text-white" : "text-secondary hover:text-white"
                }`}
              >
                <Icon
                  className={`w-3 h-3 flex-shrink-0 ${isActive ? "text-primary" : ""}`}
                  strokeWidth={isActive ? 2.5 : 1.75}
                />
                {s.label}
                {isActive && (
                  <motion.div
                    layoutId="help-active-cat"
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

// ─── Quick Tips Section ───────────────────────────────────────────────────────

function QuickTipsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-20 bg-surface border-t border-divider">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-3.5 py-1.5 mb-5">
            <Zap className="w-3.5 h-3.5 text-primary" strokeWidth={2} />
            <span className="text-primary text-xs font-semibold tracking-wider uppercase">
              Quick Tips
            </span>
          </div>
          <h2 className="font-display font-extrabold text-3xl text-white mb-3">
            Power user shortcuts
          </h2>
          <p className="text-secondary text-lg">
            Small habits that make a big difference.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {quickTips.map((tip, i) => {
            const Icon = tipIcons[tip.iconKey] ?? Zap;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
                className="group flex items-start gap-4 bg-surface-elevated border border-divider rounded-xl p-5 hover:border-primary/30 transition-all duration-200"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors">
                  <Icon className="w-4 h-4 text-primary" strokeWidth={1.75} />
                </div>
                <p className="text-secondary text-sm leading-relaxed">{tip.tip}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeId, setActiveId] = useState(helpSections[0].id);
  const heroRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true });

  // Filtered sections based on search
  const filteredSections = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return helpSections;
    return helpSections
      .map((s) => ({
        ...s,
        qas: s.qas.filter(
          (qa) =>
            qa.q.toLowerCase().includes(q) || qa.a.toLowerCase().includes(q)
        ),
      }))
      .filter((s) => s.qas.length > 0);
  }, [searchQuery]);

  const totalResults = useMemo(
    () => filteredSections.reduce((acc, s) => acc + s.qas.length, 0),
    [filteredSections]
  );

  // Intersection observer for active section tracking
  useEffect(() => {
    if (searchQuery.trim()) return;
    const observers: IntersectionObserver[] = [];
    helpSections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(s.id);
        },
        { rootMargin: "-20% 0px -65% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [searchQuery]);

  const clearSearch = useCallback(() => setSearchQuery(""), []);

  return (
    <div className="min-h-screen bg-bg">
      <Nav />

      {/* ── Hero + Search ── */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% -10%, rgba(61,237,122,0.12) 0%, transparent 60%)",
          }}
        />

        <div ref={heroRef} className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-3.5 py-1.5 mb-7"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-primary text-xs font-semibold tracking-wider uppercase">
              Help Centre
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-extrabold text-5xl md:text-6xl text-white leading-tight mb-5"
          >
            Help Centre
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="text-secondary text-xl mb-10"
          >
            Everything you need to get started and grow.
          </motion.p>

          {/* Search bar */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="relative max-w-xl mx-auto"
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search guides, features, troubleshooting…"
              className="w-full bg-surface border border-divider rounded-full px-12 py-3.5 text-white text-sm placeholder-muted focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-200"
              aria-label="Search help articles"
            />
            <AnimatePresence>
              {searchQuery && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  onClick={clearSearch}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center rounded-full bg-surface-elevated text-secondary hover:text-white transition-colors"
                  aria-label="Clear search"
                >
                  <X className="w-3 h-3" />
                </motion.button>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Search result count */}
          <AnimatePresence>
            {searchQuery.trim() && (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="text-secondary text-sm mt-4"
              >
                {totalResults === 0 ? (
                  <>No results for <span className="text-white">&quot;{searchQuery}&quot;</span></>
                ) : (
                  <>
                    <span className="text-primary font-semibold">{totalResults}</span>
                    {" "}result{totalResults !== 1 ? "s" : ""} for{" "}
                    <span className="text-white">&quot;{searchQuery}&quot;</span>
                  </>
                )}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ── Sticky Category Nav (hidden during search) ── */}
      <AnimatePresence>
        {!searchQuery.trim() && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <CategoryNav sections={helpSections} activeId={activeId} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Content ── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredSections.length === 0 ? (
          <div className="py-24 text-center">
            <p className="text-secondary text-lg mb-3">No articles matched your search.</p>
            <button
              onClick={clearSearch}
              className="text-primary text-sm underline underline-offset-4 hover:text-primary/80 transition-colors"
            >
              Clear search and browse all topics
            </button>
          </div>
        ) : (
          <div className="divide-y divide-divider">
            {filteredSections.map((section) => (
              <SectionBlock
                key={section.id}
                section={section}
                query={searchQuery}
              />
            ))}
          </div>
        )}
      </div>

      {/* ── Quick Tips ── */}
      {!searchQuery.trim() && <QuickTipsSection />}

      {/* ── Bottom nav ── */}
      {!searchQuery.trim() && (
        <section className="py-16 border-t border-divider">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-secondary text-base mb-6">
              Can&apos;t find what you&apos;re looking for?
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center bg-primary text-bg font-semibold text-sm px-6 py-3 rounded-full hover:bg-primary/90 transition-all duration-200 hover:shadow-[0_0_30px_rgba(61,237,122,0.3)]"
              >
                Contact support
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center border border-divider text-secondary text-sm px-6 py-3 rounded-full hover:border-white/20 hover:text-white transition-all duration-200"
              >
                View pricing
              </Link>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
