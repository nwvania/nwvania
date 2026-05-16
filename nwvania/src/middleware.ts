import { NextRequest, NextResponse } from "next/server";
import { generateCsrfToken, CSRF_COOKIE_NAME } from "@/lib/csrf";

const IS_DEV = process.env.NODE_ENV === "development";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  // Set CSRF cookie if missing
  if (!req.cookies.get(CSRF_COOKIE_NAME)) {
    const token = await generateCsrfToken();
    res.cookies.set(CSRF_COOKIE_NAME, token, {
      httpOnly: false,
      sameSite: "strict",
      secure: !IS_DEV,
      path: "/",
      maxAge: 60 * 60,
    });
  }

  return res;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon|icon-|manifest|robots|sitemap|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff2?|ttf)).*)",
  ],
};
