"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { Shield, CheckCircle2, BarChart2, Megaphone } from "lucide-react";
import { useLang } from "@/lib/i18n/LangContext";

const strings = {
  en: {
    badge: "Privacy & Cookies",
    headline: "Before you continue",
    intro:
      "Nwvania LLC collects and processes personal data to operate this platform. Please review how we use each category of data below.",
    categories: [
      {
        icon: "essential",
        title: "Essential",
        desc: "Required for the site to function. Cannot be disabled.",
        always: true,
        items: ["Session state", "Language preference", "Cookie consent record"],
      },
      {
        icon: "analytics",
        title: "Analytics",
        desc: "Helps us understand how visitors use the platform (Vercel Analytics — no personal data sent).",
        always: false,
        items: ["Page views", "Referrer", "Device type"],
      },
      {
        icon: "marketing",
        title: "Marketing",
        desc: "We do not use marketing or advertising cookies. No third-party trackers.",
        always: false,
        disabled: true,
        items: ["None"],
      },
    ],
    yourRights:
      "You can withdraw consent at any time by clearing cookies. Nwvania LLC is the data controller. Details in our",
    privacyLink: "Privacy Policy",
    and: "and",
    termsLink: "Terms of Service",
    acceptLabel: "Accept All & Continue",
    declineLabel: "Essential Only",
    declinedHeadline: "Access Restricted",
    declinedText:
      "You declined data processing. Access to nwvania.com requires consent to our Privacy Policy and Terms of Service.",
    declinedSub: "Click below to review and accept.",
    reviewButton: "Review & Accept",
  },
  ar: {
    badge: "الخصوصية وملفات تعريف الارتباط",
    headline: "قبل المتابعة",
    intro:
      "تقوم Nwvania LLC بمعالجة البيانات الشخصية لتشغيل هذه المنصة. يُرجى مراجعة كيفية استخدامنا لكل فئة من البيانات أدناه.",
    categories: [
      {
        icon: "essential",
        title: "أساسية",
        desc: "مطلوبة لتشغيل الموقع. لا يمكن تعطيلها.",
        always: true,
        items: ["حالة الجلسة", "تفضيل اللغة", "سجل الموافقة على ملفات الارتباط"],
      },
      {
        icon: "analytics",
        title: "تحليلية",
        desc: "تساعدنا على فهم كيفية استخدام الزوار للمنصة (Vercel Analytics — لا تُرسَل بيانات شخصية).",
        always: false,
        items: ["مشاهدات الصفحة", "المصدر المُحيل", "نوع الجهاز"],
      },
      {
        icon: "marketing",
        title: "تسويقية",
        desc: "لا نستخدم ملفات ارتباط تسويقية أو إعلانية. لا يوجد متتبعون من أطراف ثالثة.",
        always: false,
        disabled: true,
        items: ["لا شيء"],
      },
    ],
    yourRights:
      "يمكنك سحب الموافقة في أي وقت بمسح ملفات الارتباط. Nwvania LLC هي المتحكم في البيانات. التفاصيل في",
    privacyLink: "سياسة الخصوصية",
    and: "و",
    termsLink: "شروط الخدمة",
    acceptLabel: "قبول الكل والمتابعة",
    declineLabel: "الأساسية فقط",
    declinedHeadline: "الوصول مقيَّد",
    declinedText:
      "لقد رفضت معالجة البيانات. يتطلب الوصول إلى nwvania.com موافقتك على سياسة الخصوصية وشروط الخدمة.",
    declinedSub: "انقر أدناه لمراجعة الشروط والموافقة.",
    reviewButton: "مراجعة والموافقة",
  },
};

const CategoryIcon = ({ type }: { type: string }) => {
  if (type === "analytics") return <BarChart2 className="h-4 w-4 text-blue-500" aria-hidden />;
  if (type === "marketing") return <Megaphone className="h-4 w-4 text-gray-300" aria-hidden />;
  return <CheckCircle2 className="h-4 w-4 text-green-500" aria-hidden />;
};

type Consent = "accepted" | "declined" | null;

export default function CookieBanner() {
  const { lang } = useLang();
  const s = strings[lang];
  const [consent, setConsent] = useState<Consent>(null);
  const [mounted, setMounted] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const acceptBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const stored = localStorage.getItem("nwvania-cookie-consent") as Consent | null;
    setConsent(stored);
    setMounted(true);
  }, []);

  const handleFocusTrap = useCallback((e: KeyboardEvent) => {
    if (!modalRef.current) return;
    const focusable = modalRef.current.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.key === "Escape") { e.preventDefault(); decline(); return; }
    if (e.key === "Tab") {
      if (e.shiftKey) { if (document.activeElement === first) { e.preventDefault(); last.focus(); } }
      else { if (document.activeElement === last) { e.preventDefault(); first.focus(); } }
    }
  }, []);

  useEffect(() => {
    if (!mounted || consent !== null) return;
    document.addEventListener("keydown", handleFocusTrap);
    requestAnimationFrame(() => acceptBtnRef.current?.focus());
    return () => document.removeEventListener("keydown", handleFocusTrap);
  }, [mounted, consent, handleFocusTrap]);

  function accept() {
    localStorage.setItem("nwvania-cookie-consent", "accepted");
    setConsent("accepted");
  }

  function decline() {
    localStorage.setItem("nwvania-cookie-consent", "declined");
    setConsent("declined");
  }

  function reset() {
    localStorage.removeItem("nwvania-cookie-consent");
    setConsent(null);
  }

  if (!mounted) return null;
  if (consent === "accepted") return null;

  if (consent === "declined") {
    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white px-6">
        <div className="max-w-md text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-50">
            <Shield className="h-8 w-8 text-red-500" strokeWidth={1.5} aria-hidden />
          </div>
          <h1 className="mb-4 text-2xl font-bold text-gray-900">{s.declinedHeadline}</h1>
          <p className="mb-2 text-gray-500 leading-relaxed">{s.declinedText}</p>
          <p className="mb-8 text-sm text-gray-400">{s.declinedSub}</p>
          <button
            onClick={reset}
            className="w-full rounded-full bg-[#005CE6] px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#0047B3]"
          >
            {s.reviewButton}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 px-4 backdrop-blur-sm">
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-banner-headline"
        className="w-full max-w-lg rounded-2xl bg-white p-8 shadow-2xl"
      >
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#005CE6]/20 bg-[#EEF4FF] px-3 py-1">
          <Shield className="h-3.5 w-3.5 text-[#005CE6]" aria-hidden />
          <span className="text-xs font-semibold text-[#005CE6]">{s.badge}</span>
        </div>

        <h2 id="cookie-banner-headline" className="mb-3 text-xl font-bold text-gray-900">{s.headline}</h2>
        <p className="mb-5 text-sm leading-relaxed text-gray-500">{s.intro}</p>

        {/* Cookie categories */}
        <div className="mb-5 space-y-2">
          {s.categories.map((cat) => (
            <div
              key={cat.title}
              className={`rounded-xl border p-4 ${cat.disabled ? "border-gray-100 bg-gray-50 opacity-60" : "border-gray-100 bg-gray-50"}`}
            >
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <CategoryIcon type={cat.icon} />
                  <span className="text-sm font-semibold text-gray-800">{cat.title}</span>
                </div>
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${cat.always ? "bg-green-100 text-green-700" : cat.disabled ? "bg-gray-100 text-gray-400" : "bg-blue-50 text-blue-600"}`}>
                  {cat.always ? (lang === "ar" ? "دائمًا مفعَّل" : "Always on") : cat.disabled ? (lang === "ar" ? "غير متاح" : "Not used") : (lang === "ar" ? "اختياري" : "Optional")}
                </span>
              </div>
              <p className="text-xs text-gray-500 mb-2">{cat.desc}</p>
              <ul className="flex flex-wrap gap-1">
                {cat.items.map((item) => (
                  <li key={item} className="text-xs bg-white border border-gray-100 rounded px-2 py-0.5 text-gray-500">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mb-6 text-xs leading-relaxed text-gray-400">
          {s.yourRights}{" "}
          <Link href="/privacy" className="text-[#005CE6] underline underline-offset-2">{s.privacyLink}</Link>{" "}
          {s.and}{" "}
          <Link href="/terms" className="text-[#005CE6] underline underline-offset-2">{s.termsLink}</Link>.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            ref={acceptBtnRef}
            onClick={accept}
            className="flex-1 rounded-full bg-[#005CE6] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0047B3]"
          >
            {s.acceptLabel}
          </button>
          <button
            onClick={decline}
            className="flex-1 rounded-full border border-gray-200 px-6 py-3 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50"
          >
            {s.declineLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
