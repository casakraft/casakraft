export const runtime = "nodejs";

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const env = (k) => (process.env[k] || "").trim();

export async function GET() {
  try {
    const keys = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS", "FROM_EMAIL", "TO_EMAIL"];

    const present = Object.fromEntries(keys.map((k) => [k, !!process.env[k]]));
    const lengths = Object.fromEntries(keys.map((k) => [k, (process.env[k] || "").length]));

    return NextResponse.json({ ping: "ok", present, lengths });
  } catch (err) {
    // If something is wrong at runtime, still return JSON (not HTML)
    return NextResponse.json(
      { ping: "fail", error: err?.message || "GET crashed" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const { name, email, phone, subject, message } = await req.json();

    if (!name || !subject || !message) {
      return NextResponse.json(
        { ok: false, error: "Name, subject, and message are required." },
        { status: 400 }
      );
    }

    const SMTP_HOST = env("SMTP_HOST");
    const SMTP_PORT = Number(env("SMTP_PORT") || 465);
    const SMTP_USER = env("SMTP_USER");
    const SMTP_PASS = env("SMTP_PASS");
    const FROM_EMAIL = env("FROM_EMAIL");
    const TO_EMAIL = env("TO_EMAIL");

    for (const [k, v] of Object.entries({ SMTP_HOST, SMTP_USER, SMTP_PASS, FROM_EMAIL, TO_EMAIL })) {
      if (!v) {
        return NextResponse.json({ ok: false, error: `Missing env var: ${k}` }, { status: 500 });
      }
    }
    if (!Number.isFinite(SMTP_PORT)) {
      return NextResponse.json({ ok: false, error: "Invalid SMTP_PORT" }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_PORT === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    const mailOptions = {
      from: `Website Contact <${FROM_EMAIL}>`,
      to: TO_EMAIL,
      subject: String(subject).slice(0, 150),
      text:
        `New website enquiry\n\n` +
        `Name: ${name}\n` +
        (email ? `Email: ${email}\n` : "") +
        (phone ? `Phone: ${phone}\n` : "") +
        `\nMessage:\n${message}\n`,
    };

    if (email) mailOptions.replyTo = email;

    const info = await transporter.sendMail(mailOptions);

    return NextResponse.json({ ok: true, id: info.messageId });
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json(
      { ok: false, error: err?.response || err?.message || "Unknown error" },
      { status: 500 }
    );
  }
}
