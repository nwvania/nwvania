import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Nwvania LLC — governing access to and use of the Nwvania platform and services.",
  alternates: {
    canonical: "https://nwvania.com/terms",
    languages: {
      en: "https://nwvania.com/terms",
      ar: "https://nwvania.com/ar/terms",
    },
  },
  openGraph: {
    title: "Terms of Service | Nwvania",
    description: "Terms of Service governing access to and use of the Nwvania platform.",
    url: "https://nwvania.com/terms",
    siteName: "Nwvania",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  redirect("/legal#terms");
}
