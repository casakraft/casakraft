export async function GET() {
  const keys = [
    "SMTP_HOST",
    "SMTP_PORT",
    "SMTP_USER",
    "SMTP_PASS",
    "FROM_EMAIL",
    "TO_EMAIL",
  ];

  const present = Object.fromEntries(
    keys.map((k) => [k, !!process.env[k]])
  );

  // Show length only (safe), never show actual secrets
  const lengths = Object.fromEntries(
    keys.map((k) => [k, (process.env[k] || "").length])
  );

  return NextResponse.json({ ping: "ok", present, lengths });
}
