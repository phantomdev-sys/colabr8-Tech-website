import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Welcome to COLABR8 TECH — You're In",
  description: "Your COLABR8 TECH account is being set up. You'll receive your login details by email within a few minutes.",
  openGraph: {
    title: "Welcome to COLABR8 TECH",
    description: "Your account is being set up. Check your email for your login link.",
    url: "https://colabr8.tech/success",
    siteName: "COLABR8 TECH",
    type: "website",
  },
};

export default function SuccessLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
