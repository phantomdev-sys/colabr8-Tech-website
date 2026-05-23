"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { UserPlus, Users, Zap } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Create your account",
    description:
      "Start your free trial, set up your workspace with your brand in minutes. No lengthy setup. No consultant required.",
  },
  {
    number: "02",
    icon: Users,
    title: "Invite your team",
    description:
      "Add staff members, assign roles and section permissions. Everyone sees exactly what they need to.",
  },
  {
    number: "03",
    icon: Zap,
    title: "Run your business",
    description:
      "Contacts, deals, bookings, emails and invoices — all connected, all in one place from day one.",
  },
];

const headlineWords = "Up and running in minutes".split(" ");

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const sectionInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const headlineInView = useInView(headlineRef, { once: true, margin: "-60px" });

  return (
    <section ref={sectionRef} className="relative py-24 border-y border-divider overflow-hidden" style={{ backgroundColor: "#080f0a" }}>
      {/* Animated deep-green gradient mesh */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        {/* Blob A — top-left drift */}
        <div
          className="absolute animate-mesh-a"
          style={{
            top: "-20%",
            left: "-10%",
            width: "65%",
            height: "70%",
            background: "radial-gradient(ellipse at center, rgba(61,237,122,0.07) 0%, rgba(20,80,40,0.04) 45%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        {/* Blob B — bottom-right drift */}
        <div
          className="absolute animate-mesh-b"
          style={{
            bottom: "-20%",
            right: "-10%",
            width: "60%",
            height: "65%",
            background: "radial-gradient(ellipse at center, rgba(61,237,122,0.06) 0%, rgba(10,50,25,0.04) 45%, transparent 70%)",
            filter: "blur(70px)",
          }}
        />
        {/* Blob C — centre accent */}
        <div
          className="absolute animate-mesh-c"
          style={{
            top: "20%",
            left: "30%",
            width: "40%",
            height: "60%",
            background: "radial-gradient(ellipse at center, rgba(61,237,122,0.04) 0%, transparent 65%)",
            filter: "blur(50px)",
          }}
        />
        {/* Very subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(61,237,122,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(61,237,122,0.6) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 ref={headlineRef} className="font-display font-bold text-4xl lg:text-5xl text-white mb-4 overflow-hidden">
            {headlineWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={headlineInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.09, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block mr-[0.3em]"
              >
                {word}
              </motion.span>
            ))}
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-secondary text-lg"
          >
            No lengthy onboarding. No consultant required.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting dotted line — desktop only */}
          <div className="hidden lg:block absolute top-[52px] left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] border-t-2 border-dashed pointer-events-none" style={{ borderColor: "rgba(61,237,122,0.2)" }} />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 32 }}
                  animate={sectionInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.14, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center text-center lg:items-center"
                >
                  {/* Number circle */}
                  <div
                    className="relative w-16 h-16 rounded-full flex items-center justify-center mb-6 border-2 bg-bg z-10"
                    style={{ borderColor: "#3DED7A" }}
                  >
                    <span className="font-display font-extrabold text-lg" style={{ color: "#3DED7A" }}>
                      {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: "rgba(61,237,122,0.08)" }}
                  >
                    <Icon size={22} color="#3DED7A" strokeWidth={1.5} />
                  </div>

                  <h3 className="font-display font-bold text-xl text-white mb-3">{step.title}</h3>
                  <p className="text-secondary text-sm leading-relaxed max-w-xs">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
