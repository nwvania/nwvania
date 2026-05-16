"use client";

import { useState, type FormEvent } from "react";
import AnimatedSection from "@/components/sections/AnimatedSection";
import { useLang } from "@/lib/i18n/LangContext";

type ContactState = "idle" | "submitting" | "success" | "error";

function isValidEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export default function ContactContent() {
  const { t } = useLang();
  const [state, setState] = useState<ContactState>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    organization: "",
    inquiryType: "",
    message: "",
    website: "",
  });
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const errors = {
    name: !form.name.trim() || form.name.trim().length < 2 ? "Required (min 2 characters)" : "",
    email: !form.email.trim() ? "Required" : !isValidEmail(form.email) ? "Enter a valid email" : "",
    message: !form.message.trim() || form.message.trim().length < 10 ? "Required (min 10 characters)" : "",
  };
  const hasErrors = Object.values(errors).some(Boolean);

  const updateField = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const touch = (field: string) =>
    setTouched((prev) => ({ ...prev, [field]: true }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (form.website) return;
    setTouched({ name: true, email: true, message: true });
    if (hasErrors) return;
    setState("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setState("success");
    } catch {
      setState("error");
    }
  };

  if (state === "success") {
    return (
      <section className="min-h-screen flex items-center justify-center pt-16">
        <div className="max-w-md mx-auto px-6 text-center">
          <div className="w-14 h-14 bg-[#005CE6] rounded-full flex items-center justify-center mx-auto mb-7">
            <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{t.contact.form.successTitle}</h1>
          <p className="text-gray-500 leading-relaxed">
            {t.contact.form.successText}{" "}
            <span className="font-medium text-gray-900">{form.email}</span> {t.contact.form.successSuffix}
          </p>
        </div>
      </section>
    );
  }

  const fieldClass = (field: keyof typeof errors) =>
    `w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all placeholder:text-gray-400 ${
      touched[field] && errors[field]
        ? "border-red-400 focus:border-red-400 focus:ring-red-100"
        : "border-gray-200 focus:border-[#005CE6] focus:ring-[#005CE6]/10"
    }`;

  return (
    <>
      {/* HERO */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[#EEF4FF] to-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="animate-fade-up text-xs font-semibold text-[#005CE6] uppercase tracking-widest mb-4">
            {t.contact.label}
          </p>
          <h1 className="animate-fade-up-1 text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6 max-w-xl">
            {t.contact.headline}
          </h1>
          <p className="animate-fade-up-2 text-lg text-gray-500 max-w-xl leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>
      </section>

      {/* CONTACT FORM + INFO */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">

            {/* Info */}
            <AnimatedSection direction="left">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">{t.contact.channels.title}</h2>
              <div className="space-y-8">
                {[
                  { label: t.contact.channels.general.label,  value: t.contact.channels.general.email },
                  { label: t.contact.channels.legal.label,    value: t.contact.channels.legal.email },
                  { label: t.contact.channels.privacy.label,  value: t.contact.channels.privacy.email },
                  { label: t.contact.channels.security.label, value: t.contact.channels.security.email },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                      {item.label}
                    </div>
                    <div className="text-gray-900 font-medium">{item.value}</div>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 bg-gray-50 rounded-2xl">
                <p className="text-sm text-gray-500 leading-relaxed">
                  We respond to all inquiries within 48 hours. For partnership and investment
                  discussions, please include your organization and a brief overview of your interest
                  in the message.
                </p>
              </div>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection direction="right" delay={100}>
              <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-7">{t.contact.form.submit}</h2>
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Honeypot */}
                  <input
                    type="text"
                    name="website"
                    value={form.website}
                    onChange={(e) => updateField("website", e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", opacity: 0 }}
                  />

                  <div>
                    <label htmlFor="c-name" className="block text-sm font-medium text-gray-700 mb-1.5">
                      {t.contact.form.name} <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="c-name"
                      type="text"
                      autoComplete="name"
                      required
                      aria-required="true"
                      aria-invalid={touched.name && !!errors.name}
                      aria-describedby={errors.name ? "c-name-err" : undefined}
                      value={form.name}
                      onChange={(e) => updateField("name", e.target.value)}
                      onBlur={() => touch("name")}
                      placeholder={t.contact.form.name}
                      className={fieldClass("name")}
                    />
                    {touched.name && errors.name && (
                      <p id="c-name-err" role="alert" className="mt-1 text-xs text-red-500">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="c-email" className="block text-sm font-medium text-gray-700 mb-1.5">
                      {t.contact.form.email} <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="c-email"
                      type="email"
                      autoComplete="email"
                      required
                      aria-required="true"
                      aria-invalid={touched.email && !!errors.email}
                      aria-describedby={errors.email ? "c-email-err" : undefined}
                      value={form.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      onBlur={() => touch("email")}
                      placeholder="you@example.com"
                      className={fieldClass("email")}
                    />
                    {touched.email && errors.email && (
                      <p id="c-email-err" role="alert" className="mt-1 text-xs text-red-500">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="c-org" className="block text-sm font-medium text-gray-700 mb-1.5">
                      {t.contact.form.org}
                    </label>
                    <input
                      id="c-org"
                      type="text"
                      autoComplete="organization"
                      value={form.organization}
                      onChange={(e) => updateField("organization", e.target.value)}
                      placeholder="Optional"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#005CE6] focus:ring-2 focus:ring-[#005CE6]/10 transition-all placeholder:text-gray-400"
                    />
                  </div>

                  <div>
                    <label htmlFor="c-type" className="block text-sm font-medium text-gray-700 mb-1.5">
                      {t.contact.form.inquiryType}
                    </label>
                    <select
                      id="c-type"
                      value={form.inquiryType}
                      onChange={(e) => updateField("inquiryType", e.target.value)}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#005CE6] focus:ring-2 focus:ring-[#005CE6]/10 transition-all text-gray-700 bg-white"
                    >
                      <option value="">Select type</option>
                      {t.contact.form.inquiryTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="c-message" className="block text-sm font-medium text-gray-700 mb-1.5">
                      {t.contact.form.message} <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="c-message"
                      required
                      aria-required="true"
                      aria-invalid={touched.message && !!errors.message}
                      aria-describedby={errors.message ? "c-message-err" : undefined}
                      rows={4}
                      value={form.message}
                      onChange={(e) => updateField("message", e.target.value)}
                      onBlur={() => touch("message")}
                      placeholder={t.contact.form.messagePlaceholder}
                      className={`${fieldClass("message")} resize-none`}
                    />
                    {touched.message && errors.message && (
                      <p id="c-message-err" role="alert" className="mt-1 text-xs text-red-500">{errors.message}</p>
                    )}
                  </div>

                  {state === "error" && (
                    <p className="text-red-500 text-sm" role="alert">
                      {t.contact.form.errorText} hello@nwvania.com
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={state === "submitting"}
                    className="w-full bg-black text-white py-3.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors disabled:opacity-60"
                  >
                    {state === "submitting" ? t.contact.form.submitting : t.contact.form.submit}
                  </button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
