import { Resend } from "resend";
import { NextResponse } from "next/server";
import { z } from "zod";
import { rateLimit, getIP } from "@/lib/rateLimit";
import { logger } from "@/lib/logger";
import { validateOrigin, verifyCsrfToken, CSRF_COOKIE_NAME, CSRF_HEADER_NAME } from "@/lib/csrf";


const ContactSchema = z.object({
  name: z.string().min(2).max(100).trim(),
  email: z.string().email().max(254).trim().toLowerCase(),
  organization: z.string().max(200).trim().optional().default(""),
  inquiryType: z.string().max(100).trim().optional().default("General Inquiry"),
  message: z.string().min(10).max(5000).trim(),
  website: z.string().max(0, "Bot detected").optional().default(""),
});

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const TO = process.env.CONTACT_EMAIL!;
  const ip = getIP(req);
  const start = Date.now();

  if (!validateOrigin(req)) {
    logger.warn("contact: invalid origin", { ip, origin: req.headers.get("origin") });
    return NextResponse.json({ error: "Forbidden." }, { status: 403 });
  }

  const csrfHeader = req.headers.get(CSRF_HEADER_NAME);
  const csrfCookie = req.headers.get("cookie")
    ?.split(";").find((c) => c.trim().startsWith(`${CSRF_COOKIE_NAME}=`))
    ?.split("=").slice(1).join("=").trim() ?? null;
  if (!verifyCsrfToken(csrfHeader) || csrfHeader !== csrfCookie) {
    logger.warn("contact: invalid csrf token", { ip });
    return NextResponse.json({ error: "Invalid request." }, { status: 403 });
  }

  const { allowed, retryAfter } = await rateLimit(ip);
  if (!allowed) {
    logger.warn("contact: rate limited", { ip });
    return NextResponse.json(
      { error: "Too many requests. Please wait before trying again." },
      { status: 429, headers: { "Retry-After": String(retryAfter) } }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    logger.warn("contact: invalid JSON body", { ip });
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const result = ContactSchema.safeParse(body);
  if (!result.success) {
    logger.warn("contact: validation failed", { ip, errors: result.error.flatten().fieldErrors });
    return NextResponse.json(
      { error: "Validation failed.", issues: result.error.flatten().fieldErrors },
      { status: 422 }
    );
  }

  const { name, email, organization, inquiryType, message, website } = result.data;

  if (website) {
    logger.warn("contact: honeypot triggered", { ip });
    return NextResponse.json({ ok: true });
  }

  try {
    await resend.emails.send({
      from: "Nwvania Contact <onboarding@resend.dev>",
      to: TO,
      replyTo: email,
      subject: `[Contact] ${inquiryType} — ${name}`,
      html: `
        <h2 style="font-family:sans-serif;color:#0f172a;">New Contact Form Submission</h2>
        <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse;width:100%">
          <tr><td style="padding:6px 12px;font-weight:600;color:#64748b;">Name</td><td style="padding:6px 12px;">${name}</td></tr>
          <tr><td style="padding:6px 12px;font-weight:600;color:#64748b;">Email</td><td style="padding:6px 12px;">${email}</td></tr>
          ${organization ? `<tr><td style="padding:6px 12px;font-weight:600;color:#64748b;">Organization</td><td style="padding:6px 12px;">${organization}</td></tr>` : ""}
          <tr><td style="padding:6px 12px;font-weight:600;color:#64748b;">Inquiry Type</td><td style="padding:6px 12px;">${inquiryType}</td></tr>
        </table>
        <hr style="margin:16px 0;border:none;border-top:1px solid #e2e8f0;" />
        <p style="font-family:sans-serif;font-size:14px;font-weight:600;color:#64748b;">Message</p>
        <p style="font-family:sans-serif;font-size:14px;color:#0f172a;white-space:pre-line;">${message}</p>
      `,
    });

    logger.info("contact: email sent", { ip, inquiryType, durationMs: Date.now() - start });
    return NextResponse.json({ ok: true });
  } catch (err) {
    logger.error("contact: resend failed", { ip, error: String(err), durationMs: Date.now() - start });
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
}
