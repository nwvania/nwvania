import type { Metadata } from "next";
import EcosystemContent from "./EcosystemContent";

export const metadata: Metadata = {
  title: "Ecosystem",
  description:
    "The Nwvania operational ecosystem: 10 professional and institutional platforms for businesses, enterprises, governments, developers, and operators.",
  alternates: { canonical: "https://nwvania.com/ecosystem" },
  openGraph: {
    title: "Ecosystem | Nwvania",
    description: "10 professional and institutional platforms for businesses, enterprises, governments, and developers.",
    url: "https://nwvania.com/ecosystem",
    siteName: "Nwvania",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ecosystem | Nwvania",
    description: "10 professional platforms for businesses, enterprises, governments, and developers.",
    creator: "@nwvania",
    site: "@nwvania",
  },
};

export default function EcosystemPage() {
  return <EcosystemContent />;
}
