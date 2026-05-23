"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";


const navLinks = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

const compareLinks = [
  { label: "vs HubSpot", href: "/compare/hubspot" },
  { label: "vs GoHighLevel", href: "/compare/gohighlevel" },
  { label: "vs Zoho", href: "/compare/zoho" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [compareOpen, setCompareOpen] = useState(false);
  const compareRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close compare dropdown on outside click
  useEffect(() => {
    function handleOutside(e: MouseEvent) {
      if (compareRef.current && !compareRef.current.contains(e.target as Node)) {
        setCompareOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/80 backdrop-blur-xl border-b border-divider"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo/COLABR8-TECH-LOGO.png"
              alt="COLABR8 TECH"
              height={56}
              style={{ height: "56px", width: "auto", filter: "brightness(1)" }}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-secondary hover:text-white transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}

            {/* Compare dropdown */}
            <div
              ref={compareRef}
              className="relative"
              onMouseEnter={() => setCompareOpen(true)}
              onMouseLeave={() => setCompareOpen(false)}
            >
              <button
                onClick={() => setCompareOpen((v) => !v)}
                className="flex items-center gap-1 text-sm text-secondary hover:text-white transition-colors duration-150"
                aria-expanded={compareOpen}
              >
                Compare
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="currentColor"
                  className={`transition-transform duration-200 ${compareOpen ? "rotate-180" : ""}`}
                >
                  <path d="M5 7L1 3h8L5 7z" />
                </svg>
              </button>

              <AnimatePresence>
                {compareOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -6, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -6, scale: 0.97 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="absolute top-full left-0 mt-2 w-48 bg-surface border border-divider rounded-xl overflow-hidden shadow-2xl"
                  >
                    {compareLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setCompareOpen(false)}
                        className="flex items-center px-4 py-2.5 text-sm text-secondary hover:text-white hover:bg-surface-elevated transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://crm.colabr8.tech"
              className="text-sm text-secondary hover:text-white border border-divider hover:border-[#444] px-4 py-2 rounded-full transition-all duration-150"
            >
              Sign in
            </a>
            <Link
              href="/pricing"
              className="text-sm font-semibold bg-primary text-bg px-5 py-2 rounded-full hover:bg-primary/90 transition-all duration-150 hover:shadow-[0_0_20px_rgba(61,237,122,0.25)]"
            >
              Start free trial
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 -mr-2 text-secondary hover:text-white transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
                <path d="M4 4l12 12M16 4L4 16" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
                <path d="M3 6h14M3 10h14M3 14h14" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-surface border-t border-divider"
          >
            <nav className="flex flex-col px-4 py-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3.5 text-sm text-secondary hover:text-white border-b border-divider transition-colors"
                >
                  {link.label}
                </Link>
              ))}

              {/* Compare group */}
              <div className="py-3.5 border-b border-divider">
                <p className="text-[10px] text-muted uppercase tracking-widest mb-2">Compare</p>
                {compareLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 pl-3 text-sm text-secondary hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="flex flex-col gap-2.5 pt-4 pb-2">
                <a
                  href="https://crm.colabr8.tech"
                  className="text-sm text-center text-secondary border border-divider rounded-full py-2.5 hover:border-[#444] hover:text-white transition-all"
                >
                  Sign in
                </a>
                <Link
                  href="/pricing"
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-semibold text-center bg-primary text-bg rounded-full py-2.5 hover:bg-primary/90 transition-all"
                >
                  Start free trial
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
