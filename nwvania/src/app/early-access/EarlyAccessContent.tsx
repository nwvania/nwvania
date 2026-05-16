"use client";

import { useState, type FormEvent } from "react";
import AnimatedSection from "@/components/sections/AnimatedSection";
import { useLang } from "@/lib/i18n/LangContext";

type FormState = "idle" | "submitting" | "success" | "error";

function isValidEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export default function EarlyAccessContent() {
  const { t } = useLang();
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    organization: "",
    userType: "",
    useCase: "",
    website: "",
  });
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const errors = {
    fullName: !form.fullName.trim() || form.fullName.trim().length < 2 ? "Required (min 2 characters)" : "",
    email: !form.email.trim() ? "Required" : !isValidEmail(form.email) ? "Enter a valid email" : "",
    userType: !form.userType ? "Please select your role" : "",
  };
  const hasErrors = Object.values(errors).some(Boolean);

  const updateField = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const touch = (field: string) =>
    setTouched((prev) => ({ ...prev, [field]: true }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (form.website) return;
    setTouched({ fullName: true, email: true, userType: true });
    if (hasErrors) return;
    setFormState("submitting");

    try {
      const res = await fetch("/api/early-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setFormState("success");
    } catch {
      setFormState("error");
    }
  };

  if (formState === "success") {
    return (
      <section className="min-h-screen flex items-center justify-center pt-16">
        <div className="max-w-md mx-auto px-6 text-center">
          <div className="w-16 h-16 bg-[#005CE6] rounded-full flex items-center justify-center mx-auto mb-8">
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{t.earlyAccess.form.successTitle}</h1>
          <p className="text-gray-500 leading-relaxed">
            {t.earlyAccess.form.successText}{" "}
            <span className="font-medium text-gray-900">{form.email}</span> {t.earlyAccess.form.successSuffix}
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
            {t.earlyAccess.label}
          </p>
          <h1 className="animate-fade-up-1 text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6 max-w-2xl">
            {t.earlyAccess.headline}
          </h1>
          <p className="animate-fade-up-2 text-lg text-gray-500 max-w-xl leading-relaxed">
            {t.earlyAccess.subtitle}
          </p>
        </div>
      </section>

      {/* FORM */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">

            {/* Left: Benefits */}
            <AnimatedSection direction="left">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                {t.earlyAccess.benefitsTitle}
              </h2>
              <div className="space-y-6">
                {t.earlyAccess.benefits.map((benefit, i) => (
                  <div key={i} className="flex gap-4">
                    <div
                      className="w-6 h-6 rounded-full bg-[#005CE6] shrink-0 flex items-center justify-center mt-0.5"
                      aria-hidden="true"
                    >
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                    <div className="text-gray-700 text-sm leading-relaxed">{benefit}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Right: Registration form */}
            <AnimatedSection direction="right" delay={100}>
              <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-7">{t.earlyAccess.form.submit}</h2>

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

                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1.5">
                      {t.earlyAccess.form.name} <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      autoComplete="name"
                      required
                      aria-required="true"
                      aria-invalid={touched.fullName && !!errors.fullName}
                      aria-describedby={errors.fullName ? "ea-name-err" : undefined}
                      value={form.fullName}
                      onChange={(e) => updateField("fullName", e.target.value)}
                      onBlur={() => touch("fullName")}
                      placeholder={t.earlyAccess.form.name}
                      className={fieldClass("fullName")}
                    />
                    {touched.fullName && errors.fullName && (
                      <p id="ea-name-err" role="alert" className="mt-1 text-xs text-red-500">{errors.fullName}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                      {t.earlyAccess.form.email} <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      required
                      aria-required="true"
                      aria-invalid={touched.email && !!errors.email}
                      aria-describedby={errors.email ? "ea-email-err" : undefined}
                      value={form.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      onBlur={() => touch("email")}
                      placeholder="you@example.com"
                      className={fieldClass("email")}
                    />
                    {touched.email && errors.email && (
                      <p id="ea-email-err" role="alert" className="mt-1 text-xs text-red-500">{errors.email}</p>
                    )}
                  </div>

                  {/* Role */}
                  <div>
                    <label htmlFor="userType" className="block text-sm font-medium text-gray-700 mb-1.5">
                      {t.earlyAccess.form.role} <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <select
                      id="userType"
                      required
                      aria-required="true"
                      aria-invalid={touched.userType && !!errors.userType}
                      aria-describedby={errors.userType ? "ea-role-err" : undefined}
                      value={form.userType}
                      onChange={(e) => updateField("userType", e.target.value)}
                      onBlur={() => touch("userType")}
                      className={`${fieldClass("userType")} bg-white`}
                    >
                      <option value="">Select your role</option>
                      {t.earlyAccess.form.roles.map((role) => (
                        <option key={role} value={role}>{role}</option>
                      ))}
                    </select>
                    {touched.userType && errors.userType && (
                      <p id="ea-role-err" role="alert" className="mt-1 text-xs text-red-500">{errors.userType}</p>
                    )}
                  </div>

                  {/* Organization */}
                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1.5">
                      {t.earlyAccess.form.org}
                    </label>
                    <input
                      id="organization"
                      type="text"
                      autoComplete="organization"
                      value={form.organization}
                      onChange={(e) => updateField("organization", e.target.value)}
                      placeholder="Optional"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#005CE6] focus:ring-2 focus:ring-[#005CE6]/10 transition-all placeholder:text-gray-400"
                    />
                  </div>

                  {/* Use Case */}
                  <div>
                    <label htmlFor="useCase" className="block text-sm font-medium text-gray-700 mb-1.5">
                      {t.earlyAccess.form.useCase}
                    </label>
                    <textarea
                      id="useCase"
                      rows={3}
                      value={form.useCase}
                      onChange={(e) => updateField("useCase", e.target.value)}
                      placeholder={t.earlyAccess.form.useCasePlaceholder}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#005CE6] focus:ring-2 focus:ring-[#005CE6]/10 transition-all placeholder:text-gray-400 resize-none"
                    />
                  </div>

                  {formState === "error" && (
                    <p className="text-red-500 text-sm" role="alert">
                      Submission failed. Please try again or contact us directly.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={formState === "submitting"}
                    className="w-full bg-black text-white py-3.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {formState === "submitting" ? t.earlyAccess.form.submitting : t.earlyAccess.form.submit}
                  </button>

                  <p className="text-xs text-gray-400 text-center">
                    Your information is kept private and used only to contact you about Nwvania access.
                  </p>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
