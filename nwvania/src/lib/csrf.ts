import { randomBytes, createHmac } from "crypto";

const CSRF_SECRET = process.env.CSRF_SECRET ?? "nwvania-csrf-dev-secret";
const CSRF_COOKIE = "nwvania-csrf";
const CSRF_HEADER = "x-csrf-token";
const TOKEN_TTL_MS = 60 * 60 * 1000; // 1 hour

const ALLOWED_ORIGINS = [
  "https://nwvania.com",
  "https://www.nwvania.com",
  "http://localhost:3000",
  "http://localhost:3001",
];

// ── Origin check ──────────────────────────────────────────────

export function validateOrigin(req: Request): boolean {
  const origin = req.headers.get("origin");
  const referer = req.headers.get("referer");

  if (!origin && !referer) return true;
  if (origin) return ALLOWED_ORIGINS.includes(origin);

  if (referer) {
    try {
      const url = new URL(referer);
      return ALLOWED_ORIGINS.some((o) => new URL(o).host === url.host);
    } catch {
      return false;
    }
  }
  return false;
}

// ── CSRF double-submit cookie ──────────────────────────────────

function sign(token: string, ts: number): string {
  return createHmac("sha256", CSRF_SECRET).update(`${token}:${ts}`).digest("hex");
}

/** Generate a signed CSRF token string: `<random>:<ts>:<sig>` */
export function generateCsrfToken(): string {
  const token = randomBytes(24).toString("hex");
  const ts = Date.now();
  const sig = sign(token, ts);
  return `${token}:${ts}:${sig}`;
}

/** Validate a CSRF token against its signature and TTL */
export function verifyCsrfToken(raw: string | null): boolean {
  if (!raw) return false;
  const parts = raw.split(":");
  if (parts.length !== 3) return false;
  const [token, tsStr, sig] = parts;
  const ts = Number(tsStr);
  if (isNaN(ts) || Date.now() - ts > TOKEN_TTL_MS) return false;
  const expected = sign(token, ts);
  return sig === expected;
}

export const CSRF_COOKIE_NAME = CSRF_COOKIE;
export const CSRF_HEADER_NAME = CSRF_HEADER;
