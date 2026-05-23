"use client";

import { useState, useRef, FormEvent } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import {
  Mail,
  MessageSquare,
  CheckCircle2,
  Loader2,
  MapPin,
  Clock,
  ArrowRight,
} from "lucide-react";

// ─── Form state types ─────────────────────────────────────────────────────────

interface FormData {
  name: string;
  business: string;
  email: string;
  phone: string;
  plan: string;
  message: string;
}

type Status = "idle" | "loading" | "success" | "error";

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ContactPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true });

  const [form, setForm] = useState<FormData>({
    name: "",
    business: "",
    email: "",
    phone: "",
    plan: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function update(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Submission failed");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  const inputClass =
    "w-full bg-surface border border-divider rounded-xl px-4 py-3 text-white text-sm placeholder-muted focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all duration-200";
  const labelClass = "block text-sm font-medium text-secondary mb-1.5";

  return (
    <div className="min-h-screen bg-bg">
      <Nav />

      {/* ── Hero ── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 70% 0%, rgba(61,237,122,0.09) 0%, transparent 55%)",
          }}
        />

        <div ref={heroRef} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-3.5 py-1.5 mb-7"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-primary text-xs font-semibold tracking-wider uppercase">
                Get in touch
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-extrabold text-5xl md:text-6xl text-white leading-tight mb-5"
            >
              Let&apos;s talk.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.14 }}
              className="text-secondary text-lg leading-relaxed"
            >
              Fill in the form and we&apos;ll get back to you within one business day. Whether
              you want a live demo, have questions about a specific plan, or need to talk
              through a custom requirement — we&apos;re here.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── Two-column layout ── */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

            {/* ── Left column: info ── */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-2 flex flex-col gap-8"
            >
              {/* Info cards */}
              <div className="flex flex-col gap-4">
                {[
                  {
                    icon: Mail,
                    title: "Email",
                    body: "hello@colabr8.tech",
                    href: "mailto:hello@colabr8.tech",
                  },
                  {
                    icon: MessageSquare,
                    title: "Live demo",
                    body: "Request a guided walkthrough with our team",
                    href: null,
                  },
                  {
                    icon: Clock,
                    title: "Response time",
                    body: "Within 1 business day",
                    href: null,
                  },
                  {
                    icon: MapPin,
                    title: "Based in the UK",
                    body: "Supporting SMEs, agencies and service teams",
                    href: null,
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <div className="flex items-start gap-4 p-5 bg-surface border border-divider rounded-xl hover:border-divider/80 transition-colors">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-primary" strokeWidth={1.75} />
                      </div>
                      <div>
                        <div className="text-white text-sm font-semibold mb-0.5">{item.title}</div>
                        <div className="text-secondary text-sm">{item.body}</div>
                      </div>
                    </div>
                  );
                  return item.href ? (
                    <a key={item.title} href={item.href} className="group">
                      {content}
                    </a>
                  ) : (
                    <div key={item.title}>{content}</div>
                  );
                })}
              </div>

              {/* Social links */}
              <div>
                <p className="text-muted text-xs font-semibold uppercase tracking-wider mb-3">
                  Follow us
                </p>
                <div className="flex items-center gap-3">
                  {[
                    {
                      label: "LinkedIn",
                      href: "https://linkedin.com/company/colabr8-tech",
                      svg: (
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                          <circle cx="4" cy="4" r="2" />
                        </svg>
                      ),
                    },
                    {
                      label: "Facebook",
                      href: "https://facebook.com/colabr8tech",
                      svg: (
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                        </svg>
                      ),
                    },
                    {
                      label: "X (Twitter)",
                      href: "https://x.com/colabr8tech",
                      svg: (
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      ),
                    },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-9 h-9 rounded-lg bg-surface border border-divider flex items-center justify-center text-secondary hover:text-white hover:border-white/20 transition-all"
                    >
                      {social.svg}
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick links */}
              <div className="p-6 bg-surface border border-divider rounded-xl">
                <p className="text-white text-sm font-semibold mb-4">Quick links</p>
                <div className="flex flex-col gap-2.5">
                  {[
                    { label: "View pricing plans", href: "/pricing" },
                    { label: "Explore all features", href: "/features" },
                    { label: "Compare with HubSpot", href: "/compare/hubspot" },
                    { label: "Start free trial", href: "https://crm.colabr8.tech" },
                  ].map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="flex items-center justify-between text-secondary text-sm hover:text-white transition-colors group"
                    >
                      {link.label}
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* ── Right column: form ── */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-3"
            >
              <div className="bg-surface border border-divider rounded-2xl p-8 md:p-10">
                {status === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-primary/15 flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-8 h-8 text-primary" strokeWidth={1.75} />
                    </div>
                    <h2 className="font-display font-bold text-2xl text-white mb-3">
                      Thanks — we&apos;ll be in touch.
                    </h2>
                    <p className="text-secondary text-sm max-w-sm">
                      We&apos;ve received your message and will get back to you within 1 business day.
                    </p>
                    <button
                      onClick={() => {
                        setStatus("idle");
                        setForm({ name: "", business: "", email: "", phone: "", plan: "", message: "" });
                      }}
                      className="mt-8 text-sm text-secondary hover:text-white underline underline-offset-4 transition-colors"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <div className="mb-8">
                      <h2 className="font-display font-bold text-2xl text-white mb-1.5">
                        Request a demo
                      </h2>
                      <p className="text-secondary text-sm">
                        Tell us about your business and we&apos;ll get back to you within 1 business day.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className={labelClass} htmlFor="name">
                            Your name <span className="text-primary">*</span>
                          </label>
                          <input
                            id="name"
                            type="text"
                            required
                            autoComplete="name"
                            placeholder="Alex Johnson"
                            value={form.name}
                            onChange={(e) => update("name", e.target.value)}
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label className={labelClass} htmlFor="business">
                            Business name <span className="text-primary">*</span>
                          </label>
                          <input
                            id="business"
                            type="text"
                            required
                            autoComplete="organization"
                            placeholder="Acme Ltd"
                            value={form.business}
                            onChange={(e) => update("business", e.target.value)}
                            className={inputClass}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className={labelClass} htmlFor="email">
                            Email address <span className="text-primary">*</span>
                          </label>
                          <input
                            id="email"
                            type="email"
                            required
                            autoComplete="email"
                            placeholder="alex@acme.co.uk"
                            value={form.email}
                            onChange={(e) => update("email", e.target.value)}
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label className={labelClass} htmlFor="phone">
                            Phone number{" "}
                            <span className="text-muted font-normal">(optional)</span>
                          </label>
                          <input
                            id="phone"
                            type="tel"
                            autoComplete="tel"
                            placeholder="+44 7700 900123"
                            value={form.phone}
                            onChange={(e) => update("phone", e.target.value)}
                            className={inputClass}
                          />
                        </div>
                      </div>

                      <div>
                        <label className={labelClass} htmlFor="plan">
                          Plan interest{" "}
                          <span className="text-muted font-normal">(optional)</span>
                        </label>
                        <select
                          id="plan"
                          value={form.plan}
                          onChange={(e) => update("plan", e.target.value)}
                          className={`${inputClass} cursor-pointer`}
                          style={{ colorScheme: "dark" }}
                        >
                          <option value="">Select a plan</option>
                          <option value="starter">Starter — £49/month</option>
                          <option value="growth">Growth — £69/month</option>
                          <option value="enterprise">Enterprise — £99/month</option>
                          <option value="not-sure">Not sure yet</option>
                        </select>
                      </div>

                      <div>
                        <label className={labelClass} htmlFor="message">
                          Message{" "}
                          <span className="text-muted font-normal">(optional)</span>
                        </label>
                        <textarea
                          id="message"
                          rows={4}
                          placeholder="Tell us about your business, your current tools, and what you're trying to solve..."
                          value={form.message}
                          onChange={(e) => update("message", e.target.value)}
                          className={`${inputClass} resize-none`}
                        />
                      </div>

                      {status === "error" && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3 text-red-400 text-sm"
                        >
                          {errorMsg || "Something went wrong. Please try again."}
                        </motion.div>
                      )}

                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className="w-full flex items-center justify-center gap-2.5 bg-primary text-bg font-semibold text-sm py-4 rounded-full hover:bg-primary/90 transition-all duration-200 hover:shadow-[0_0_30px_rgba(61,237,122,0.3)] disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {status === "loading" ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Sending…
                          </>
                        ) : (
                          "Send message"
                        )}
                      </button>

                      <p className="text-center text-muted text-xs">
                        We&apos;ll respond within 1 business day. No spam, ever.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
