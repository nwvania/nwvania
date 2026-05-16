import { NextResponse } from "next/server";
import { type ZodSchema } from "zod";
import { rateLimit, getIP } from "@/lib/rateLimit";
import { logger } from "@/lib/logger";
import { validateOrigin, verifyCsrfToken, CSRF_COOKIE_NAME, CSRF_HEADER_NAME } from "@/lib/csrf";

interface HandlerOptions<T> {
  tag: string;
  schema: ZodSchema<T>;
  handle: (data: T, ctx: { ip: string; start: number }) => Promise<NextResponse>;
}

export function createApiHandler<T>({ tag, schema, handle }: HandlerOptions<T>) {
  return async function POST(req: Request): Promise<NextResponse> {
    const ip = getIP(req);
    const start = Date.now();

    if (!validateOrigin(req)) {
      logger.warn(`${tag}: invalid origin`, { ip, origin: req.headers.get("origin") });
      return NextResponse.json({ error: "Forbidden." }, { status: 403 });
    }

    const csrfHeader = req.headers.get(CSRF_HEADER_NAME);
    const csrfCookie = req.headers.get("cookie")
      ?.split(";").find((c) => c.trim().startsWith(`${CSRF_COOKIE_NAME}=`))
      ?.split("=").slice(1).join("=").trim() ?? null;
    if (!(await verifyCsrfToken(csrfHeader)) || csrfHeader !== csrfCookie) {
      logger.warn(`${tag}: invalid csrf token`, { ip });
      return NextResponse.json({ error: "Invalid request." }, { status: 403 });
    }

    const { allowed, retryAfter } = await rateLimit(ip);
    if (!allowed) {
      logger.warn(`${tag}: rate limited`, { ip });
      return NextResponse.json(
        { error: "Too many requests. Please wait before trying again." },
        { status: 429, headers: { "Retry-After": String(retryAfter) } }
      );
    }

    let body: unknown;
    try {
      body = await req.json();
    } catch {
      logger.warn(`${tag}: invalid JSON body`, { ip });
      return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
    }

    const result = schema.safeParse(body);
    if (!result.success) {
      logger.warn(`${tag}: validation failed`, { ip, errors: result.error.flatten().fieldErrors });
      return NextResponse.json(
        { error: "Validation failed.", issues: result.error.flatten().fieldErrors },
        { status: 422 }
      );
    }

    return handle(result.data, { ip, start });
  };
}
