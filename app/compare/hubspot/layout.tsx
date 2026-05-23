import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "COLABR8 TECH vs HubSpot — Better Value CRM for UK SMEs",
  description:
    "COLABR8 TECH vs HubSpot: a full comparison. Get CRM, bookings, email campaigns, social media, and AI from £49/month flat — no per-seat fees, no expensive add-ons. The HubSpot alternative UK teams are switching to.",
  keywords: [
    "Colabr8 vs HubSpot",
    "HubSpot alternative UK",
    "HubSpot alternative cheaper",
    "HubSpot replacement UK",
    "CRM alternative HubSpot",
  ],
  openGraph: {
    title: "COLABR8 TECH vs HubSpot — Better Value CRM for UK SMEs",
    description:
      "Everything HubSpot charges extra for — included from £49/month. The HubSpot alternative UK teams are switching to.",
    url: "https://colabr8.tech/compare/hubspot",
    siteName: "COLABR8 TECH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "COLABR8 TECH vs HubSpot — Better Value CRM for UK SMEs",
    description:
      "Everything HubSpot charges extra for — included from £49/month. The HubSpot alternative UK SMEs choose.",
  },
};

export default function HubSpotLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
