import type { Metadata } from "next";
import TeamContent from "./TeamContent";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the founding team behind Nwvania — building the unified digital ecosystem.",
  alternates: { canonical: "https://nwvania.com/team" },
  openGraph: {
    title: "Team | Nwvania",
    description: "Meet the founding team behind Nwvania — building the unified digital ecosystem.",
    url: "https://nwvania.com/team",
    siteName: "Nwvania",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Team | Nwvania",
    description: "Meet the founding team behind Nwvania — building the unified digital ecosystem.",
    creator: "@nwvania",
    site: "@nwvania",
  },
};

export default function TeamPage() {
  return <TeamContent />;
}
