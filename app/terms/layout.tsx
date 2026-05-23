import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — COLABR8 TECH",
  description:
    "Terms governing your access to and use of the COLABR8 TECH platform. COLABR8 TECH LIMITED, registered in Scotland, SC866868.",
  openGraph: {
    title: "Terms of Service — COLABR8 TECH",
    description: "Terms governing your access to and use of the COLABR8 TECH platform.",
    url: "https://colabr8.tech/terms",
    siteName: "COLABR8 TECH",
    type: "website",
  },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
