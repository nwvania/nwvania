import type { Metadata } from "next";
import HomeContent from "./HomeContent";

export const metadata: Metadata = {
  title: "Nwvania — The Unified Digital Ecosystem",
  alternates: { canonical: "https://nwvania.com" },
  openGraph: {
    title: "Nwvania — The Unified Digital Ecosystem",
    description: "One platform. 20 sectors. 220 applications.",
    url: "https://nwvania.com",
    siteName: "Nwvania",
    type: "website",
  },
};

export default function HomePage() {
  return <HomeContent />;
}
