import type { Metadata } from "next";
import TrustContent from "./TrustContent";

export const metadata: Metadata = {
  title: "Trust & Verification",
  description:
    "Verify Nwvania LLC registration, formation details, and corporate documentation. Wyoming limited liability company.",
  alternates: { canonical: "https://nwvania.com/trust" },
  openGraph: {
    title: "Trust & Verification | Nwvania",
    description: "Verify Nwvania LLC registration and formation details. Wyoming limited liability company.",
    url: "https://nwvania.com/trust",
    siteName: "Nwvania",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trust & Verification | Nwvania",
    description: "Verify Nwvania LLC registration. Wyoming limited liability company — formation 2026.",
    creator: "@nwvania",
    site: "@nwvania",
  },
};

export default function TrustPage() {
  return <TrustContent />;
}
