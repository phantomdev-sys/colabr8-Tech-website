import Link from "next/link";
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
              <span className="text-primary text-xs font-semibold tracking-wider uppercase">Last updated: August 2026</span>
            </div>
            <h1 className="font-display font-bold text-4xl sm:text-5xl text-white mb-5 leading-tight">
              Terms of Service
            </h1>
            <p className="text-secondary text-lg leading-relaxed">
              These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the COLABR8 TECH
              platform provided by COLABR8 TECH LIMITED. By creating an account or using our platform, you
              agree to these Terms.
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
                crm.colabr8.tech. Features include contact and pipeline management, invoicing and quoting,
                bookings, a connected email inbox, email campaigns, social media scheduling, and AI tools.
              </p>
              <p>
                The platform is provided on a software-as-a-service basis. We develop it continuously, and
                features may be added, changed or withdrawn. We will not make a change that materially
                reduces the core functionality of your plan without giving you notice.
              </p>
            </Section>

            <Section number="2" title="Eligibility">
              <p>
                You must be at least 18 years old and have authority to enter into these Terms on behalf of
                yourself or your organisation. The platform is intended for business use. By using it, you
                confirm you meet these requirements.
              </p>
            </Section>

            <Section number="3" title="Accounts and access">
              <p>
                You are responsible for maintaining the confidentiality of your account credentials and for
                all activity under your account, including that of users you invite. You must notify us
                immediately at{" "}
                <a href="mailto:support@colabr8.tech" className="text-primary hover:underline">
                  support@colabr8.tech
                </a>{" "}
                if you suspect unauthorised access.
              </p>
              <p>
                Where you invite team members, you are responsible for their use of the platform and for the
                access level you grant them.
              </p>
            </Section>

            <Section number="4" title="Acceptable use">
              <p>You agree not to:</p>
              <ul>
                <li>Use the platform for any unlawful purpose</li>
                <li>Send spam, unsolicited marketing, or harassing communications, or send email or SMS to people who have not consented where consent is required</li>
                <li>Upload malicious code or attempt to compromise, probe or overload platform security or infrastructure</li>
                <li>Attempt to access another tenant&apos;s data, or circumvent access controls</li>
                <li>Resell or sublicense access to the platform without our written consent</li>
                <li>Store or transmit content that infringes third-party rights, or that is unlawful</li>
                <li>Use the platform, or data obtained through it, to build advertising profiles, track individuals across services, or act as a data broker</li>
                <li>Use automated means to extract data from the platform at a scale that degrades service for others</li>
              </ul>
              <p>
                You are responsible for the lawfulness of the data you upload and the messages you send
                through the platform, including compliance with UK GDPR and PECR where they apply to you.
              </p>
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
              <p>
                If a payment fails, your account enters a grace period of 7 days during which the service
                continues and you can update your payment details. If payment is not resolved within that
                period, we may suspend access to the account. Suspension disables sign-in but does not delete
                your data, and access is restored when payment succeeds.
              </p>
              <p>
                New subscribers may cancel within 14 days of first payment for a full refund. After that
                window, subscription fees are non-refundable except where required by law.
              </p>
              <p>
                We may change our prices. We will give at least 30 days notice before a price change affects
                your subscription, and you may cancel before it takes effect.
              </p>
            </Section>

            <Section number="6" title="Free trial">
              <p>
                Where a free trial is offered, you will not be charged until the trial period ends. You may
                cancel at any time during the trial without charge. We may withdraw or change trial terms for
                future customers at any time.
              </p>
            </Section>

            <Section number="7" title="Your data and ownership">
              <p>
                You retain full ownership of all data you enter into the platform, including your contacts,
                companies, deals, documents and mailbox content. We claim no rights over it. We do not sell
                it, and we do not use it to train generalised AI models.
              </p>
              <p>
                You grant us only the limited licence needed to host, process, transmit and display that data
                in order to provide the platform to you, and to make backups.
              </p>
              <p>
                For the purposes of UK GDPR, you are the controller of the personal data you put into the
                platform and we are your processor. Our{" "}
                <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>{" "}
                sets out how we handle that data, the subprocessors we use, and how long we keep it. Where you
                require a separate data processing agreement, contact us.
              </p>
              <p>
                You may export your data at any time while your subscription is active. On closure, we delete
                your account and CRM data within 30 days of a written deletion request, except for invoices
                and accounting records which we are required to keep for 6 years.
              </p>
            </Section>

            <Section number="8" title="Connected third-party accounts">
              <p>
                The platform can connect to third-party services on your instruction — including Microsoft
                Outlook, Google Gmail, generic IMAP and SMTP mailboxes, and social media accounts. When you
                connect an account:
              </p>
              <ul>
                <li>You confirm you are authorised to connect that account and to grant the permissions requested</li>
                <li>You remain bound by that provider&apos;s own terms, and we are not responsible for their service</li>
                <li>We access only the permissions described in our Privacy Policy, and use them only to provide the features you can see in the platform</li>
                <li>You can disconnect the account at any time, which removes the stored credentials</li>
              </ul>
              <p>
                We may suspend or revoke an integration if we believe it is being used in breach of these
                Terms or of the relevant provider&apos;s policies. Our use of data obtained from Google APIs
                adheres to the Google API Services User Data Policy, including the Limited Use requirements,
                as set out in our{" "}
                <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
              </p>
            </Section>

            <Section number="9" title="AI features">
              <p>
                The platform includes AI tools that generate text and summaries from your CRM records. AI
                output can be inaccurate or incomplete. You are responsible for reviewing anything generated
                before you rely on it, send it to a customer, or use it in a business decision. We do not
                warrant that AI output is accurate, and it does not constitute professional advice.
              </p>
            </Section>

            <Section number="10" title="Service availability">
              <p>
                We work to keep the platform available and to resolve faults promptly, but we do not offer a
                guaranteed uptime level and the service is provided on an &ldquo;as available&rdquo; basis. We
                do not currently commit to a service level agreement. Where an SLA is agreed separately in
                writing for an enterprise account, that agreement takes precedence over this clause.
              </p>
              <p>
                We will give notice of planned maintenance where reasonably possible. We are not liable for
                interruptions arising from causes beyond our reasonable control, including failures of
                third-party providers on which the platform depends.
              </p>
            </Section>

            <Section number="11" title="Support">
              <p>
                Support is provided by email at{" "}
                <a href="mailto:support@colabr8.tech" className="text-primary hover:underline">
                  support@colabr8.tech
                </a>
                . We aim to respond promptly during UK business hours. Response times quoted on our pricing
                pages are targets rather than contractual guarantees unless separately agreed in writing.
              </p>
            </Section>

            <Section number="12" title="Intellectual property">
              <p>
                All platform software, design, and content are the property of COLABR8 TECH LIMITED. You are
                granted a limited, non-exclusive, non-transferable licence to use the platform during your
                subscription. You may not copy, modify, reverse-engineer, or distribute any part of the
                platform.
              </p>
              <p>
                Where your plan includes white-label branding, you may present the platform under your own
                brand to your own customers. That right lasts only while your subscription is active and does
                not transfer ownership of the underlying software.
              </p>
            </Section>

            <Section number="13" title="Limitation of liability">
              <p>
                Nothing in these Terms limits liability for death or personal injury caused by negligence,
                for fraud or fraudulent misrepresentation, or for any liability that cannot lawfully be
                limited.
              </p>
              <p>
                Subject to that, and to the fullest extent permitted by law, COLABR8 TECH LIMITED shall not be
                liable for indirect, incidental or consequential loss, nor for loss of profits, revenue,
                goodwill, business opportunity, or data, arising from your use of the platform. Our total
                aggregate liability shall not exceed the fees paid by you in the 12 months preceding the
                claim.
              </p>
              <p>
                You are responsible for maintaining your own exports or backups of business-critical data.
              </p>
            </Section>

            <Section number="14" title="Termination">
              <p>
                You may cancel your account at any time via the Billing section. Cancellation takes effect at
                the end of the current billing period. Fees already paid are not refunded except under the
                14-day window in clause 5, or where required by law.
              </p>
              <p>
                We may suspend or terminate accounts that breach these Terms. Where practical we will give
                notice and an opportunity to put the breach right first; where the breach is serious — for
                example unlawful use, or activity that threatens the security of the platform or other
                customers — we may act immediately.
              </p>
              <p>
                On termination, your right to use the platform ends. Data handling after termination is
                described in clause 7 and in our{" "}
                <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
              </p>
            </Section>

            <Section number="15" title="Governing law">
              <p>
                These Terms are governed by the law of Scotland. Any disputes shall be subject to the
                exclusive jurisdiction of the Scottish courts.
              </p>
            </Section>

            <Section number="16" title="Changes to these Terms">
              <p>
                We may update these Terms from time to time. We will give at least 30 days notice of material
                changes by email or in the platform. Continued use after that date constitutes acceptance. If
                you do not accept a change, you may cancel before it takes effect.
              </p>
            </Section>

            <Section number="17" title="Contact">
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
