"use client";

import Link from "next/link";
import AnimatedSection from "@/components/sections/AnimatedSection";
import { COMPANY, formatLegalAddress } from "@/lib/company";
import { ArrowRight, ExternalLink } from "lucide-react";
import { useLang } from "@/lib/i18n/LangContext";

const privacyStrings = {
  en: {
    intro: `${COMPANY.legalName} ("${COMPANY.brandName}", "we", "us") is committed to protecting the privacy of all users, partners, and institutions that interact with our platform. This Privacy Policy explains what data we collect, how we use it, and how we protect it.`,
    collectTitle: "Data We Collect",
    collect: "We collect information you provide directly (such as name, email, and registration details), usage information (how you interact with the platform), and technical information (device type, browser, IP address) for security and performance purposes.",
    useTitle: "How We Use Your Data",
    use: "Your data is used to operate and improve the platform, communicate with you about your account and services, ensure security and prevent fraud, and comply with legal obligations. We do not sell your personal data to third parties.",
    secTitle: "Data Security",
    sec: "All data is encrypted in transit (TLS 1.3) and at rest using industry-standard encryption. Access to personal data is restricted to authorized personnel on a strict need-to-know basis.",
    rightsTitle: "Your Rights",
    rights: "You have the right to access, correct, and delete your personal data at any time. To exercise these rights, contact",
  },
  ar: {
    intro: `تلتزم ${COMPANY.legalName} ("${COMPANY.brandName}"، "نحن") بحماية خصوصية جميع المستخدمين والشركاء والمؤسسات الذين يتفاعلون مع منصتنا. تشرح سياسة الخصوصية هذه البيانات التي نجمعها وكيف نستخدمها وكيف نحميها.`,
    collectTitle: "البيانات التي نجمعها",
    collect: "نجمع المعلومات التي تقدمها مباشرةً (مثل الاسم والبريد الإلكتروني وتفاصيل التسجيل) ومعلومات الاستخدام (كيفية تفاعلك مع المنصة) والمعلومات التقنية (نوع الجهاز والمتصفح وعنوان IP) لأغراض الأمان والأداء.",
    useTitle: "كيف نستخدم بياناتك",
    use: "تُستخدم بياناتك لتشغيل المنصة وتحسينها والتواصل معك بشأن حسابك وخدماتك وضمان الأمان ومنع الاحتيال والامتثال للالتزامات القانونية. لا نبيع بياناتك الشخصية لأطراف ثالثة.",
    secTitle: "أمان البيانات",
    sec: "جميع البيانات مشفَّرة أثناء النقل (TLS 1.3) وأثناء التخزين باستخدام تشفير معياري في الصناعة. يقتصر الوصول إلى البيانات الشخصية على الموظفين المعتمدين على أساس الحاجة إلى المعرفة.",
    rightsTitle: "حقوقك",
    rights: "لديك الحق في الوصول إلى بياناتك الشخصية وتصحيحها وحذفها في أي وقت. لممارسة هذه الحقوق، تواصل مع",
  },
};

const termsStrings = {
  en: {
    intro: `These Terms of Service ("Terms") govern your access to and use of the ${COMPANY.brandName} platform, website, and related services (collectively, the "Services"). The Services are provided by ${COMPANY.legalName}, a ${COMPANY.entityType} ("Company", "we", "us").`,
    agree: "By accessing or using the Services, you agree to be bound by these Terms. If you do not agree, do not use the Services.",
    acceptTitle: "Acceptable Use",
    accept: "You agree to use the Services only for lawful purposes and in accordance with these Terms. You may not use the platform to engage in fraud, impersonation, harassment, illegal transactions, or any activity that violates applicable law.",
    ipTitle: "Intellectual Property",
    ip: `All content, design, code, and infrastructure comprising ${COMPANY.brandName} is the property of ${COMPANY.legalName} and its licensors. Unauthorized reproduction or distribution is prohibited.`,
    earlyTitle: "Early Access",
    early: `During the early access phase, services may be limited, modified, or discontinued at any time. ${COMPANY.legalName} makes no guarantees about feature availability, uptime, or data retention during pre-launch phases.`,
    liabilityTitle: "Limitation of Liability",
    liability: `To the maximum extent permitted by law, ${COMPANY.legalName} is not liable for indirect, incidental, or consequential damages arising from the use or inability to use the Services.`,
    lawTitle: "Governing Law",
    law: `These Terms are governed by the laws of the State of ${COMPANY.state}, United States, without regard to conflict-of-law principles. Any dispute arising under these Terms shall be resolved in the state or federal courts located in ${COMPANY.state}, unless otherwise required by applicable law.`,
    noticesTitle: "Legal Notices",
    notices: `Formal legal notices may be sent to ${COMPANY.legalName} at its legal mailing address: ${formatLegalAddress()}. Electronic notices may be sent to`,
    contactTitle: "Contact",
    contact: "For legal inquiries, contact",
  },
  ar: {
    intro: `تحكم شروط الخدمة هذه ("الشروط") وصولك إلى منصة ${COMPANY.brandName} والموقع والخدمات ذات الصلة (يُشار إليها إجمالاً بـ"الخدمات"). تُقدَّم الخدمات من قِبل ${COMPANY.legalName}، وهي ${COMPANY.entityType} ("الشركة"، "نحن").`,
    agree: "بالوصول إلى الخدمات أو استخدامها، فإنك توافق على الالتزام بهذه الشروط. إذا كنت لا توافق، فلا تستخدم الخدمات.",
    acceptTitle: "الاستخدام المقبول",
    accept: "توافق على استخدام الخدمات لأغراض مشروعة فقط ووفقاً لهذه الشروط. لا يجوز لك استخدام المنصة للاحتيال أو انتحال الهوية أو التحرش أو المعاملات غير القانونية أو أي نشاط يخالف القانون المعمول به.",
    ipTitle: "الملكية الفكرية",
    ip: `جميع المحتوى والتصميم والكود والبنية التحتية التي تشكّل ${COMPANY.brandName} هي ملك لـ ${COMPANY.legalName} ومرخّصيها. يُحظر الاستنساخ أو التوزيع غير المصرّح به.`,
    earlyTitle: "الوصول المبكر",
    early: `خلال مرحلة الوصول المبكر، قد تكون الخدمات محدودة أو معدَّلة أو مُوقَفة في أي وقت. لا تضمن ${COMPANY.legalName} توافر الميزات أو وقت التشغيل أو الاحتفاظ بالبيانات خلال مراحل ما قبل الإطلاق.`,
    liabilityTitle: "تحديد المسؤولية",
    liability: `إلى أقصى حد يسمح به القانون، لا تتحمل ${COMPANY.legalName} المسؤولية عن الأضرار غير المباشرة أو العرضية أو التبعية الناجمة عن استخدام الخدمات أو عدم القدرة على استخدامها.`,
    lawTitle: "القانون الحاكم",
    law: `تخضع هذه الشروط لقوانين ولاية ${COMPANY.state}، الولايات المتحدة، بصرف النظر عن مبادئ تعارض القوانين. يُحسم أي نزاع ينشأ بموجب هذه الشروط في محاكم الولاية أو المحاكم الفيدرالية في ${COMPANY.state}، ما لم يقتضِ القانون المعمول به خلاف ذلك.`,
    noticesTitle: "الإشعارات القانونية",
    notices: `يمكن إرسال الإشعارات القانونية الرسمية إلى ${COMPANY.legalName} على عنوانها البريدي القانوني: ${formatLegalAddress()}. يمكن إرسال الإشعارات الإلكترونية إلى`,
    contactTitle: "التواصل",
    contact: "للاستفسارات القانونية، تواصل مع",
  },
};

const entityStrings = {
  en: {
    intro: `The ${COMPANY.brandName} platform and brand are operated by ${COMPANY.legalName}, a ${COMPANY.managementType} organized under the laws of the State of ${COMPANY.state}.`,
    legalName: "Legal name",
    entityType: "Entity type",
    state: "State of formation",
    formed: "Date formed",
    filingId: "Wyoming filing ID",
    agent: "Registered agent",
    address: "Legal mailing address",
    tax: "Federal tax registration",
    taxText: `${COMPANY.legalName} is registered with the U.S. Internal Revenue Service (IRS) for federal tax purposes. EIN details are not published on this website for security reasons.`,
    verifySos: "Verify registration with Wyoming Secretary of State",
    trustCenter: "Trust center & certificate",
    lastUpdated: "Last updated",
  },
  ar: {
    intro: `منصة ${COMPANY.brandName} والعلامة التجارية يُشغّلها ${COMPANY.legalName}، وهي ${COMPANY.managementType} منظَّمة بموجب قوانين ولاية ${COMPANY.state}.`,
    legalName: "الاسم القانوني",
    entityType: "نوع الكيان",
    state: "ولاية التأسيس",
    formed: "تاريخ التأسيس",
    filingId: "معرّف تسجيل وايومنغ",
    agent: "الوكيل المسجَّل",
    address: "العنوان البريدي القانوني",
    tax: "التسجيل الضريبي الفيدرالي",
    taxText: `مسجَّلة ${COMPANY.legalName} لدى مصلحة الضرائب الأمريكية (IRS) لأغراض ضريبية فيدرالية. تفاصيل EIN غير منشورة على هذا الموقع لأسباب أمنية.`,
    verifySos: "تحقق من التسجيل عبر وزارة خارجية وايومنغ",
    trustCenter: "مركز الثقة والشهادة",
    lastUpdated: "آخر تحديث",
  },
};

export default function LegalContent() {
  const { t, lang } = useLang();
  const year = new Date().getFullYear();
  const privacy = privacyStrings[lang];
  const terms = termsStrings[lang];
  const entity = entityStrings[lang];

  return (
    <>
      {/* HERO */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-[#EEF4FF] to-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="animate-fade-up text-xs font-semibold text-[#005CE6] uppercase tracking-widest mb-4">
            {t.legal.label}
          </p>
          <h1 className="animate-fade-up-1 text-5xl font-bold text-gray-900 mb-4">
            {t.legal.headline}
          </h1>
          <p className="animate-fade-up-2 text-gray-500">{entity.lastUpdated}: {year}</p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 space-y-14">

          {/* Company Information */}
          <AnimatedSection>
            <div id="company" className="scroll-mt-28">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.legal.entityLabel}</h2>
              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 text-sm leading-relaxed text-gray-600 space-y-4">
                <p>{entity.intro}</p>
                <dl className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-gray-400">{entity.legalName}</dt>
                    <dd className="mt-1 font-medium text-gray-900">{COMPANY.legalName}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-gray-400">{entity.entityType}</dt>
                    <dd className="mt-1 font-medium text-gray-900">{COMPANY.entityType}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-gray-400">{entity.state}</dt>
                    <dd className="mt-1 font-medium text-gray-900">{COMPANY.state}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-gray-400">{entity.formed}</dt>
                    <dd className="mt-1 font-medium text-gray-900">{COMPANY.formedDate}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-gray-400">{entity.filingId}</dt>
                    <dd className="mt-1 font-medium text-gray-900">{COMPANY.filingId}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-gray-400">{entity.agent}</dt>
                    <dd className="mt-1 font-medium text-gray-900">{COMPANY.registeredAgent}</dd>
                  </div>
                  <div className="sm:col-span-2">
                    <dt className="text-xs font-semibold uppercase tracking-wider text-gray-400">{entity.address}</dt>
                    <dd className="mt-1 font-medium text-gray-900">{formatLegalAddress()}</dd>
                  </div>
                  <div className="sm:col-span-2">
                    <dt className="text-xs font-semibold uppercase tracking-wider text-gray-400">{entity.tax}</dt>
                    <dd className="mt-1 font-medium text-gray-900">{entity.taxText}</dd>
                  </div>
                </dl>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
                  <a
                    href={COMPANY.wyomingVerifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[#005CE6] hover:text-[#0047B3] transition-colors"
                  >
                    {entity.verifySos}
                    <ExternalLink size={14} aria-hidden />
                  </a>
                  <Link
                    href="/trust"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {entity.trustCenter}
                    <ArrowRight size={14} aria-hidden />
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <div className="border-t border-gray-100" />

          {/* Privacy Policy */}
          <AnimatedSection>
            <div id="privacy" className="scroll-mt-28">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.legal.privacyLabel}</h2>
            <div className="prose prose-gray max-w-none text-sm leading-relaxed space-y-4 text-gray-600">
              <p>{privacy.intro}</p>
              <h3 className="text-base font-semibold text-gray-900 mt-6">{privacy.collectTitle}</h3>
              <p>{privacy.collect}</p>
              <h3 className="text-base font-semibold text-gray-900 mt-6">{privacy.useTitle}</h3>
              <p>{privacy.use}</p>
              <h3 className="text-base font-semibold text-gray-900 mt-6">{privacy.secTitle}</h3>
              <p>{privacy.sec}</p>
              <h3 className="text-base font-semibold text-gray-900 mt-6">{privacy.rightsTitle}</h3>
              <p>
                {privacy.rights}{" "}
                <a href={`mailto:${COMPANY.privacyEmail}`} className="text-[#005CE6] hover:underline">
                  {COMPANY.privacyEmail}
                </a>
                .
              </p>
              <p>
                {lang === "ar"
                  ? "لمزيد من المعلومات حول استخدامنا لملفات تعريف الارتباط، راجع "
                  : "For details on how we use cookies and local storage, see our "}
                <Link href="/cookies" className="text-[#005CE6] hover:underline">
                  {lang === "ar" ? "سياسة ملفات تعريف الارتباط" : "Cookie Policy"}
                </Link>
                .
              </p>
            </div>
            </div>
          </AnimatedSection>

          <div className="border-t border-gray-100" />

          {/* Terms of Service */}
          <AnimatedSection>
            <div id="terms" className="scroll-mt-28">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.legal.termsLabel}</h2>
            <div className="prose prose-gray max-w-none text-sm leading-relaxed space-y-4 text-gray-600">
              <p>{terms.intro}</p>
              <p>{terms.agree}</p>
              <h3 className="text-base font-semibold text-gray-900 mt-6">{terms.acceptTitle}</h3>
              <p>{terms.accept}</p>
              <h3 className="text-base font-semibold text-gray-900 mt-6">{terms.ipTitle}</h3>
              <p>{terms.ip}</p>
              <h3 className="text-base font-semibold text-gray-900 mt-6">{terms.earlyTitle}</h3>
              <p>{terms.early}</p>
              <h3 className="text-base font-semibold text-gray-900 mt-6">{terms.liabilityTitle}</h3>
              <p>{terms.liability}</p>
              <h3 className="text-base font-semibold text-gray-900 mt-6">{terms.lawTitle}</h3>
              <p>{terms.law}</p>
              <h3 className="text-base font-semibold text-gray-900 mt-6">{terms.noticesTitle}</h3>
              <p>
                {terms.notices}{" "}
                <a href={`mailto:${COMPANY.legalEmail}`} className="text-[#005CE6] hover:underline">
                  {COMPANY.legalEmail}
                </a>
                .
              </p>
              <h3 className="text-base font-semibold text-gray-900 mt-6">{terms.contactTitle}</h3>
              <p>
                {terms.contact}{" "}
                <a href={`mailto:${COMPANY.legalEmail}`} className="text-[#005CE6] hover:underline">
                  {COMPANY.legalEmail}
                </a>
                .
              </p>
            </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
