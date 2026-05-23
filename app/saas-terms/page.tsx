import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Link from "next/link";

export default function SaasTermsPage() {
  return (
    <div className="min-h-screen bg-bg">
      <Nav />

      <main className="pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-3.5 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-primary text-xs font-semibold tracking-wider uppercase">Last updated: May 2026</span>
            </div>
            <h1 className="font-display font-bold text-4xl sm:text-5xl text-white mb-5 leading-tight">
              SaaS Subscription Terms
            </h1>
            <p className="text-secondary text-lg leading-relaxed">
              These SaaS Subscription Terms (&ldquo;SaaS Terms&rdquo;) apply in addition to our{" "}
              <Link href="/terms" className="text-primary hover:underline">Terms of Service</Link>{" "}
              and govern the specific terms of your software subscription with COLABR8 TECH LIMITED (SC866868).
            </p>
          </div>

          {/* Company info */}
          <div className="bg-surface border border-divider rounded-xl px-6 py-5 mb-14 text-sm text-secondary leading-6 space-y-0.5">
            <p className="text-white font-semibold">COLABR8 TECH LIMITED</p>
            <p>Registered in Scotland — company number SC866868</p>
            <p>Unit 102 Embroidery Mill, Abbey Mill Business Centre, Paisley, Renfrewshire, PA1 1TJ</p>
            <p>
              <a href="mailto:support@colabr8.tech" className="text-primary hover:underline">
                support@colabr8.tech
              </a>
            </p>
          </div>

          {/* Sections */}
          <div>

            <Section number="1" title="Subscription tiers">
              <p>We offer the following subscription plans:</p>

              <PlanCard name="Starter" price="£49/month">
                Full platform access for sole traders and small businesses. Includes all core CRM,
                operations, marketing, and intelligence features.
              </PlanCard>

              <PlanCard name="Growth" price="£69/month">
                Includes everything in Starter with higher usage limits and priority support.
                Suitable for growing teams.
              </PlanCard>

              <PlanCard name="Enterprise" price="£99/month">
                Includes everything in Growth plus white-label capabilities, multi-tenant architecture,
                and dedicated support. Suitable for agencies and larger organisations.
              </PlanCard>

              <p>
                Full feature details are available at{" "}
                <Link href="/features" className="text-primary hover:underline">
                  colabr8.tech/features
                </Link>.
              </p>
            </Section>

            <Section number="2" title="Annual billing">
              <p>
                Annual subscriptions are available at a discounted rate. Annual fees are charged upfront
                and are non-refundable after the 14-day cancellation window, except where required by law.
              </p>
            </Section>

            <Section number="3" title="Usage limits">
              <p>
                Each plan includes unlimited contacts, companies, and core CRM usage. Fair use policies
                apply to email sending volumes and API usage. If your usage significantly exceeds reasonable
                limits, we will contact you to discuss an appropriate plan.
              </p>
            </Section>

            <Section number="4" title="White-label (Enterprise only)">
              <p>
                Enterprise subscribers may white-label the platform under their own brand. White-label use
                is permitted for internal business use and resale to end clients. You may not represent the
                platform as your own proprietary software without a separate written agreement.
              </p>
            </Section>

            <Section number="5" title="Support">
              <p>
                All plans include email support via{" "}
                <a href="mailto:support@colabr8.tech" className="text-primary hover:underline">
                  support@colabr8.tech
                </a>. Growth and Enterprise subscribers receive priority response times. We aim to respond
                to all support queries within one business day.
              </p>
            </Section>

            <Section number="6" title="Upgrades and downgrades">
              <p>
                You may upgrade your plan at any time. Upgrades take effect immediately and are billed on a
                pro-rata basis. Downgrades take effect at the next renewal date.
              </p>
            </Section>

            <Section number="7" title="Data processing">
              <p>
                We act as a data processor for the personal data you enter into the platform on behalf of
                your customers and contacts. You are the data controller. We process this data solely to
                provide the service and in accordance with our{" "}
                <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>{" "}
                and UK GDPR obligations.
              </p>
              <p>
                On request, we will enter into a Data Processing Agreement (DPA) with Enterprise subscribers.
                Contact{" "}
                <a href="mailto:support@colabr8.tech" className="text-primary hover:underline">
                  support@colabr8.tech
                </a>{" "}
                to request a DPA.
              </p>
            </Section>

            <Section number="8" title="Service level">
              <p>
                We target 99% monthly uptime, excluding scheduled maintenance. Scheduled maintenance will be
                communicated at least 24 hours in advance where possible.
              </p>
            </Section>

            <Section number="9" title="Cancellation">
              <p>
                You may cancel your subscription at any time from the Billing section of the platform.
                Cancellation takes effect at the end of the current billing period. You will retain access
                until that date.
              </p>
            </Section>

            <Section number="10" title="Contact">
              <div className="bg-surface border border-divider rounded-xl px-6 py-5 text-sm text-secondary leading-6 space-y-0.5">
                <p className="text-white font-semibold">COLABR8 TECH LIMITED</p>
                <p>Unit 102 Embroidery Mill, Abbey Mill Business Centre</p>
                <p>Paisley, Renfrewshire, PA1 1TJ</p>
                <p>
                  <a href="mailto:support@colabr8.tech" className="text-primary hover:underline">
                    support@colabr8.tech
                  </a>
                </p>
              </div>
            </Section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function Section({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-12 pt-10 border-t border-divider/60">
      <h2 className="font-display font-semibold text-xl text-primary mb-5">
        {number}. {title}
      </h2>
      <div className="space-y-4 text-secondary leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_p]:text-secondary">
        {children}
      </div>
    </section>
  );
}

function PlanCard({
  name,
  price,
  children,
}: {
  name: string;
  price: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-surface border border-divider rounded-xl px-5 py-4 my-3">
      <div className="flex items-baseline gap-3 mb-1.5">
        <span className="font-semibold text-white text-sm">{name}</span>
        <span className="text-primary text-xs font-semibold">{price}</span>
      </div>
      <p className="text-secondary text-sm leading-relaxed">{children}</p>
    </div>
  );
}
