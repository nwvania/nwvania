import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { COMPANY } from "@/lib/company";

const trustFacts = [
  { label: "Legal Entity", value: COMPANY.legalName },
  { label: "Jurisdiction", value: `${COMPANY.state} (${COMPANY.stateAbbrev})` },
  { label: "Formed", value: COMPANY.formedDate },
  { label: "State Filing ID", value: COMPANY.filingId },
] as const;

type Variant = "light" | "dark";

export default function CompanyTrustStrip({ variant = "light" }: { variant?: Variant }) {
  const isDark = variant === "dark";

  return (
    <section
      className={
        isDark
          ? "border-y border-white/10 bg-gray-950/50 py-10"
          : "border-y border-gray-100 bg-gray-50 py-10"
      }
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-[#005CE6]">
              Company
            </p>
            <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>
              {COMPANY.brandName} is operated by {COMPANY.legalName}, a{" "}
              {COMPANY.entityType.toLowerCase()}. Registered with the IRS for federal tax
              purposes.
            </p>
          </div>
          <a
            href={COMPANY.wyomingVerifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex shrink-0 items-center gap-1.5 text-sm font-medium transition-colors ${
              isDark
                ? "text-[#005CE6] hover:text-blue-300"
                : "text-[#005CE6] hover:text-[#0047B3]"
            }`}
          >
            Verify Wyoming registration
            <ExternalLink size={14} aria-hidden />
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {trustFacts.map((fact) => (
            <div
              key={fact.label}
              className={`rounded-xl border p-4 ${
                isDark ? "border-white/10 bg-white/5" : "border-gray-200 bg-white"
              }`}
            >
              <p
                className={`mb-1 text-xs font-medium uppercase tracking-wider ${
                  isDark ? "text-gray-500" : "text-gray-400"
                }`}
              >
                {fact.label}
              </p>
              <p
                className={`text-sm font-semibold ${isDark ? "text-white" : "text-gray-900"}`}
              >
                {fact.value}
              </p>
            </div>
          ))}
        </div>

        <p className={`mt-4 text-xs ${isDark ? "text-gray-500" : "text-gray-400"}`}>
          Formation documents available upon request for qualified partners and investors.{" "}
          <Link
            href="/trust"
            className={`underline-offset-2 hover:underline ${
              isDark ? "text-gray-400 hover:text-gray-300" : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Trust center
          </Link>
        </p>
      </div>
    </section>
  );
}
