import Link from "next/link";
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
              <span className="text-primary text-xs font-semibold tracking-wider uppercase">Last updated: August 2026</span>
            </div>
            <h1 className="font-display font-bold text-4xl sm:text-5xl text-white mb-5 leading-tight">
              Privacy Policy
            </h1>
            <p className="text-secondary text-lg leading-relaxed">
              COLABR8 TECH LIMITED (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) operates the COLABR8 TECH
              platform at colabr8.tech and crm.colabr8.tech. This policy explains what personal data we
              handle, why, who we share it with, and what rights you have under UK GDPR.
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

            <Section number="1" title="Our role: controller and processor">
              <p>
                COLABR8 TECH is a multi-tenant CRM. Personal data on the platform falls into two categories,
                and our legal role differs between them.
              </p>
              <SubHeading>We are the controller for account data</SubHeading>
              <p>
                Where you sign up for an account, contact us, or use our website, we decide how and why your
                data is processed. This covers your name, work email address, company details, billing
                records, login activity and support correspondence.
              </p>
              <SubHeading>We are a processor for your customer data</SubHeading>
              <p>
                Everything you put into your CRM — your contacts, companies, deals, bookings, invoices,
                documents and mailbox contents — remains yours. You are the controller of that data. We
                process it only on your instructions, to provide the platform to you. We do not use it for
                our own purposes, we do not sell it, and we do not mine it to build products.
              </p>
              <p>
                If you handle personal data of people in the UK or EU through COLABR8 TECH, you are
                responsible for having a lawful basis to do so, and for responding to requests from those
                individuals. We will assist you with such requests — see{" "}
                <Link href="#your-rights" className="text-primary hover:underline">Your rights</Link>.
              </p>
            </Section>

            <Section number="2" title="What data we collect">
              <SubHeading>Account data</SubHeading>
              <p>Your name, email address, company name, job role, and billing details when you register.</p>
              <SubHeading>Payment data</SubHeading>
              <p>
                Payments are processed by Stripe. We receive subscription status, plan and invoice records.
                We never see or store your full card number.
              </p>
              <SubHeading>Customer data you enter</SubHeading>
              <p>
                Contacts, companies, deals, bookings, invoices, quotes, tasks, notes, uploaded documents and
                anything else you or your team record in the CRM.
              </p>
              <SubHeading>Mailbox data from connected accounts</SubHeading>
              <p>
                If you connect a mailbox, we process the contents of that mailbox to display it in the CRM
                inbox and to send mail on your behalf. See{" "}
                <Link href="#mailboxes" className="text-primary hover:underline">Connected mailboxes</Link>.
              </p>
              <SubHeading>Usage and technical data</SubHeading>
              <p>
                Pages visited, features used, actions taken in the CRM, IP address, browser and device
                information, and error logs — used to operate, secure and debug the service.
              </p>
            </Section>

            <Section number="3" title="Lawful bases for processing">
              <p>Under UK GDPR we rely on the following bases:</p>
              <ul>
                <li>
                  <strong className="text-white">Contract</strong> — to provide the platform you have
                  subscribed to, take payment, and provide support.
                </li>
                <li>
                  <strong className="text-white">Legitimate interests</strong> — to secure the platform,
                  prevent abuse, diagnose faults, and improve the product. We balance this against your
                  rights and do not use it to justify marketing to you without consent.
                </li>
                <li>
                  <strong className="text-white">Legal obligation</strong> — to keep accounting and tax
                  records and respond to lawful requests.
                </li>
                <li>
                  <strong className="text-white">Consent</strong> — for marketing emails, and for connecting
                  a third-party mailbox or social account. You can withdraw consent at any time by
                  unsubscribing or disconnecting the account.
                </li>
              </ul>
              <p>
                Where we act as processor for your customer data, the lawful basis for that processing is
                yours to establish, not ours.
              </p>
            </Section>

            <Section number="4" title="Connected mailboxes" id="mailboxes">
              <p>
                COLABR8 TECH includes an inbox that connects to your existing business mailbox so you can
                read and send mail alongside your CRM records. Connecting a mailbox is entirely optional and
                is always initiated by you. What we access depends on the provider you connect.
              </p>

              <SubHeading>Microsoft Outlook / Microsoft 365</SubHeading>
              <p>
                We connect using Microsoft OAuth and the Microsoft Graph API. We request the permissions{" "}
                <strong className="text-white">Mail.Read</strong> (read your mail),{" "}
                <strong className="text-white">Mail.Send</strong> (send mail as you),{" "}
                <strong className="text-white">User.Read</strong> (your basic profile and email address) and{" "}
                <strong className="text-white">offline_access</strong> (so the connection persists without
                asking you to sign in repeatedly). This means we retrieve message content, subject lines and
                headers, sender and recipient addresses, timestamps and attachments for the mailbox you
                connect, and store them so the CRM inbox can display them.
              </p>

              <SubHeading>Google Gmail</SubHeading>
              <p>
                Gmail connection is built but not yet enabled for customers, pending Google verification.
                When enabled, we will request only{" "}
                <strong className="text-white">gmail.send</strong> (send mail on your behalf) and{" "}
                <strong className="text-white">userinfo.email</strong> (confirm which Google account you
                connected). We do not currently request read access to Gmail, and we will update this policy
                before requesting any additional Google scope.
              </p>
              <p>
                <strong className="text-white">Google Limited Use disclosure.</strong> COLABR8 TECH&apos;s use
                and transfer of information received from Google APIs to any other app will adhere to the{" "}
                <a
                  href="https://developers.google.com/terms/api-services-user-data-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Google API Services User Data Policy
                </a>
                , including the Limited Use requirements. The use of information received from Google
                Workspace APIs will adhere to the Google User Data Policy, including the Limited Use
                requirements.
              </p>
              <p>In plain terms, for data we obtain from Google:</p>
              <ul>
                <li>We use it only to provide the mailbox features you can see in the CRM inbox.</li>
                <li>We do not sell it, and we do not transfer it to third parties except to provide those features, for security purposes, or where the law requires.</li>
                <li>We do not use it for advertising, ad targeting, or building advertising profiles.</li>
                <li>
                  We do not use it to create, train or improve any generalised artificial intelligence or
                  machine learning model. Mailbox contents are not sent to our AI features at all — see{" "}
                  <Link href="#ai" className="text-primary hover:underline">AI features</Link>.
                </li>
                <li>
                  We do not allow our staff to read your mail, except where you have specifically asked us to
                  look at a message to resolve a support issue, where it is necessary to investigate a
                  security problem or abuse, or where the law requires it.
                </li>
              </ul>

              <SubHeading>IMAP and SMTP mailboxes</SubHeading>
              <p>
                You can also connect a generic mailbox using IMAP and SMTP. In that case you supply the
                hostname, port and login credentials for your mail provider, and we connect to that provider
                directly on your behalf. Your mail provider is determined by you, not by us.
              </p>

              <SubHeading>How mailbox credentials are stored</SubHeading>
              <p>
                We think you should know exactly how your credentials are held, including where that is not
                yet ideal.
              </p>
              <ul>
                <li>
                  <strong className="text-white">OAuth tokens</strong> (Microsoft, and Google when enabled)
                  are encrypted at rest in our database using a symmetric key held in a separate secrets
                  vault. They are decrypted only inside server-side functions at the moment they are used,
                  and the decryption routine is not callable by any signed-in user.
                </li>
                <li>
                  <strong className="text-white">IMAP and SMTP passwords are not currently encrypted at
                  rest.</strong> They are stored in our database as supplied, protected by database access
                  controls and row-level security that restrict them to your account, but not by encryption.
                  We are working to bring them in line with the OAuth tokens above. Until that is done, if
                  you would rather not store a mailbox password with us, connect via Microsoft OAuth
                  instead, which does not require us to hold your password.
                </li>
              </ul>
              <p>
                Disconnecting a mailbox removes its stored credentials. You can disconnect at any time from
                the Inbox settings in the CRM.
              </p>
            </Section>

            <Section number="5" title="AI features" id="ai">
              <p>
                The platform includes an AI workspace and AI generation tools for email templates, social
                posts and account summaries. These send the relevant CRM records to a third-party AI provider
                to generate a response.
              </p>
              <p>
                AI requests are routed through our AI infrastructure provider to Google Gemini models. The
                data sent is limited to what the feature needs — records drawn from your contacts, companies,
                deals, bookings, invoices, services, tasks, activities and campaigns, scoped to your account
                only.
              </p>
              <p>
                <strong className="text-white">Mailbox content is not sent to any AI feature.</strong> The AI
                workspace has no access to your connected mailboxes, messages or attachments.
              </p>
              <p>
                We do not use your data, or your customers&apos; data, to train generalised AI models, and our
                AI provider is engaged on terms that do not permit it either. AI interactions are logged
                against your account so you can review what was asked and answered.
              </p>
            </Section>

            <Section number="6" title="Social media integrations">
              <p>
                Our platform lets you connect third-party social media accounts — including Facebook Pages,
                Instagram, LinkedIn, X (Twitter) and TikTok — so that you can schedule and publish content
                directly from COLABR8 TECH.
              </p>
              <p>When you connect an account, we may receive:</p>
              <ul>
                <li>Public profile information, such as your name, username, and profile picture</li>
                <li>Account and Page identifiers (IDs)</li>
                <li>Page access tokens issued by the platform</li>
                <li>The permissions required to publish or schedule content on your behalf</li>
              </ul>
              <p>
                We only request the access needed to provide these features. We do not access your private
                messages or direct messages on these platforms.
              </p>
            </Section>

            <Section number="7" title="Facebook &amp; Meta Platform compliance">
              <p>
                Our use of data obtained through Facebook and Instagram complies with the Meta Platform Terms,
                the Meta Developer Policies, and the Facebook Login requirements.
              </p>
              <p>
                We use Facebook Login solely to authenticate you, connect your Facebook Pages, and enable post
                creation and scheduling within the platform.
              </p>
              <p>We do not:</p>
              <ul>
                <li>Sell or rent data obtained from Meta</li>
                <li>Use Meta data for advertising or to build user profiles</li>
                <li>Share Meta data with any third party outside the Service</li>
              </ul>
              <p>
                Data obtained through Meta is retained only while your account is active and the relevant Page
                remains connected. It is deleted when you disconnect the account or delete your COLABR8 TECH
                account. To request deletion, see our{" "}
                <Link href="/data-deletion" className="text-primary hover:underline">
                  Data Deletion Instructions
                </Link>.
              </p>
              <p>
                For LinkedIn, TikTok and X (Twitter) we request only the permissions necessary to authenticate
                you and to schedule or publish posts on your behalf, and we comply with each provider&apos;s
                API terms. The same retention, deletion and no-sale rules apply.
              </p>
            </Section>

            <Section number="8" title="Subprocessors">
              <p>
                We use the following third parties to run the platform. Each is engaged under terms
                incorporating data processing provisions and may process personal data on our behalf.
              </p>
              <ul>
                <li><strong className="text-white">Supabase</strong> — database, authentication, file storage and server-side functions. This is where CRM data is held.</li>
                <li><strong className="text-white">Cloud application hosting and AI gateway infrastructure providers</strong> — engaged under terms incorporating data processing provisions. A full list of subprocessors is available on request from{" "}
                  <a href="mailto:support@colabr8.tech" className="text-primary hover:underline">support@colabr8.tech</a>.
                </li>
                <li><strong className="text-white">Google</strong> — Gemini models serving AI features (via our AI gateway), and the Gmail API where you connect a Google mailbox.</li>
                <li><strong className="text-white">Microsoft</strong> — Microsoft Graph API where you connect an Outlook or Microsoft 365 mailbox.</li>
                <li><strong className="text-white">Stripe</strong> — subscription billing and payment processing.</li>
                <li><strong className="text-white">Resend</strong> — delivery of transactional email and email campaigns sent from the platform.</li>
                <li><strong className="text-white">Twilio</strong> — delivery of SMS and WhatsApp messages, where you use those features.</li>
                <li><strong className="text-white">Vercel</strong> — hosting for the colabr8.tech marketing website. No CRM data is held here.</li>
                <li><strong className="text-white">Your own mail provider</strong> — where you connect a mailbox over IMAP and SMTP, we connect to the provider you nominate. That provider is your choice and your relationship, not ours.</li>
              </ul>
              <p>
                We will update this list before adding a new subprocessor that handles customer data. If you
                need advance notice of changes for your own compliance purposes, contact us and we will
                arrange it.
              </p>
            </Section>

            <Section number="9" title="Where your data is held">
              <p>
                Platform data is held in our Supabase project and processed by server-side functions
                associated with it. Some of our subprocessors — including Stripe, Google, Microsoft, Resend
                and Twilio — operate globally and may process data outside the United Kingdom.
              </p>
              <p>
                Where personal data is transferred outside the UK, we rely on the UK International Data
                Transfer Agreement, the UK Addendum to the EU Standard Contractual Clauses, or an adequacy
                decision, as applicable to the provider concerned. You can ask us which mechanism applies to
                a particular provider.
              </p>
            </Section>

            <Section number="10" title="Retention">
              <p>
                <strong className="text-white">While your subscription is active</strong> — we retain your
                account data and your CRM data for as long as you keep using the platform. You control your
                CRM data and can delete records at any time.
              </p>
              <p>
                <strong className="text-white">If payment fails</strong> — your account enters a grace period
                of 7 days, during which the service continues and you can update your payment details. If
                payment is not resolved, access may be suspended. Suspension disables sign-in; it does not
                delete your data, so your account can be restored if you resume payment.
              </p>
              <p>
                <strong className="text-white">On account closure</strong> — you may export your data before
                closing. We will delete your account data and CRM data within 30 days of a written deletion
                request to{" "}
                <a href="mailto:support@colabr8.tech" className="text-primary hover:underline">
                  support@colabr8.tech
                </a>
                . Deletion is permanent and cannot be reversed.
              </p>
              <p>
                <strong className="text-white">Records we must keep</strong> — invoices and accounting records
                are retained for 6 years to meet UK tax and company law requirements, even after account
                closure.
              </p>
              <p>
                <strong className="text-white">Connected accounts</strong> — mailbox credentials and social
                access tokens are deleted when you disconnect the account, and in any event when your account
                is deleted.
              </p>
            </Section>

            <Section number="11" title="Security">
              <p>We protect the platform using:</p>
              <ul>
                <li>Encryption in transit (TLS) for all connections to the platform and to third-party APIs</li>
                <li>Row-level security in the database, so each tenant can reach only its own records</li>
                <li>Role-based access control within each tenant</li>
                <li>Encryption at rest for OAuth mailbox tokens, using a key held in a separate secrets vault</li>
                <li>Restricted administrative access, with support access to a tenant recorded</li>
              </ul>
              <p>
                As noted in{" "}
                <Link href="#mailboxes" className="text-primary hover:underline">Connected mailboxes</Link>,
                IMAP and SMTP passwords are not yet encrypted at rest. No system is completely secure, and we
                do not claim otherwise. If you believe you have found a security problem, please report it to{" "}
                <a href="mailto:support@colabr8.tech" className="text-primary hover:underline">
                  support@colabr8.tech
                </a>{" "}
                and we will investigate.
              </p>
            </Section>

            <Section number="12" title="Your rights" id="your-rights">
              <p>Under UK GDPR you have the right to:</p>
              <ul>
                <li>Access the personal data we hold about you</li>
                <li>Have inaccurate data corrected</li>
                <li>Request erasure of your data</li>
                <li>Object to or restrict processing</li>
                <li>Receive your data in a portable format</li>
                <li>Withdraw consent at any time, where we rely on consent</li>
              </ul>
              <p>
                To exercise any of these, email{" "}
                <a href="mailto:support@colabr8.tech" className="text-primary hover:underline">
                  support@colabr8.tech
                </a>
                . We will respond within one month. We do not charge for this.
              </p>
              <p>
                <strong className="text-white">If you are a customer of one of our users.</strong> Where your
                data is in a COLABR8 TECH account operated by a business you deal with, that business is the
                controller and you should contact them directly. If you contact us instead, we will pass your
                request to them and support them in answering it.
              </p>
              <p>
                If you are unhappy with how we have handled your data, you can complain to the Information
                Commissioner&apos;s Office at{" "}
                <a
                  href="https://ico.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  ico.org.uk
                </a>
                . We would appreciate the chance to put it right first.
              </p>
            </Section>

            <Section number="13" title="Cookies">
              <p>
                We use essential cookies to keep you signed in and to operate the platform. We do not use
                advertising cookies, and we do not run third-party tracking or advertising scripts on
                colabr8.tech. You can manage cookies in your browser settings, though disabling essential
                cookies will prevent sign-in from working.
              </p>
            </Section>

            <Section number="14" title="Changes to this policy">
              <p>
                We may update this policy as the product changes. Where a change materially affects how we
                handle your data — including any change to the third-party scopes we request — we will notify
                you by email or in the platform before it takes effect.
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
        className="scroll-mt-28 font-display font-semibold text-xl text-primary mb-5"
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
