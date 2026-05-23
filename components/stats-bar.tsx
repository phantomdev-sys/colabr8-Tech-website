"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, animate } from "framer-motion";

interface Stat {
  end: number;
  prefix?: string;
  suffix: string;
  label: string;
  decimals: number;
}

const stats: Stat[] = [
  { end: 500, suffix: "+", label: "Businesses", decimals: 0 },
  { end: 2.4, prefix: "£", suffix: "M+", label: "Invoiced", decimals: 1 },
  { end: 98.9, suffix: "%", label: "Uptime", decimals: 1 },
  { end: 14, suffix: "-Day", label: "Free Trial", decimals: 0 },
];

function StatCounter({ end, prefix = "", suffix, label, decimals }: Stat) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, end, {
      duration: 2.2,
      ease: "easeOut",
      onUpdate: (v) => setVal(v),
    });
    return () => controls.stop();
  }, [inView, end]);

  const display = decimals > 0 ? val.toFixed(decimals) : Math.round(val).toString();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="flex-1 flex flex-col items-center text-center py-8 px-6"
    >
      <div className="font-display font-extrabold text-4xl lg:text-5xl text-white tabular-nums tracking-tight">
        {prefix}
        {display}
        {suffix}
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
            <StatCounter key={i} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
