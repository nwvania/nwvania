import type { Metadata } from "next";
import AppsContent from "./AppsContent";

export const metadata: Metadata = {
  title: "Applications",
  description: "All 220 applications within the Nwvania consumer platform, organized across 20 sectors.",
  alternates: { canonical: "https://nwvania.com/apps" },
  openGraph: {
    title: "Applications | Nwvania",
    description: "All 220 applications within the Nwvania platform, organized across 20 sectors.",
    url: "https://nwvania.com/apps",
    siteName: "Nwvania",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Applications | Nwvania",
    description: "220 applications across 20 sectors — all within the Nwvania unified platform.",
    creator: "@nwvania",
    site: "@nwvania",
  },
};

export default function AppsPage() {
  return <AppsContent />;
}
