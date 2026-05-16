"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle, Lock, Server, ShieldCheck, Eye, Globe, Clock } from "lucide-react";
import AnimatedSection from "@/components/sections/AnimatedSection";
import { useLang } from "@/lib/i18n/LangContext";

const pillars = [
  {
    icon: Lock,
    title: "Encryption in transit",
    description:
      "All connections to Nwvania use TLS 1.2 or higher. Certificates are managed with automated renewal — no expired certificates in production.",
  },
  {
    icon: Server,
    title: "Encryption at rest",
    description:
      "Data stored on Nwvania infrastructure is encrypted using AES-256. Encryption keys are stored separately from the data they protect.",
  },
  {
    icon: ShieldCheck,
    title: "Access control",
    description:
      "Internal access to production systems follows the principle of least privilege. No employee has standing access to customer data without an explicit need.",
  },
  {
    icon: Eye,
    title: "Audit logging",
    description:
      "Access events and data operations are logged with tamper-evident records. Logs are retained for a minimum of 12 months.",
  },
  {
    icon: Globe,
    title: "Infrastructure isolation",
    description:
      "Environments (production, staging, development) are fully isolated. Customer data never flows into non-production systems.",
  },
  {
    icon: Clock,
    title: "Incident response",
    description:
      "We maintain a documented incident response plan. In the event of a confirmed breach affecting customer data, affected parties are notified within 72 hours.",
  },
];

const complianceRoadmap = [
  {
    item: "SOC 2 Type I",
    status: "Planned",
    note: "Targeted after platform general availability.",
  },
  {
    item: "SOC 2 Type II",
    status: "Roadmap",
    note: "12–18 months post-launch.",
  },
  {
    item: "GDPR compliance",
    status: "In design",
    note: "Privacy architecture being built to GDPR standards from day one.",
  },
  {
    item: "ISO 27001",
    status: "Roadmap",
    note: "Longer-term certification goal.",
  },
];

const whoAccessesData = [
  {
    role: "Engineering team",
    access: "Infrastructure and application code. No standing access to customer data.",
  },
  {
    role: "Operations team",
    access: "Monitoring dashboards and aggregated metrics only.",
  },
  {
    role: "Legal team",
    access: "Only when required by a valid legal process, with logging.",
  },
  {
    role: "Third-party vendors",
    access: "Reviewed against our vendor security policy. No data sharing without a signed DPA.",
  },
];

export default function SecurityContent() {
  const { t } = useLang();

  return (
    <>
      {/* HERO */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-[#EEF4FF] to-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="animate-fade-up text-xs font-semibold text-[#005CE6] uppercase tracking-widest mb-4">
            {t.security.label}
          </p>
          <h1 className="animate-fade-up-1 text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6 max-w-3xl">
            {t.security.headline1}<br />{t.security.headline2}
          </h1>
          <p className="animate-fade-up-2 text-lg text-gray-500 leading-relaxed max-w-2xl">
            {t.security.subtitle}
          </p>
          <div className="animate-fade-up-3 flex gap-4 mt-8 flex-wrap">
            <Link
              href="/trust"
              className="inline-flex items-center gap-2 rounded-full bg-[#005CE6] px-6 py-3 text-sm font-medium text-white hover:bg-[#0047B3] transition-colors"
            >
              Trust Center
              <ArrowRight size={16} aria-hidden />
            </Link>
            <a
              href="mailto:security@nwvania.com"
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              security@nwvania.com
            </a>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold text-[#005CE6] uppercase tracking-widest mb-4">
              {t.security.pillarsLabel}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
              {t.security.pillarsTitle}
            </h2>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 60}>
                <div className="bg-white border border-gray-100 rounded-2xl p-7 h-full">
                  <div className="w-11 h-11 rounded-xl bg-[#005CE6]/10 flex items-center justify-center mb-5">
                    <p.icon className="w-5 h-5 text-[#005CE6]" aria-hidden />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-3">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-500">{p.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* WHO ACCESSES DATA */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold text-[#005CE6] uppercase tracking-widest mb-4">
              {t.security.accessLabel}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t.security.accessTitle}
            </h2>
            <p className="text-gray-500 max-w-xl mb-12">
              {t.security.accessText}
            </p>
          </AnimatedSection>

          <div className="space-y-4">
            {whoAccessesData.map((row, i) => (
              <AnimatedSection key={row.role} delay={i * 60}>
                <div className="flex gap-5 bg-white border border-gray-100 rounded-2xl p-6">
                  <CheckCircle className="w-5 h-5 text-[#005CE6] shrink-0 mt-0.5" aria-hidden />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">{row.role}</p>
                    <p className="text-sm text-gray-500 leading-relaxed">{row.access}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* COMPLIANCE ROADMAP */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold text-[#005CE6] uppercase tracking-widest mb-4">
              {t.security.complianceLabel}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t.security.complianceTitle}
            </h2>
            <p className="text-gray-500 max-w-xl mb-12">
              {t.security.complianceText}
            </p>
          </AnimatedSection>

          <div className="grid gap-4 md:grid-cols-2">
            {complianceRoadmap.map((row, i) => (
              <AnimatedSection key={row.item} delay={i * 60}>
                <div className="border border-gray-100 rounded-2xl p-6 bg-white">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-gray-900">{row.item}</h3>
                    <span
                      className={`text-[10px] font-semibold uppercase tracking-wider rounded-full px-2.5 py-1 ${
                        row.status === "Planned"
                          ? "bg-blue-50 text-blue-700"
                          : row.status === "In design"
                          ? "bg-emerald-50 text-emerald-700"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {row.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">{row.note}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* VULNERABILITY DISCLOSURE */}
      <section className="bg-gray-950 py-20 text-white md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="flex flex-col items-center text-center">
              <ShieldCheck className="mb-6 h-10 w-10 text-[#005CE6]" strokeWidth={1.5} aria-hidden />
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                {t.security.disclosureTitle}
              </h2>
              <p className="mb-8 max-w-lg text-gray-500">
                {t.security.disclosureText}
              </p>
              <a
                href="mailto:security@nwvania.com?subject=Vulnerability%20Report"
                className="inline-flex items-center gap-2 rounded-full bg-[#005CE6] px-8 py-4 text-sm font-medium text-white hover:bg-[#0047B3] transition-colors"
              >
                {t.security.disclosureButton}
                <ArrowRight size={16} aria-hidden />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
