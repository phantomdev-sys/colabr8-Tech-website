import Link from "next/link";

const featureLinks = [
  { label: "CRM overview", href: "/features#crm" },
  { label: "Sales & pipelines", href: "/features#pipeline" },
  { label: "Bookings", href: "/features#bookings" },
  { label: "Social media", href: "/features#social" },
  { label: "Email campaigns", href: "/features#email" },
  { label: "Invoicing", href: "/features#invoicing" },
  { label: "AI workspace", href: "/features#ai" },
  { label: "Intelligence", href: "/features#intelligence" },
];

const resourceLinks = [
  { label: "Help centre", href: "/help" },
  { label: "Documentation", href: "/help" },
  { label: "Contact support", href: "/contact" },
];

const companyLinks = [
  { label: "Privacy policy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Data deletion", href: "/data-deletion" },
  { label: "SaaS terms", href: "/saas-terms" },
];

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-divider">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Col 1: Logo + tagline */}
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo/COLABR8-TECH-LOGO.png"
              alt="COLABR8 TECH"
              style={{ height: "36px", width: "auto", filter: "brightness(1)" }}
              className="mb-5"
            />
            <p className="text-secondary text-sm leading-relaxed">
              A flexible, white-label CRM built for SMEs, agencies and service teams across the UK.
            </p>
          </div>

          {/* Col 2: Features */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-5 tracking-wide">Features</h4>
            <ul className="space-y-3">
              {featureLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-secondary hover:text-white text-sm transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Resources */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-5 tracking-wide">Resources</h4>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-secondary hover:text-white text-sm transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Company + socials */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-5 tracking-wide">Company</h4>
            <ul className="space-y-3 mb-8">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-secondary hover:text-white text-sm transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com/company/colabr8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-white transition-colors duration-150"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://facebook.com/colabr8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-white transition-colors duration-150"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://x.com/colabr8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-white transition-colors duration-150"
                aria-label="X (formerly Twitter)"
              >
                <XIcon />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-muted text-sm text-center">
            © 2026 COLABR8 TECH LTD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
