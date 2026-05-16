import type { Metadata } from "next";
import DevelopersContent from "./DevelopersContent";

export const metadata: Metadata = {
  title: "Developers",
  description:
    "Build on Nwvania. Access the developer platform, API documentation, sandbox environments, and technical integration tools.",
  alternates: { canonical: "https://nwvania.com/developers" },
  openGraph: {
    title: "Developers | Nwvania",
    description: "Build on Nwvania. Access the developer platform, API documentation, and sandbox environments.",
    url: "https://nwvania.com/developers",
    siteName: "Nwvania",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Developers | Nwvania",
    description: "Build on Nwvania. API docs, sandbox environments, and developer tools.",
    creator: "@nwvania",
    site: "@nwvania",
  },
};

export default function DevelopersPage() {
  return <DevelopersContent />;
}
