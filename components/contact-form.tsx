"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2, LoaderCircle } from "lucide-react";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      const data = (await response.json()) as { message?: string };
      if (!response.ok) throw new Error(data.message || "Unable to send your message.");
      form.reset();
      setStatus("success");
      setMessage(data.message || "Thank you. We’ll be in touch shortly.");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  }

  const field = "mt-2 h-12 w-full rounded-xl border border-white/10 bg-black/20 px-4 text-base text-white outline-none transition-colors placeholder:text-slate-600 hover:border-white/20 focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-300/15";

  return <form onSubmit={submit} className="rounded-[1.75rem] border border-white/10 bg-white/[.025] p-5 sm:p-8" noValidate>
    <label className="absolute -left-[9999px]" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
    <div className="grid gap-5 sm:grid-cols-2">
      <label className="text-sm font-medium text-slate-300">Name<input className={field} name="name" autoComplete="name" required minLength={2} placeholder="Your name" /></label>
      <label className="text-sm font-medium text-slate-300">Work email<input className={field} type="email" name="email" autoComplete="email" required placeholder="you@company.com" /></label>
      <label className="text-sm font-medium text-slate-300">Company<input className={field} name="company" autoComplete="organization" placeholder="Company name" /></label>
      <label className="text-sm font-medium text-slate-300">What can we help with?<select className={`${field} brand-select`} name="interest" defaultValue=""><option value="" disabled>Select a focus area</option><option>AI & Agentic Systems</option><option>Software Engineering</option><option>Cloud & Platforms</option><option>Cyber Security</option><option>Data Engineering</option><option>Engineering Talent</option><option>Managed Support</option><option>Other</option></select></label>
    </div>
    <label className="mt-5 block text-sm font-medium text-slate-300">Tell us about the challenge<textarea className="mt-2 min-h-36 w-full resize-y rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-base leading-7 text-white outline-none transition-colors placeholder:text-slate-600 hover:border-white/20 focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-300/15" name="message" required minLength={20} placeholder="A little context helps us bring the right people into the conversation." /></label>
    <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"><p className="text-xs leading-5 text-slate-500">By submitting, you agree that we may contact you about this enquiry.</p><button className="group inline-flex h-12 shrink-0 cursor-pointer items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-[#07101d] transition-colors hover:bg-cyan-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 disabled:cursor-wait disabled:opacity-70" type="submit" disabled={status === "sending"}>{status === "sending" ? <LoaderCircle className="size-4 animate-spin" /> : <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />}{status === "sending" ? "Sending" : "Send enquiry"}</button></div>
    {message ? <div className={`mt-5 flex items-start gap-2 rounded-xl border px-4 py-3 text-sm ${status === "success" ? "border-emerald-400/20 bg-emerald-400/[.06] text-emerald-200" : "border-red-400/20 bg-red-400/[.06] text-red-200"}`} role="status">{status === "success" ? <CheckCircle2 className="mt-0.5 size-4 shrink-0" /> : null}{message}</div> : null}
  </form>;
}
