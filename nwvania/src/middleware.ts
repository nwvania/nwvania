import { NextRequest, NextResponse } from "next/server";
import { generateCsrfToken, CSRF_COOKIE_NAME } from "@/lib/csrf";

const IS_DEV = process.env.NODE_ENV === "development";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  // Set CSRF cookie if missing
  // sameSite: "lax" instead of "strict" for Safari ITP compatibility
  if (!req.cookies.get(CSRF_COOKIE_NAME)) {
    try {
      const token = await generateCsrfToken();
      res.cookies.set(CSRF_COOKIE_NAME, token, {
        httpOnly: false,   // client JS must read it
        sameSite: "lax",  // "strict" breaks Safari navigation from external links
        secure: !IS_DEV,
        path: "/",
        maxAge: 60 * 60,
      });
    } catch {
      // Never block page load due to CSRF cookie failure
    }
  }

  return res;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon|icon-|manifest|robots|sitemap|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff2?|ttf)).*)",
  ],
};
