import type { Metadata } from "next";
import InvestContent from "./InvestContent";

export const metadata: Metadata = {
  title: "Invest",
  description:
    "Invest in Nwvania — the unified digital ecosystem representing a rare infrastructure opportunity in the digital services sector.",
  alternates: { canonical: "https://nwvania.com/invest" },
  openGraph: {
    title: "Invest | Nwvania",
    description: "Invest in Nwvania — a rare infrastructure opportunity in the digital services sector.",
    url: "https://nwvania.com/invest",
    siteName: "Nwvania",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Invest | Nwvania",
    description: "A rare infrastructure opportunity in the digital services sector. One platform. 20 sectors.",
    creator: "@nwvania",
    site: "@nwvania",
  },
};

export default function InvestPage() {
  return <InvestContent />;
}