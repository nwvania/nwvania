"use client";

import { useLang } from "@/lib/i18n/LangContext";

export default function LangToggle() {
  const { lang, setLang } = useLang();

  return (
    <button
      type="button"
      onClick={() => setLang(lang === "en" ? "ar" : "en")}
      className="flex items-center gap-1.5 rounded-full border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900"
      aria-label={lang === "en" ? "Switch to Arabic" : "التبديل إلى الإنجليزية"}
    >
      <span className="text-sm leading-none" aria-hidden>
        {lang === "en" ? "🌐" : "🌐"}
      </span>
      {lang === "en" ? "العربية" : "English"}
    </button>
  );
}
