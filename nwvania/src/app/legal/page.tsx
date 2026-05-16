import type { Metadata } from "next";
import LegalContent from "./LegalContent";

export const metadata: Metadata = {
  title: "Legal",
  description:
    "Privacy Policy, Terms of Service, and company information for Nwvania LLC.",
  alternates: { canonical: "https://nwvania.com/legal" },
  openGraph: {
    title: "Legal | Nwvania",
    description: "Privacy Policy, Terms of Service, and company information for Nwvania LLC.",
    url: "https://nwvania.com/legal",
    siteName: "Nwvania",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal | Nwvania",
    description: "Privacy Policy and Terms of Service for Nwvania LLC.",
    creator: "@nwvania",
    site: "@nwvania",
  },
};

export default function LegalPage() {
  return <LegalContent />;
}
