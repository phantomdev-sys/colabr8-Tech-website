"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: "Flat pricing", label: "No per-seat fees" },
  { value: "14-day trial", label: "No card tricks, cancel anytime" },
  { value: "UK-built", label: "Independent studio" },
  { value: "All-in-one", label: "CRM, bookings, invoicing & more" },
];

function StatItem({ value, label }: Stat) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="flex-1 flex flex-col items-center text-center py-8 px-6"
    >
      <div className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight whitespace-nowrap">
        {value}
      </div>
      <div className="text-secondary text-sm mt-2 font-body">{label}</div>
    </motion.div>
  );
}

export default function StatsBar() {
  return (
    <section className="bg-surface border-y border-divider">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-stretch divide-y sm:divide-y-0 sm:divide-x divide-divider">
          {stats.map((stat, i) => (
            <StatItem key={i} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
