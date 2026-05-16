"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/sections/AnimatedSection";
import { useLang } from "@/lib/i18n/LangContext";

const architectureLayers = [
  {
    number: "01",
    titleKey: "layer1Title" as const,
    subtitleKey: "layer1Subtitle" as const,
    descKey: "layer1Desc" as const,
    metricKey: "layer1Metric" as const,
    bg: "bg-[#005CE6]",
    text: "text-white",
    metricColor: "text-blue-200",
    href: "/sectors",
  },
  {
    number: "02",
    titleKey: "layer2Title" as const,
    subtitleKey: "layer2Subtitle" as const,
    descKey: "layer2Desc" as const,
    metricKey: "layer2Metric" as const,
    bg: "bg-gray-950",
    text: "text-white",
    metricColor: "text-gray-500",
    href: "/ecosystem",
  },
];

const layerStrings = {
  en: {
    layer1Title: "Nwvania",
    layer1Subtitle: "The Consumer Application",
    layer1Desc:
      "The only app designed for the general public — citizens, residents, and everyday users. Inside, users see 20 organized sectors and interact with 220 purpose-built services. The user never sees the operational complexity beneath. They see a seamless, organized experience.",
    layer1Metric: "220 Applications",
    layer2Title: "10 Operational Platforms",
    layer2Subtitle: "The Professional Layer",
    layer2Desc:
      "These are not consumer apps. They are dedicated environments for each professional role within the Nwvania ecosystem: businesses, freelancers, enterprises, governments, developers, logistics operators, content creators, and talent. Each platform is purpose-built for its user's actual operational needs.",
    layer2Metric: "10 Platforms",
    explore: "Explore",
  },
  ar: {
    layer1Title: "نوفانيا",
    layer1Subtitle: "تطبيق المستهلك",
    layer1Desc:
      "التطبيق الوحيد المصمّم للجمهور العام — المواطنون والمقيمون ومستخدمو الحياة اليومية. بداخله يرى المستخدمون 20 قطاعاً منظّماً ويتفاعلون مع 220 خدمة متخصصة. لا يرى المستخدم التعقيد التشغيلي في الخلفية. يرى تجربة سلسة ومنظّمة.",
    layer1Metric: "220 تطبيقاً",
    layer2Title: "10 منصات تشغيلية",
    layer2Subtitle: "الطبقة المهنية",
    layer2Desc:
      "هذه ليست تطبيقات مستهلكين. بل بيئات مخصصة لكل دور مهني ضمن منظومة نوفانيا: الشركات والمستقلون والمؤسسات والحكومات والمطورون ومشغّلو الخدمات اللوجستية وصانعو المحتوى والكفاءات. كل منصة مبنية لتلبية الاحتياجات التشغيلية الفعلية لمستخدمها.",
    layer2Metric: "10 منصات",
    explore: "استكشف",
  },
};

const principleStrings = {
  en: [
    {
      title: "Role Separation",
      description:
        "Every type of user — individual, business, government, developer — has a separate, purpose-built environment. There is no overlap, no confusion.",
    },
    {
      title: "Single Identity",
      description:
        "NwvaniaID serves as the universal authentication system across all platforms. One identity, one verification, unlimited access.",
    },
    {
      title: "Modular Architecture",
      description:
        "Each of the 220 applications operates as an independent module, allowing for isolated updates, maintenance, and scaling without affecting the rest.",
    },
    {
      title: "API-First Infrastructure",
      description:
        "Every service within Nwvania exposes clean APIs, enabling deep integration between internal platforms and external partners.",
    },
    {
      title: "Progressive Rollout",
      description:
        "Nwvania is built to expand sector by sector, region by region — without requiring a complete rebuild. The architecture supports indefinite scale.",
    },
    {
      title: "Security at Every Layer",
      description:
        "End-to-end encryption, zero-trust architecture, and sovereign data storage principles are built into the infrastructure, not applied on top of it.",
    },
  ],
  ar: [
    {
      title: "فصل الأدوار",
      description:
        "لكل نوع من المستخدمين — فرد، شركة، حكومة، مطوّر — بيئة منفصلة ومبنية لغرضه. لا تداخل، لا لبس.",
    },
    {
      title: "هوية موحّدة",
      description:
        "تُشكّل NwvaniaID نظام المصادقة الشامل عبر كل المنصات. هوية واحدة، تحقق واحد، وصول غير محدود.",
    },
    {
      title: "بنية معيارية",
      description:
        "كل من 220 تطبيقاً يعمل كوحدة مستقلة، مما يتيح تحديثات وصيانة وتوسعاً معزولاً دون التأثير على بقية النظام.",
    },
    {
      title: "بنية تحتية API أولاً",
      description:
        "كل خدمة داخل نوفانيا تعرض واجهات برمجة نظيفة، مما يتيح تكاملاً عميقاً بين المنصات الداخلية والشركاء الخارجيين.",
    },
    {
      title: "طرح تدريجي",
      description:
        "بُنيت نوفانيا للتوسع قطاعاً تلو قطاع ومنطقة تلو أخرى — دون الحاجة لإعادة بناء كاملة. البنية تدعم التوسع اللامحدود.",
    },
    {
      title: "الأمان في كل طبقة",
      description:
        "التشفير الشامل والبنية المعتمدة على عدم الثقة ومبادئ تخزين البيانات السيادية مبنية في البنية التحتية لا مُضافة فوقها.",
    },
  ],
};

export default function PlatformContent() {
  const { t, lang } = useLang();
  const ls = layerStrings[lang];
  const principles = principleStrings[lang];

  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-b from-[#EEF4FF] to-white pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="animate-fade-up mb-4 text-xs font-semibold uppercase tracking-widest text-[#005CE6]">
              {t.platform.architectureLabel}
            </p>
            <h1 className="animate-fade-up-1 mb-6 text-5xl leading-tight font-bold text-gray-900 md:text-6xl">
              {t.platform.ctaTitle}
            </h1>
            <p className="animate-fade-up-2 text-lg leading-relaxed text-gray-500">
              {t.platform.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* THE TWO LAYERS */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {architectureLayers.map((layer, i) => (
              <AnimatedSection
                key={layer.number}
                delay={i * 120}
                direction={i === 0 ? "left" : "right"}
              >
                <div
                  className={`${layer.bg} ${layer.text} flex h-full min-h-[360px] flex-col rounded-2xl p-10`}
                >
                  <div className="mb-6 font-mono text-sm opacity-40">
                    {layer.number}
                  </div>
                  <h2 className="mb-1 text-3xl font-bold">{ls[layer.titleKey]}</h2>
                  <p className="mb-5 text-sm font-medium uppercase tracking-wide opacity-50">
                    {ls[layer.subtitleKey]}
                  </p>
                  <p className="flex-1 text-sm leading-relaxed opacity-70">
                    {ls[layer.descKey]}
                  </p>
                  <div className="mt-8 flex items-center justify-between">
                    <span className={`text-2xl font-bold ${layer.metricColor}`}>
                      {ls[layer.metricKey]}
                    </span>
                    <Link
                      href={layer.href}
                      className="inline-flex items-center gap-1 text-sm font-medium opacity-60 transition-opacity hover:opacity-100"
                    >
                      {ls.explore} <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#005CE6]">
              {t.platform.infrastructureLabel}
            </p>
            <h2 className="mb-14 text-3xl font-bold text-gray-900 md:text-5xl">
              {t.platform.infrastructureTitle}
            </h2>
          </AnimatedSection>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {principles.map((principle, i) => (
              <AnimatedSection key={principle.title} delay={i * 80}>
                <div className="h-full rounded-xl border border-gray-100 bg-white p-6">
                  <div className="mb-4 font-mono text-xs font-semibold text-[#005CE6]">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    {principle.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-500">
                    {principle.description}
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
              {t.sectors.headline1}
              <br />
              {t.sectors.headline2}
            </h2>
            <p className="mx-auto mb-10 max-w-xl text-lg text-gray-500">
              {t.platform.ctaSubtitle}
            </p>
            <Link
              href="/sectors"
              className="inline-flex items-center gap-2 rounded-full bg-black px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-gray-800"
            >
              {t.platform.ctaSectors} <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
