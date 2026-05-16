"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { sectors } from "@/lib/data/sectors";
import AnimatedSection from "@/components/sections/AnimatedSection";
import { useLang } from "@/lib/i18n/LangContext";

export default function SectorsContent() {
  const { t } = useLang();

  return (
    <>
      {/* HERO */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-[#EEF4FF] to-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="animate-fade-up text-xs font-semibold text-[#005CE6] uppercase tracking-widest mb-4">
            {t.sectors.label}
          </p>
          <h1 className="animate-fade-up-1 text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6 max-w-2xl">
            {t.sectors.headline1}
            <br />
            {t.sectors.headline2}
          </h1>
          <p className="animate-fade-up-2 text-lg text-gray-500 leading-relaxed max-w-2xl">
            {t.sectors.subtitle}
          </p>

          {/* Count chips */}
          <div className="animate-fade-up-3 flex gap-4 mt-8 flex-wrap">
            {t.sectors.chips.map((chip) => (
              <div key={chip.label} className="bg-white border border-gray-200 rounded-full px-5 py-2 text-sm font-medium text-gray-700 shadow-sm">
                <span className="text-[#005CE6] font-bold">{chip.value}</span> {chip.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ALL 20 SECTORS */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 space-y-6">
          {sectors.map((sector, i) => (
            <AnimatedSection key={sector.id} delay={Math.min(i * 50, 400)}>
              <div
                id={sector.slug}
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md transition-shadow duration-300"
              >
                {/* Sector header */}
                <div className="flex items-start gap-5 p-7 pb-0">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-sm shrink-0"
                    style={{ backgroundColor: sector.color }}
                  >
                    {sector.id}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-xl font-bold text-gray-900 mb-1">{sector.name}</h2>
                    <p className="text-gray-500 text-sm leading-relaxed">{sector.description}</p>
                  </div>
                  <div className="shrink-0 text-xs text-gray-400 font-medium bg-gray-50 rounded-full px-3 py-1.5">
                    {sector.apps.length} {t.sectors.apps}
                  </div>
                </div>

                {/* Apps grid */}
                <div className="p-5 mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                  {sector.apps.map((app) => (
                    <div
                      key={app.id}
                      className="bg-gray-50 rounded-xl p-4 hover:bg-[#EEF4FF] transition-colors duration-200 group cursor-default"
                    >
                      <div className="text-sm font-semibold text-gray-900 mb-1 group-hover:text-[#005CE6] transition-colors">
                        {app.name}
                      </div>
                      <div className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                        {app.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </>
  );
}
