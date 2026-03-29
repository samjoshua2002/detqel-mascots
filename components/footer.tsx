import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-surface-container-low border-t border-outline-variant/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Logo & Description */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold tracking-tight text-on-surface">
                sintra
              </span>
            </Link>
            <p className="mt-4 text-sm text-on-surface-muted leading-relaxed">
              Your AI team that never sleeps. Automate workflows and scale your business.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold text-on-surface uppercase tracking-wider mb-4">
              Products
            </h3>
            <ul className="space-y-3">
              <FooterLink href="#">Sintra X</FooterLink>
              <FooterLink href="#">AI Assistants</FooterLink>
              <FooterLink href="#">Workflows</FooterLink>
              <FooterLink href="#">Integrations</FooterLink>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-on-surface uppercase tracking-wider mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              <FooterLink href="#">Documentation</FooterLink>
              <FooterLink href="#">Blog</FooterLink>
              <FooterLink href="#">Case Studies</FooterLink>
              <FooterLink href="#">Help Center</FooterLink>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-on-surface uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              <FooterLink href="#">About</FooterLink>
              <FooterLink href="#">Careers</FooterLink>
              <FooterLink href="#">Press</FooterLink>
              <FooterLink href="#">Contact</FooterLink>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-on-surface uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              <FooterLink href="#">Privacy Policy</FooterLink>
              <FooterLink href="#">Terms of Service</FooterLink>
              <FooterLink href="#">Cookie Policy</FooterLink>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-outline-variant/10">
          <p className="text-sm text-on-surface-muted text-center">
            &copy; {new Date().getFullYear()} Sintra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm text-on-surface-muted hover:text-on-surface transition-colors"
      >
        {children}
      </Link>
    </li>
  )
}
