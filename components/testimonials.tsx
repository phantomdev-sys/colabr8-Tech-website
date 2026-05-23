"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const testimonials = [
  {
    quote:
      "We replaced three separate tools with COLABR8 TECH. Our team works from one place and we actually know what's happening across every client.",
    name: "Sarah M.",
    role: "Director",
    company: "Glasgow Agency",
    initials: "SM",
  },
  {
    quote:
      "The white-label feature sold us instantly. Our clients think it's our own platform. The onboarding took minutes.",
    name: "James T.",
    role: "Founder",
    company: "Digital Studio, London",
    initials: "JT",
  },
  {
    quote:
      "Finally a CRM that includes booking scheduling without a painful add-on. The invoicing alone saves us hours every week.",
    name: "Rachel K.",
    role: "Owner",
    company: "Belfast Service Business",
    initials: "RK",
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-display font-bold text-4xl text-white"
          >
            Trusted by teams across the UK
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="bg-surface border border-divider rounded-2xl p-8 flex flex-col"
            >
              <div
                className="font-display font-extrabold text-6xl leading-none mb-5 select-none"
                style={{ color: "#3DED7A" }}
              >
                &ldquo;
              </div>
              <p className="text-secondary leading-relaxed flex-1 mb-8 text-[15px]">{t.quote}</p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 border"
                  style={{
                    backgroundColor: "rgba(61,237,122,0.1)",
                    borderColor: "rgba(61,237,122,0.25)",
                  }}
                >
                  <span className="text-primary text-xs font-semibold font-display">{t.initials}</span>
                </div>
                <div>
                  <div className="text-white text-sm font-medium">{t.name}</div>
                  <div className="text-muted text-xs">
                    {t.role}, {t.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
