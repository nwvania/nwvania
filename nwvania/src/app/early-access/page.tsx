import type { Metadata } from "next";
import EarlyAccessContent from "./EarlyAccessContent";

export const metadata: Metadata = {
  title: "Early Access",
  description: "Register for early access to Nwvania — the unified digital ecosystem launching soon.",
  alternates: { canonical: "https://nwvania.com/early-access" },
  openGraph: {
    title: "Early Access | Nwvania",
    description: "Register for early access to Nwvania — the unified digital ecosystem launching soon.",
    url: "https://nwvania.com/early-access",
    siteName: "Nwvania",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Early Access | Nwvania",
    description: "Register for early access to Nwvania — launching soon.",
    creator: "@nwvania",
    site: "@nwvania",
  },
};

export default function EarlyAccessPage() {
  return <EarlyAccessContent />;
}
