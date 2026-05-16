import type { Metadata } from "next";
import SectorsContent from "./SectorsContent";

export const metadata: Metadata = {
  title: "Sectors",
  description:
    "Explore all 20 sectors of the Nwvania platform — covering every dimension of life and commerce, from finance to health, education, real estate, and deep technology.",
  alternates: { canonical: "https://nwvania.com/sectors" },
  openGraph: {
    title: "Sectors | Nwvania",
    description: "Explore all 20 sectors of the Nwvania platform, covering every dimension of life and commerce.",
    url: "https://nwvania.com/sectors",
    siteName: "Nwvania",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sectors | Nwvania",
    description: "Explore all 20 sectors of the Nwvania platform, covering every dimension of life and commerce.",
    creator: "@nwvania",
    site: "@nwvania",
  },
};

export default function SectorsPage() {
  return <SectorsContent />;
}
