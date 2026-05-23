import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Help Centre — COLABR8 TECH | Guides & Support",
  description:
    "Everything you need to get started and grow with COLABR8 TECH. Guides for CRM, bookings, invoicing, email campaigns, social media, AI workspace, and more.",
  openGraph: {
    title: "Help Centre — COLABR8 TECH | Guides & Support",
    description:
      "Guides, FAQs, and troubleshooting for COLABR8 TECH. CRM, bookings, invoicing, email campaigns, social media, AI workspace and more.",
    url: "https://colabr8.tech/help",
    siteName: "COLABR8 TECH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Help Centre — COLABR8 TECH | Guides & Support",
    description:
      "Everything you need to get started and grow with COLABR8 TECH.",
  },
};

export default function HelpLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
