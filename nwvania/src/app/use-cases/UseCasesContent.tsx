"use client";

import Link from "next/link";
import { ArrowRight, User, Store, Building2 } from "lucide-react";
import AnimatedSection from "@/components/sections/AnimatedSection";
import { useLang } from "@/lib/i18n/LangContext";

const icons = [User, Store, Building2];
const colors = ["#005CE6", "#0047B3", "#003D99"];
const hrefs = ["/early-access", "/contact", "/developers"];

export default function UseCasesContent() {
  const { t } = useLang();

  return (
    <>
      {/* HERO */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-[#EEF4FF] to-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="animate-fade-up text-xs font-semibold text-[#005CE6] uppercase tracking-widest mb-4">
            {t.useCases.label}
          </p>
          <h1 className="animate-fade-up-1 text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6 max-w-3xl">
            {t.useCases.headline1}<br />{t.useCases.headline2}
          </h1>
          <p className="animate-fade-up-2 text-lg text-gray-500 leading-relaxed max-w-2xl">
            {t.useCases.subtitle}
          </p>
        </div>
      </section>

      {/* USE CASES */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          {t.useCases.cases.map((uc, i) => {
            const Icon = icons[i];
            const color = colors[i];
            const href = hrefs[i];
            return (
              <AnimatedSection key={uc.audience} delay={i * 80}>
                <div className={`grid gap-12 items-start lg:grid-cols-2 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                  {/* Text side */}
                  <div>
                    <div
                      className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white mb-6"
                      style={{ backgroundColor: color }}
                    >
                      <Icon size={13} aria-hidden />
                      {uc.audience}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      {uc.tagline}
                    </h2>
                    <p className="text-gray-500 leading-relaxed text-lg mb-8">
                      {uc.description}
                    </p>
                    <Link
                      href={href}
                      className="inline-flex items-center gap-2 rounded-full text-sm font-medium px-6 py-3 text-white transition-colors"
                      style={{ backgroundColor: color }}
                    >
                      {uc.cta}
                      <ArrowRight size={16} aria-hidden />
                    </Link>
                  </div>

                  {/* Steps side */}
                  <div className="space-y-4">
                    {uc.steps.map((step, j) => (
                      <div
                        key={j}
                        className="flex gap-4 bg-white border border-gray-100 rounded-2xl p-5"
                      >
                        <div
                          className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                          style={{ backgroundColor: color }}
                        >
                          {j + 1}
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed pt-0.5">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-950 py-20 text-white md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="flex flex-col items-center text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                {t.useCases.ctaTitle}
              </h2>
              <p className="mb-8 max-w-lg text-gray-500">
                {t.useCases.ctaSubtitle}
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/early-access"
                  className="inline-flex items-center gap-2 rounded-full bg-[#005CE6] px-8 py-4 text-sm font-medium text-white hover:bg-[#0047B3] transition-colors"
                >
                  {t.useCases.ctaButton}
                  <ArrowRight size={16} aria-hidden />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm font-medium text-white hover:bg-white/10 transition-colors"
                >
                  {t.common.contactUs}
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
