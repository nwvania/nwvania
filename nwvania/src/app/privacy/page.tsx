import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Nwvania LLC collects, uses, and protects your personal data. GDPR and CCPA compliant.",
  alternates: {
    canonical: "https://nwvania.com/privacy",
    languages: {
      en: "https://nwvania.com/privacy",
      ar: "https://nwvania.com/ar/privacy",
    },
  },
  openGraph: {
    title: "Privacy Policy | Nwvania",
    description: "How Nwvania LLC collects, uses, and protects your personal data.",
    url: "https://nwvania.com/privacy",
    siteName: "Nwvania",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  redirect("/legal#privacy");
}
