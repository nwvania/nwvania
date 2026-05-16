const ALLOWED_ORIGINS = [
  "https://nwvania.com",
  "https://www.nwvania.com",
  // dev
  "http://localhost:3000",
  "http://localhost:3001",
];

export function validateOrigin(req: Request): boolean {
  const origin = req.headers.get("origin");
  const referer = req.headers.get("referer");

  // Same-origin requests from server (no origin header) — allow
  if (!origin && !referer) return true;

  if (origin) return ALLOWED_ORIGINS.includes(origin);

  // Fallback: check referer host
  if (referer) {
    try {
      const url = new URL(referer);
      return ALLOWED_ORIGINS.some((o) => {
        const allowed = new URL(o);
        return url.host === allowed.host;
      });
    } catch {
      return false;
    }
  }

  return false;
}
