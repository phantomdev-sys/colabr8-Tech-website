# COLABR8 TECH — Marketing Website Rebuild Spec
## For use with Claude Code

---

## PROJECT OVERVIEW

Rebuild the colabr8.tech marketing website from scratch using Next.js 14 (App Router). Replace the existing WordPress Sierra theme with a production-grade, animated, conversion-focused SaaS marketing site.

**Domain:** colabr8.tech  
**CRM App:** crm.colabr8.tech  
**Stack:** Next.js 14, TypeScript, Tailwind CSS, Framer Motion, Stripe  
**Deploy:** Vercel  

---

## BRAND

**Primary colour:** #3DED7A (bright mint green)  
**Dark background:** #0A0A0A  
**Dark surface:** #111111  
**Dark surface elevated:** #1A1A1A  
**Border:** #222222  
**Text primary:** #FFFFFF  
**Text secondary:** #A1A1AA  
**Text muted:** #52525B  

**Logo:** Use the COLABR8 emblem SVG (ornate cross/floral mark) + wordmark "COLABR8" in spaced capitals.  
**Typography:**  
- Display/headings: `Syne` (Google Fonts) — bold, geometric, distinctive  
- Body: `DM Sans` — clean, readable  
- Mono/data: `JetBrains Mono` — for stats and code snippets  

**Tone:** Confident, direct, no fluff. UK English. "Organised" not "organized". No exclamation marks except in CTAs.

---

## SITE ARCHITECTURE

```
/ (homepage)
/features
/pricing
/compare/hubspot
/compare/gohighlevel
/compare/zoho
/contact
```

API Routes:
```
/api/stripe/checkout       — Create Stripe checkout session
/api/stripe/webhook        — Handle Stripe subscription events
/api/demo                  — Demo request form → posts to CRM webhook
```

---

## HOMEPAGE SECTIONS (in order)

### 1. NAV
- Logo left (emblem + wordmark)
- Links: Features | Pricing | Compare | Contact
- Right: "Sign in" (ghost button → crm.colabr8.tech) + "Start free trial" (green pill button → /pricing)
- Sticky, dark background, blur backdrop
- Mobile: hamburger menu

---

### 2. HERO

**Headline (large, bold, Syne font):**
> "The CRM that doesn't charge extra  
> for the things you actually need."

**Subheadline:**
> Full CRM, bookings, invoicing, social media scheduling, email campaigns and AI — all in one platform. From £49/month. No per-seat fees. No locked features.

**CTAs:**
- "Start free trial" (green, large pill)
- "Request a demo" (outline)

**Trust bar below CTAs:**
> ✓ 14-day free trial &nbsp; ✓ Cancel anytime &nbsp; ✓ Fully white-label &nbsp; ✓ No per-seat pricing

**Hero visual:**
- Large floating UI card showing the real Dashboard screenshot (dark, "Good afternoon, Alex" view)
- Layered behind it: smaller floating cards showing Pipeline Kanban and Social Media Calendar
- Cards animate in on load with staggered fade+translateY
- Subtle parallax on scroll
- Green gradient glow behind the card cluster

**Background:** Dark (#0A0A0A) with subtle animated green radial gradient mesh in top-right

---

### 3. SOCIAL PROOF BAR (scrolling ticker)

Logos/names of industries using it: "Agencies · Web Studios · Consultancies · Property · Fitness · Trades · Retail · Legal · Healthcare · Events"

Subtle horizontal scroll animation, dark background, muted text.

---

### 4. FEATURES OVERVIEW — "Everything your business needs"

**Section headline:** "One platform. Zero compromise."

**Subtext:** "Replace the stack of disconnected tools with a single system your whole team can rely on."

4-column grid of feature pillars, each with icon, title, one-liner:

| Icon | Title | Description |
|------|-------|-------------|
| 👥 | CRM & Contacts | Unlimited contacts, companies, and relationships. Smart deduplication. Full activity timeline. |
| 📊 | Sales Pipelines | Drag-and-drop Kanban with weighted forecasts, approval workflows, and deal-linked documents. |
| 📅 | Bookings & Scheduling | Per-staff calendars, availability rules, automated confirmations. Setup in minutes. |
| 📧 | Email Campaigns | Drag-and-drop builder, analytics, send limits, AI template generation. |
| 📱 | Social Media | Schedule across Facebook, Instagram, LinkedIn, TikTok from one calendar. |
| 📨 | Inbox | Native IMAP/SMTP inbox, auto-linked to CRM contacts and companies. |
| 📄 | Invoices & Quotes | Branded PDFs, multi-currency, quote-to-invoice conversion, status tracking. |
| 🤖 | AI Workspace | CRM-aware AI assistant scoped to your data. Ask anything about your contacts, deals, or tasks. |
| 👁️ | Visitor Intelligence | Identify companies behind your anonymous website traffic. |
| 📈 | Portfolio Intelligence | Radial revenue dashboards, renewal risk scoring, MRR/ARR tracking. |
| 🔒 | White-Label Ready | Your brand. Your colours. No Colabr8 branding visible to your customers. |
| 🏢 | Multi-Tenant | Built for agencies running multiple client accounts from one system. |

Cards appear on scroll with staggered animation.

---

### 5. FEATURE DEEP DIVE — "See it in action"

Tabbed showcase section. Tabs: CRM | Pipeline | Bookings | Social | Email | AI | Intelligence

Each tab shows:
- Left: Feature description + 3-4 bullet points
- Right: Real CRM screenshot in a floating dark browser chrome frame

**Tab content:**

**CRM tab:**
- Title: "Every contact, every conversation, every deal — connected."
- Copy: Centralised contact management with multi-value emails and phones, structured addresses, attachment storage, and an unbroken activity timeline. Built-in deduplication keeps your database clean.
- Screenshot: Contacts list view
- Bullets: Unlimited contacts · Smart deduplication · CSV import · Linked deals, bookings, invoices

**Pipeline tab:**
- Title: "Close more deals with a pipeline that works the way you do."
- Copy: Visual Kanban with drag-and-drop stage transitions, weighted forecasts, and per-deal activity history. High-impact transitions require approval — no accidental closes.
- Screenshot: Deals Kanban view
- Bullets: Drag-and-drop stages · Weighted pipeline forecast · Approval workflows · Deal-linked documents

**Bookings tab:**
- Title: "Scheduling that actually connects to your customers."
- Copy: Staff calendars with configurable availability, per-service durations, automated confirmation emails, and CRM-linked bookings. Your customers are never just a calendar entry.
- Screenshot: Bookings calendar view
- Bullets: Per-staff availability · Multi-service booking · Automated confirmations · CRM-linked records

**Social tab:**
- Title: "Schedule once. Publish everywhere."
- Copy: Connect Meta, LinkedIn, Instagram, TikTok and manage your entire social calendar from one place. Cross-channel scheduling with engagement analytics.
- Screenshot: Social media calendar
- Bullets: Multi-network · Content calendar · Engagement analytics · Publishing queue

**Email tab:**
- Title: "Campaigns that convert, built in minutes."
- Copy: Drag-and-drop email template builder with AI generation, recipient management, send-time controls, and detailed analytics. Your own sender domain, enforced.
- Screenshot: Email Campaigns templates view
- Bullets: Visual builder · AI template generation · Campaign analytics · Link tracking

**AI tab:**
- Title: "An AI that actually knows your business."
- Copy: A dedicated AI workspace scoped entirely to your CRM data — with its own chat history, projects, and folders. Ask about pending payments, research a company before outreach, write a sales follow-up, or generate campaign ideas. Always one click away from any page via the header. This isn't a bolt-on chatbot. It's a first-class workspace built into the heart of your CRM.
- Screenshot: AI Workspace full view (crm.colabr8.tech/ai-workspace)
- Bullets: Always accessible from the header · Dedicated workspace with project & folder organisation · CRM-aware — asks about your actual data · Pre-built prompt suggestions for sales and marketing · Conversation history saved and searchable

**Intelligence tab:**
- Title: "See what's happening before it becomes a problem."
- Copy: Portfolio Intelligence gives you a radial view of your entire customer base — MRR, ARR, renewal risk, and service distribution. Opportunity Radar surfaces upsell, retention, and churn signals in real time.
- Screenshot: Portfolio Intelligence with sunburst chart
- Bullets: Radial portfolio view · MRR/ARR tracking · Renewal risk scoring · Opportunity Radar

Tab switching animated with fade transition. Screenshots in floating browser frame with subtle drop shadow and green glow.

---

### 6. WHITE-LABEL SECTION

**Headline:** "Your brand. Your platform."

**Copy:** Colabr8 is fully white-label. Your customers see your logo, your colours, your name. Not ours. Agencies and service businesses use Colabr8 to deliver a premium, branded operations platform to their own clients — without building anything.

Split layout:
- Left: Text + bullets
- Right: Side-by-side comparison mockup — "PHANTOM" branded CRM sidebar vs generic CRM sidebar

Bullets:
- Your logo and brand colours throughout
- Custom sidebar labels per industry
- No Colabr8 branding visible to end users
- White-label compliance across UI and emails

---

### 7. COMPARISON TABLE

**Headline:** "Why teams switch to Colabr8"

**Subtext:** "More features. Lower price. No gotchas."

Full comparison table (from the competitor doc provided):

| Feature | Colabr8 | HubSpot | GoHighLevel | Zoho |
|---------|---------|---------|-------------|------|
| Starting Price | £49/mo | £45/mo (limited) | £97/mo | £20/user/mo |
| Usable CRM at base tier | ✅ | ❌ | ✅ | ⚠️ |
| Per-seat pricing | ❌ No | ✅ Yes | ❌ No | ✅ Yes |
| Unlimited contacts | ✅ | ❌ | ✅ | ⚠️ |
| Deals & Pipelines | ✅ Included | ⚠️ Paid add-on | ✅ | ✅ |
| Drag & drop pipelines | ✅ | ❌ | ✅ | ❌ |
| Bookings & Scheduling | ✅ Included | ⚠️ Paid add-on | ✅ | ❌ Not native |
| Customer-linked bookings | ✅ | ❌ | ⚠️ | ❌ |
| Social media scheduling | ✅ Included | ❌ | ✅ | ⚠️ |
| Multi-platform social | ✅ | ⚠️ Partial | ✅ | ⚠️ |
| Email campaigns | ✅ Included | ⚠️ Expensive add-on | ✅ | ⚠️ Add-on |
| Native inbox (IMAP/SMTP) | ✅ | ❌ | ❌ | ⚠️ |
| AI workspace | ✅ | ⚠️ Extra cost | ⚠️ | ⚠️ |
| Visitor intelligence | ✅ | ❌ | ❌ | ❌ |
| White-label ready | ✅ Enterprise | ❌ | ✅ | ❌ |
| Multi-tenant architecture | ✅ Native | ❌ | ⚠️ | ❌ |
| Role-based access control | ✅ | ⚠️ Higher tiers | ⚠️ | ✅ |
| Mobile-friendly UI | ✅ | ⚠️ Average | ⚠️ | ⚠️ |

Style: Colabr8 column highlighted in green. ✅ = green, ❌ = red/muted, ⚠️ = amber. Sticky header on scroll.

---

### 8. PRICING

**Headline:** "Simple pricing that scales with your business"

**Subtext:** "Choose a plan based on your team size and operational needs. Upgrade or change at any time. No per-seat fees on any plan."

Three cards (Starter | Growth | Enterprise):

**Starter — £49/month**
For small teams getting organised
- Core CRM (companies & contacts)
- Unlimited contacts
- Sales pipelines and deals
- Basic bookings and scheduling
- Team access controls
- Email support
CTA: "Start free trial"

**Growth — £69/month** ← HIGHLIGHTED (most popular)
For growing service businesses
- Everything in Starter
- Quotes and deal-linked services
- Advanced bookings & calendars
- Social media scheduling
- Email campaigns (usage-based)
- Custom dashboards
- Native inbox (IMAP/SMTP)
- AI workspace
- Priority support
CTA: "Start free trial" (green button)

**Enterprise — £99/month**
For agencies and multi-team operations
- Everything in Growth
- Full white-label branding
- Advanced permissions & roles
- Multi-tenant architecture
- Visitor intelligence
- Portfolio intelligence & radar
- Industry templates
- Dedicated onboarding
- SLA-backed support
- Custom terms available
CTA: "Contact us"

Toggle: Monthly / Annual (show 2 months free on annual)

Note below: "* Flat monthly pricing — no per-seat fees. Price is per account, not per user."

---

### 9. TESTIMONIALS (placeholder — to be filled when available)

Section with 3 quote cards. Use placeholder copy for now:

> "We replaced three separate tools with Colabr8. Our team now works from one place and we actually know what's happening across every client."
> — Agency Owner, Belfast

> "The white-label feature is what sold us. Our clients think it's our own platform."
> — Digital Studio, Glasgow

> "Finally a CRM that includes booking scheduling without a painful add-on."
> — Service Business, London

Style: Dark cards, green accent on quote mark, avatar initials.

---

### 10. CTA SECTION

Dark background with green mesh gradient.

**Headline:** "Ready to run your business from one place?"

**Subtext:** "Start your 14-day free trial. No credit card required. Cancel anytime."

Two buttons: "Start free trial" (green) + "Request a demo" (outline)

---

### 11. FOOTER

4 columns:
- Logo + tagline: "A flexible, white-label CRM for SMEs, agencies, and service teams."
- Features: CRM overview · Sales & pipelines · Bookings · Social media · Email campaigns · Invoicing · AI workspace · Intelligence
- Resources: Help centre · Documentation · Contact support · API docs
- Company: Privacy policy · Terms · Data deletion · SaaS terms · LinkedIn · Facebook · X

Bottom bar: "© 2026 COLABR8 TECH LTD. All rights reserved."

---

## FEATURES PAGE (/features)

Full feature inventory by category, using the internal admin feature doc as source:

**Categories:**
1. CRM (Contacts, Companies, Deals Pipeline)
2. Operations (Service Catalog, Bookings, Invoices & Quotes, Tasks, Contracts)
3. Marketing (Email Campaigns, Inbox, Social Media, Website Lead Capture)
4. Intelligence (AI Workspace, Opportunity Radar, Visitor Intelligence, Portfolio Intelligence, Activity Timeline, Attribution & Ad Performance)
5. Collaboration (Feedback, Approvals)
6. Platform (Three-Tier Access Control, Industry Templates, Stripe Subscriptions, Notifications, etc.)

Each feature card: icon, title, subtitle, description, bullet list.

---

## PRICING PAGE (/pricing)

Same pricing cards as homepage but expanded with full feature comparison table below.
Add FAQ section.

**FAQ:**
1. Is there a free trial? → Yes, 14 days. No credit card required.
2. Can I change my plan? → Yes, upgrade or downgrade at any time.
3. Is pricing per user or per account? → Per account. No per-seat fees on any plan.
4. Is my data isolated from other accounts? → Yes. Every account is fully isolated using row-level security.
5. Do you support white-label branding? → Yes, on the Enterprise plan. Your logo, colours, and domain throughout.
6. What kind of support do you offer? → Email support on Starter, priority support on Growth, SLA-backed on Enterprise.
7. Can I cancel anytime? → Yes. No long-term contracts.
8. Do you offer annual pricing? → Yes, annual billing saves 2 months.

---

## COMPARE PAGES (/compare/hubspot etc.)

**Template structure:**
- Hero: "Colabr8 vs [Competitor]"
- Short intro paragraph
- Side-by-side comparison table (filtered to most relevant rows)
- "Why teams switch" section with 3 key differentiators
- Pricing comparison
- CTA

---

## STRIPE INTEGRATION

### API Route: /api/stripe/checkout

```typescript
// POST body: { planId: 'starter' | 'growth' | 'enterprise', email?: string }
// Returns: { url: string } — Stripe checkout session URL

// Price IDs to be configured via env vars:
// STRIPE_PRICE_STARTER_MONTHLY
// STRIPE_PRICE_GROWTH_MONTHLY  
// STRIPE_PRICE_ENTERPRISE_MONTHLY
// STRIPE_PRICE_STARTER_ANNUAL
// STRIPE_PRICE_GROWTH_ANNUAL
// STRIPE_PRICE_ENTERPRISE_ANNUAL
```

Checkout session config:
- `mode: 'subscription'`
- `success_url`: `/success?session_id={CHECKOUT_SESSION_ID}`
- `cancel_url`: `/pricing`
- Collect customer email at checkout
- After successful payment: redirect to `crm.colabr8.tech` with provisioning flow (tenant creation handled by Supabase edge function — see notes)

### API Route: /api/stripe/webhook

Handle events:
- `checkout.session.completed` → trigger CRM tenant provisioning
- `customer.subscription.deleted` → flag account for suspension
- `invoice.payment_failed` → send payment failure notification

### Environment variables needed:
```
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
STRIPE_PRICE_STARTER_MONTHLY=
STRIPE_PRICE_GROWTH_MONTHLY=
STRIPE_PRICE_ENTERPRISE_MONTHLY=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
CRM_WEBHOOK_URL=                    # Lead capture endpoint from CRM
CRM_WEBHOOK_TOKEN=                  # Per-tenant API token
SUPABASE_SERVICE_KEY=               # For tenant provisioning (future)
```

---

## DEMO REQUEST FORM

Form fields: Name, Business name, Email, Phone (optional), Message (optional)

On submit: POST to CRM lead capture webhook (`CRM_WEBHOOK_URL`) with token auth.

Success state: "Thanks — we'll be in touch within 1 business day."

---

## ANIMATIONS

Use Framer Motion throughout:

- **Page load:** Staggered hero content fade+slide up (0.1s delay between elements)
- **Hero cards:** Float in from below with spring physics
- **Scroll reveals:** `whileInView` with `once: true`, `viewport: { margin: "-100px" }`
- **Feature tabs:** Crossfade between tab content
- **Comparison table rows:** Stagger in on scroll
- **Pricing cards:** Hover lift effect (y: -4, shadow increase)
- **Nav:** Blur + border appear on scroll past 50px
- **CTA section:** Green gradient animates slowly (CSS keyframes)
- **Logo ticker:** CSS `animation: scroll` infinite horizontal

---

## RESPONSIVE BREAKPOINTS

- Mobile: < 768px — single column, hamburger nav, stacked cards
- Tablet: 768–1024px — 2 column grids
- Desktop: > 1024px — full layout as specified

---

## SEO

Each page needs:
- `<title>` and `<meta description>`
- Open Graph tags
- Structured data (Organization schema on homepage)

Homepage meta:
- Title: "Colabr8 — CRM, Bookings, Invoicing & AI from £49/month"
- Description: "The all-in-one CRM for SMEs, agencies and service teams. Full CRM, scheduling, social media, email campaigns, invoicing and AI — no per-seat fees."

---

## FILE STRUCTURE

```
colabr8-website/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                    # Homepage
│   ├── features/page.tsx
│   ├── pricing/page.tsx
│   ├── contact/page.tsx
│   ├── compare/
│   │   ├── hubspot/page.tsx
│   │   ├── gohighlevel/page.tsx
│   │   └── zoho/page.tsx
│   └── api/
│       ├── stripe/
│       │   ├── checkout/route.ts
│       │   └── webhook/route.ts
│       └── demo/route.ts
├── components/
│   ├── nav.tsx
│   ├── footer.tsx
│   ├── hero.tsx
│   ├── feature-tabs.tsx
│   ├── comparison-table.tsx
│   ├── pricing-cards.tsx
│   ├── ui/                         # Shared UI primitives
│   └── screenshots/                # CRM screenshot imports
├── public/
│   ├── logo/                       # SVG emblem + wordmark
│   └── screenshots/                # CRM UI screenshots (provided)
├── lib/
│   ├── stripe.ts
│   └── constants.ts                # Pricing, features data
└── styles/
    └── globals.css
```

---

## SCREENSHOTS TO USE (from provided images)

Place in `/public/screenshots/`:

- `dashboard.png` — "Good afternoon, Alex" main dashboard
- `pipeline.png` — Deals Kanban board
- `sales-marketing.png` — Sales & Marketing Kanban
- `bookings.png` — Bookings calendar with staff avatars
- `social.png` — Social media calendar (May 2026)
- `email-campaigns.png` — Email campaigns templates view
- `inbox.png` — Inbox with folder navigation
- `contacts.png` — Contacts list view
- `companies.png` — Companies list with logos
- `invoices.png` — Invoices list
- `portfolio.png` — Portfolio Intelligence sunburst
- `services.png` — Service catalog
- `data-sources.png` — Data sources connection view
- `ai-workspace.png` — Full AI workspace with chat history, projects, and prompt suggestions

---

## IMPORTANT NOTES

1. The CRM is white-label. Screenshots show "PHANTOM" branding — this is intentional and demonstrates the white-label feature. Use these screenshots with a caption explaining they show a white-labelled instance.

2. Tenant provisioning on Stripe payment is future work. For now, the Stripe checkout success page should say: "Your account is being set up — you'll receive an email with your login link within a few minutes." The actual provisioning edge function will be built separately in the CRM codebase.

3. "Sign in" always links to `crm.colabr8.tech` — the marketing site never handles authentication.

4. The demo form posts to the CRM lead capture webhook. Get the endpoint URL and token from the CRM's Data Sources → Lead Capture section.

5. Pricing may be updated — make it easy to change in a single `constants.ts` file.

6. Do not use any CRM screenshot that shows real customer data from Phantom Development's contacts. The companies list shows real client names — blur or crop as needed, or use other screenshots instead.

---

## INITIAL BUILD PRIORITY ORDER

1. Global styles, fonts, CSS variables
2. Nav + Footer components
3. Homepage — Hero section
4. Homepage — Feature overview grid
5. Homepage — Feature deep-dive tabs
6. Homepage — Pricing cards
7. Homepage — Comparison table
8. Homepage — CTA section
9. Pricing page (full)
10. Features page (full)
11. Stripe API routes
12. Demo form + API route
13. Compare pages
14. SEO + meta

---

*Built by Phantom Development for Colabr8 Tech. Do not share externally.*
