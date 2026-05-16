import type { MetadataRoute } from "next";

const BASE_URL = "https://nwvania.com";

type Freq = MetadataRoute.Sitemap[number]["changeFrequency"];

const routes: Array<{ url: string; priority: number; freq: Freq }> = [
  { url: "/",             priority: 1.0, freq: "weekly" },
  { url: "/about",        priority: 0.9, freq: "monthly" },
  { url: "/platform",     priority: 0.9, freq: "monthly" },
  { url: "/sectors",      priority: 0.9, freq: "monthly" },
  { url: "/trust",        priority: 0.9, freq: "monthly" },
  { url: "/apps",         priority: 0.8, freq: "monthly" },
  { url: "/ecosystem",    priority: 0.8, freq: "monthly" },
  { url: "/business",     priority: 0.8, freq: "monthly" },
  { url: "/security",     priority: 0.8, freq: "monthly" },
  { url: "/use-cases",    priority: 0.8, freq: "monthly" },
  { url: "/invest",       priority: 0.8, freq: "monthly" },
  { url: "/early-access", priority: 0.8, freq: "monthly" },
  { url: "/news",         priority: 0.7, freq: "weekly" },
  { url: "/developers",   priority: 0.7, freq: "monthly" },
  { url: "/partners",     priority: 0.7, freq: "monthly" },
  { url: "/careers",      priority: 0.6, freq: "weekly" },
  { url: "/team",         priority: 0.6, freq: "monthly" },
  { url: "/contact",      priority: 0.6, freq: "yearly" },
  { url: "/legal",        priority: 0.5, freq: "yearly" },
  { url: "/privacy",      priority: 0.5, freq: "yearly" },
  { url: "/terms",        priority: 0.5, freq: "yearly" },
  { url: "/cookies",      priority: 0.4, freq: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map(({ url, priority, freq }) => ({
    url: `${BASE_URL}${url}`,
    lastModified: now,
    changeFrequency: freq,
    priority,
    alternates: {
      languages: {
        en: `${BASE_URL}${url}`,
        ar: `${BASE_URL}${url}`,
      },
    },
  }));
}
