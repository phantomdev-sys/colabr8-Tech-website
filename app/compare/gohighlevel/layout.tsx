import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "COLABR8 TECH vs GoHighLevel — Simpler, Cheaper CRM for UK Teams",
  description:
    "COLABR8 TECH vs GoHighLevel: full comparison. GoHighLevel starts at $97/mo and is overwhelming to set up. COLABR8 TECH gives you a cleaner CRM, flat £49/month pricing, and proper UK support. The GoHighLevel alternative UK agencies choose.",
  keywords: [
    "GoHighLevel alternative UK",
    "cheaper than GoHighLevel",
    "GoHighLevel vs Colabr8",
    "GoHighLevel alternative",
    "CRM cheaper than GoHighLevel",
  ],
  openGraph: {
    title: "COLABR8 TECH vs GoHighLevel — Simpler, Cheaper CRM for UK Teams",
    description:
      "GoHighLevel starts at $97/mo and takes weeks to configure. COLABR8 TECH does more, costs less, and is ready in minutes.",
    url: "https://colabr8.tech/compare/gohighlevel",
    siteName: "COLABR8 TECH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "COLABR8 TECH vs GoHighLevel — Simpler & Cheaper for UK Teams",
    description:
      "GoHighLevel alternative for UK agencies. From £49/month with no per-seat fees.",
  },
};

export default function GHLLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
