import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — COLABR8 TECH | From £49/month, No Per-Seat Fees",
  description:
    "Simple, flat-rate pricing for COLABR8 TECH. Starter at £49/month, Growth at £69/month, Enterprise at £99/month. No per-seat fees. No locked features. 14-day free trial.",
  openGraph: {
    title: "Pricing — COLABR8 TECH | From £49/month, No Per-Seat Fees",
    description:
      "Simple, flat-rate pricing. Starter £49/mo, Growth £69/mo, Enterprise £99/mo. No per-seat fees. 14-day free trial.",
    url: "https://colabr8.tech/pricing",
    siteName: "COLABR8 TECH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing — COLABR8 TECH | From £49/month, No Per-Seat Fees",
    description:
      "Flat-rate pricing with no per-seat fees. All-in-one CRM from £49/month.",
  },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
