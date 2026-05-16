"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/sections/AnimatedSection";
import CompanyTrustStrip from "@/components/sections/CompanyTrustStrip";
import { useLang } from "@/lib/i18n/LangContext";

export default function InvestContent() {
  const { t } = useLang();

  return (
    <>
      {/* HERO */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-gray-950 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="animate-fade-up text-xs font-semibold text-[#005CE6] uppercase tracking-widest mb-4">
            {t.invest.label}
          </p>
          <h1 className="animate-fade-up-1 text-5xl md:text-6xl font-bold leading-tight mb-6 max-w-3xl">
            {t.invest.headline}
          </h1>
          <p className="animate-fade-up-2 text-lg text-gray-400 leading-relaxed max-w-2xl mb-10">
            {t.invest.subtitle}
          </p>
          <Link
            href="/contact"
            className="animate-fade-up-3 inline-flex items-center gap-2 bg-[#005CE6] text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-[#0047B3] transition-colors"
          >
            {t.invest.ctaButton} <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <CompanyTrustStrip variant="dark" />

      {/* INVESTMENT CASE */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold text-[#005CE6] uppercase tracking-widest mb-4">
              {t.invest.reasonsLabel}
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-14">
              {t.invest.reasonsTitle}
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {t.invest.reasons.map((r, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className="border border-gray-100 rounded-2xl p-7 h-full hover:border-[#005CE6]/30 hover:shadow-sm transition-all duration-300">
                  <div className="text-[#005CE6] font-mono text-xs font-bold mb-5">{r.number}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{r.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{r.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* PLATFORM SCALE */}
      <section className="py-24 bg-[#005CE6] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-bold mb-14 max-w-2xl">
              The scale no single competitor can match.
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "1",   label: "Unified Platform" },
              { value: "10",  label: "Operational Platforms" },
              { value: "20",  label: "Sectors" },
              { value: "220", label: "Applications" },
            ].map((s, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-bold mb-2">{s.value}</div>
                  <div className="text-blue-200 text-sm">{s.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              {t.invest.contactTitle}
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto mb-10">
              {t.invest.contactSubtitle}
            </p>
            <Link
              href="/contact"
              className="bg-black text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors inline-flex items-center gap-2"
            >
              {t.invest.contactButton} <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
