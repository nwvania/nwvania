import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "Nwvania is a comprehensive systemic platform built to unify digital services, operations, and opportunities within one interconnected structure.",
  alternates: { canonical: "https://nwvania.com/about" },
  openGraph: {
    title: "About | Nwvania",
    description: "Nwvania is a comprehensive systemic platform built to unify digital services within one interconnected structure.",
    url: "https://nwvania.com/about",
    siteName: "Nwvania",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Nwvania",
    description: "Nwvania — a comprehensive systemic platform unifying digital services within one interconnected structure.",
    creator: "@nwvania",
    site: "@nwvania",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
