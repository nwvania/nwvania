"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { Shield } from "lucide-react";
import { useLang } from "@/lib/i18n/LangContext";

const strings = {
  en: {
    badge: "Privacy & Cookies",
    headline: "Before you continue",
    intro:
      "Nwvania LLC, the operator of this website, collects and processes personal data (including cookies and usage data) to operate the platform and improve user experience.",
    whatWeCollect: "What we collect",
    items: [
      "Essential cookies required for the site to function",
      "Usage data to understand how visitors interact with our platform",
      "Form submissions you voluntarily provide (name, email, organization)",
    ],
    yourRights:
      "You have the right to withdraw consent at any time by clearing your browser cookies. Nwvania LLC acts as the data controller. For full details, read our",
    privacyLink: "Privacy Policy",
    and: "and",
    termsLink: "Terms of Service",
    acceptLabel: "Accept & Continue",
    declineLabel: "Decline",
    declinedHeadline: "Access Restricted",
    declinedText:
      "You have declined the use of cookies and data processing. Access to nwvania.com requires your consent to our Privacy Policy and Terms of Service.",
    declinedSub:
      "If you change your mind, click the button below to review and accept.",
    reviewButton: "Review & Accept",
  },
  ar: {
    badge: "الخصوصية وملفات تعريف الارتباط",
    headline: "قبل المتابعة",
    intro:
      "تقوم شركة Nwvania LLC، المشغّلة لهذا الموقع، بجمع البيانات الشخصية ومعالجتها (بما في ذلك ملفات تعريف الارتباط وبيانات الاستخدام) لتشغيل المنصة وتحسين تجربة المستخدم.",
    whatWeCollect: "ما نجمعه",
    items: [
      "ملفات تعريف الارتباط الأساسية اللازمة لعمل الموقع",
      "بيانات الاستخدام لفهم كيفية تفاعل الزوار مع منصتنا",
      "بيانات النماذج التي تقدمها طوعاً (الاسم والبريد الإلكتروني والمؤسسة)",
    ],
    yourRights:
      "يحق لك سحب موافقتك في أي وقت بمسح ملفات تعريف الارتباط في متصفحك. تعمل Nwvania LLC بوصفها المتحكم في البيانات. لمزيد من التفاصيل، اقرأ",
    privacyLink: "سياسة الخصوصية",
    and: "و",
    termsLink: "شروط الخدمة",
    acceptLabel: "موافق والمتابعة",
    declineLabel: "رفض",
    declinedHeadline: "الوصول مقيَّد",
    declinedText:
      "لقد رفضت استخدام ملفات تعريف الارتباط ومعالجة البيانات. يتطلب الوصول إلى nwvania.com موافقتك على سياسة الخصوصية وشروط الخدمة.",
    declinedSub:
      "إذا غيّرت رأيك، انقر الزر أدناه لمراجعة الشروط والموافقة عليها.",
    reviewButton: "مراجعة والموافقة",
  },
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
    if (e.key === "Escape") {
      e.preventDefault();
      decline();
      return;
    }
    if (e.key === "Tab") {
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
  }, []);

  // Focus trap when modal is visible (consent === null)
  useEffect(() => {
    if (!mounted || consent !== null) return;
    document.addEventListener("keydown", handleFocusTrap);
    // Focus first button on open
    requestAnimationFrame(() => {
      acceptBtnRef.current?.focus();
    });
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

  // Full-screen block for declined users
  if (consent === "declined") {
    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white px-6">
        <div className="max-w-md text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-50">
            <Shield className="h-8 w-8 text-red-500" strokeWidth={1.5} aria-hidden="true" />
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

  // Consent modal (first visit or after reset)
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 px-4 backdrop-blur-sm">
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-banner-headline"
        className="w-full max-w-lg rounded-2xl bg-white p-8 shadow-2xl"
      >
        {/* Badge */}
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#005CE6]/20 bg-[#EEF4FF] px-3 py-1">
          <Shield className="h-3.5 w-3.5 text-[#005CE6]" aria-hidden="true" />
          <span className="text-xs font-semibold text-[#005CE6]">{s.badge}</span>
        </div>

        <h2 id="cookie-banner-headline" className="mb-3 text-xl font-bold text-gray-900">{s.headline}</h2>
        <p className="mb-5 text-sm leading-relaxed text-gray-500">{s.intro}</p>

        {/* What we collect */}
        <div className="mb-5 rounded-xl bg-gray-50 p-4">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-400">
            {s.whatWeCollect}
          </p>
          <ul className="space-y-2">
            {s.items.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#005CE6]" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Rights */}
        <p className="mb-6 text-xs leading-relaxed text-gray-400">
          {s.yourRights}{" "}
          <Link href="/legal" className="text-[#005CE6] underline underline-offset-2">
            {s.privacyLink}
          </Link>{" "}
          {s.and}{" "}
          <Link href="/legal" className="text-[#005CE6] underline underline-offset-2">
            {s.termsLink}
          </Link>
          .
        </p>

        {/* Actions */}
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
