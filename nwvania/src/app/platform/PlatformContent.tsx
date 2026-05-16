"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/sections/AnimatedSection";
import { useLang } from "@/lib/i18n/LangContext";

const strings = {
  en: {
    badge: "Platform Architecture",
    headline: "Two layers. One ecosystem. Zero confusion.",
    subtitle: "Nwvania separates the general public experience from the professional and operational layer with surgical precision. Every role has its environment. Every environment has its purpose.",
    categoryBadge: "The Two Categories",
    cat1Number: "Category 1",
    cat1Title: "Nwvania",
    cat1Sub: "The one and only consumer application",
    cat1Desc: "Designed exclusively for citizens and residents — the everyday user. Inside, there are no operational panels, no business dashboards, no administrative complexity. Users see 20 organized sectors and interact with 220 purpose-built services. The user never sees what powers it. They see a seamless, intuitive experience.",
    cat1Metric: "1 app · 20 sectors · 220 services",
    cat2Number: "Category 2",
    cat2Title: "10 Operational Platforms",
    cat2Sub: "Professional, institutional & operational environments",
    cat2Desc: "These are not consumer apps. They are dedicated environments for partners, business owners, enterprises, governments, internal teams, and the talent that builds with Nwvania. Each platform is purpose-built for its specific role — not accessible to the general public, not intended for everyday use.",
    cat2Metric: "10 platforms · Role-separated · Invite-only",
    opsTitle: "The 10 Operational Platforms",
    opsSubtitle: "Each platform serves a distinct professional role within the Nwvania ecosystem.",
    apps: [
      { name: "Nwvania Business", audience: "SME Owners · Merchants · Restaurants · Clinics", desc: "For small and medium businesses, stores, restaurants, clinics, and commercial services operating independently. Manages sales, orders, customers, invoices, subscriptions, branches, employees, and promotions.", features: ["Sales & Orders", "Customer Management", "Invoicing & POS", "Branch Management", "Staff Operations", "Subscription Billing"] },
      { name: "Nwvania Partner", audience: "Freelancers · Independent Service Providers", desc: "For freelancers and independent service providers who work for their own account — not operationally affiliated with Nwvania. Manages professional profile, service listing, order reception, earnings, and independent activity.", features: ["Professional Profile", "Service Listing", "Order Reception", "Earnings Dashboard", "Ratings & Reviews", "Schedule Management"] },
      { name: "Nwvania Enterprise", audience: "Large Corporations · Multi-Branch Organizations", desc: "For large multi-department private corporations and institutions. Manages branches, permissions, internal operations, integrations, and complex institutional services across multiple divisions.", features: ["Branch Management", "Role Permissions", "Internal Operations", "API Integrations", "Workforce Management", "Custom Workflows"] },
      { name: "Nwvania Gov", audience: "Ministries · Municipalities · Government Bodies", desc: "For government entities, ministries, departments, municipalities, and official institutions. Manages transactions, procedures, approvals, institutional connectivity, and government operations.", features: ["Transaction Management", "Approval Workflows", "Institutional Connectivity", "Public Services Portal", "Compliance Tracking", "Audit Trails"] },
      { name: "Nwvania Admin", audience: "Nwvania Internal Leadership", desc: "The command center for senior management of the entire Nwvania ecosystem. Controls governance, global policies, permissions, general architecture, and high-level strategic decisions.", features: ["Platform Governance", "Policy Management", "Global Permissions", "System Architecture", "Performance Oversight", "Strategic Reporting"] },
      { name: "Nwvania Oversight", audience: "Quality · Compliance · Field Inspection Teams", desc: "Operational, field, quality, and inspection control for all activities within the ecosystem. Reviews businesses, institutions, employees, violations, reports, complaints, and execution quality.", features: ["Business Auditing", "Violation Management", "Complaint Resolution", "Quality Reports", "Field Monitoring", "Real-time Alerts"] },
      { name: "Nwvania Developer", audience: "Developers · Tech Companies · Integration Partners", desc: "For software developers, technology companies, and integration partners building on or connecting with the Nwvania ecosystem. Manages APIs, sandbox environments, deployments, documentation, and integrations.", features: ["Full API Access", "Sandbox Environments", "Deployment Tools", "Technical Documentation", "Webhook Management", "Integration Testing"] },
      { name: "Nwvania Mobility", audience: "Drivers · Couriers · Logistics Operators", desc: "For transport and logistics workers operating exclusively under Nwvania. Covers drivers, couriers, shipping companies, delivery, fleets, and field operations.", features: ["Driver Application", "Courier Management", "Fleet Operations", "Real-time Tracking", "Earnings Management", "Route Optimization"] },
      { name: "Nwvania Studio", audience: "Content Creators · Media Professionals · Artists", desc: "For content creators, journalists, artists, and producers working exclusively for the Nwvania content ecosystem. Covers educational, entertainment, scientific, news, artistic, audio, visual, and narrative content.", features: ["Content Publishing", "Video & Audio Production", "Distribution Tools", "Audience Analytics", "Monetization", "Rights Management"] },
      { name: "Nwvania Talent", audience: "Professionals · Graduates · Innovators", desc: "For skilled professionals, degree holders, idea creators, and inventors seeking opportunities with Nwvania. Used for recruitment, incubation, adoption, support, and talent acquisition.", features: ["Talent Profile", "Job Matching", "Incubation Programs", "Mentorship Access", "Project Collaboration", "Skills Verification"] },
    ],
    principlesBadge: "Infrastructure Principles",
    principlesTitle: "What makes this possible at scale.",
    principles: [
      { title: "Role Separation", desc: "Every user type — individual, business, government, developer — has a separate, purpose-built environment. No overlap. No confusion. No shared complexity." },
      { title: "Single Identity", desc: "NwvaniaID is the universal authentication layer across all 11 platforms. One identity. One verification. Access to everything you are authorized for." },
      { title: "Modular Architecture", desc: "Each of the 220 applications operates as an independent module — isolated updates, independent scaling, and zero cross-contamination of failures." },
      { title: "API-First Infrastructure", desc: "Every service exposes clean, versioned APIs. Deep integration between internal platforms and external partners happens by design, not by workaround." },
      { title: "Progressive Rollout", desc: "Built to expand sector by sector, region by region — without a complete rebuild. The architecture supports indefinite scale through modular deployment." },
      { title: "Security at Every Layer", desc: "End-to-end encryption, zero-trust architecture, and sovereign data storage are built into the infrastructure — not applied on top of it as an afterthought." },
    ],
    ctaTitle: "20 Sectors. 220 Applications.",
    ctaSubtitle: "Explore the complete consumer platform — every sector and every application in the Nwvania ecosystem.",
    ctaSectors: "Explore All Sectors",
  },
  ar: {
    badge: "بنية المنصة",
    headline: "طبقتان. منظومة واحدة. بلا لبس.",
    subtitle: "تفصل نوفانيا تجربة الجمهور العام عن الطبقة المهنية والتشغيلية بدقة جراحية. لكل دور بيئته. لكل بيئة غرضها.",
    categoryBadge: "الفئتان",
    cat1Number: "الفئة الأولى",
    cat1Title: "نوفانيا",
    cat1Sub: "التطبيق الاستهلاكي الوحيد",
    cat1Desc: "مصمم حصراً للمواطنين والمقيمين — المستخدم اليومي. بداخله لا توجد لوحات تشغيل ولا لوحات أعمال ولا تعقيد إداري. يرى المستخدمون 20 قطاعاً منظماً ويتفاعلون مع 220 خدمة متخصصة. لا يرى المستخدم ما يُشغّله. يرى تجربة سلسة وبديهية.",
    cat1Metric: "تطبيق واحد · 20 قطاعاً · 220 خدمة",
    cat2Number: "الفئة الثانية",
    cat2Title: "10 منصات تشغيلية",
    cat2Sub: "بيئات مهنية ومؤسسية وتشغيلية",
    cat2Desc: "هذه ليست تطبيقات مستهلكين. بل بيئات مخصصة للشركاء وأصحاب الأعمال والشركات والحكومات والفرق الداخلية والمواهب التي تبني مع نوفانيا. كل منصة مبنية لدورها المحدد — غير متاحة للعموم — غير مخصصة للاستخدام اليومي.",
    cat2Metric: "10 منصات · فصل الأدوار · بدعوة فقط",
    opsTitle: "المنصات التشغيلية العشر",
    opsSubtitle: "كل منصة تخدم دوراً مهنياً مميزاً داخل منظومة نوفانيا.",
    apps: [
      { name: "Nwvania Business", audience: "أصحاب المشاريع الصغيرة والمتوسطة · التجار · المطاعم · العيادات", desc: "لأصحاب الأعمال الصغيرة والمتوسطة والمتاجر والمطاعم والعيادات والخدمات التجارية التي تعمل لصالحها الخاص. يدير المبيعات والطلبات والعملاء والفواتير والاشتراكات والفروع والموظفين والعروض.", features: ["المبيعات والطلبات", "إدارة العملاء", "الفواتير ونقاط البيع", "إدارة الفروع", "عمليات الموظفين", "فوترة الاشتراكات"] },
      { name: "Nwvania Partner", audience: "المستقلون · مقدمو الخدمات المستقلون", desc: "لأصحاب الأعمال الحرة ومقدمي الخدمات المستقلين الذين يعملون لصالحهم الشخصي وليسوا تابعين تشغيلياً لنوفانيا. يدير الملف المهني وعرض الخدمة واستقبال الطلبات والأرباح والنشاط الحر.", features: ["الملف المهني", "قائمة الخدمات", "استقبال الطلبات", "لوحة الأرباح", "التقييمات والمراجعات", "إدارة الجدول"] },
      { name: "Nwvania Enterprise", audience: "الشركات الكبرى · المنظمات متعددة الفروع", desc: "للشركات الكبرى والمؤسسات الخاصة الكبيرة متعددة الإدارات. يدير الفروع والصلاحيات والعمليات الداخلية والتكاملات والخدمات المؤسسية المعقدة.", features: ["إدارة الفروع", "صلاحيات الأدوار", "العمليات الداخلية", "تكاملات API", "إدارة القوى العاملة", "سير العمل المخصصة"] },
      { name: "Nwvania Gov", audience: "الوزارات · البلديات · الجهات الحكومية", desc: "للجهات الحكومية والوزارات والدوائر والبلديات والمؤسسات الرسمية. يدير المعاملات والإجراءات والموافقات والربط المؤسسي والعمليات الحكومية.", features: ["إدارة المعاملات", "سير الموافقات", "الربط المؤسسي", "بوابة الخدمات العامة", "تتبع الامتثال", "مسارات التدقيق"] },
      { name: "Nwvania Admin", audience: "القيادة الداخلية لنوفانيا", desc: "مركز القيادة للإدارة العليا لمنظومة نوفانيا بأكملها. يتحكم في الحوكمة والسياسات العالمية والصلاحيات والبنية العامة والقرارات الاستراتيجية العليا.", features: ["حوكمة المنصة", "إدارة السياسات", "الصلاحيات العالمية", "بنية النظام", "مراقبة الأداء", "التقارير الاستراتيجية"] },
      { name: "Nwvania Oversight", audience: "الجودة · الامتثال · فرق التفتيش الميداني", desc: "للرقابة التشغيلية والميدانية والجودة والتفتيش. يراجع الأعمال والمؤسسات والموظفين والمخالفات والبلاغات والشكاوى وجودة التنفيذ.", features: ["تدقيق الأعمال", "إدارة المخالفات", "حل الشكاوى", "تقارير الجودة", "المراقبة الميدانية", "تنبيهات فورية"] },
      { name: "Nwvania Developer", audience: "المطورون · شركات التقنية · شركاء التكامل", desc: "للمطورين وشركات البرمجيات وشركاء التكامل التقني. يدير APIs والبيئات التجريبية والنشر والوثائق والتكاملات مع منظومة نوفانيا.", features: ["وصول كامل للـ API", "بيئات تجريبية", "أدوات النشر", "التوثيق التقني", "إدارة Webhook", "اختبار التكامل"] },
      { name: "Nwvania Mobility", audience: "السائقون · المندوبون · مشغّلو الخدمات اللوجستية", desc: "للعاملين في النقل والحركة واللوجستيات تحت تشغيل نوفانيا فقط. يشمل السائقين والمندوبين وشركات الشحن والتوصيل والأساطيل والتشغيل الميداني.", features: ["تطبيق السائق", "إدارة المندوبين", "عمليات الأسطول", "التتبع الفوري", "إدارة الأرباح", "تحسين المسار"] },
      { name: "Nwvania Studio", audience: "صنّاع المحتوى · الإعلاميون · الفنانون", desc: "لصناع المحتوى والمبدعين والإعلاميين والفنانين والمنتجين الذين يعملون لصالح نوفانيا فقط. يشمل المحتوى التعليمي والترفيهي والعلمي والإخباري والفني والصوتي والمرئي.", features: ["نشر المحتوى", "إنتاج الفيديو والصوت", "أدوات التوزيع", "تحليلات الجمهور", "تحقيق الدخل", "إدارة الحقوق"] },
      { name: "Nwvania Talent", audience: "المهنيون · الخريجون · المبتكرون", desc: "للمواهب والمحترفين وأصحاب الشهادات والأفكار والمشاريع والاختراعات الباحثين عن فرصة مع نوفانيا. يستخدم للتوظيف والاحتضان والتبني والدعم واستقطاب الكفاءات.", features: ["ملف المواهب", "مطابقة الوظائف", "برامج الحاضنات", "الوصول للإرشاد", "التعاون في المشاريع", "التحقق من المهارات"] },
    ],
    principlesBadge: "مبادئ البنية التحتية",
    principlesTitle: "ما الذي يجعل هذا ممكناً على نطاق واسع.",
    principles: [
      { title: "فصل الأدوار", desc: "لكل نوع من المستخدمين — فرد، شركة، حكومة، مطوّر — بيئة منفصلة ومبنية لغرضه. لا تداخل. لا لبس. لا تعقيد مشترك." },
      { title: "هوية موحدة", desc: "NwvaniaID هي طبقة المصادقة الشاملة عبر جميع المنصات الـ11. هوية واحدة. تحقق واحد. وصول لكل ما أنت مخوَّل به." },
      { title: "بنية معيارية", desc: "كل من 220 تطبيقاً يعمل كوحدة مستقلة — تحديثات معزولة، تحجيم مستقل، وصفر تلوث متقاطع للأعطال." },
      { title: "بنية تحتية API أولاً", desc: "كل خدمة تعرض واجهات برمجة نظيفة ومعتمدة. التكامل العميق بين المنصات الداخلية والشركاء الخارجيين يحدث بالتصميم لا بالحيلة." },
      { title: "طرح تدريجي", desc: "مبنية للتوسع قطاعاً تلو قطاع ومنطقة تلو أخرى — دون إعادة بناء كاملة. البنية تدعم التوسع اللامحدود عبر النشر المعياري." },
      { title: "الأمان في كل طبقة", desc: "التشفير الشامل والبنية المعتمدة على عدم الثقة وتخزين البيانات السيادي مبنية في البنية التحتية — ليست إضافات تُطبَّق فوقها." },
    ],
    ctaTitle: "20 قطاعاً. 220 تطبيقاً.",
    ctaSubtitle: "استكشف منصة المستهلك الكاملة — كل قطاع وكل تطبيق في منظومة نوفانيا.",
    ctaSectors: "استكشف جميع القطاعات",
  },
};

const colors = ["#005CE6","#059669","#7C3AED","#DC2626","#1F2937","#EA580C","#0891B2","#B45309","#9333EA","#DB2777"];

export default function PlatformContent() {
  const { lang } = useLang();
  const s = strings[lang];

  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-b from-[#EEF4FF] to-white pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6 max-w-3xl">
          <p className="animate-fade-up mb-4 text-xs font-semibold uppercase tracking-widest text-[#005CE6]">{s.badge}</p>
          <h1 className="animate-fade-up-1 mb-6 text-5xl leading-tight font-bold text-gray-900 md:text-6xl">{s.headline}</h1>
          <p className="animate-fade-up-2 text-lg leading-relaxed text-gray-500 max-w-2xl">{s.subtitle}</p>
        </div>
      </section>

      {/* TWO CATEGORIES */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#005CE6]">{s.categoryBadge}</p>
            <h2 className="mb-14 text-3xl font-bold text-gray-900 md:text-5xl">
              {lang === "ar" ? "فئتان. واضحتان. لا ثالث لهما." : "Two categories. Clearly defined. No middle ground."}
            </h2>
          </AnimatedSection>
          <div className="grid gap-6 md:grid-cols-2">
            <AnimatedSection direction="left">
              <div className="bg-[#005CE6] text-white flex h-full min-h-[380px] flex-col rounded-2xl p-10">
                <div className="mb-2 font-mono text-xs opacity-40">{s.cat1Number}</div>
                <h2 className="mb-1 text-4xl font-bold">{s.cat1Title}</h2>
                <p className="mb-6 text-sm font-medium uppercase tracking-wide opacity-50">{s.cat1Sub}</p>
                <p className="flex-1 text-sm leading-relaxed opacity-80">{s.cat1Desc}</p>
                <div className="mt-8 text-lg font-bold text-blue-200">{s.cat1Metric}</div>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={120}>
              <div className="bg-gray-950 text-white flex h-full min-h-[380px] flex-col rounded-2xl p-10">
                <div className="mb-2 font-mono text-xs opacity-40">{s.cat2Number}</div>
                <h2 className="mb-1 text-3xl font-bold">{s.cat2Title}</h2>
                <p className="mb-6 text-sm font-medium uppercase tracking-wide opacity-40">{s.cat2Sub}</p>
                <p className="flex-1 text-sm leading-relaxed opacity-70">{s.cat2Desc}</p>
                <div className="mt-8 text-sm font-bold text-gray-500">{s.cat2Metric}</div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 10 OPS PLATFORMS */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#005CE6]">{lang === "ar" ? "التشغيل المهني" : "Professional Operations"}</p>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-5xl">{s.opsTitle}</h2>
            <p className="mb-14 text-lg text-gray-500 max-w-2xl">{s.opsSubtitle}</p>
          </AnimatedSection>
          <div className="grid gap-5 md:grid-cols-2">
            {s.apps.map((app, i) => (
              <AnimatedSection key={app.name} delay={i * 60}>
                <div className="bg-white rounded-2xl border border-gray-100 p-8 h-full hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-10 h-10 rounded-xl shrink-0 flex items-center justify-center text-white text-xs font-bold" style={{ backgroundColor: colors[i] }}>
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">{app.name}</h3>
                      <p className="text-xs mt-0.5" style={{ color: colors[i] }}>{app.audience}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed mb-5">{app.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {app.features.map((f) => (
                      <span key={f} className="text-xs px-2.5 py-1 rounded-full bg-gray-50 border border-gray-100 text-gray-600">{f}</span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#005CE6]">{s.principlesBadge}</p>
            <h2 className="mb-14 text-3xl font-bold text-gray-900 md:text-5xl">{s.principlesTitle}</h2>
          </AnimatedSection>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {s.principles.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 80}>
                <div className="h-full rounded-xl border border-gray-100 bg-white p-6">
                  <div className="mb-4 font-mono text-xs font-semibold text-[#005CE6]">{String(i + 1).padStart(2, "0")}</div>
                  <h3 className="mb-3 font-semibold text-gray-900">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-500">{p.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-950 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <AnimatedSection>
            <h2 className="mb-6 text-3xl font-bold md:text-5xl">{s.ctaTitle}</h2>
            <p className="mx-auto mb-10 max-w-xl text-lg text-gray-500">{s.ctaSubtitle}</p>
            <Link href="/sectors" className="inline-flex items-center gap-2 rounded-full bg-[#005CE6] px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-[#0047B3]">
              {s.ctaSectors} <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
