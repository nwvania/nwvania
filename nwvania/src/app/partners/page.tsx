import type { Metadata } from "next";
import PartnersContent from "./PartnersContent";

export const metadata: Metadata = {
  title: "Partners",
  description: "Become a Nwvania partner — for freelancers, agencies, technology companies, and service providers.",
  alternates: { canonical: "https://nwvania.com/partners" },
  openGraph: {
    title: "Partners | Nwvania",
    description: "Become a Nwvania partner — for freelancers, agencies, technology companies, and service providers.",
    url: "https://nwvania.com/partners",
    siteName: "Nwvania",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Partners | Nwvania",
    description: "Become a Nwvania partner — for agencies, technology companies, and service providers.",
    creator: "@nwvania",
    site: "@nwvania",
  },
};

export default function PartnersPage() {
  return <PartnersContent />;
}
