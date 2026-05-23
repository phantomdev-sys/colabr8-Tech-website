import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features — COLABR8 TECH | Full CRM, Bookings, Email, AI & More",
  description:
    "Explore every feature in COLABR8 TECH — CRM, deals pipeline, bookings, invoicing, social media scheduling, email campaigns, AI workspace, visitor intelligence, and more. All included from £49/month.",
  openGraph: {
    title: "Features — COLABR8 TECH | Full CRM, Bookings, Email, AI & More",
    description:
      "Explore every feature in COLABR8 TECH — CRM, deals pipeline, bookings, invoicing, social media scheduling, email campaigns, AI workspace, visitor intelligence, and more.",
    url: "https://colabr8.tech/features",
    siteName: "COLABR8 TECH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Features — COLABR8 TECH | Full CRM, Bookings, Email, AI & More",
    description:
      "Explore every feature in COLABR8 TECH. All-in-one platform from £49/month with no per-seat fees.",
  },
};

export default function FeaturesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
