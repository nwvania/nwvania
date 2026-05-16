"use client";

import { sectors } from "@/lib/data/sectors";
import AnimatedSection from "@/components/sections/AnimatedSection";
import { useLang } from "@/lib/i18n/LangContext";

const appsStrings = {
  en: {
    badge: "The Applications",
    headline2: "applications.",
    headline3: "One platform.",
    subtitle: "Every application in the Nwvania consumer platform — organized by sector. Each one is a purpose-built service addressing a specific need.",
  },
  ar: {
    badge: "التطبيقات",
    headline2: "تطبيقاً.",
    headline3: "منصة واحدة.",
    subtitle: "كل تطبيق في منصة نوفانيا للمستهلكين — منظَّم حسب القطاع. كل منها خدمة متخصصة تعالج حاجة محددة.",
  },
};

export default function AppsContent() {
  const { lang } = useLang();
  const s = appsStrings[lang];
  const totalApps = sectors.reduce((sum, sec) => sum + sec.apps.length, 0);

  return (
    <>
      {/* HERO */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-[#EEF4FF] to-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="animate-fade-up text-xs font-semibold text-[#005CE6] uppercase tracking-widest mb-4">
            {s.badge}
          </p>
          <h1 className="animate-fade-up-1 text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
            {totalApps} {s.headline2}
            <br />
            {s.headline3}
          </h1>
          <p className="animate-fade-up-2 text-lg text-gray-500 max-w-2xl leading-relaxed">
            {s.subtitle}
          </p>
        </div>
      </section>

      {/* ALL APPS */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          {sectors.map((sector, si) => (
            <AnimatedSection key={sector.id} className="mb-14" delay={si * 30}>
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm shrink-0"
                  style={{ backgroundColor: sector.color }}
                >
                  {sector.id}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{sector.name}</h2>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                {sector.apps.map((app, ai) => (
                  <div
                    key={app.id}
                    className="bg-white border border-gray-100 rounded-xl p-5 hover:border-gray-200 hover:shadow-sm transition-all duration-200"
                    style={{ animationDelay: `${ai * 30}ms` }}
                  >
                    <div
                      className="text-xs font-semibold mb-2 uppercase tracking-wide"
                      style={{ color: sector.color }}
                    >
                      {app.name}
                    </div>
                    <div className="text-xs text-gray-500 leading-relaxed">
                      {app.description}
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </>
  );
}
