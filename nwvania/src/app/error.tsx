"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";

const strings = {
  en: {
    headline: "Something went wrong",
    subtitle:
      "An unexpected error occurred. You can try again or return to the home page.",
    retry: "Try Again",
    home: "Go Home",
  },
  ar: {
    headline: "حدث خطأ ما",
    subtitle:
      "حدث خطأ غير متوقع. يمكنك المحاولة مرة أخرى أو العودة إلى الصفحة الرئيسية.",
    retry: "حاول مرة أخرى",
    home: "الصفحة الرئيسية",
  },
};

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const [lang, setLang] = useState<"en" | "ar">("en");

  useEffect(() => {
    if (
      typeof document !== "undefined" &&
      document.documentElement.lang === "ar"
    ) {
      setLang("ar");
    }
    // Log for debugging purposes
    console.error(error);
  }, [error]);

  const s = strings[lang];

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="text-center max-w-lg">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-50">
          <AlertTriangle className="h-10 w-10 text-red-500" strokeWidth={1.5} aria-hidden="true" />
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
          {s.headline}
        </h1>
        <p className="text-gray-500 leading-relaxed mb-10">{s.subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="rounded-full bg-[#005CE6] px-8 py-3 text-sm font-semibold text-white hover:bg-[#0047B3] transition-colors"
          >
            {s.retry}
          </button>
          <Link
            href="/"
            className="rounded-full border border-gray-200 px-8 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            {s.home}
          </Link>
        </div>
      </div>
    </div>
  );
}
