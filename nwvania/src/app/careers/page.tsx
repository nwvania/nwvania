import type { Metadata } from "next";
import CareersContent from "./CareersContent";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join the Nwvania team — we are building the unified digital ecosystem of the future.",
  alternates: { canonical: "https://nwvania.com/careers" },
  openGraph: {
    title: "Careers | Nwvania",
    description: "Join the Nwvania team — we are building the unified digital ecosystem of the future.",
    url: "https://nwvania.com/careers",
    siteName: "Nwvania",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers | Nwvania",
    description: "Join the Nwvania team — building the unified digital ecosystem of the future.",
    creator: "@nwvania",
    site: "@nwvania",
  },
};

export default function CareersPage() {
  return <CareersContent />;
}
