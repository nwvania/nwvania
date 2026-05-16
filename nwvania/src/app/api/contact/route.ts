import { Resend } from "resend";
import { NextResponse } from "next/server";
import { z } from "zod";
import { logger } from "@/lib/logger";
import { createApiHandler } from "@/lib/apiHandler";

const ContactSchema = z.object({
  name: z.string().min(2).max(100).trim(),
  email: z.string().email().max(254).trim().toLowerCase(),
  organization: z.string().max(200).trim().optional().default(""),
  inquiryType: z.string().max(100).trim().optional().default("General Inquiry"),
  message: z.string().min(10).max(5000).trim(),
  website: z.string().max(0, "Bot detected").optional().default(""),
});

export const POST = createApiHandler({
  tag: "contact",
  schema: ContactSchema,
  async handle({ name, email, organization, inquiryType, message, website }, { ip, start }) {
    if (website) {
      logger.warn("contact: honeypot triggered", { ip });
      return NextResponse.json({ ok: true });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const TO = process.env.CONTACT_EMAIL!;

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
  },
});
