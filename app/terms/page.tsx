import Nav from "@/components/nav";
import Footer from "@/components/footer";

export default function TermsPage() {
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
              Terms of Service
            </h1>
            <p className="text-secondary text-lg leading-relaxed">
              These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the COLABR8 TECH platform
              provided by COLABR8 TECH LIMITED. By creating an account or using our platform, you agree to these Terms.
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

            <Section number="1" title="The service">
              <p>
                COLABR8 TECH provides a cloud-based CRM and business management platform accessible at
                crm.colabr8.tech. Features include contact and pipeline management, invoicing, bookings,
                email campaigns, social media scheduling, and AI tools.
              </p>
            </Section>

            <Section number="2" title="Eligibility">
              <p>
                You must be at least 18 years old and have the authority to enter into these Terms on behalf
                of yourself or your organisation. By using the platform, you confirm you meet these requirements.
              </p>
            </Section>

            <Section number="3" title="Account registration">
              <p>
                You are responsible for maintaining the confidentiality of your account credentials and for all
                activity that occurs under your account. You must notify us immediately at{" "}
                <a href="mailto:support@colabr8.tech" className="text-primary hover:underline">
                  support@colabr8.tech
                </a>{" "}
                if you suspect unauthorised access.
              </p>
            </Section>

            <Section number="4" title="Acceptable use">
              <p>You agree not to:</p>
              <ul>
                <li>Use the platform for any unlawful purpose</li>
                <li>Send spam, unsolicited messages, or harassing communications</li>
                <li>Upload malicious code or attempt to compromise platform security</li>
                <li>Resell or sublicense access to the platform without our written consent</li>
                <li>Use the platform to store or transmit content that infringes third-party rights</li>
              </ul>
            </Section>

            <Section number="5" title="Subscription and payment">
              <p>
                Access to the platform requires a paid subscription. Fees are charged monthly or annually as
                selected at sign-up. Payments are processed by Stripe. All prices are in GBP and exclude VAT
                where applicable.
              </p>
              <p>
                Subscriptions renew automatically unless cancelled before the renewal date. You can manage or
                cancel your subscription from the Billing section of the platform.
              </p>
            </Section>

            <Section number="6" title="Free trial">
              <p>
                Where a free trial is offered, you will not be charged until the trial period ends. You may
                cancel at any time during the trial without charge.
              </p>
            </Section>

            <Section number="7" title="Refunds">
              <p>
                We offer a 14-day money-back guarantee for new subscribers. After 14 days, subscription fees
                are non-refundable except where required by law.
              </p>
            </Section>

            <Section number="8" title="Your data">
              <p>
                You retain full ownership of all data you enter into the platform. We do not claim any rights
                over your CRM data. On account termination, you may export your data. We will delete your data
                within 90 days of account closure.
              </p>
            </Section>

            <Section number="9" title="Service availability">
              <p>
                We aim to maintain 99% uptime but do not guarantee uninterrupted service. We will notify users
                of planned maintenance where possible. We are not liable for losses arising from service
                interruptions beyond our reasonable control.
              </p>
            </Section>

            <Section number="10" title="Intellectual property">
              <p>
                All platform software, design, and content are the property of COLABR8 TECH LIMITED. You are
                granted a limited, non-exclusive licence to use the platform during your subscription. You may
                not copy, modify, or distribute any part of the platform.
              </p>
            </Section>

            <Section number="11" title="Limitation of liability">
              <p>
                To the fullest extent permitted by law, COLABR8 TECH LIMITED shall not be liable for any
                indirect, incidental, or consequential loss arising from your use of the platform. Our total
                liability shall not exceed the fees paid by you in the 12 months preceding the claim.
              </p>
            </Section>

            <Section number="12" title="Termination">
              <p>
                We reserve the right to suspend or terminate accounts that violate these Terms, with or without
                notice. You may cancel your account at any time via the Billing section.
              </p>
            </Section>

            <Section number="13" title="Governing law">
              <p>
                These Terms are governed by the laws of Scotland and the United Kingdom. Any disputes shall be
                subject to the exclusive jurisdiction of the Scottish courts.
              </p>
            </Section>

            <Section number="14" title="Changes to these Terms">
              <p>
                We may update these Terms from time to time. We will provide at least 30 days notice of material
                changes. Continued use of the platform after that date constitutes acceptance.
              </p>
            </Section>

            <Section number="15" title="Contact">
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
