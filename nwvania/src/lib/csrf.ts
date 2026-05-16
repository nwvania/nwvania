// Edge-compatible CSRF using Web Crypto API (no Node.js crypto)

const CSRF_SECRET = process.env.CSRF_SECRET ?? "nwvania-csrf-dev-secret-32chars!!";
export const CSRF_COOKIE_NAME = "nwvania-csrf";
export const CSRF_HEADER_NAME = "x-csrf-token";
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
    } catch { return false; }
  }
  return false;
}

// ── Web Crypto helpers ────────────────────────────────────────

async function getKey(): Promise<CryptoKey> {
  const enc = new TextEncoder();
  return crypto.subtle.importKey(
    "raw",
    enc.encode(CSRF_SECRET),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"]
  );
}

async function sign(data: string): Promise<string> {
  const key = await getKey();
  const buf = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(data));
  return Array.from(new Uint8Array(buf)).map((b) => b.toString(16).padStart(2, "0")).join("");
}

// ── Token generation & verification ──────────────────────────

export async function generateCsrfToken(): Promise<string> {
  const arr = new Uint8Array(24);
  crypto.getRandomValues(arr);
  const token = Array.from(arr).map((b) => b.toString(16).padStart(2, "0")).join("");
  const ts = Date.now();
  const sig = await sign(`${token}:${ts}`);
  return `${token}:${ts}:${sig}`;
}

export async function verifyCsrfToken(raw: string | null): Promise<boolean> {
  if (!raw) return false;
  const parts = raw.split(":");
  if (parts.length !== 3) return false;
  const [token, tsStr, sig] = parts;
  const ts = Number(tsStr);
  if (isNaN(ts) || Date.now() - ts > TOKEN_TTL_MS) return false;
  const expected = await sign(`${token}:${ts}`);
  return sig === expected;
}
