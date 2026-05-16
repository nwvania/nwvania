"use client";

import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import AnimatedSection from "@/components/sections/AnimatedSection";
import CompanyTrustStrip from "@/components/sections/CompanyTrustStrip";
import { useLang } from "@/lib/i18n/LangContext";

export default function AboutContent() {
  const { t } = useLang();

  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-b from-[#EEF4FF] to-white pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="animate-fade-up mb-4 text-xs font-semibold uppercase tracking-widest text-[#005CE6]">
              {t.about.label}
            </p>
            <h1 className="animate-fade-up-1 mb-6 text-5xl leading-tight font-bold text-gray-900 md:text-6xl">
              {t.about.headline1}
              <br />
              {t.about.headline2}
              <br />
              {t.about.headline3}
            </h1>
            <p className="animate-fade-up-2 text-lg leading-relaxed text-gray-500">
              {t.about.subtitle}
            </p>
          </div>
        </div>
      </section>

      <CompanyTrustStrip />

      {/* MISSION */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <AnimatedSection direction="left">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#005CE6]">
                {t.about.missionLabel}
              </p>
              <h2 className="mb-6 text-4xl leading-tight font-bold text-gray-900">
                {t.about.missionTitle}
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-gray-500">
                {t.about.missionText1}
              </p>
              <p className="text-lg leading-relaxed text-gray-500">
                {t.about.missionText2}
              </p>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={150}>
              <div className="rounded-2xl bg-gray-950 p-8 text-white">
                <h3 className="mb-6 text-2xl font-bold">By the numbers</h3>
                <div className="space-y-4">
                  {[
                    { label: "Consumer Application", value: "1" },
                    { label: "Operational Platforms", value: "10" },
                    { label: "Sectors", value: "20" },
                    { label: "Applications", value: "220" },
                    { label: "User Layers", value: "2" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between border-b border-white/10 py-3 last:border-0"
                    >
                      <span className="text-sm text-gray-400">{item.label}</span>
                      <span className="text-2xl font-bold text-[#005CE6]">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#005CE6]">
              {t.about.valuesLabel}
            </p>
            <h2 className="mb-12 text-3xl font-bold text-gray-900 md:text-5xl">
              {t.about.valuesTitle}
            </h2>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {t.about.values.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 80}>
                <div className="h-full rounded-2xl border border-gray-100 bg-white p-7">
                  <div className="mb-5 flex h-8 w-8 items-center justify-center rounded-lg bg-[#005CE6]">
                    <div className="h-3 w-3 rounded-sm bg-white" />
                  </div>
                  <h3 className="mb-3 text-lg font-semibold text-gray-900">
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-500">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <AnimatedSection>
            <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-5xl">
              {t.about.ctaTitle}
            </h2>
            <p className="mx-auto mb-10 max-w-xl text-lg text-gray-500">
              {t.about.ctaSubtitle}
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/early-access"
                className="flex items-center gap-2 rounded-full bg-black px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-gray-800"
              >
                {t.about.ctaButton} <ArrowRight size={16} />
              </Link>
              <Link
                href="/platform"
                className="flex items-center gap-2 rounded-full border border-gray-200 px-8 py-4 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
              >
                {t.about.missionCta} <ChevronRight size={16} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
