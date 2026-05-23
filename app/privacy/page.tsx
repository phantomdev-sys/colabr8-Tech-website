import Nav from "@/components/nav";
import Footer from "@/components/footer";

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>
            <p className="text-secondary text-lg leading-relaxed">
              COLABR8 TECH LIMITED (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is committed to protecting your personal data.
              This Privacy Policy explains how we collect, use, and protect information when you use our
              platform at colabr8.tech and crm.colabr8.tech.
            </p>
          </div>

          {/* Company info */}
          <div className="bg-surface border border-divider rounded-xl px-6 py-5 mb-14 text-sm text-secondary leading-6 space-y-0.5">
            <p className="text-white font-semibold">COLABR8 TECH LIMITED</p>
            <p>Company number: SC866868</p>
            <p>Unit 102 Embroidery Mill, Abbey Mill Business Centre, Paisley, Renfrewshire, PA1 1TJ</p>
            <p>
              <a href="mailto:support@colabr8.tech" className="text-primary hover:underline">
                support@colabr8.tech
              </a>
            </p>
          </div>

          {/* Sections */}
          <div>

            <Section number="1" title="What data we collect">
              <SubHeading>Account data</SubHeading>
              <p>When you register for an account, we collect your name, email address, company name, and billing information.</p>
              <SubHeading>Usage data</SubHeading>
              <p>We collect information about how you use the platform, including pages visited, features used, and actions taken within the CRM.</p>
              <SubHeading>Payment data</SubHeading>
              <p>Payments are processed by Stripe. We do not store your full card details. Stripe&apos;s privacy policy applies to payment processing.</p>
              <SubHeading>Contact and CRM data</SubHeading>
              <p>Data you enter into the platform (contacts, companies, deals, invoices, etc.) is stored securely and is owned by you.</p>
              <SubHeading>Technical data</SubHeading>
              <p>We collect IP addresses, browser type, device information, and cookies to operate and improve the service.</p>
            </Section>

            <Section number="2" title="How we use your data">
              <p>We use your data to:</p>
              <ul>
                <li>Provide and operate the COLABR8 TECH platform</li>
                <li>Process payments and manage your subscription</li>
                <li>Send transactional emails (account setup, invoices, notifications)</li>
                <li>Provide customer support</li>
                <li>Improve and develop our services</li>
                <li>Comply with legal obligations</li>
              </ul>
              <p>We do not sell your personal data to third parties.</p>
            </Section>

            <Section number="3" title="Legal basis for processing">
              <p>We process your data under the following lawful bases under UK GDPR:</p>
              <ul>
                <li><strong className="text-white">Contract</strong> — to provide the services you have subscribed to</li>
                <li><strong className="text-white">Legitimate interests</strong> — to operate, secure, and improve our platform</li>
                <li><strong className="text-white">Legal obligation</strong> — to comply with applicable laws</li>
                <li><strong className="text-white">Consent</strong> — for marketing communications (where applicable)</li>
              </ul>
            </Section>

            <Section number="4" title="Data sharing">
              <p>We share data only with:</p>
              <ul>
                <li><strong className="text-white">Stripe</strong> — for payment processing</li>
                <li><strong className="text-white">Vercel</strong> — for hosting and infrastructure</li>
                <li><strong className="text-white">Supabase</strong> — for database storage</li>
                <li><strong className="text-white">Email service providers</strong> — to deliver transactional emails</li>
              </ul>
              <p>All third-party providers are bound by data processing agreements and are GDPR-compliant.</p>
            </Section>

            <Section number="5" title="Data retention">
              <p>
                We retain your account data for as long as your subscription is active, and for up to 12 months
                after termination to allow for account recovery and legal compliance. CRM data you enter is retained
                until you delete it or close your account.
              </p>
            </Section>

            <Section number="6" title="Your rights" id="your-rights">
              <p>Under UK GDPR, you have the right to:</p>
              <ul>
                <li>Access the personal data we hold about you</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to or restrict processing</li>
                <li>Request data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
              <p>
                To exercise any of these rights, contact us at{" "}
                <a href="mailto:support@colabr8.tech" className="text-primary hover:underline">
                  support@colabr8.tech
                </a>.
              </p>
            </Section>

            <Section number="7" title="Cookies">
              <p>
                We use essential cookies to operate the platform. We do not use advertising or tracking cookies.
                You can manage cookie preferences in your browser settings.
              </p>
            </Section>

            <Section number="8" title="Security">
              <p>
                We implement industry-standard security measures including encryption in transit (TLS), encrypted
                storage, and access controls. However, no system is entirely secure and we cannot guarantee
                absolute security.
              </p>
            </Section>

            <Section number="9" title="International transfers">
              <p>
                Our infrastructure providers may process data outside the UK. Where this occurs, we ensure
                appropriate safeguards are in place in accordance with UK GDPR requirements.
              </p>
            </Section>

            <Section number="10" title="Changes to this policy">
              <p>
                We may update this Privacy Policy from time to time. We will notify you of significant changes
                by email or via the platform. Continued use of the platform after changes constitutes acceptance
                of the updated policy.
              </p>
            </Section>

            <Section number="11" title="Contact">
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

// ─── Shared sub-components ────────────────────────────────────────────────────

function Section({
  number,
  title,
  id,
  children,
}: {
  number: string;
  title: string;
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-12 pt-10 border-t border-divider/60">
      <h2
        id={id}
        className="font-display font-semibold text-xl text-primary mb-5"
      >
        {number}. {title}
      </h2>
      <div className="space-y-4 text-secondary leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_p]:text-secondary">
        {children}
      </div>
    </section>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return <p className="font-semibold text-white !text-white mt-5 mb-1">{children}</p>;
}
