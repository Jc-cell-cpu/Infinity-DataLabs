import { NextResponse } from "next/server";

type ContactPayload = { name?: unknown; email?: unknown; company?: unknown; interest?: unknown; message?: unknown; website?: unknown };
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const clean = (value: unknown, maxLength: number) => typeof value === "string" ? value.trim().slice(0, maxLength) : "";

export async function POST(request: Request) {
  let payload: ContactPayload;
  try { payload = (await request.json()) as ContactPayload; }
  catch { return NextResponse.json({ message: "Invalid request." }, { status: 400 }); }

  if (clean(payload.website, 100)) return NextResponse.json({ message: "Thank you. We’ll be in touch shortly." }, { status: 202 });
  const contact = { name: clean(payload.name, 100), email: clean(payload.email, 160).toLowerCase(), company: clean(payload.company, 160), interest: clean(payload.interest, 100), message: clean(payload.message, 5000) };
  if (contact.name.length < 2 || !emailPattern.test(contact.email) || contact.message.length < 20) return NextResponse.json({ message: "Please provide a valid name, email, and a little more detail." }, { status: 422 });

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (webhook) {
    const response = await fetch(webhook, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(contact), signal: AbortSignal.timeout(8_000) }).catch(() => null);
    if (!response?.ok) return NextResponse.json({ message: "We couldn’t send that right now. Please email us directly." }, { status: 502 });
  }
  return NextResponse.json({ message: webhook ? "Thank you. We’ll be in touch shortly." : "Thank you. The form is ready to connect to your CRM or email provider." }, { status: 202 });
}
