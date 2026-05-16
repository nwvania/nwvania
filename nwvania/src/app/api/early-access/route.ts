import { Resend } from "resend";
import { NextResponse } from "next/server";
import { z } from "zod";
import { logger } from "@/lib/logger";
import { createApiHandler } from "@/lib/apiHandler";

const EarlyAccessSchema = z.object({
  fullName: z.string().min(2).max(100).trim(),
  email: z.string().email().max(254).trim().toLowerCase(),
  organization: z.string().max(200).trim().optional().default(""),
  userType: z.string().max(100).trim().optional().default("Not specified"),
  useCase: z.string().max(2000).trim().optional().default(""),
  website: z.string().max(0, "Bot detected").optional().default(""),
});

export const POST = createApiHandler({
  tag: "early-access",
  schema: EarlyAccessSchema,
  async handle({ fullName, email, organization, userType, useCase, website }, { ip, start }) {
    if (website) {
      logger.warn("early-access: honeypot triggered", { ip });
      return NextResponse.json({ ok: true });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const TO = process.env.CONTACT_EMAIL!;

    try {
      await resend.emails.send({
        from: "Nwvania Early Access <onboarding@resend.dev>",
        to: TO,
        replyTo: email,
        subject: `[Early Access] ${userType} — ${fullName}`,
        html: `
          <h2 style="font-family:sans-serif;color:#0f172a;">New Early Access Request</h2>
          <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse;width:100%">
            <tr><td style="padding:6px 12px;font-weight:600;color:#64748b;">Name</td><td style="padding:6px 12px;">${fullName}</td></tr>
            <tr><td style="padding:6px 12px;font-weight:600;color:#64748b;">Email</td><td style="padding:6px 12px;">${email}</td></tr>
            ${organization ? `<tr><td style="padding:6px 12px;font-weight:600;color:#64748b;">Organization</td><td style="padding:6px 12px;">${organization}</td></tr>` : ""}
            <tr><td style="padding:6px 12px;font-weight:600;color:#64748b;">Role</td><td style="padding:6px 12px;">${userType}</td></tr>
          </table>
          ${useCase ? `
          <hr style="margin:16px 0;border:none;border-top:1px solid #e2e8f0;" />
          <p style="font-family:sans-serif;font-size:14px;font-weight:600;color:#64748b;">Use Case</p>
          <p style="font-family:sans-serif;font-size:14px;color:#0f172a;white-space:pre-line;">${useCase}</p>
          ` : ""}
        `,
      });
      logger.info("early-access: email sent", { ip, userType, durationMs: Date.now() - start });
      return NextResponse.json({ ok: true });
    } catch (err) {
      logger.error("early-access: resend failed", { ip, error: String(err), durationMs: Date.now() - start });
      return NextResponse.json({ error: "Failed to send." }, { status: 500 });
    }
  },
});
