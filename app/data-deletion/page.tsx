import Nav from "@/components/nav";
import Footer from "@/components/footer";

export default function DataDeletionPage() {
  return (
    <div className="min-h-screen bg-bg">
      <Nav />

      <main className="pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-3.5 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-primary text-xs font-semibold tracking-wider uppercase">Last updated: June 2026</span>
            </div>
            <h1 className="font-display font-bold text-4xl sm:text-5xl text-white mb-5 leading-tight">
              Data Deletion Instructions
            </h1>
            <p className="text-secondary text-lg leading-relaxed">
              COLABR8 TECH LIMITED (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) operates the Colabr8
              CRM platform. As part of the Service, you can connect third-party accounts — such as Facebook
              Pages — to manage and schedule content. You can request deletion of the data associated with these
              connections at any time.
            </p>
          </div>

          {/* Company info */}
          <div className="bg-surface border border-divider rounded-xl px-6 py-5 mb-14 text-sm text-secondary leading-6 space-y-0.5">
            <p className="text-white font-semibold">COLABR8 TECH LIMITED</p>
            <p>Unit 102 Embroidery Mill, Abbey Mill Business Centre, Paisley, Renfrewshire, PA1 1TJ</p>
            <p>
              <a href="mailto:support@colabr8.tech" className="text-primary hover:underline">
                support@colabr8.tech
              </a>
            </p>
          </div>

          {/* Sections */}
          <div>

            <Section number="1" title="Option 1 — Request deletion by email">
              <p>
                Email us at{" "}
                <a href="mailto:support@colabr8.tech" className="text-primary hover:underline">
                  support@colabr8.tech
                </a>{" "}
                with a request to delete your data.
              </p>
              <SubHeading>Please include</SubHeading>
              <ul>
                <li>Your full name</li>
                <li>The email address you use with Colabr8</li>
                <li>The name of the connected account or Page</li>
                <li>A clear request to delete your data</li>
              </ul>
              <p>
                We will process your request within 30 days, in accordance with UK GDPR and Meta&apos;s data
                deletion requirements.
              </p>
            </Section>

            <Section number="2" title="Option 2 — Disconnect in the app">
              <p>You can remove a connected account yourself at any time.</p>
              <SubHeading>Steps</SubHeading>
              <ol>
                <li>Log in to your Colabr8 account</li>
                <li>Go to Social Media → Accounts</li>
                <li>Select the account and choose Disconnect</li>
              </ol>
              <p>
                Disconnecting immediately revokes the access tokens and stops any further processing of that
                account&apos;s data. The associated data is then removed in line with our retention policy.
              </p>
            </Section>

            <Section number="3" title="What is deleted">
              <p>When you request deletion or disconnect an account, we remove:</p>
              <ul>
                <li>Access tokens</li>
                <li>Connected Page and account identifiers (IDs)</li>
                <li>Integration metadata</li>
                <li>Stored social connection data</li>
              </ul>
            </Section>

            <Section number="4" title="Compliance">
              <p>
                This process complies with the Meta Platform Terms, the Meta Developer Policies, and the
                Facebook Data Deletion Requirements.
              </p>
            </Section>

            <Section number="5" title="Contact">
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
      <div className="space-y-4 text-secondary leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-2 [&_p]:text-secondary">
        {children}
      </div>
    </section>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return <p className="font-semibold text-white !text-white mt-5 mb-1">{children}</p>;
}
