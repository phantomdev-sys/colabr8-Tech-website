import type { Metadata } from "next";
import localFont from "next/font/local";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geist = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist",
  display: "swap",
  weight: "100 900",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "COLABR8 TECH — CRM, Bookings, Invoicing & AI from £49/month",
  description:
    "The all-in-one CRM for SMEs, agencies and service teams. Full CRM, scheduling, social media, email campaigns, invoicing and AI — no per-seat fees.",
  metadataBase: new URL("https://colabr8.tech"),
  icons: { icon: "/COLABR8-TECH-FAVICON.webp" },
  openGraph: {
    title: "COLABR8 TECH — CRM, Bookings, Invoicing & AI from £49/month",
    description:
      "The all-in-one CRM for SMEs, agencies and service teams. Full CRM, scheduling, social media, email campaigns, invoicing and AI — no per-seat fees.",
    url: "https://colabr8.tech",
    siteName: "COLABR8 TECH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "COLABR8 TECH — CRM, Bookings, Invoicing & AI from £49/month",
    description:
      "The all-in-one CRM for SMEs, agencies and service teams. Full CRM, scheduling, social media, email campaigns, invoicing and AI — no per-seat fees.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-body antialiased bg-bg text-white">
        {children}
      </body>
    </html>
  );
}
