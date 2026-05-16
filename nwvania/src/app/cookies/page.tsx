import type { Metadata } from "next";
import CookiesContent from "./CookiesContent";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Learn about how Nwvania uses cookies and local storage — essential only, no third-party tracking.",
  alternates: { canonical: "https://nwvania.com/cookies" },
  openGraph: {
    title: "Cookie Policy | Nwvania",
    description: "How Nwvania uses cookies and local storage — essential only, no third-party tracking.",
    url: "https://nwvania.com/cookies",
    siteName: "Nwvania",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cookie Policy | Nwvania",
    description: "How Nwvania uses cookies — essential only, no third-party tracking.",
    creator: "@nwvania",
    site: "@nwvania",
  },
};

export default function CookiesPage() {
  return <CookiesContent />;
}
