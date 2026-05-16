import { COMPANY } from "@/lib/company";
import { ShieldCheck } from "lucide-react";

/**
 * Public-facts certificate card derived from Wyoming Certificate of Organization.
 * Displays only information suitable for the public website (no signatures, agents, or personal data).
 */
export default function FormationCertificate() {
  return (
    <div className="relative mx-auto max-w-2xl">
      <div
        className="overflow-hidden rounded-2xl border-2 border-amber-200/80 bg-gradient-to-b from-amber-50 via-white to-amber-50/50 shadow-xl shadow-amber-900/5"
        role="img"
        aria-label={`Wyoming Certificate of Organization for ${COMPANY.legalName}`}
      >
        {/* Header band */}
        <div className="border-b border-amber-200/60 bg-amber-900/5 px-8 py-6 text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-amber-900/70">
            State of Wyoming
          </p>
          <p className="mt-1 text-xs font-medium text-amber-950/80">
            Office of the Secretary of State
          </p>
          <div className="mx-auto my-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-amber-300/80 bg-white">
            <ShieldCheck className="h-6 w-6 text-amber-800" strokeWidth={1.5} aria-hidden />
          </div>
          <h2 className="font-serif text-xl font-bold tracking-wide text-amber-950 md:text-2xl">
            Certificate of Organization
          </h2>
        </div>

        {/* Body */}
        <div className="px-8 py-8 text-center">
          <p className="mb-2 text-xs uppercase tracking-widest text-gray-500">
            Limited Liability Company
          </p>
          <p className="mb-8 font-serif text-3xl font-bold text-gray-900 md:text-4xl">
            {COMPANY.legalName}
          </p>

          <dl className="mx-auto max-w-sm space-y-4 text-left text-sm">
            <div className="flex justify-between gap-4 border-b border-gray-100 pb-3">
              <dt className="text-gray-500">Filed</dt>
              <dd className="font-semibold text-gray-900">{COMPANY.formedDate}</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-gray-100 pb-3">
              <dt className="text-gray-500">Wyoming Filing ID</dt>
              <dd className="font-mono font-semibold text-gray-900">{COMPANY.filingId}</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-gray-100 pb-3">
              <dt className="text-gray-500">Jurisdiction</dt>
              <dd className="font-semibold text-gray-900">{COMPANY.state}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-gray-500">Entity type</dt>
              <dd className="text-right font-semibold text-gray-900">{COMPANY.managementType}</dd>
            </div>
          </dl>

          <p className="mt-8 text-xs leading-relaxed text-gray-400">
            Public filing facts as recorded with the Wyoming Secretary of State. This is a
            website reproduction for transparency — not a scanned government document.
          </p>
        </div>

        {/* Footer seal strip */}
        <div className="border-t border-amber-200/60 bg-amber-900/5 px-8 py-4 text-center">
          <p className="text-[10px] font-medium uppercase tracking-widest text-amber-900/60">
            Filing requirements fulfilled · Certificate issued
          </p>
        </div>
      </div>
    </div>
  );
}
