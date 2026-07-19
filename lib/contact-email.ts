import nodemailer from "nodemailer";

export type Contact = { name: string; email: string; company: string; interest: string; message: string };

const HTML_ESCAPES: Record<string, string> = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
const escapeHtml = (value: string) => value.replace(/[&<>"']/g, (char) => HTML_ESCAPES[char] ?? char);

// True once the SMTP credentials are present in the environment. Until then the
// route degrades gracefully instead of erroring.
export function isEmailConfigured() {
  return Boolean(process.env.SMTP_USER && process.env.SMTP_PASSWORD);
}

// Builds the subject/text/html for an inquiry notification. Pure and testable;
// all user-provided values are HTML-escaped before interpolation.
export function buildInquiryEmail(contact: Contact) {
  const subject = `New inquiry — ${contact.name}${contact.interest ? ` · ${contact.interest}` : ""}`;
  const rows: [string, string][] = [
    ["Name", contact.name],
    ["Email", contact.email],
    ["Company", contact.company || "—"],
    ["Focus area", contact.interest || "—"],
  ];
  const text = [...rows.map(([label, value]) => `${label}: ${value}`), "", "Message:", contact.message].join("\n");
  const html = `<div style="margin:0;padding:24px;background:#f4f6fb;font-family:-apple-system,Segoe UI,Roboto,Arial,sans-serif;color:#0f172a">
  <div style="max-width:560px;margin:0 auto;background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden">
    <div style="padding:20px 24px;border-bottom:1px solid #e2e8f0">
      <p style="margin:0;font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:#64748b">Infinity DataLabs</p>
      <h1 style="margin:6px 0 0;font-size:18px;color:#0f172a">New website inquiry</h1>
    </div>
    <table style="width:100%;border-collapse:collapse;font-size:14px">
      ${rows.map(([label, value]) => `<tr><td style="width:110px;padding:12px 24px;vertical-align:top;white-space:nowrap;color:#64748b;border-bottom:1px solid #f1f5f9">${label}</td><td style="padding:12px 24px;color:#0f172a;border-bottom:1px solid #f1f5f9">${escapeHtml(value)}</td></tr>`).join("")}
    </table>
    <div style="padding:16px 24px 24px">
      <p style="margin:0 0 6px;font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:#64748b">Message</p>
      <div style="font-size:14px;line-height:1.6;color:#0f172a">${escapeHtml(contact.message).replace(/\n/g, "<br>")}</div>
    </div>
  </div>
  <p style="max-width:560px;margin:12px auto 0;font-size:12px;color:#94a3b8;text-align:center">Reply to this email to respond to ${escapeHtml(contact.name)} directly.</p>
</div>`;
  return { subject, text, html };
}

// Sends the inquiry via SMTP (Gmail by default). `from` must be the authenticated
// account for Gmail; the prospect's address is set as reply-to so a plain Reply
// goes straight back to them.
export async function sendInquiryEmail(contact: Contact) {
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;
  if (!user || !pass) throw new Error("SMTP credentials are not configured.");

  const port = Number(process.env.SMTP_PORT || 465);
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port,
    secure: port === 465,
    auth: { user, pass },
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 15_000,
  });

  const { subject, text, html } = buildInquiryEmail(contact);
  await transporter.sendMail({
    from: `"Infinity DataLabs Website" <${user}>`,
    to: process.env.CONTACT_TO || user,
    replyTo: contact.email,
    subject,
    text,
    html,
  });
}
