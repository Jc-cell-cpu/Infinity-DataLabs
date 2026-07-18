import { Reveal } from "@/components/motion/reveal";

type PageHeroProps = { eyebrow: string; title: string; copy: string; children?: React.ReactNode };

export function PageHero({ eyebrow, title, copy, children }: PageHeroProps) {
  return <section className="relative overflow-hidden pb-20 pt-40 sm:pb-28 sm:pt-48"><div className="hero-grid absolute inset-0 opacity-45" aria-hidden="true" /><div className="absolute left-1/2 top-20 h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-blue-600/[.09] blur-[120px]" aria-hidden="true" /><div className="relative mx-auto max-w-[1240px] px-5 sm:px-8"><Reveal><p className="eyebrow">{eyebrow}</p><h1 className="mt-6 max-w-5xl text-balance font-display text-[clamp(3rem,7vw,6.9rem)] font-medium leading-[.94] tracking-[-.07em] text-white">{title}</h1><p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-slate-300 sm:text-xl">{copy}</p>{children ? <div className="mt-9">{children}</div> : null}</Reveal></div></section>;
}
