import { NextRequest, NextResponse } from "next/server";
import { generateCsrfToken, CSRF_COOKIE_NAME } from "@/lib/csrf";

const IS_DEV = process.env.NODE_ENV === "development";

export function middleware(req: NextRequest) {
  const res = NextResponse.next();

  // ── CSRF cookie: set if missing ────────────────────────────
  if (!req.cookies.get(CSRF_COOKIE_NAME)) {
    const token = generateCsrfToken();
    res.cookies.set(CSRF_COOKIE_NAME, token, {
      httpOnly: false,      // client JS must read it to send as header
      sameSite: "strict",
      secure: !IS_DEV,
      path: "/",
      maxAge: 60 * 60,      // 1 hour
    });
  }

  // ── Security headers (supplement next.config.ts) ──────────
  res.headers.set("X-Content-Type-Options", "nosniff");
  res.headers.set("X-Frame-Options", "DENY");
  res.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");

  return res;
}

export const config = {
  matcher: [
    // Run on all routes except static files and Next.js internals
    "/((?!_next/static|_next/image|favicon|icon-|manifest|robots|sitemap|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff2?|ttf)).*)",
  ],
};
