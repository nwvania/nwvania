"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/sections/AnimatedSection";
import { useLang } from "@/lib/i18n/LangContext";

const strings = {
  en: {
    label: "Leadership",
    headline: "The team behind",
    headline2: "Nwvania.",
    subtitle: "Nwvania is built by a focused founding team with a clear mission: create the infrastructure for the next generation of digital life.",
    founderRole: "Founder, Owner & CEO",
    founderBio: "Barazan conceived and built Nwvania from the ground up — designing the full platform architecture across 20 sectors, 220 applications, and 10 operational platforms. His vision is to create a single, trusted digital infrastructure that serves citizens, businesses, and institutions within one interconnected system.",
    focusLabel: "Areas of focus",
    focus: ["Platform Architecture", "Ecosystem Strategy", "Institutional Relations", "Product Vision"],
    entityNote: "Nwvania is organized as",
    entityNote2: "a Wyoming LLC.",
    ctaLabel: "Want to work with us?",
    ctaText: "We're building the infrastructure for the digital economy. If you share the vision, reach out.",
    ctaButton: "View open positions",
    ctaContact: "Get in touch",
  },
  ar: {
    label: "القيادة",
    headline: "الفريق خلف",
    headline2: "نوفانيا.",
    subtitle: "تُبنى نوفانيا من قِبل فريق تأسيسي مُركَّز برؤية واضحة: إنشاء البنية التحتية للجيل القادم من الحياة الرقمية.",
    founderRole: "المؤسس والمالك والمدير التنفيذي",
    founderBio: "ابتكر برازان نوفانيا وبناها من الصفر — مصمِّماً البنية الكاملة للمنصة عبر 20 قطاعاً و220 تطبيقاً و10 منصات تشغيلية. رؤيته هي إنشاء بنية تحتية رقمية موثوقة وموحّدة تخدم المواطنين والشركات والمؤسسات ضمن نظام واحد متكامل.",
    focusLabel: "مجالات التركيز",
    focus: ["بنية المنصة", "استراتيجية المنظومة", "العلاقات المؤسسية", "رؤية المنتج"],
    entityNote: "نوفانيا مُنظَّمة كـ",
    entityNote2: "شركة ذات مسؤولية محدودة في ولاية وايومنغ.",
    ctaLabel: "تريد العمل معنا؟",
    ctaText: "نبني البنية التحتية للاقتصاد الرقمي. إذا كنت تشارك الرؤية، تواصل معنا.",
    ctaButton: "عرض الوظائف المفتوحة",
    ctaContact: "تواصل معنا",
  },
};

export default function TeamContent() {
  const { lang } = useLang();
  const s = strings[lang];

  return (
    <>
      {/* HERO */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-[#EEF4FF] to-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="animate-fade-up text-xs font-semibold text-[#005CE6] uppercase tracking-widest mb-4">
            {s.label}
          </p>
          <h1 className="animate-fade-up-1 text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6 max-w-2xl">
            {s.headline}
            <br />
            <span className="text-[#005CE6]">{s.headline2}</span>
          </h1>
          <p className="animate-fade-up-2 text-lg text-gray-500 max-w-xl leading-relaxed">
            {s.subtitle}
          </p>
        </div>
      </section>

      {/* FOUNDER CARD */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="max-w-3xl">
              <div className="rounded-2xl border border-gray-100 bg-white p-10 shadow-sm">
                {/* Avatar */}
                <div className="flex items-start gap-6 mb-8">
                  <div className="w-20 h-20 rounded-2xl bg-[#005CE6] flex items-center justify-center shrink-0">
                    <span className="text-3xl font-bold text-white">B</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-1">Barazan Saber Mohammed</h2>
                    <p className="text-[#005CE6] font-medium text-sm">{s.founderRole}</p>
                    <p className="text-gray-400 text-xs mt-1">Nwvania LLC · Wyoming, United States</p>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-gray-600 leading-relaxed mb-8">
                  {s.founderBio}
                </p>

                {/* Focus areas */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
                    {s.focusLabel}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {s.focus.map((area) => (
                      <span
                        key={area}
                        className="bg-[#EEF4FF] text-[#005CE6] text-xs font-medium px-3 py-1.5 rounded-full"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Entity note */}
              <p className="mt-4 text-sm text-gray-400 px-2">
                {s.entityNote}{" "}
                <Link href="/trust" className="text-[#005CE6] hover:underline underline-offset-2">
                  {s.entityNote2}
                </Link>
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold mb-4">{s.ctaLabel}</h2>
              <p className="text-gray-500 mb-8 leading-relaxed">{s.ctaText}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/careers"
                  className="inline-flex items-center gap-2 bg-[#005CE6] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#0047B3] transition-colors"
                >
                  {s.ctaButton} <ArrowRight size={16} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border border-white/20 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-white/10 transition-colors"
                >
                  {s.ctaContact}
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
