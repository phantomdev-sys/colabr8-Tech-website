import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — COLABR8 TECH",
  description:
    "How COLABR8 TECH LIMITED collects, uses, and protects your personal data. GDPR-compliant. Company number SC866868.",
  openGraph: {
    title: "Privacy Policy — COLABR8 TECH",
    description: "How COLABR8 TECH LIMITED collects, uses, and protects your personal data.",
    url: "https://colabr8.tech/privacy",
    siteName: "COLABR8 TECH",
    type: "website",
  },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
