import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SaaS Subscription Terms — COLABR8 TECH",
  description:
    "SaaS Subscription Terms for COLABR8 TECH plans — Starter, Growth, and Enterprise. COLABR8 TECH LIMITED, SC866868.",
  openGraph: {
    title: "SaaS Subscription Terms — COLABR8 TECH",
    description: "Subscription terms for COLABR8 TECH plans — Starter, Growth, and Enterprise.",
    url: "https://colabr8.tech/saas-terms",
    siteName: "COLABR8 TECH",
    type: "website",
  },
};

export default function SaasTermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
