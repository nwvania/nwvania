import type { Metadata } from "next";
import NewsContent from "./NewsContent";

export const metadata: Metadata = {
  title: "News",
  description: "The latest news and announcements from Nwvania.",
  alternates: { canonical: "https://nwvania.com/news" },
  openGraph: {
    title: "News | Nwvania",
    description: "The latest news and announcements from Nwvania.",
    url: "https://nwvania.com/news",
    siteName: "Nwvania",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "News | Nwvania",
    description: "The latest news and announcements from Nwvania — platform updates, milestones, and insights.",
    creator: "@nwvania",
    site: "@nwvania",
  },
};

export default function NewsPage() {
  return <NewsContent />;
}
