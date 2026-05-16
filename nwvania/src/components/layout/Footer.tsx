// Footer is a Server Component — no interactivity needed, pure HTML output
import Link from "next/link";
import { COMPANY } from "@/lib/company";

const footerSections = {
  Platform: [
    { label: "Overview",     href: "/platform" },
    { label: "Sectors",      href: "/sectors" },
    { label: "Applications", href: "/apps" },
    { label: "Ecosystem",    href: "/ecosystem" },
  ],
  Business: [
    { label: "Nwvania Business",    href: "/business" },
    { label: "Enterprise",          href: "/ecosystem" },
    { label: "Partners",            href: "/partners" },
    { label: "Developers",          href: "/developers" },
  ],
  Company: [
    { label: "About",    href: "/about" },
    { label: "Team",     href: "/team" },
    { label: "Trust",    href: "/trust" },
    { label: "Careers",  href: "/careers" },
    { label: "News",     href: "/news" },
    { label: "Invest",   href: "/invest" },
  ],
  Support: [
    { label: "Contact",       href: "/contact" },
    { label: "Early Access",  href: "/early-access" },
    { label: "Legal",         href: "/legal" },
    { label: "Cookies",       href: "/cookies" },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-white">

      {/* ── Main Footer Content ──────────────── */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">

          {/* Brand column */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4" aria-label="Nwvania Home">
              <span className="text-xl font-bold text-white">
                Nw<span className="text-[#005CE6]">vania</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-3">
              The unified digital ecosystem. One platform. 20 sectors. 220 applications.
            </p>
            <p className="text-gray-500 text-xs leading-relaxed mb-6">
              Operated by {COMPANY.legalName}, a {COMPANY.state} limited liability company.
            </p>
            {/* Status badge */}
            <div className="inline-flex items-center gap-2">
              <div className="w-2 h-2 bg-[#005CE6] rounded-full animate-pulse" />
              <span className="text-xs text-gray-400">Early Access Opening Soon</span>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerSections).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                {section}
              </h4>
              <ul className="space-y-3" role="list">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom Bar ───────────────────────── */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-xs text-gray-500">
              © {year} {COMPANY.legalName}. All rights reserved.
            </p>
            <p className="text-xs text-gray-600 mt-1">
              {COMPANY.brandName} is a product of {COMPANY.legalName}.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/trust" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Trust
            </Link>
            <Link href="/legal" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/legal" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>

    </footer>
  );
}