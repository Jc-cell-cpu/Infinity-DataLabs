import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/lib/site-data";

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon;
  return <Link href={`/services#${service.slug}`} className="service-card group relative flex min-h-[310px] cursor-pointer flex-col overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[.025] p-6 transition-colors duration-300 hover:border-white/20 hover:bg-white/[.045] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 sm:p-7"><div className="absolute right-5 top-4 font-mono text-[11px] tracking-wider text-slate-600">0{index + 1}</div><div className="grid size-12 place-items-center rounded-2xl border border-white/10 bg-white/[.04] text-cyan-200 transition-colors group-hover:border-cyan-300/25 group-hover:bg-cyan-300/[.07]"><Icon className="size-5" strokeWidth={1.6} aria-hidden="true" /></div><div className="mt-auto pt-12"><h3 className="font-display text-2xl font-medium tracking-[-.04em] text-white">{service.title}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{service.short}</p><span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[.15em] text-slate-300 transition-colors group-hover:text-cyan-200">Explore <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" /></span></div></Link>;
}
