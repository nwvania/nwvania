"use client";

import Link from "next/link";
import { ArrowRight, ExternalLink, FileCheck, Lock, Shield, BadgeCheck, Building } from "lucide-react";
import AnimatedSection from "@/components/sections/AnimatedSection";
import CompanyTrustStrip from "@/components/sections/CompanyTrustStrip";
import FormationCertificate from "@/components/sections/FormationCertificate";
import { COMPANY } from "@/lib/company";
import { useLang } from "@/lib/i18n/LangContext";

const irsRecords = [
  {
    labelKey: "einStatus" as const,
    value: `${COMPANY.irs.einStatus} — ${COMPANY.irs.einAssignedDate}`,
    noteKey: "einNote" as const,
    icon: BadgeCheck,
  },
  {
    labelKey: "ltr147c" as const,
    value: `Issued ${COMPANY.irs.ltr147cDate}`,
    noteKey: "ltr147cNote" as const,
    icon: FileCheck,
  },
  {
    labelKey: "taxClass" as const,
    value: COMPANY.irs.taxClassification,
    noteKey: "taxClassNote" as const,
    icon: Building,
  },
  {
    labelKey: "industry" as const,
    value: COMPANY.irs.industryCode,
    noteKey: "industryNote" as const,
    icon: BadgeCheck,
  },
  {
    labelKey: "fiscalYear" as const,
    value: COMPANY.irs.fiscalYear,
    noteKey: "fiscalNote" as const,
    icon: FileCheck,
  },
] as const;

const irsStrings = {
  en: {
    einStatus: "EIN Status",
    einNote: "Employer Identification Number assigned by U.S. Internal Revenue Service. Number not published for security.",
    ltr147c: "Official IRS Confirmation (LTR 147C)",
    ltr147cNote: "Department of the Treasury confirmation letter on file. Available to qualified partners upon request.",
    taxClass: "Tax Classification",
    taxClassNote: "Standard IRS classification for a single-member LLC. Taxed as a pass-through entity.",
    industry: "Industry (SS-4 Filing)",
    industryNote: `Registered activity: "${COMPANY.irs.businessDescription}"`,
    fiscalYear: "Fiscal Year",
    fiscalNote: "Standard calendar-year accounting. Annual reporting obligations fulfilled accordingly.",
  },
  ar: {
    einStatus: "حالة EIN",
    einNote: "رقم تعريف صاحب العمل صادر عن مصلحة الضرائب الأمريكية. الرقم غير منشور لأسباب أمنية.",
    ltr147c: "تأكيد IRS الرسمي (LTR 147C)",
    ltr147cNote: "خطاب تأكيد وزارة الخزانة محفوظ في سجلاتنا. متاح للشركاء المؤهَّلين عند الطلب.",
    taxClass: "التصنيف الضريبي",
    taxClassNote: "التصنيف القياسي لدى IRS لشركة ذات مسؤولية محدودة بعضو واحد. تُفرض عليها ضريبة كيان مُمرِّر.",
    industry: "النشاط الصناعي (نموذج SS-4)",
    industryNote: `النشاط المسجَّل: "${COMPANY.irs.businessDescription}"`,
    fiscalYear: "السنة المالية",
    fiscalNote: "محاسبة السنة التقويمية القياسية. يتم الوفاء بالتزامات التقرير السنوية وفقاً لذلك.",
  },
};

const documentsStrings = {
  en: [
    { title: "Certificate of Organization", source: "Wyoming Secretary of State", status: "Filed & active", isPublic: true, note: "Public filing facts shown below." },
    { title: "Articles of Organization", source: "Wyoming Secretary of State", status: "On file", isPublic: false, note: "Full filing available to qualified partners on request." },
    { title: "IRS Employer Identification Number (EIN)", source: "U.S. Internal Revenue Service", status: "Assigned", isPublic: false, note: "EIN is not published on this website for security reasons." },
    { title: "Operating Agreement", source: "Company records", status: "Executed", isPublic: false, note: "Available to investors and partners under NDA upon request." },
  ],
  ar: [
    { title: "شهادة التنظيم", source: "وزارة خارجية ولاية وايومنغ", status: "مُقدَّمة ونشطة", isPublic: true, note: "الحقائق العامة للتسجيل موضّحة أدناه." },
    { title: "مواد التأسيس", source: "وزارة خارجية ولاية وايومنغ", status: "محفوظة", isPublic: false, note: "التسجيل الكامل متاح للشركاء المؤهَّلين عند الطلب." },
    { title: "رقم تعريف صاحب العمل EIN", source: "مصلحة الضرائب الأمريكية", status: "مُخصَّص", isPublic: false, note: "لا يُنشر EIN على هذا الموقع لأسباب أمنية." },
    { title: "اتفاقية التشغيل", source: "سجلات الشركة", status: "مُنفَّذة", isPublic: false, note: "متاحة للمستثمرين والشركاء تحت NDA عند الطلب." },
  ],
};

const verificationStrings = {
  en: [
    { step: "1", title: "Search Wyoming records", description: `Use the official Wyoming business search and look up filing ID ${COMPANY.filingId} or entity name ${COMPANY.legalName}.` },
    { step: "2", title: "Confirm entity status", description: "Verify the entity is listed as active and that the formation date matches our public records." },
    { step: "3", title: "Request documentation", description: "Partners and investors may request redacted formation documents by contacting our legal team." },
  ],
  ar: [
    { step: "1", title: "ابحث في سجلات وايومنغ", description: `استخدم البحث الرسمي في سجلات الأعمال بوايومنغ وابحث عن معرّف التسجيل ${COMPANY.filingId} أو اسم الكيان ${COMPANY.legalName}.` },
    { step: "2", title: "تأكيد حالة الكيان", description: "تحقق من أن الكيان مُدرج كنشط وأن تاريخ التأسيس يتطابق مع سجلاتنا العامة." },
    { step: "3", title: "طلب الوثائق", description: "يمكن للشركاء والمستثمرين طلب وثائق التأسيس المُعدَّلة بالتواصل مع فريقنا القانوني." },
  ],
};

const ctaStrings = {
  en: { requestDocs: "Request documents", contactUs: "Contact us" },
  ar: { requestDocs: "طلب الوثائق", contactUs: "تواصل معنا" },
};

export default function TrustContent() {
  const { t, lang } = useLang();
  const irs = irsStrings[lang];
  const docs = documentsStrings[lang];
  const steps = verificationStrings[lang];
  const cta = ctaStrings[lang];

  return (
    <>
      <section className="bg-gradient-to-b from-[#EEF4FF] to-white pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <p className="animate-fade-up mb-4 text-xs font-semibold uppercase tracking-widest text-[#005CE6]">
            {t.trust.label}
          </p>
          <h1 className="animate-fade-up-1 mb-6 max-w-3xl text-5xl font-bold text-gray-900 md:text-6xl">
            {t.trust.headline}
          </h1>
          <p className="animate-fade-up-2 max-w-2xl text-lg leading-relaxed text-gray-500">
            {t.trust.subtitle}
          </p>
        </div>
      </section>

      <CompanyTrustStrip />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection>
            <div className="mb-12 text-center">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#005CE6]">
                {t.trust.formationLabel}
              </p>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                {t.trust.formationTitle}
              </h2>
              <p className="mx-auto max-w-xl text-gray-500">
                {t.trust.formationText}
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <FormationCertificate />
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={COMPANY.wyomingVerifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#005CE6] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#0047B3]"
              >
                {t.common.verifyOnWyoming}
                <ExternalLink size={16} aria-hidden />
              </a>
              <Link
                href="/legal#company"
                className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-6 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
              >
                {t.legal.entityLabel}
                <ArrowRight size={16} aria-hidden />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-gray-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#005CE6]">
              {t.trust.documentsLabel}
            </p>
            <h2 className="mb-12 text-3xl font-bold text-gray-900 md:text-4xl">
              {t.trust.documentsTitle}
            </h2>
          </AnimatedSection>

          <div className="grid gap-4 md:grid-cols-2">
            {docs.map((doc, i) => (
              <AnimatedSection key={doc.title} delay={i * 60}>
                <div className="flex h-full gap-4 rounded-2xl border border-gray-100 bg-white p-6">
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                      doc.isPublic ? "bg-[#005CE6]/10" : "bg-gray-100"
                    }`}
                  >
                    {doc.isPublic ? (
                      <FileCheck className="h-5 w-5 text-[#005CE6]" aria-hidden />
                    ) : (
                      <Lock className="h-5 w-5 text-gray-500" aria-hidden />
                    )}
                  </div>
                  <div>
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <h3 className="font-semibold text-gray-900">{doc.title}</h3>
                      <span
                        className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${
                          doc.isPublic
                            ? "bg-emerald-50 text-emerald-700"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {doc.isPublic ? t.common.publicFacts : t.common.onRequest}
                      </span>
                    </div>
                    <p className="mb-1 text-xs text-gray-400">{doc.source}</p>
                    <p className="mb-2 text-sm font-medium text-[#005CE6]">{doc.status}</p>
                    <p className="text-sm leading-relaxed text-gray-500">{doc.note}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* IRS / FEDERAL RECORDS */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#005CE6]">
              {t.trust.irsLabel}
            </p>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              {t.trust.irsTitle}
            </h2>
            <p className="mb-12 max-w-xl text-gray-500">
              {t.trust.irsText}
            </p>
          </AnimatedSection>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {irsRecords.map((rec, i) => (
              <AnimatedSection key={rec.labelKey} delay={i * 60}>
                <div className="flex h-full flex-col gap-3 rounded-2xl border border-gray-100 bg-white p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#005CE6]/10">
                    <rec.icon className="h-5 w-5 text-[#005CE6]" aria-hidden />
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-gray-400">
                      {irs[rec.labelKey]}
                    </p>
                    <p className="mb-2 font-semibold text-gray-900">{rec.value}</p>
                    <p className="text-sm leading-relaxed text-gray-500">{irs[rec.noteKey]}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={300}>
            <div className="mt-8 rounded-2xl border border-[#005CE6]/20 bg-[#EEF4FF] p-6">
              <p className="text-sm leading-relaxed text-gray-700">
                <span className="font-semibold text-[#005CE6]">Formation note: </span>
                {COMPANY.legalName} was organized by {COMPANY.sos.formationService}, a professional
                business formation service, and the Certificate of Organization was signed by{" "}
                <span className="font-medium">{COMPANY.sos.secretaryOfState}</span>, Secretary of
                State of Wyoming, on {COMPANY.sos.filedDate} at {COMPANY.sos.filedTime} — same-day
                processing confirming clean filing.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-start gap-16 lg:grid-cols-2">
            <AnimatedSection direction="left">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#005CE6]">
                {t.trust.verifyLabel}
              </p>
              <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
                {t.trust.verifyTitle}
              </h2>
              <p className="text-lg leading-relaxed text-gray-500">
                {t.trust.verifyText}
              </p>
            </AnimatedSection>

            <div className="space-y-4">
              {steps.map((item, i) => (
                <AnimatedSection key={item.step} delay={i * 80} direction="right">
                  <div className="flex gap-5 rounded-2xl border border-gray-100 p-6">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-950 text-sm font-bold text-white">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="mb-2 font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-sm leading-relaxed text-gray-500">{item.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-950 py-20 text-white md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection>
            <div className="flex flex-col items-center text-center">
              <Shield className="mb-6 h-10 w-10 text-[#005CE6]" strokeWidth={1.5} aria-hidden />
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                {t.trust.ctaTitle}
              </h2>
              <p className="mb-8 max-w-lg text-gray-400">
                {t.trust.ctaText}
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href={`mailto:${COMPANY.legalEmail}?subject=Document%20Request%20-%20${encodeURIComponent(COMPANY.legalName)}`}
                  className="inline-flex items-center gap-2 rounded-full bg-[#005CE6] px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-[#0047B3]"
                >
                  {cta.requestDocs}
                  <ArrowRight size={16} aria-hidden />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-white/10"
                >
                  {cta.contactUs}
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
