"use client";

import ComparePageTemplate, { type ComparePageData } from "@/components/compare-page-template";
import {
  PoundSterling,
  LayoutDashboard,
  Layers,
} from "lucide-react";

const data: ComparePageData = {
  competitor: "HubSpot",
  competitorSlug: "hubspot",

  heroHeadline: "The HubSpot alternative that actually includes everything.",

  heroSubtext:
    "HubSpot's free tier is a loss leader. The moment you need deals, bookings, or email campaigns, the price jumps fast. COLABR8 TECH gives you the full platform — CRM, pipelines, bookings, inbox, social media, email campaigns, and AI — from £49/month flat.",

  introParagraph:
    "HubSpot is one of the best-known names in CRM, but its pricing model is engineered to grow with you in a way that hurts. The base tiers are deliberately limited — deals pipelines, bookings, and marketing tools are locked behind paid upgrades. For a growing SME or agency in the UK, the real monthly cost of HubSpot often lands well above £200 once you add the features you actually need. COLABR8 TECH was built as a direct response to this: one flat price, full platform, no gotchas.",

  tableRows: [
    { feature: "Starting price (per account)", colabr8: "£49/mo", competitor: "£45/mo (very limited)" },
    { feature: "Usable CRM at base tier", colabr8: true, competitor: false },
    { feature: "Per-seat pricing", colabr8: "No", competitor: "Yes (higher tiers)" },
    { feature: "Unlimited contacts", colabr8: true, competitor: false },
    { feature: "Deals & pipelines", colabr8: "Included", competitor: "Paid add-on" },
    { feature: "Drag-and-drop pipeline", colabr8: true, competitor: false },
    { feature: "Weighted pipeline forecast", colabr8: true, competitor: "Higher tiers" },
    { feature: "Bookings & scheduling", colabr8: "Included", competitor: "Paid add-on" },
    { feature: "Customer-linked bookings", colabr8: true, competitor: false },
    { feature: "Social media scheduling", colabr8: "Included", competitor: false },
    { feature: "Multi-platform social", colabr8: true, competitor: "Partial" },
    { feature: "Email campaigns", colabr8: "Included", competitor: "Expensive add-on" },
    { feature: "AI template generation", colabr8: true, competitor: "Extra cost" },
    { feature: "Native inbox (IMAP/SMTP)", colabr8: true, competitor: false },
    { feature: "AI workspace", colabr8: "Included", competitor: "Extra cost" },
    { feature: "Visitor intelligence", colabr8: true, competitor: false },
    { feature: "White-label ready", colabr8: "Enterprise", competitor: false },
    { feature: "Multi-tenant architecture", colabr8: true, competitor: false },
    { feature: "Flat-rate pricing", colabr8: true, competitor: false },
  ],

  diffCards: [
    {
      icon: PoundSterling,
      title: "No hidden add-ons",
      body: "HubSpot's pricing is a ladder you climb whether you want to or not. Deals, scheduling, email marketing, and AI are all paid extras. COLABR8 TECH bundles everything from the start — one price, full platform.",
    },
    {
      icon: LayoutDashboard,
      title: "Genuinely usable from day one",
      body: "HubSpot's base CRM is deliberately limited to upsell you. COLABR8 TECH's Starter plan is a complete operating system — contacts, pipelines, bookings, and tasks — ready to use on day one.",
    },
    {
      icon: Layers,
      title: "Built for agencies and white-label",
      body: "HubSpot has no white-label capability and no multi-tenant architecture. COLABR8 TECH was designed from the ground up for agencies that need to run client accounts and brand the platform as their own.",
    },
  ],

  pricingTiers: [
    {
      label: "Solo operator",
      colabr8Price: "£49/mo",
      competitorPrice: "£45/mo+",
      note: "CRM + Pipelines only at HubSpot base",
    },
    {
      label: "5-person team, full CRM + email",
      colabr8Price: "£69/mo",
      competitorPrice: "£300–500/mo",
      note: "HubSpot requires Sales + Marketing hubs",
    },
    {
      label: "10-person team, all features",
      colabr8Price: "£99/mo",
      competitorPrice: "£800–1,200/mo",
      note: "HubSpot per-seat + multiple hubs",
    },
    {
      label: "Agency with white-label needs",
      colabr8Price: "£99/mo",
      competitorPrice: "Not available",
      note: "HubSpot has no white-label tier",
    },
  ],

  testimonials: [
    {
      quote:
        "We replaced three separate tools with COLABR8 TECH. Our team now works from one place and we actually know what's happening across every client.",
      author: "Agency Owner",
      role: "Belfast",
    },
    {
      quote:
        "The white-label feature is what sold us. Our clients think it's our own platform. Nothing like that exists in HubSpot.",
      author: "Digital Studio",
      role: "Glasgow",
    },
    {
      quote:
        "Finally a CRM that includes booking scheduling without a painful add-on charge. We were paying HubSpot £400 a month for less than this.",
      author: "Service Business",
      role: "London",
    },
  ],
};

export default function HubSpotComparePage() {
  return <ComparePageTemplate data={data} />;
}
