"use client";

import { useLang } from "@/lib/i18n/LangContext";
import AnimatedSection from "@/components/sections/AnimatedSection";

const strings = {
  en: {
    label: "Legal",
    headline: "Cookie Policy",
    updated: "Last updated: May 2025",
    sections: [
      {
        title: "What Are Cookies?",
        body: "Cookies are small text files or data stored in your browser or device storage that websites use to remember information about your visit. They help us provide a functional and consistent experience.",
      },
      {
        title: "What We Use",
        body: "Nwvania uses only essential storage mechanisms necessary to operate the site. Specifically:",
        list: [
          "localStorage key nwvania-lang — stores your language preference (English or Arabic) so the site remembers your choice between visits.",
          "localStorage key nwvania-cookie-consent — stores your consent decision (accepted or declined) so we don't show the consent banner on every visit.",
        ],
        note: "No analytics cookies, no advertising trackers, and no third-party cookies are used on this site.",
      },
      {
        title: "No Third-Party Tracking",
        body: "We do not use any third-party advertising networks, social media pixels, or analytics platforms that set their own cookies. Your browsing activity on nwvania.com is not shared with or tracked by external parties.",
      },
      {
        title: "Data Retention",
        body: "Your consent preference and language preference are stored in your browser's localStorage until you manually clear them. They are not sent to our servers and exist only on your device. There is no expiry date — they persist until your browser storage is cleared.",
      },
      {
        title: "How to Withdraw Consent",
        body: "You may withdraw your consent at any time by clearing your browser's local storage for nwvania.com. To do this:",
        list: [
          "Open your browser's Developer Tools (F12 or right-click → Inspect).",
          "Navigate to the Application or Storage tab.",
          "Find Local Storage → https://nwvania.com.",
          "Delete the keys nwvania-cookie-consent and nwvania-lang.",
          "Refresh the page — the consent banner will reappear.",
        ],
        note: "Alternatively, clearing all browser data for this site will also remove these preferences.",
      },
      {
        title: "Contact",
        body: "If you have questions about our use of cookies or this policy, please contact our privacy team at privacy@nwvania.com.",
      },
    ],
  },
  ar: {
    label: "قانوني",
    headline: "سياسة ملفات تعريف الارتباط",
    updated: "آخر تحديث: مايو 2025",
    sections: [
      {
        title: "ما هي ملفات تعريف الارتباط؟",
        body: "ملفات تعريف الارتباط هي ملفات نصية صغيرة أو بيانات مخزّنة في متصفحك أو جهازك تستخدمها المواقع لتذكّر معلومات عن زيارتك. تساعدنا هذه الملفات على تقديم تجربة متسقة وعملية.",
      },
      {
        title: "ما الذي نستخدمه",
        body: "تستخدم Nwvania آليات التخزين الأساسية الضرورية فقط لتشغيل الموقع. وتحديداً:",
        list: [
          "مفتاح nwvania-lang في localStorage — يخزّن تفضيل اللغة (الإنجليزية أو العربية) حتى يتذكر الموقع اختيارك بين الزيارات.",
          "مفتاح nwvania-cookie-consent في localStorage — يخزّن قرار موافقتك (قبول أو رفض) حتى لا تظهر لك نافذة الموافقة في كل زيارة.",
        ],
        note: "لا تُستخدم ملفات تعريف ارتباط تحليلية أو تتبعية إعلانية أو من طرف ثالث على هذا الموقع.",
      },
      {
        title: "لا تتبع من طرف ثالث",
        body: "لا نستخدم أي شبكات إعلانية خارجية أو بيكسلات وسائل التواصل الاجتماعي أو منصات تحليلية تضع ملفات تعريف الارتباط الخاصة بها. لا تُشارَك أنشطة تصفحك على nwvania.com مع أطراف خارجية ولا يتتبعها أحد.",
      },
      {
        title: "مدة الاحتفاظ بالبيانات",
        body: "يُخزَّن تفضيل موافقتك وتفضيل لغتك في localStorage في متصفحك حتى تقوم بمسحهما يدوياً. لا تُرسَل إلى خوادمنا وتوجد فقط على جهازك. لا تاريخ انتهاء لهما — يبقيان حتى يتم مسح تخزين المتصفح.",
      },
      {
        title: "كيفية سحب الموافقة",
        body: "يمكنك سحب موافقتك في أي وقت بمسح التخزين المحلي للمتصفح الخاص بـ nwvania.com. للقيام بذلك:",
        list: [
          "افتح أدوات المطوّر في متصفحك (F12 أو انقر بزر الماوس الأيمن ← فحص).",
          "انتقل إلى تبويب التطبيق أو التخزين.",
          "ابحث عن Local Storage ← https://nwvania.com.",
          "احذف المفاتيح nwvania-cookie-consent و nwvania-lang.",
          "أعد تحميل الصفحة — ستظهر نافذة الموافقة مرة أخرى.",
        ],
        note: "بدلاً من ذلك، يؤدي مسح جميع بيانات المتصفح لهذا الموقع إلى إزالة هذه التفضيلات أيضاً.",
      },
      {
        title: "التواصل",
        body: "إذا كانت لديك أسئلة حول استخدامنا لملفات تعريف الارتباط أو هذه السياسة، يُرجى التواصل مع فريق الخصوصية لدينا على privacy@nwvania.com.",
      },
    ],
  },
};

export default function CookiesContent() {
  const { lang } = useLang();
  const s = strings[lang];
  const isRtl = lang === "ar";

  return (
    <>
      {/* HERO */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-[#EEF4FF] to-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="animate-fade-up text-xs font-semibold text-[#005CE6] uppercase tracking-widest mb-4">
            {s.label}
          </p>
          <h1 className="animate-fade-up-1 text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-4 max-w-2xl">
            {s.headline}
          </h1>
          <p className="animate-fade-up-2 text-sm text-gray-400">{s.updated}</p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 space-y-12" dir={isRtl ? "rtl" : "ltr"}>
          {s.sections.map((section, i) => (
            <AnimatedSection key={i} delay={i * 60}>
              <div className="border-b border-gray-100 pb-10">
                <h2 className="text-xl font-bold text-gray-900 mb-4">{section.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-3">{section.body}</p>
                {"list" in section && section.list && (
                  <ul className="space-y-2 mb-3">
                    {section.list.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#005CE6]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {"note" in section && section.note && (
                  <p className="text-sm text-[#005CE6] bg-[#EEF4FF] rounded-xl px-4 py-3 font-medium">
                    {section.note}
                  </p>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </>
  );
}
