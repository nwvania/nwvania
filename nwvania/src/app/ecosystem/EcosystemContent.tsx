"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { operationalApps } from "@/lib/data/sectors";
import AnimatedSection from "@/components/sections/AnimatedSection";
import { useLang } from "@/lib/i18n/LangContext";

const heroStrings = {
  en: {
    badge: "The Operational Ecosystem",
    headline: "10 platforms.",
    headline2: "Built for those who build.",
    subtitle:
      "These are not consumer apps. They are professional, institutional, and operational environments — each purpose-built for a specific role within the Nwvania ecosystem. Not visible to the general public. Not accessible without qualification.",
    ctaQuestion: "Is your role here?",
    ctaSubtitle:
      "If you represent a business, institution, government body, technology company, or professional service — your operational platform is in the ecosystem.",
    ctaRegister: "Register Your Interest",
    ctaContact: "Contact the Team",
  },
  ar: {
    badge: "المنظومة التشغيلية",
    headline: "10 منصات.",
    headline2: "مبنية لمن يبني.",
    subtitle:
      "هذه ليست تطبيقات مستهلكين. بل بيئات مهنية ومؤسسية وتشغيلية — كل منها مبنية لدور محدد ضمن منظومة نوفانيا. غير مرئية للعامة. لا يمكن الوصول إليها بدون تأهيل.",
    ctaQuestion: "هل دورك هنا؟",
    ctaSubtitle:
      "إذا كنت تمثّل شركة أو مؤسسة أو جهة حكومية أو شركة تقنية أو خدمة مهنية — منصتك التشغيلية موجودة في المنظومة.",
    ctaRegister: "سجّل اهتمامك",
    ctaContact: "تواصل مع الفريق",
  },
};

export default function EcosystemContent() {
  const { t, lang } = useLang();
  const s = heroStrings[lang];

  return (
    <>
      {/* HERO */}
      <section className="pt-32 pb-20 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="animate-fade-up text-xs font-semibold text-[#005CE6] uppercase tracking-widest mb-4">
            {s.badge}
          </p>
          <h1 className="animate-fade-up-1 text-5xl md:text-6xl font-bold leading-tight mb-6 max-w-3xl">
            {s.headline}
            <br />
            <span className="text-gray-400">{s.headline2}</span>
          </h1>
          <p className="animate-fade-up-2 text-lg text-gray-500 leading-relaxed max-w-2xl">
            {s.subtitle}
          </p>
        </div>
      </section>

      {/* 10 OPERATIONAL PLATFORMS */}
      <section className="py-16 md:py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-5">
            {operationalApps.map((app, i) => (
              <AnimatedSection key={app.id} delay={i * 80}>
                <div
                  className="rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-colors duration-300 h-full flex flex-col"
                  style={{ backgroundColor: `${app.color}15` }}
                >
                  <div className="flex items-start justify-between mb-5">
                    <div>
                      <div className="text-xs font-mono text-gray-500 mb-2">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <h2 className="text-xl font-bold text-white">{app.name}</h2>
                      <p className="text-xs font-medium mt-1" style={{ color: app.color }}>
                        {app.targetAudience}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm italic mb-4 opacity-70">&ldquo;{app.tagline}&rdquo;</p>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">{app.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {app.features.map((f) => (
                      <span
                        key={f}
                        className="text-xs px-3 py-1 rounded-full border"
                        style={{ borderColor: `${app.color}40`, color: app.color, backgroundColor: `${app.color}10` }}
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {s.ctaQuestion}
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto mb-10">
              {s.ctaSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/early-access"
                className="bg-[#005CE6] text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-[#0047B3] transition-colors flex items-center gap-2"
              >
                {s.ctaRegister} <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="border border-white/20 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-white/10 transition-colors"
              >
                {s.ctaContact}
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
