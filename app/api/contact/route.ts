import { NextResponse } from "next/server";
import { isEmailConfigured, sendInquiryEmail } from "@/lib/contact-email";

export const runtime = "nodejs";

type ContactPayload = { name?: unknown; email?: unknown; company?: unknown; interest?: unknown; message?: unknown; contact_hp?: unknown };
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const clean = (value: unknown, maxLength: number) => typeof value === "string" ? value.trim().slice(0, maxLength) : "";

export async function POST(request: Request) {
  let payload: ContactPayload;
  try { payload = (await request.json()) as ContactPayload; }
  catch { return NextResponse.json({ message: "Invalid request." }, { status: 400 }); }

  if (clean(payload.contact_hp, 100)) return NextResponse.json({ message: "Thank you. We’ll be in touch shortly." }, { status: 202 });
  const contact = { name: clean(payload.name, 100), email: clean(payload.email, 160).toLowerCase(), company: clean(payload.company, 160), interest: clean(payload.interest, 100), message: clean(payload.message, 5000) };
  if (contact.name.length < 2 || !emailPattern.test(contact.email) || contact.message.length < 20) return NextResponse.json({ message: "Please provide a valid name, email, and a little more detail." }, { status: 422 });

  if (isEmailConfigured()) {
    try {
      await sendInquiryEmail(contact);
    } catch (error) {
      console.error("Contact email failed:", error);
      return NextResponse.json({ message: "We couldn’t send that right now. Please email us directly." }, { status: 502 });
    }
    return NextResponse.json({ message: "Thank you. We’ll be in touch shortly." }, { status: 202 });
  }

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (webhook) {
    const response = await fetch(webhook, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(contact), signal: AbortSignal.timeout(8_000) }).catch(() => null);
    if (!response?.ok) return NextResponse.json({ message: "We couldn’t send that right now. Please email us directly." }, { status: 502 });
    return NextResponse.json({ message: "Thank you. We’ll be in touch shortly." }, { status: 202 });
  }

  return NextResponse.json({ message: "Thank you. The form is ready—set SMTP credentials to receive inquiries by email." }, { status: 202 });
}
