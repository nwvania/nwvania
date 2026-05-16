# Changelog

All notable changes to Nwvania are documented here.
Format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).
Versioning follows [Semantic Versioning](https://semver.org/).

---

## [0.9.0] — 2026-05-16 — Pre-Launch

### Added
- 20 bilingual pages (English + Arabic) across all platform sections
- 15 full bilingual news articles
- Contact and Early Access forms with Resend email integration
- GDPR-compliant mandatory Cookie Banner with focus trap
- Comprehensive security headers (CSP, HSTS, X-Frame-Options, Referrer-Policy)
- Rate limiting (5 req/min per IP) on all API routes
- Honeypot anti-bot protection on forms
- Zod server-side input validation
- CSRF origin validation on API routes
- PWA manifest with PNG icons (192×192, 512×512)
- Dynamic `lang` + `dir` attributes on `<html>` per language
- Canonical URLs, hreflang, Open Graph, and Twitter Cards for all 20 pages
- Article JSON-LD schema for News articles
- Organization JSON-LD schema (logo, contactPoint, sameAs)
- Sitemap with hreflang alternates for all 20 routes
- security.txt (RFC 9116)
- WCAG 2.1 AA: skip navigation, focus trap, ARIA labels, color contrast
- Custom 404 and 500 error pages (bilingual)
- Loading skeleton and Error Boundary
- Structured API request logging with IP hashing (GDPR Art. 5)
- Sentry error tracking integration
- `/api/health` uptime monitoring endpoint
- Vercel Analytics (consent-gated — loads only after cookie acceptance)

### Company
- Nwvania LLC registered in Wyoming, USA (Filing ID: 2026-001870025)
- EIN assigned February 3, 2026

---

## [Unreleased]

### Planned for v1.0.0 (Public Launch)
- Domain email @nwvania.com via Resend
- DNS SPF + DKIM + DMARC records
- Sentry DSN configuration in production
- Uptime monitoring via BetterUptime or UptimeRobot
- Google Search Console sitemap submission
- Production Lighthouse CI baseline
