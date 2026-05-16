import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the Nwvania team — for partnerships, investment, developer integration, and general inquiries.",
  alternates: { canonical: "https://nwvania.com/contact" },
  openGraph: {
    title: "Contact | Nwvania",
    description: "Get in touch with the Nwvania team for partnerships, investment, and general inquiries.",
    url: "https://nwvania.com/contact",
    siteName: "Nwvania",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Nwvania",
    description: "Get in touch with Nwvania — for partnerships, investment, and general inquiries.",
    creator: "@nwvania",
    site: "@nwvania",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
