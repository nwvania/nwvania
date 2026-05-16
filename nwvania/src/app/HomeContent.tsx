"use client";

import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import AnimatedSection from "@/components/sections/AnimatedSection";
import { sectors, operationalApps } from "@/lib/data/sectors";
import { useLang } from "@/lib/i18n/LangContext";

const missionStrings = {
  en: {
    label: "The Mission",
    headline: "One platform. Every need. For everyone.",
    body: "Nwvania is a unified digital ecosystem designed so that individuals access all services from a single place — and so that businesses, companies, institutions, and service providers operate through a clear, structured environment. Orders, content, mobility, operations, oversight, integrations, and talent acquisition — all within one project, one identity, one path.",
    separation: "The principle of role separation",
    separationBody: "There is exactly one app for the general public, and ten dedicated platforms for operations, production, management, institutions, partners, and the talent that builds with Nwvania. Each environment is purpose-built. There is no overlap.",
  },
  ar: {
    label: "الرسالة",
    headline: "منصة واحدة. كل احتياج. للجميع.",
    body: "نوفانيا منظومة رقمية موحدة تجعل الفرد يستخدم الخدمات من مكان واحد، وتجعل الأعمال والشركات والجهات ومقدمي الخدمات يعملون من خلال بيئة تشغيل واضحة. إدارة الطلبات، المحتوى، التنقل، التشغيل، الرقابة، التكاملات، واستقطاب المواهب — ضمن مشروع واحد له هوية واحدة ومسار واحد.",
    separation: "مبدأ فصل الأدوار",
    separationBody: "هناك تطبيق واحد فقط للمستخدم العام، وعشرة تطبيقات مخصصة للتشغيل، الإنتاج، الإدارة، المؤسسات، الشركاء، والمواهب التي تعمل مع نوفانيا أو من خلاله. كل بيئة مبنية لغرضها. لا تداخل.",
  },
};

const formulaStrings = {
  en: {
    label: "The Architecture",
    headline: "The formula behind everything.",
    items: [
      { number: "1", title: "Consumer App", sub: "Nwvania", desc: "The only app for citizens and residents. 20 sectors. 220 services. Seamless." },
      { number: "10", title: "Operational Platforms", sub: "The Professional Layer", desc: "Business · Partner · Enterprise · Gov · Admin · Oversight · Developer · Mobility · Studio · Talent" },
      { number: "20", title: "Sectors", sub: "Inside Nwvania", desc: "Identity · Finance · Commerce · Food · Transport · Health · Education · Travel · Entertainment · Law · and more." },
      { number: "220", title: "Applications", sub: "One unified experience", desc: "Every app is a purpose-built service. Every service solves a real need. All inside one ecosystem." },
    ],
  },
  ar: {
    label: "البنية",
    headline: "المعادلة وراء كل شيء.",
    items: [
      { number: "1", title: "تطبيق المستهلك", sub: "نوفانيا", desc: "التطبيق الوحيد للمواطنين والمقيمين. 20 قطاعاً. 220 خدمة. تجربة سلسة." },
      { number: "10", title: "منصات تشغيلية", sub: "الطبقة المهنية", desc: "أعمال · شريك · مؤسسات · حكومي · إدارة · رقابة · مطورون · مواصلات · ستوديو · مواهب" },
      { number: "20", title: "قطاعاً", sub: "داخل نوفانيا", desc: "الهوية · المال · التجارة · الغذاء · النقل · الصحة · التعليم · السياحة · الترفيه · القانون · والمزيد." },
      { number: "220", title: "تطبيقاً", sub: "تجربة موحدة", desc: "كل تطبيق خدمة متخصصة. كل خدمة تحل احتياجاً حقيقياً. كلها داخل منظومة واحدة." },
    ],
  },
};

export default function HomeContent() {
  const { t, lang } = useLang();
  const featuredSectors = sectors.slice(0, 6);
  const mission = missionStrings[lang];
  const formula = formulaStrings[lang];

  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-16">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#EEF4FF] via-white to-white" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/3 left-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(0,92,230,0.08) 0%, transparent 70%)" }}
        />
        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
          <div className="animate-fade-up mb-8 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-1.5 shadow-sm">
            <div className="h-2 w-2 rounded-full bg-[#005CE6]" />
            <span className="text-xs font-medium text-gray-600">{t.home.badge}</span>
          </div>
          <h1 className="animate-fade-up-1 mb-6 text-5xl leading-[1.04] font-bold tracking-tight text-gray-900 md:text-7xl lg:text-[88px]">
            {t.home.headline1}
            <br />
            <span className="text-[#005CE6]">{t.home.headline2}</span>
          </h1>
          <p className="animate-fade-up-2 mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-gray-500 md:text-xl">
            {t.home.subtitle}
          </p>
          <div className="animate-fade-up-3 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/early-access"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-black px-8 py-4 text-sm font-medium text-white transition-colors duration-200 hover:bg-gray-800 sm:w-auto"
            >
              {t.home.cta1} <ArrowRight size={16} />
            </Link>
            <Link
              href="/platform"
              className="w-full rounded-full border border-gray-200 bg-white px-8 py-4 text-sm font-medium text-gray-900 transition-colors duration-200 hover:bg-gray-50 sm:w-auto"
            >
              {t.home.cta2}
            </Link>
          </div>
        </div>
        <div className="animate-fade-up-4 absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2">
          <div className="h-8 w-px bg-gradient-to-b from-transparent to-gray-300" />
          <span className="text-xs uppercase tracking-widest text-gray-400">{t.common.scroll}</span>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-gray-100 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            {t.home.stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 100}>
                <div className="mb-1 text-4xl font-bold text-gray-900 md:text-5xl">
                  {stat.value}
                  {i === 2 && <span className="text-[#005CE6]">+</span>}
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-start gap-16 md:grid-cols-2">
            <AnimatedSection direction="left">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#005CE6]">{mission.label}</p>
              <h2 className="mb-8 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">{mission.headline}</h2>
              <p className="mb-8 text-lg leading-relaxed text-gray-500">{mission.body}</p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#005CE6] underline-offset-4 hover:underline"
              >
                {t.common.learnMore} <ChevronRight size={16} />
              </Link>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={150}>
              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8">
                <div className="mb-6 text-xs font-semibold uppercase tracking-widest text-gray-400">{mission.separation}</div>
                <p className="text-base leading-relaxed text-gray-600 mb-8">{mission.separationBody}</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-4 rounded-xl bg-[#005CE6] p-4 text-white">
                    <div className="text-3xl font-black">1</div>
                    <div>
                      <div className="font-semibold">Nwvania</div>
                      <div className="text-xs opacity-70">{lang === "ar" ? "للمستخدم العام — 20 قطاعاً — 220 تطبيقاً" : "For the general public — 20 sectors — 220 apps"}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 rounded-xl bg-gray-950 p-4 text-white">
                    <div className="text-3xl font-black text-gray-400">10</div>
                    <div>
                      <div className="font-semibold">{lang === "ar" ? "المنصات التشغيلية" : "Operational Platforms"}</div>
                      <div className="text-xs text-gray-500">{lang === "ar" ? "للشركاء، الأعمال، المؤسسات، الحكومات، المطورين، المواهب" : "For partners, businesses, enterprises, governments, developers, talent"}</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* THE FORMULA */}
      <section className="bg-gray-950 py-24 md:py-32 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#005CE6]">{formula.label}</p>
            <h2 className="mb-16 text-3xl font-bold md:text-5xl">{formula.headline}</h2>
          </AnimatedSection>
          <div className="grid gap-px bg-white/10 rounded-2xl overflow-hidden md:grid-cols-4">
            {formula.items.map((item, i) => (
              <AnimatedSection key={item.number} delay={i * 80}>
                <div className="bg-gray-950 p-8 h-full flex flex-col">
                  <div className="text-5xl font-black text-[#005CE6] mb-3 md:text-6xl">{item.number}</div>
                  <div className="font-semibold text-white mb-1">{item.title}</div>
                  <div className="text-xs text-gray-500 mb-4 uppercase tracking-wide">{item.sub}</div>
                  <div className="text-sm text-gray-400 leading-relaxed flex-1">{item.desc}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SECTORS PREVIEW */}
      <section className="bg-gray-50 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection>
            <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#005CE6]">{t.sectors.label}</p>
                <h2 className="text-3xl font-bold text-gray-900 md:text-5xl">
                  {t.sectors.headline1}
                  <br />
                  {t.sectors.headline2}
                </h2>
              </div>
              <Link
                href="/sectors"
                className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
              >
                {t.home.sectorsCta} <ChevronRight size={16} />
              </Link>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredSectors.map((sector, i) => (
              <AnimatedSection key={sector.id} delay={i * 70}>
                <Link
                  href={`/sectors#${sector.slug}`}
                  className="group block rounded-2xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:border-gray-200 hover:shadow-lg"
                >
                  <div className="mb-4 flex items-start justify-between">
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-bold text-white"
                      style={{ backgroundColor: sector.color }}
                    >
                      {sector.id}
                    </div>
                    <ChevronRight size={16} className="mt-0.5 text-gray-200 transition-colors group-hover:text-[#005CE6]" />
                  </div>
                  <h3 className="mb-1.5 leading-snug font-semibold text-gray-900">{sector.name}</h3>
                  <p className="line-clamp-2 text-sm text-gray-500">{sector.description}</p>
                  <div className="mt-4 text-xs font-medium text-gray-400">{sector.apps.length} {t.sectors.apps}</div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="mt-8 text-center">
            <Link
              href="/sectors"
              className="inline-flex items-center gap-2 rounded-full bg-gray-950 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-gray-800"
            >
              {t.home.sectorsCta} <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* EARLY ACCESS CTA */}
      <section className="bg-[#005CE6] py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <AnimatedSection>
            <h2 className="mb-4 text-3xl font-bold text-white md:text-5xl">{t.home.ctaTitle}</h2>
            <p className="mx-auto mb-10 max-w-xl text-lg text-[#b3ccf7]">{t.home.ctaSubtitle}</p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/early-access"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-[#005CE6] transition-colors hover:bg-gray-100 sm:w-auto"
              >
                {t.home.ctaButton} <ArrowRight size={16} />
              </Link>
              <Link
                href="/invest"
                className="w-full rounded-full border border-white/30 px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-white/10 sm:w-auto"
              >
                {t.invest.label}
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 10 OPERATIONAL PLATFORMS */}
      <section className="bg-gray-950 py-24 text-white md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#005CE6]">{t.home.platformsBadge}</p>
            <h2 className="mb-4 text-3xl font-bold md:text-5xl">
              {t.home.platformsTitle}
              <br />
              <span className="text-gray-500">{t.home.platformsSubtitle}</span>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 mt-14">
            {operationalApps.map((app, i) => (
              <AnimatedSection key={app.id} delay={i * 50}>
                <div className="rounded-xl border border-white/10 p-5 transition-all duration-200 hover:border-white/20 hover:bg-white/5 h-full">
                  <div className="mb-2 font-mono text-xs text-gray-600">{String(i + 1).padStart(2, "0")}</div>
                  <div className="text-sm font-semibold text-white mb-1">{app.name}</div>
                  <div className="text-xs mb-3" style={{ color: app.color }}>{app.targetAudience}</div>
                  <div className="text-xs text-gray-500 leading-relaxed line-clamp-3">{app.description}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="mt-10">
            <Link
              href="/ecosystem"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#005CE6] underline-offset-4 hover:underline"
            >
              {t.ecosystem.ctaTitle} <ChevronRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2">
            <AnimatedSection direction="left">
              <div className="flex h-full min-h-[260px] flex-col justify-between rounded-2xl bg-gray-950 p-10 text-white">
                <div>
                  <p className="mb-3 text-xs uppercase tracking-widest text-gray-400">{t.invest.label}</p>
                  <h3 className="mb-3 text-2xl font-bold">{t.invest.headline}</h3>
                  <p className="text-sm leading-relaxed text-gray-500">{t.invest.subtitle}</p>
                </div>
                <Link href="/invest" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#005CE6] underline-offset-4 hover:underline">
                  {t.common.learnMore} <ArrowRight size={16} />
                </Link>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={100}>
              <div className="flex h-full min-h-[260px] flex-col justify-between rounded-2xl bg-[#EEF4FF] p-10">
                <div>
                  <p className="mb-3 text-xs uppercase tracking-widest text-[#005CE6]">{t.developers.label}</p>
                  <h3 className="mb-3 text-2xl font-bold text-gray-900">{t.developers.headline1}</h3>
                  <p className="text-sm leading-relaxed text-gray-500">{t.developers.subtitle}</p>
                </div>
                <Link href="/developers" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#005CE6] underline-offset-4 hover:underline">
                  {t.developers.ctaButton} <ArrowRight size={16} />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
