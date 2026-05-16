"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n/LangContext";

const strings = {
  en: {
    code: "404",
    headline: "Page Not Found",
    subtitle: "The page you're looking for doesn't exist or has been moved.",
    home: "Go Home",
    contact: "Contact Us",
  },
  ar: {
    code: "404",
    headline: "الصفحة غير موجودة",
    subtitle: "الصفحة التي تبحث عنها غير موجودة أو تم نقلها.",
    home: "الصفحة الرئيسية",
    contact: "تواصل معنا",
  },
};

export default function NotFound() {
  const { lang } = useLang();
  const s = strings[lang];

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="text-center max-w-lg">
        <p className="text-8xl md:text-9xl font-bold text-[#005CE6] mb-6 leading-none">
          {s.code}
        </p>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
          {s.headline}
        </h1>
        <p className="text-gray-500 leading-relaxed mb-10">{s.subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="rounded-full bg-[#005CE6] px-8 py-3 text-sm font-semibold text-white hover:bg-[#0047B3] transition-colors"
          >
            {s.home}
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-gray-200 px-8 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            {s.contact}
          </Link>
        </div>
      </div>
    </div>
  );
}
