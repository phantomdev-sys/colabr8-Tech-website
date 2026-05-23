import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — COLABR8 TECH | Request a Demo or Talk to the Team",
  description:
    "Get in touch with COLABR8 TECH. Request a live demo, ask about our plans, or talk to the team about your specific needs. We respond within 1 business day.",
  openGraph: {
    title: "Contact — COLABR8 TECH | Request a Demo",
    description:
      "Request a live demo or get in touch with the COLABR8 TECH team. We respond within 1 business day.",
    url: "https://colabr8.tech/contact",
    siteName: "COLABR8 TECH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact — COLABR8 TECH | Request a Demo",
    description:
      "Request a live demo or talk to the team about COLABR8 TECH.",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
