import type { Metadata } from "next";
import { Clock3, Globe2, Mail } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { GlobalReach } from "@/components/global-reach";
import { ContactForm } from "@/components/contact-form";
import { FAQ } from "@/components/faq";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = { title: "Contact", description: "Talk to Infinity DataLabs about AI systems, software engineering, cloud, security, data, managed support, or specialist technology talent.", alternates: { canonical: "/contact" } };

export default function ContactPage() {
  return <><PageHero eyebrow="Contact" title="Bring us the challenge behind the brief." copy="Tell us what needs to change, what is getting in the way, and where you want the organization to go. We’ll bring the right perspective to the first conversation." />
  <section className="pb-24 sm:pb-32"><div className="mx-auto grid max-w-[1240px] gap-10 px-5 sm:px-8 lg:grid-cols-[.72fr_1.28fr] lg:gap-16"><Reveal><div className="lg:sticky lg:top-28"><h2 className="font-display text-2xl font-medium tracking-[-.04em] text-white">Start with context.</h2><p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">No long intake process. A concise note is enough to begin.</p><div className="mt-9 space-y-3"><a href="mailto:hello@infinity-datalabs.com" className="flex min-h-16 items-center gap-4 rounded-xl border border-white/10 bg-white/[.025] px-4 text-sm text-slate-300 transition-colors hover:border-white/20 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"><Mail className="size-5 text-cyan-200" />hello@infinity-datalabs.com</a><div className="flex min-h-16 items-center gap-4 rounded-xl border border-white/10 bg-white/[.025] px-4 text-sm text-slate-300"><Clock3 className="size-5 text-blue-300" />Response within two business days</div></div></div></Reveal><Reveal delay={.08}><ContactForm /></Reveal></div></section>
  <section className="section-shell border-y border-white/10 bg-[#070a11]"><div className="mx-auto max-w-[1240px] px-5 sm:px-8"><div className="grid gap-8 lg:grid-cols-[.65fr_1.35fr]"><Reveal><div><p className="eyebrow">Where we work</p><h2 className="mt-5 font-display text-4xl font-medium tracking-[-.055em] text-white">Delivery without borders.</h2><p className="mt-5 text-sm leading-7 text-slate-400">Remote-first collaboration with onsite and hybrid models available where the work requires it.</p><div className="mt-8 flex items-center gap-3 text-sm text-slate-300"><Globe2 className="size-5 text-cyan-200" />Global collaboration</div></div></Reveal><Reveal delay={.08}><GlobalReach /></Reveal></div></div></section>
  <section className="section-shell"><div className="mx-auto max-w-[900px] px-5 sm:px-8"><Reveal><SectionHeading eyebrow="Common questions" title="Useful answers before we begin." /></Reveal><div className="mt-12"><FAQ /></div></div></section></>;
}
