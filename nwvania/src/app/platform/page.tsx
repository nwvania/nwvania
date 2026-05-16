import type { Metadata } from "next";
import PlatformContent from "./PlatformContent";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "Understand the Nwvania platform architecture: two distinct layers — one consumer application and ten operational platforms.",
  alternates: { canonical: "https://nwvania.com/platform" },
  openGraph: {
    title: "Platform | Nwvania",
    description: "Understand the Nwvania platform architecture: two layers — one consumer application and ten operational platforms.",
    url: "https://nwvania.com/platform",
    siteName: "Nwvania",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Platform | Nwvania",
    description: "Understand the Nwvania platform architecture: two layers — consumer app and ten operational platforms.",
    creator: "@nwvania",
    site: "@nwvania",
  },
};

export default function PlatformPage() {
  return <PlatformContent />;
}
