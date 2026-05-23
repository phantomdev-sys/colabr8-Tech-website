import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "COLABR8 TECH vs Zoho CRM — One Platform, No Per-Seat Fees",
  description:
    "COLABR8 TECH vs Zoho CRM: full comparison. Zoho charges per-user and splits its tools across dozens of separate products. COLABR8 TECH is one platform with everything included from £49/month flat. The Zoho alternative UK teams prefer.",
  keywords: [
    "Zoho alternative UK",
    "Zoho CRM alternative",
    "Colabr8 vs Zoho",
    "Zoho replacement UK",
    "all-in-one CRM Zoho alternative",
  ],
  openGraph: {
    title: "COLABR8 TECH vs Zoho CRM — One Platform, No Per-Seat Fees",
    description:
      "Zoho charges per user and splits tools across 50+ products. COLABR8 TECH gives you everything in one place from £49/month.",
    url: "https://colabr8.tech/compare/zoho",
    siteName: "COLABR8 TECH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "COLABR8 TECH vs Zoho CRM — One Platform, No Per-Seat Fees",
    description:
      "Zoho alternative for UK teams. One platform, one price, everything included.",
  },
};

export default function ZohoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
