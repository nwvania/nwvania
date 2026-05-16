"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/sections/AnimatedSection";
import { useLang } from "@/lib/i18n/LangContext";

const businessStrings = {
  en: {
    badge: "Nwvania Business",
    headline: "Run your business",
    headline2: "from one place.",
    subtitle: "Nwvania Business is the dedicated operational platform for small and medium businesses — from the corner restaurant to the multi-branch clinic. Everything you need to operate, manage, and grow, in a single environment.",
    register: "Register Your Business",
    talkSales: "Talk to Sales",
    builtFor: "Built for businesses across all categories:",
    featuresLabel: "Platform Features",
    featuresTitle: "Everything your business needs.",
    ctaTitle: "Your business. Inside the ecosystem.",
    ctaSubtitle: "Register Nwvania Business early access today and be among the first businesses live inside the Nwvania consumer application when we launch.",
    ctaButton: "Register Your Business",
    types: ["Restaurants & Cafes", "Retail Stores", "Medical Clinics", "Salons & Spas", "Fitness Studios", "Service Centers", "Bakeries & Food Production", "Educational Centers"],
    features: [
      { title: "Sales & Order Management", description: "Receive, track, and manage every order from a single interface. No missed orders, no manual tracking." },
      { title: "Customer Management", description: "Build and manage your customer base — contacts, history, preferences, and loyalty integration." },
      { title: "Invoicing & POS", description: "Generate professional invoices and manage point-of-sale transactions for both in-store and online orders." },
      { title: "Multi-Branch Operations", description: "Run multiple locations from one account. Each branch has its own dashboard, staff, and performance data." },
      { title: "Staff Management", description: "Add team members, assign roles, manage schedules, and track operational performance by person." },
      { title: "Business Analytics", description: "Revenue trends, customer behavior, bestselling products, and peak hours — all in real time." },
      { title: "Subscription Management", description: "Offer subscriptions to your customers for recurring services, deliveries, and memberships." },
      { title: "Offers & Promotions", description: "Create targeted promotions and discount campaigns that appear directly inside the Nwvania consumer app." },
    ],
  },
  ar: {
    badge: "نوفانيا بيزنس",
    headline: "أدِر عملك",
    headline2: "من مكان واحد.",
    subtitle: "نوفانيا بيزنس هي المنصة التشغيلية المخصصة للشركات الصغيرة والمتوسطة — من المطعم الزاوية إلى العيادة متعددة الفروع. كل ما تحتاجه للتشغيل والإدارة والنمو، في بيئة واحدة.",
    register: "سجّل نشاطك التجاري",
    talkSales: "تحدث مع المبيعات",
    builtFor: "مبنية للشركات عبر كل الفئات:",
    featuresLabel: "مزايا المنصة",
    featuresTitle: "كل ما يحتاجه عملك.",
    ctaTitle: "عملك. داخل المنظومة.",
    ctaSubtitle: "سجّل في الوصول المبكر لنوفانيا بيزنس اليوم وكن من أوائل الشركات الحية داخل تطبيق نوفانيا للمستهلكين عند الإطلاق.",
    ctaButton: "سجّل نشاطك التجاري",
    types: ["المطاعم والمقاهي", "متاجر التجزئة", "العيادات الطبية", "صالونات السبا", "صالات اللياقة", "مراكز الخدمة", "المخابز وإنتاج الأغذية", "المراكز التعليمية"],
    features: [
      { title: "إدارة المبيعات والطلبات", description: "استلّم وتتبّع وأدِر كل طلب من واجهة واحدة. لا طلبات فائتة ولا تتبع يدوي." },
      { title: "إدارة العملاء", description: "ابنِ وأدِر قاعدة عملائك — جهات الاتصال والسجل والتفضيلات وتكامل الولاء." },
      { title: "الفواتير ونقاط البيع", description: "أنشئ فواتير احترافية وأدِر معاملات نقطة البيع للطلبات داخل المتجر وعبر الإنترنت." },
      { title: "عمليات الفروع المتعددة", description: "أدِر مواقع متعددة من حساب واحد. لكل فرع لوحة تحكم وموظفون وبيانات أداء خاصة." },
      { title: "إدارة الموظفين", description: "أضف أعضاء الفريق وعيّن الأدوار وأدِر الجداول وتتبّع الأداء التشغيلي لكل شخص." },
      { title: "تحليلات الأعمال", description: "اتجاهات الإيرادات وسلوك العملاء والمنتجات الأكثر مبيعاً وأوقات الذروة — كل ذلك في الوقت الفعلي." },
      { title: "إدارة الاشتراكات", description: "قدّم اشتراكات لعملائك للخدمات المتكررة والتوصيل والعضويات." },
      { title: "العروض والترقيات", description: "أنشئ حملات ترويجية مستهدفة تظهر مباشرةً داخل تطبيق نوفانيا للمستهلكين." },
    ],
  },
};

export default function BusinessContent() {
  const { lang } = useLang();
  const s = businessStrings[lang];

  return (
    <>
      {/* HERO */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-[#EEF4FF] to-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="animate-fade-up text-xs font-semibold text-[#005CE6] uppercase tracking-widest mb-4">
            {s.badge}
          </p>
          <h1 className="animate-fade-up-1 text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6 max-w-3xl">
            {s.headline}
            <br />
            {s.headline2}
          </h1>
          <p className="animate-fade-up-2 text-lg text-gray-500 max-w-2xl leading-relaxed mb-10">
            {s.subtitle}
          </p>
          <div className="animate-fade-up-3 flex flex-col sm:flex-row gap-4">
            <Link
              href="/early-access"
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              {s.register} <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-gray-200 text-gray-700 px-8 py-4 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              {s.talkSales}
            </Link>
          </div>
        </div>
      </section>

      {/* BUSINESS TYPES */}
      <section className="py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-sm text-gray-500 mb-6">{s.builtFor}</p>
            <div className="flex flex-wrap gap-3">
              {s.types.map((type) => (
                <span key={type} className="bg-gray-50 border border-gray-100 rounded-full px-4 py-2 text-sm text-gray-700 font-medium">
                  {type}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold text-[#005CE6] uppercase tracking-widest mb-4">
              {s.featuresLabel}
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-14">
              {s.featuresTitle}
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {s.features.map((f, i) => (
              <AnimatedSection key={i} delay={i * 60}>
                <div className="border border-gray-100 rounded-2xl p-6 h-full hover:border-[#005CE6]/30 hover:shadow-sm transition-all duration-300">
                  <div className="w-8 h-8 bg-[#EEF4FF] rounded-lg flex items-center justify-center mb-5">
                    <div className="w-3 h-3 bg-[#005CE6] rounded-sm" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm">{f.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{f.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#005CE6] text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {s.ctaTitle}
            </h2>
            <p className="text-blue-200 text-lg max-w-xl mx-auto mb-10">
              {s.ctaSubtitle}
            </p>
            <Link
              href="/early-access"
              className="bg-white text-[#005CE6] font-bold px-8 py-4 rounded-full text-sm hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
            >
              {s.ctaButton} <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
