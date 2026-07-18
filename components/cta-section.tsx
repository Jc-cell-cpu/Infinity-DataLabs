import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";

export function CtaSection({ title = "Build what your next stage demands.", copy = "Bring us the ambition, the complexity, or the system that needs to work better." }: { title?: string; copy?: string }) {
  return <section className="section-shell"><div className="mx-auto max-w-[1240px] px-5 sm:px-8"><Reveal><div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a0f19] px-6 py-14 sm:px-12 sm:py-16 lg:flex lg:items-end lg:justify-between lg:px-16 lg:py-20"><div className="absolute -right-20 -top-44 size-[420px] rounded-full bg-blue-500/[.13] blur-[100px]" aria-hidden="true" /><div className="relative"><p className="eyebrow">Start a conversation</p><h2 className="mt-5 max-w-3xl text-balance font-display text-4xl font-medium tracking-[-.055em] text-white sm:text-5xl lg:text-6xl">{title}</h2><p className="mt-5 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">{copy}</p></div><div className="relative mt-9 shrink-0 lg:ml-12 lg:mt-0"><ButtonLink href="/contact" size="lg" arrow>Talk to our team</ButtonLink></div></div></Reveal></div></section>;
}
