"use client";

// This component is a Client Component because it needs:
// 1. useState — to track scroll position and mobile menu state
// 2. useEffect — to listen to scroll events
// 3. usePathname — to highlight the active page link

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import LangToggle from "@/components/ui/LangToggle";

// Main navigation links (desktop)
const navLinks = [
  { label: "Platform", href: "/platform" },
  { label: "Sectors", href: "/sectors" },
  { label: "Ecosystem", href: "/ecosystem" },
  { label: "Developers", href: "/developers" },
  { label: "Invest", href: "/invest" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  // Track whether user has scrolled past 20px (to add background to navbar)
  const [scrolled, setScrolled] = useState(false);
  // Track which pathname opened the mobile menu; route changes close it automatically
  const [menuOpenPath, setMenuOpenPath] = useState<string | null>(null);
  // Get current page path for active link highlighting
  const pathname = usePathname();
  const menuOpen = menuOpenPath === pathname;

  // Listen to scroll position
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-gray-100 bg-white/95 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* ── Logo ─────────────────────────────── */}
        <Link href="/" className="flex items-center" aria-label="Nwvania Home">
          <span className="text-xl font-bold tracking-tight text-gray-900">
            Nw<span className="text-[#005CE6]">vania</span>
          </span>
        </Link>

        {/* ── Desktop Navigation ───────────────── */}
        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors duration-200 ${
                pathname === link.href
                  ? "font-medium text-[#005CE6]"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* ── Desktop CTA ──────────────────────── */}
        <div className="hidden items-center gap-4 md:flex">
          <LangToggle />
          <Link
            href="/contact"
            className="text-sm text-gray-600 transition-colors hover:text-gray-900"
          >
            Contact
          </Link>
          <Link
            href="/early-access"
            className="rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-gray-800"
          >
            Get Early Access
          </Link>
        </div>

        {/* ── Mobile Menu Button ───────────────── */}
        <button
          type="button"
          className="rounded-lg p-2 text-gray-700 transition-colors hover:bg-gray-100 md:hidden"
          onClick={() =>
            setMenuOpenPath((prev) => (prev === pathname ? null : pathname))
          }
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* ── Mobile Dropdown Menu ─────────────── */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-gray-100 bg-white shadow-lg md:hidden"
        >
          <nav
            className="mx-auto flex max-w-7xl flex-col px-6 py-4"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`border-b border-gray-50 py-3 text-sm transition-colors ${
                  pathname === link.href
                    ? "font-medium text-[#005CE6]"
                    : "text-gray-700"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="border-b border-gray-50 py-3 text-sm text-gray-700"
            >
              Contact
            </Link>
            <Link
              href="/early-access"
              className="mt-4 rounded-full bg-black px-5 py-3 text-center text-sm font-medium text-white"
            >
              Get Early Access
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
