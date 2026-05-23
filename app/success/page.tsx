"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-bg flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(61,237,122,0.08) 0%, transparent 70%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex flex-col items-center text-center max-w-lg"
      >
        {/* Green checkmark */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.5, type: "spring", stiffness: 200, damping: 18 }}
          className="mb-8 flex items-center justify-center w-20 h-20 rounded-full"
          style={{
            background: "rgba(61,237,122,0.12)",
            border: "1.5px solid rgba(61,237,122,0.35)",
          }}
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#3DED7A"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="font-display text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight"
        >
          You&apos;re in.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-2xl sm:text-3xl font-display font-semibold text-primary mb-6"
        >
          Welcome to COLABR8 TECH.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-secondary text-base sm:text-lg leading-relaxed mb-10"
        >
          Your account is being set up. You&apos;ll receive an email with your login link within
          a few minutes. If you don&apos;t see it, check your spam folder.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Link
            href="https://crm.colabr8.tech"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-primary text-bg font-semibold text-base transition-all duration-200 hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98]"
          >
            Go to your CRM
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>

          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-divider text-secondary font-semibold text-base transition-all duration-200 hover:border-white/30 hover:text-white"
          >
            Back to home
          </Link>
        </motion.div>
      </motion.div>

      {/* Logo at bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute bottom-8"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo/COLABR8-TECH-LOGO.png"
          alt="COLABR8 TECH"
          style={{ height: "28px", width: "auto", opacity: 0.4 }}
        />
      </motion.div>
    </main>
  );
}
