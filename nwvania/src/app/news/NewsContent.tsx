"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/sections/AnimatedSection";
import { useLang } from "@/lib/i18n/LangContext";
import { newsPosts, type NewsPost } from "@/lib/data/news";

function ArticleView({ post, onBack, lang }: { post: NewsPost; onBack: () => void; lang: "en" | "ar" }) {
  const backLabel = lang === "ar" ? "العودة إلى الأخبار" : "Back to News";

  function renderBody(text: string) {
    return text.split("\n").map((line, i) => {
      if (line.startsWith("**") && line.endsWith("**")) {
        return <h3 key={i} className="text-lg font-bold text-gray-900 mt-8 mb-3">{line.replace(/\*\*/g, "")}</h3>;
      }
      if (line.startsWith("- ")) {
        return <li key={i} className="ml-5 text-gray-600 leading-relaxed list-disc">{line.slice(2)}</li>;
      }
      if (line.trim() === "") return <br key={i} />;
      return <p key={i} className="text-gray-600 leading-relaxed">{line}</p>;
    });
  }

  return (
    <div className="max-w-2xl">
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors mb-10"
      >
        <ArrowLeft size={16} />
        {backLabel}
      </button>

      <div className="flex items-center gap-3 mb-5">
        <span className="text-xs font-semibold text-[#005CE6] bg-[#EEF4FF] px-3 py-1 rounded-full">
          {post.tag[lang]}
        </span>
        <span className="text-xs text-gray-400">{post.date}</span>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-snug">
        {post.title[lang]}
      </h1>

      <div className="space-y-2 text-base leading-relaxed">
        {renderBody(post.body[lang])}
      </div>
    </div>
  );
}

export default function NewsContent() {
  const { t, lang } = useLang();
  const [selected, setSelected] = useState<NewsPost | null>(null);

  useEffect(() => {
    const scriptId = "article-jsonld";
    const existing = document.getElementById(scriptId);
    if (existing) existing.remove();

    if (selected) {
      const schema = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: selected.title[lang],
        datePublished: selected.date,
        publisher: { "@type": "Organization", name: "Nwvania" },
        inLanguage: lang,
      };
      const script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    }

    return () => {
      document.getElementById(scriptId)?.remove();
    };
  }, [selected, lang]);

  return (
    <>
      {/* HERO */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-[#EEF4FF] to-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="animate-fade-up text-xs font-semibold text-[#005CE6] uppercase tracking-widest mb-4">
            {t.news.label}
          </p>
          <h1 className="animate-fade-up-1 text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6 max-w-2xl">
            {t.news.headline}
          </h1>
          <p className="animate-fade-up-2 text-lg text-gray-500 max-w-xl leading-relaxed">
            {t.news.subtitle}
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          {selected ? (
            <ArticleView post={selected} onBack={() => setSelected(null)} lang={lang} />
          ) : (
            <div className="max-w-3xl space-y-4">
              {newsPosts.map((post, i) => (
                <AnimatedSection key={post.id} delay={i * 50}>
                  <button
                    onClick={() => setSelected(post)}
                    className="w-full text-left border border-gray-100 rounded-2xl p-7 hover:shadow-md hover:border-gray-200 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-semibold text-[#005CE6] bg-[#EEF4FF] px-3 py-1 rounded-full">
                        {post.tag[lang]}
                      </span>
                      <span className="text-xs text-gray-400">{post.date}</span>
                    </div>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h2 className="text-xl font-bold text-gray-900 mb-3 leading-snug group-hover:text-[#005CE6] transition-colors">
                          {post.title[lang]}
                        </h2>
                        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                          {post.summary[lang]}
                        </p>
                      </div>
                      <ArrowRight size={18} className="text-gray-300 group-hover:text-[#005CE6] transition-colors shrink-0 mt-1" aria-hidden="true" />
                    </div>
                  </button>
                </AnimatedSection>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
