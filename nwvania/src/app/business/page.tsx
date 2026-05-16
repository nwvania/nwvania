import type { Metadata } from "next";
import BusinessContent from "./BusinessContent";

export const metadata: Metadata = {
  title: "Business",
  description: "Nwvania Business — the operational platform for small and medium businesses, restaurants, clinics, and retail.",
  alternates: { canonical: "https://nwvania.com/business" },
  openGraph: {
    title: "Nwvania Business",
    description: "The operational platform for small and medium businesses, restaurants, clinics, and retail.",
    url: "https://nwvania.com/business",
    siteName: "Nwvania",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nwvania Business",
    description: "The operational platform for small and medium businesses, restaurants, clinics, and retail.",
    creator: "@nwvania",
    site: "@nwvania",
  },
};

export default function BusinessPage() {
  return <BusinessContent />;
}
