"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const dots = [
  { w: 4, x: 12, y: 22, d: 0, dur: 6 },
  { w: 7, x: 88, y: 68, d: 0.8, dur: 8 },
  { w: 5, x: 45, y: 15, d: 1.6, dur: 7 },
  { w: 3, x: 72, y: 82, d: 0.4, dur: 5 },
  { w: 6, x: 28, y: 75, d: 1.2, dur: 9 },
  { w: 4, x: 62, y: 30, d: 2.0, dur: 6 },
  { w: 5, x: 18, y: 55, d: 0.6, dur: 8 },
  { w: 3, x: 92, y: 40, d: 1.8, dur: 7 },
];

export default function CTASection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 overflow-hidden bg-bg">
      {/* Animated gradient mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 animate-cta-gradient"
          style={{
            background:
              "radial-gradient(ellipse at 20% 50%, rgba(61,237,122,0.12) 0%, transparent 55%), radial-gradient(ellipse at 80% 50%, rgba(61,237,122,0.08) 0%, transparent 55%)",
            backgroundSize: "200% 200%",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(61,237,122,0.05) 0%, transparent 70%)",
          }}
        />
        {/* Floating particles */}
        {dots.map((dot, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              width: dot.w,
              height: dot.w,
              left: `${dot.x}%`,
              top: `${dot.y}%`,
              backgroundColor: "rgba(61,237,122,0.25)",
              animationDelay: `${dot.d}s`,
              animationDuration: `${dot.dur}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-extrabold text-4xl lg:text-5xl text-white mb-6 leading-tight"
        >
          Ready to run your business from one place?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-secondary text-lg mb-10"
        >
          Start your 14-day free trial. No credit card required. Cancel anytime.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link
            href="/pricing"
            className="inline-flex items-center bg-primary text-bg font-semibold text-base px-8 py-3.5 rounded-full hover:bg-primary/90 transition-all duration-200 hover:shadow-[0_0_40px_rgba(61,237,122,0.35)]"
          >
            Start free trial
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center border border-white/20 text-white text-base px-8 py-3.5 rounded-full hover:border-white/40 hover:bg-white/5 transition-all duration-200"
          >
            Request a demo
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
