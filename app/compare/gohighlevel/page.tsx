"use client";

import ComparePageTemplate, { type ComparePageData } from "@/components/compare-page-template";
import {
  PoundSterling,
  Zap,
  Globe,
} from "lucide-react";

const data: ComparePageData = {
  competitor: "GoHighLevel",
  competitorSlug: "gohighlevel",

  heroHeadline: "More CRM. Less complexity. Half the price.",

  heroSubtext:
    "GoHighLevel costs $97/month ($67 on their cheapest tier) and takes weeks to configure — especially for teams unfamiliar with US-centric marketing tooling. COLABR8 TECH is a proper CRM-first platform with everything included, built for UK service businesses, from £49/month flat.",

  introParagraph:
    "GoHighLevel is a popular white-label platform in the agency world — but it's built primarily around US-style marketing funnels and automation, not traditional CRM. It's powerful, but the learning curve is steep, the pricing is higher, and for many UK SMEs and agencies, most of the feature set is irrelevant overhead. COLABR8 TECH takes the features that actually matter — CRM, deals, bookings, invoicing, email, social, and AI — and packages them in a clean, intuitive platform at a significantly lower price point.",

  tableRows: [
    { feature: "Starting price (per account)", colabr8: "£49/mo", competitor: "$67–97/mo" },
    { feature: "UK-native pricing (GBP)", colabr8: true, competitor: false },
    { feature: "Per-seat pricing", colabr8: "No", competitor: "No" },
    { feature: "Unlimited contacts", colabr8: true, competitor: true },
    { feature: "Deals & pipelines", colabr8: "Included", competitor: "Included" },
    { feature: "Drag-and-drop pipeline", colabr8: true, competitor: true },
    { feature: "Native CRM activity timeline", colabr8: true, competitor: "Limited" },
    { feature: "Bookings & scheduling", colabr8: "Included", competitor: "Included" },
    { feature: "Customer-linked bookings", colabr8: true, competitor: "Partial" },
    { feature: "Social media scheduling", colabr8: "Included", competitor: "Included" },
    { feature: "Email campaigns", colabr8: "Included", competitor: "Included" },
    { feature: "Native inbox (IMAP/SMTP)", colabr8: true, competitor: false },
    { feature: "Invoices & quotes (branded PDF)", colabr8: true, competitor: "Basic" },
    { feature: "Quote-to-invoice conversion", colabr8: true, competitor: false },
    { feature: "AI workspace (CRM-aware)", colabr8: true, competitor: "Partial" },
    { feature: "Visitor intelligence", colabr8: true, competitor: false },
    { feature: "Portfolio intelligence", colabr8: true, competitor: false },
    { feature: "White-label ready", colabr8: "Enterprise", competitor: true },
    { feature: "Multi-tenant architecture", colabr8: "Native", competitor: "Partial" },
    { feature: "Setup time for UK teams", colabr8: "Minutes", competitor: "Weeks" },
  ],

  diffCards: [
    {
      icon: PoundSterling,
      title: "Proper UK pricing",
      body: "GoHighLevel charges in USD and doesn't have UK-native pricing, payment terms, or VAT handling. COLABR8 TECH is a UK-built platform with GBP pricing, VAT-ready invoicing, and support aligned to UK business hours.",
    },
    {
      icon: Zap,
      title: "CRM-first, not funnel-first",
      body: "GoHighLevel is built around US-style marketing funnels and automation sequences. If you're running a service business or agency in the UK, most of that overhead is irrelevant. COLABR8 TECH is CRM-first — contacts, deals, bookings, and billing sit at the centre, not the periphery.",
    },
    {
      icon: Globe,
      title: "Genuinely connected records",
      body: "In GoHighLevel, bookings and CRM records often live in separate silos. In COLABR8 TECH, every booking, invoice, email, and deal is automatically linked to the same contact — giving you a single, unbroken view of every client relationship.",
    },
  ],

  pricingTiers: [
    {
      label: "Solo operator, full CRM",
      colabr8Price: "£49/mo",
      competitorPrice: "~£54/mo ($67)",
      note: "GoHighLevel base tier in GBP equivalent",
    },
    {
      label: "Small team, all features",
      colabr8Price: "£69/mo",
      competitorPrice: "~£78/mo ($97)",
      note: "GoHighLevel Pro in GBP equivalent",
    },
    {
      label: "Agency with white-label + multi-client",
      colabr8Price: "£99/mo",
      competitorPrice: "~£278/mo ($349)",
      note: "GoHighLevel Agency Unlimited",
    },
    {
      label: "Annual equivalent saving",
      colabr8Price: "£41–83/mo",
      competitorPrice: "No annual discount",
      note: "Colabr8 annual billing saves 2 months",
    },
  ],

  testimonials: [
    {
      quote:
        "We switched from GoHighLevel after six months. COLABR8 TECH does the same things but in a fraction of the setup time, and our clients actually understand it.",
      author: "Digital Agency Owner",
      role: "Manchester",
    },
    {
      quote:
        "The invoicing and bookings being connected to the CRM is what did it for us. GoHighLevel treated them as completely separate things.",
      author: "Consultancy Director",
      role: "Edinburgh",
    },
    {
      quote:
        "The white-label feature is what sold us. Our clients think it's our own platform — and the price is far lower than what we were paying before.",
      author: "Marketing Agency",
      role: "Bristol",
    },
  ],
};

export default function GoHighLevelComparePage() {
  return <ComparePageTemplate data={data} />;
}
