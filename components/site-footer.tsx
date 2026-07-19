import Link from "next/link";
import { ArrowUpRight, Clock3, Globe2, Mail, MapPin } from "lucide-react";
import { FooterAtmosphere } from "@/components/footer-atmosphere";
import { FooterContactLink } from "@/components/footer-contact-link";
import { offices } from "@/lib/site-data";

const groups = [
  { title: "Services", links: [["AI & Agentic Systems", "/services#ai-agentic-systems"], ["Software Engineering", "/services#software-engineering"], ["Cloud & Platforms", "/services#cloud-platforms"], ["Cyber Security", "/services#cyber-security"]] },
  { title: "Solutions", links: [["Enterprise Modernization", "/services#enterprise-solutions"], ["Data Engineering", "/services#data-engineering"], ["Quality Engineering", "/services#quality-engineering"], ["Managed Support", "/services#managed-support"]] },
  { title: "Industries", links: [["Enterprise", "/services"], ["Government", "/services"], ["Mid-market", "/services"], ["Startups", "/services"]] },
  { title: "Resource Augmentation", links: [["Dedicated Specialists", "/talent"], ["Project Teams", "/talent"], ["Flexible Augmentation", "/talent"], ["Skill Matrix", "/talent#skill-matrix"]] },
  { title: "Company", links: [["About", "/about"], ["How we work", "/about#philosophy"], ["Contact", "/contact"], ["Privacy", "/privacy"]] },
];

function LinkedInIcon() {
  return <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true"><path d="M6.5 8.1H3.2V21h3.3V8.1ZM4.85 3A1.92 1.92 0 1 0 4.9 6.84 1.92 1.92 0 0 0 4.85 3ZM21 13.6c0-3.88-2.07-5.68-4.83-5.68a4.2 4.2 0 0 0-3.8 2.09V8.1H9.05V21h3.32v-6.38c0-1.68.32-3.31 2.41-3.31 2.06 0 2.09 1.93 2.09 3.42V21H21v-7.4Z" /></svg>;
}

function XIcon() {
  return <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true"><path d="M18.7 3H22l-7.2 8.23L23.27 21h-6.64l-5.2-6.8L5.49 21H2.18l7.71-8.82L1.77 3h6.8l4.7 6.22L18.7 3Zm-1.16 16h1.83L7.58 4.9H5.62L17.54 19Z" /></svg>;
}

function GitHubIcon() {
  return <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49 0-.24-.01-1.05-.02-1.91-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.9 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.64-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.4 9.4 0 0 1 12 6.94a9.4 9.4 0 0 1 2.5.35c1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.95.68 1.91 0 1.38-.01 2.49-.01 2.83 0 .27.18.59.69.49A10.2 10.2 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" clipRule="evenodd" /></svg>;
}

export function SiteFooter() {
  return <footer className="signature-footer relative isolate overflow-hidden border-t border-white/10 bg-[#050816]" data-motion-active="true">
    <FooterAtmosphere />
    <div className="relative z-10 mx-auto max-w-[1240px] px-5 pb-10 pt-20 sm:px-8 sm:pb-12 sm:pt-24 lg:pt-28">
      <div className="footer-divider grid gap-10 border-b border-white/10 pb-14 lg:grid-cols-[1fr_auto] lg:items-end lg:pb-16">
        <div>
          <div className="inline-flex min-h-9 items-center gap-2.5 whitespace-nowrap rounded-full border border-emerald-300/15 bg-emerald-300/[.045] px-3.5 font-mono text-[9px] uppercase tracking-[.12em] text-emerald-100 sm:text-[10px] sm:tracking-[.16em]"><span className="relative flex size-2"><span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-300 opacity-45" /><span className="relative inline-flex size-2 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,.65)]" /></span>Building intelligent digital experiences</div>
          <h2 className="mt-7 max-w-3xl text-balance font-display text-4xl font-medium leading-[1.02] tracking-[-.055em] text-white sm:text-5xl lg:text-[3.7rem]">Intelligence, engineered to endure.</h2>
          <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-slate-400">AI systems, secure software platforms, and expert technology teams for organizations building what comes next.</p>
        </div>
        <FooterContactLink />
      </div>

      <div className="grid gap-x-8 gap-y-12 py-14 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-[1.25fr_repeat(5,minmax(0,1fr))] xl:py-16">
        <div className="sm:col-span-2 md:col-span-1">
          <p className="text-xs font-semibold uppercase tracking-[.18em] text-slate-400">Contact</p>
          <div className="mt-5 space-y-2">
            <a href="mailto:hello@infinity-datalabs.com" className="footer-contact-row group"><Mail className="size-4 text-cyan-200" aria-hidden="true" /><span>hello@infinity-datalabs.com</span></a>
            <a href="https://infinity-datalabs.com" className="footer-contact-row group"><Globe2 className="size-4 text-blue-300" aria-hidden="true" /><span>infinity-datalabs.com</span></a>
            <div className="footer-contact-row"><Clock3 className="size-4 text-emerald-300" aria-hidden="true" /><span>Response within two business days</span></div>
          </div>
          <div className="mt-6"><p className="text-[11px] font-semibold uppercase tracking-[.16em] text-slate-500">Offices</p><p className="mt-2 flex items-start gap-2 text-sm text-slate-400"><MapPin className="mt-0.5 size-4 shrink-0 text-violet-300" aria-hidden="true" /><span>{offices.map((office) => (office.hq ? `${office.city} (HQ)` : office.city)).join(" · ")}</span></p></div>
          <div className="mt-7 flex items-center gap-2" aria-label="Social channels">
            {[{ label: "LinkedIn", icon: <LinkedInIcon /> }, { label: "X", icon: <XIcon /> }, { label: "GitHub", icon: <GitHubIcon /> }].map((social) => <span key={social.label} className="footer-social-icon" role="img" aria-label={`${social.label} profile link pending`} title={`${social.label} profile link pending`}>{social.icon}</span>)}
          </div>
        </div>

        {groups.map((group) => <div key={group.title}><h3 className="text-xs font-semibold uppercase tracking-[.18em] text-slate-400">{group.title}</h3><ul className="mt-5 space-y-1.5">{group.links.map(([label, href]) => <li key={`${label}-${href}`}><Link className="footer-link group inline-flex min-h-9 items-center gap-1.5 text-sm text-slate-300 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300" href={href}><span className="footer-underline">{label}</span><ArrowUpRight className="size-3 opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" aria-hidden="true" /></Link></li>)}</ul></div>)}
      </div>

      <div className="footer-divider flex flex-col gap-4 border-t border-white/10 py-7 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>{"\u00A9"} {new Date().getFullYear()} Infinity DataLabs. All rights reserved.</p>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2"><span>Technology partner {"\u00B7"} Engineering partner</span><Link className="footer-link inline-flex min-h-8 items-center" href="/privacy"><span className="footer-underline">Privacy</span></Link></div>
      </div>
    </div>
  </footer>;
}
