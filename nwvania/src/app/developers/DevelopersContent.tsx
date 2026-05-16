"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/sections/AnimatedSection";
import { useLang } from "@/lib/i18n/LangContext";

const devFeaturesStrings = {
  en: [
    { title: "RESTful APIs", description: "Clean, versioned REST APIs with consistent naming conventions, predictable error formats, and comprehensive response schemas across all 20 sectors.", tag: "Core" },
    { title: "Sandbox Environment", description: "Full-featured testing environment with simulated data, all API endpoints active, and separate credentials — so you can build and test without affecting production.", tag: "Testing" },
    { title: "Webhooks", description: "Event-driven webhooks for real-time notifications on order status, payment events, user actions, and platform-level changes. Retry logic and delivery tracking included.", tag: "Real-time" },
    { title: "Authentication (OAuth 2.0)", description: "Industry-standard OAuth 2.0 with PKCE support. Integration with NwvaniaID enables your users to authenticate without creating new credentials.", tag: "Security" },
    { title: "SDK Libraries", description: "Official SDKs for JavaScript/TypeScript, Python, and mobile platforms. Open-source, versioned, and maintained by the Nwvania engineering team.", tag: "Tools" },
    { title: "Developer Dashboard", description: "Manage API keys, monitor usage, view logs, configure webhooks, and access billing — all from a single developer console built on Nwvania Developer.", tag: "Management" },
  ],
  ar: [
    { title: "واجهات REST", description: "واجهات REST نظيفة ومُصدَّرة باتفاقيات تسمية متسقة وتنسيقات أخطاء قابلة للتوقع وبيانات استجابة شاملة عبر كل القطاعات العشرين.", tag: "أساسي" },
    { title: "بيئة الاختبار", description: "بيئة اختبار متكاملة ببيانات محاكاة وكل نقاط API نشطة وبيانات اعتماد منفصلة — لتبني وتختبر دون التأثير على بيئة الإنتاج.", tag: "الاختبار" },
    { title: "Webhooks", description: "إشعارات فورية مدفوعة بالأحداث لحالة الطلبات وأحداث المدفوعات وإجراءات المستخدمين والتغييرات على مستوى المنصة. مع منطق إعادة المحاولة وتتبع التسليم.", tag: "فوري" },
    { title: "المصادقة (OAuth 2.0)", description: "معيار OAuth 2.0 مع دعم PKCE. التكامل مع NwvaniaID يتيح لمستخدميك المصادقة دون إنشاء بيانات اعتماد جديدة.", tag: "أمان" },
    { title: "مكتبات SDK", description: "SDKs رسمية لـ JavaScript/TypeScript وPython والمنصات المحمولة. مفتوحة المصدر ومُصدَّرة ويصونها فريق هندسة نوفانيا.", tag: "أدوات" },
    { title: "لوحة المطورين", description: "إدارة مفاتيح API ومراقبة الاستخدام وعرض السجلات وتكوين Webhooks والوصول إلى الفواتير — كل ذلك من وحدة تحكم مطوّر واحدة مبنية على Nwvania Developer.", tag: "الإدارة" },
  ],
};

const stackStrings = {
  en: [
    { name: "Next.js 14", role: "Frontend Framework" },
    { name: "Node.js", role: "Runtime" },
    { name: "PostgreSQL", role: "Primary Database" },
    { name: "Redis", role: "Caching Layer" },
    { name: "S3-Compatible", role: "Object Storage" },
    { name: "OAuth 2.0", role: "Auth Protocol" },
    { name: "REST + JSON", role: "API Format" },
    { name: "TLS 1.3", role: "Transport Security" },
  ],
  ar: [
    { name: "Next.js 14", role: "إطار الواجهة الأمامية" },
    { name: "Node.js", role: "بيئة التشغيل" },
    { name: "PostgreSQL", role: "قاعدة البيانات الرئيسية" },
    { name: "Redis", role: "طبقة التخزين المؤقت" },
    { name: "متوافق مع S3", role: "تخزين الكائنات" },
    { name: "OAuth 2.0", role: "بروتوكول المصادقة" },
    { name: "REST + JSON", role: "تنسيق API" },
    { name: "TLS 1.3", role: "أمان النقل" },
  ],
};

const heroStrings = {
  en: {
    whatYouGet: "What You Get",
    infraTitle: "Infrastructure built",
    infraTitle2: "for developers.",
    foundation: "Foundation",
    techFoundation: "The technical foundation.",
    ctaDesc: "Register for developer early access. Full API documentation and sandbox environment will be available to approved developers.",
    joinEarlyAccess: "Join Developer Early Access",
    talkToTech: "Talk to the Tech Team",
    startBuilding: "Start building.",
  },
  ar: {
    whatYouGet: "ما ستحصل عليه",
    infraTitle: "بنية تحتية مبنية",
    infraTitle2: "للمطورين.",
    foundation: "الأساس",
    techFoundation: "الأساس التقني.",
    ctaDesc: "سجّل في الوصول المبكر للمطورين. ستتوفر الوثائق الكاملة لـ API وبيئة الاختبار للمطورين المعتمدين.",
    joinEarlyAccess: "انضم للوصول المبكر للمطورين",
    talkToTech: "تحدث مع الفريق التقني",
    startBuilding: "ابدأ البناء.",
  },
};

export default function DevelopersContent() {
  const { t, lang } = useLang();
  const features = devFeaturesStrings[lang];
  const stack = stackStrings[lang];
  const s = heroStrings[lang];

  return (
    <>
      {/* HERO */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-gray-950 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="animate-fade-up text-xs font-semibold text-[#005CE6] uppercase tracking-widest mb-4">
            {t.developers.label}
          </p>
          <h1 className="animate-fade-up-1 text-5xl md:text-6xl font-bold leading-tight mb-6 max-w-3xl">
            {t.developers.headline1}
            <br />
            <span className="text-gray-400">{t.developers.headline2}</span>
          </h1>
          <p className="animate-fade-up-2 text-lg text-gray-400 max-w-2xl leading-relaxed mb-10">
            {t.developers.subtitle}
          </p>
          <div className="animate-fade-up-3 flex flex-col sm:flex-row gap-4">
            <Link
              href="/early-access"
              className="inline-flex items-center gap-2 bg-[#005CE6] text-white px-7 py-3.5 rounded-full text-sm font-medium hover:bg-[#0047B3] transition-colors"
            >
              {s.joinEarlyAccess} <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-white/20 text-white px-7 py-3.5 rounded-full text-sm font-medium hover:bg-white/10 transition-colors"
            >
              {s.talkToTech}
            </Link>
          </div>
        </div>
      </section>

      {/* DEV FEATURES */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold text-[#005CE6] uppercase tracking-widest mb-4">
              {s.whatYouGet}
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-14">
              {s.infraTitle}
              <br />
              {s.infraTitle2}
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className="border border-gray-100 rounded-2xl p-7 h-full hover:border-[#005CE6]/30 hover:shadow-sm transition-all duration-300">
                  <div className="inline-flex items-center px-3 py-1 bg-[#EEF4FF] text-[#005CE6] rounded-full text-xs font-medium mb-5">
                    {f.tag}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{f.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-24 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold text-[#005CE6] uppercase tracking-widest mb-4">
              {s.foundation}
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-12">
              {s.techFoundation}
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stack.map((item, i) => (
              <AnimatedSection key={i} delay={i * 60}>
                <div className="border border-white/10 rounded-xl p-5 hover:border-[#005CE6]/40 transition-colors">
                  <div className="text-xs text-gray-600 mb-2 font-medium uppercase tracking-wide">{item.role}</div>
                  <div className="text-white font-semibold">{item.name}</div>
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
              {s.startBuilding}
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto mb-10">
              {s.ctaDesc}
            </p>
            <Link
              href="/early-access"
              className="bg-black text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors inline-flex items-center gap-2"
            >
              {t.developers.ctaButton} <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
