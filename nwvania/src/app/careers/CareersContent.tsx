"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/sections/AnimatedSection";
import { useLang } from "@/lib/i18n/LangContext";

const domains = [
  { title: "Engineering",       roles: ["Backend Engineers", "Frontend Engineers", "Mobile Developers", "DevOps & Infrastructure", "Security Engineers"] },
  { title: "Product",           roles: ["Product Managers", "UX/UI Designers", "Product Analysts", "Research Leads"] },
  { title: "Business",          roles: ["BD Managers", "Partnership Leads", "Account Executives", "Market Expansion"] },
  { title: "Operations",        roles: ["Operations Managers", "Logistics Coordinators", "Quality Assurance", "Support Leads"] },
  { title: "Data & AI",         roles: ["Data Scientists", "ML Engineers", "Data Analysts", "AI Product Leads"] },
  { title: "Content & Media",   roles: ["Content Strategists", "Creative Directors", "Video Producers", "Copywriters"] },
];

const principles = [
  { title: "We build systems, not features",     description: "Every person on the team thinks about the whole, not just their piece. You will be working on infrastructure that affects millions." },
  { title: "Ownership is real",                  description: "At Nwvania, ownership is not a word in a job description — it is the actual expectation. You own your domain. You drive it." },
  { title: "We move fast without breaking trust", description: "Speed matters. But we do not compromise on security, quality, or user trust to move fast. We find ways to do both." },
  { title: "Global ambition, specific execution", description: "We are building for the world. But we execute one sector, one market, one problem at a time." },
];

export default function CareersContent() {
  const { t } = useLang();

  return (
    <>
      {/* HERO */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-gray-950 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="animate-fade-up text-xs font-semibold text-[#005CE6] uppercase tracking-widest mb-4">
            {t.careers.label}
          </p>
          <h1 className="animate-fade-up-1 text-5xl md:text-6xl font-bold leading-tight mb-6 max-w-3xl">
            {t.careers.headline1}<br />{t.careers.headline2}
          </h1>
          <p className="animate-fade-up-2 text-lg text-gray-500 max-w-2xl leading-relaxed mb-10">
            {t.careers.subtitle}
          </p>
          <Link
            href="/contact"
            className="animate-fade-up-3 inline-flex items-center gap-2 bg-[#005CE6] text-white px-7 py-3.5 rounded-full text-sm font-medium hover:bg-[#0047B3] transition-colors"
          >
            {t.careers.openingsTitle} <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* WORK PRINCIPLES */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold text-[#005CE6] uppercase tracking-widest mb-4">
              How We Work
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-14">
              Our working principles.
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-5">
            {principles.map((p, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className="bg-gray-50 rounded-2xl p-8 h-full">
                  <div className="w-8 h-8 bg-[#005CE6] rounded-lg mb-5 flex items-center justify-center text-white font-bold text-sm">
                    {i + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{p.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{p.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* OPEN DOMAINS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold text-[#005CE6] uppercase tracking-widest mb-4">
              Open Domains
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-14">
              Where we are building.
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {domains.map((d, i) => (
              <AnimatedSection key={i} delay={i * 70}>
                <div className="bg-white rounded-2xl p-7 border border-gray-100 h-full">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{d.title}</h3>
                  <ul className="space-y-2.5" role="list">
                    {d.roles.map((r) => (
                      <li key={r} className="text-sm text-gray-500 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#005CE6] shrink-0" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              {t.careers.ctaTitle}
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto mb-10">
              {t.careers.ctaText}
            </p>
            <Link
              href="/contact"
              className="bg-black text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors inline-flex items-center gap-2"
            >
              {t.careers.ctaButton} <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
