"use client";

import ComparePageTemplate, { type ComparePageData } from "@/components/compare-page-template";
import {
  PoundSterling,
  Package,
  Users,
} from "lucide-react";

const data: ComparePageData = {
  competitor: "Zoho CRM",
  competitorSlug: "zoho",

  heroHeadline: "One platform. One price. Everything Zoho split into fifty products.",

  heroSubtext:
    "Zoho charges per user and fragments its functionality across over 50 separate applications. To match COLABR8 TECH's feature set, you'd need Zoho CRM, Zoho Bookings, Zoho Campaigns, Zoho Social, Zoho Invoice, and more — each with its own pricing. COLABR8 TECH bundles all of it from £49/month, per account, no per-seat fees.",

  introParagraph:
    "Zoho is one of the broadest software companies in the world — but breadth is not the same as integration. Their products are technically connected but feel like separate tools bolted together. For a UK SME or agency trying to manage clients, bookings, billing, and marketing from one system, the Zoho ecosystem quickly becomes a maze of tabs, integrations, and duplicate data. COLABR8 TECH was built to replace exactly this kind of fragmented stack: one login, one database, every record connected.",

  tableRows: [
    { feature: "Starting price (per account)", colabr8: "£49/mo", competitor: "£20/user/mo+" },
    { feature: "Per-seat pricing", colabr8: "No", competitor: "Yes" },
    { feature: "5 users comparison", colabr8: "£49/mo", competitor: "£100/mo+" },
    { feature: "Unlimited contacts", colabr8: true, competitor: "Plan-limited" },
    { feature: "Deals & pipelines", colabr8: "Included", competitor: "Included" },
    { feature: "Drag-and-drop pipeline", colabr8: true, competitor: false },
    { feature: "Bookings & scheduling", colabr8: "Included (native)", competitor: "Separate product" },
    { feature: "Customer-linked bookings", colabr8: true, competitor: false },
    { feature: "Social media scheduling", colabr8: "Included", competitor: "Zoho Social (separate)" },
    { feature: "Email campaigns", colabr8: "Included", competitor: "Zoho Campaigns (add-on)" },
    { feature: "Native inbox (IMAP/SMTP)", colabr8: true, competitor: "Zoho Mail (separate)" },
    { feature: "Invoices & quotes", colabr8: "Included", competitor: "Zoho Invoice (separate)" },
    { feature: "AI workspace", colabr8: "Included", competitor: "Zia (limited)" },
    { feature: "Visitor intelligence", colabr8: true, competitor: false },
    { feature: "Portfolio intelligence", colabr8: true, competitor: false },
    { feature: "White-label ready", colabr8: "Enterprise", competitor: false },
    { feature: "Multi-tenant architecture", colabr8: "Native", competitor: false },
    { feature: "One integrated database", colabr8: true, competitor: false },
    { feature: "Role-based access control", colabr8: true, competitor: true },
  ],

  diffCards: [
    {
      icon: PoundSterling,
      title: "Flat-rate, not per-seat",
      body: "Zoho CRM charges per user, per month. At £20/user, a 5-person team is already at £100/mo — and you haven't added bookings, campaigns, or social yet. COLABR8 TECH is one flat price per account. Your whole team, all features, one bill.",
    },
    {
      icon: Package,
      title: "Truly one platform",
      body: "To match COLABR8 TECH using Zoho, you'd need to subscribe to, configure, and integrate at least six separate Zoho products. COLABR8 TECH is one platform with one database — every contact, deal, booking, invoice, and email is connected automatically.",
    },
    {
      icon: Users,
      title: "Built for service businesses",
      body: "Zoho is built for transactional sales teams. COLABR8 TECH was designed for service businesses and agencies — where bookings, invoices, and CRM records need to be linked to the same client, and where white-label delivery is a first-class requirement.",
    },
  ],

  pricingTiers: [
    {
      label: "1 user, core CRM",
      colabr8Price: "£49/mo",
      competitorPrice: "£20/mo",
      note: "Zoho CRM Standard, single user",
    },
    {
      label: "3 users, core CRM",
      colabr8Price: "£49/mo",
      competitorPrice: "£60/mo",
      note: "Zoho CRM Standard × 3",
    },
    {
      label: "5 users, CRM + email + social",
      colabr8Price: "£69/mo",
      competitorPrice: "£150–200/mo",
      note: "Zoho CRM + Campaigns + Social",
    },
    {
      label: "10 users, full stack",
      colabr8Price: "£99/mo",
      competitorPrice: "£400–600/mo",
      note: "Zoho One bundle or multiple products",
    },
  ],

  testimonials: [
    {
      quote:
        "We were on Zoho One for two years. Six separate apps, three different logins for clients, and data that never quite synced. COLABR8 TECH replaced all of it.",
      author: "Operations Manager",
      role: "Leeds",
    },
    {
      quote:
        "With Zoho, every time I wanted to check a client's bookings I had to switch apps. With COLABR8 TECH, everything is on the same record. It sounds small but it changes how the whole team works.",
      author: "Agency Director",
      role: "Cardiff",
    },
    {
      quote:
        "The flat pricing was the first thing that convinced us. We were paying per seat with Zoho and it was getting out of hand as the team grew.",
      author: "Service Business Owner",
      role: "Birmingham",
    },
  ],
};

export default function ZohoComparePage() {
  return <ComparePageTemplate data={data} />;
}
