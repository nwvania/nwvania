import type { Metadata } from "next";
import { Inter, Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/ui/CookieBanner";
import { COMPANY } from "@/lib/company";
import { LangProvider } from "@/lib/i18n/LangContext";
import HtmlLangSync from "@/components/ui/HtmlLangSync";
import ConsentAwareAnalytics from "@/components/ui/ConsentAwareAnalytics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const notoArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-arabic",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nwvania.com"),
  title: {
    default: "Nwvania — The Unified Digital Ecosystem",
    template: "%s | Nwvania",
  },
  description:
    "Nwvania is a comprehensive systemic platform unifying digital services, operations, business, partnerships, institutions, content, mobility, and opportunities within one interconnected structure. One platform. 20 sectors. 220 applications.",
  keywords: [
    "Nwvania",
    "digital ecosystem",
    "unified platform",
    "digital services",
    "business platform",
    "enterprise software",
    "digital transformation",
    "نوفانيا",
    "منصة رقمية",
    "نظام بيئي رقمي",
  ],
  other: {
    "description:ar":
      "نوفانيا منصة رقمية شاملة توحّد الخدمات الرقمية والعمليات والفرص ضمن بنية واحدة متكاملة. منصة واحدة. ٢٠ قطاعاً. ٢٢٠ تطبيقاً.",
  },
  authors: [{ name: COMPANY.legalName }],
  creator: COMPANY.legalName,
  publisher: COMPANY.legalName,
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.svg",
    apple: [{ url: "/icon-192.png", sizes: "192x192", type: "image/png" }],
  },
  openGraph: {
    title: "Nwvania — The Unified Digital Ecosystem",
    description: "One platform. 20 sectors. 220 applications.",
    type: "website",
    locale: "en_US",
    siteName: "Nwvania",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nwvania — The Unified Digital Ecosystem",
    description: "One platform. 20 sectors. 220 applications.",
    creator: "@nwvania",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    languages: {
      en: "https://nwvania.com",
      ar: "https://nwvania.com",
    },
  },
  manifest: "/manifest.json",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: COMPANY.brandName,
  legalName: COMPANY.legalName,
  url: "https://nwvania.com",
  foundingDate: COMPANY.formedDateISO,
  description:
    "Nwvania is a comprehensive systemic platform unifying digital services, operations, and opportunities within one interconnected structure. One platform. 20 sectors. 220 applications.",
  logo: {
    "@type": "ImageObject",
    url: "https://nwvania.com/icon-512.png",
    width: 512,
    height: 512,
  },
  image: "https://nwvania.com/icon-512.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: COMPANY.legalAddress.street,
    addressLocality: COMPANY.legalAddress.city,
    addressRegion: COMPANY.legalAddress.state,
    postalCode: COMPANY.legalAddress.zip,
    addressCountry: COMPANY.legalAddress.country,
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "hello@nwvania.com",
      availableLanguage: ["English", "Arabic"],
    },
    {
      "@type": "ContactPoint",
      contactType: "technical support",
      email: "developers@nwvania.com",
      availableLanguage: ["English"],
    },
  ],
  sameAs: [
    "https://x.com/nwvania",
    "https://linkedin.com/company/nwvania",
  ],
  numberOfEmployees: { "@type": "QuantitativeValue", value: 1 },
  knowsAbout: [
    "Digital Platform",
    "Unified Ecosystem",
    "Digital Services",
    "Enterprise Software",
    "Mobile Applications",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${notoArabic.variable}`}>
      <head>
        <link rel="preconnect" href="https://va.vercel-scripts.com" />
        <link rel="dns-prefetch" href="https://vitals.vercel-insights.com" />
      </head>
      <body className="bg-white text-gray-900 antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <LangProvider>
          <HtmlLangSync />
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[99999] focus:bg-[#005CE6] focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-medium"
          >
            Skip to main content
          </a>
          <Navbar />
          <main id="main-content" className="min-h-screen">{children}</main>
          <Footer />
          <CookieBanner />
          <ConsentAwareAnalytics />
        </LangProvider>
      </body>
    </html>
  );
}
