import { cn } from "@/lib/utils";

type SectionHeadingProps = { eyebrow: string; title: string; copy?: string; align?: "left" | "center"; className?: string };

export function SectionHeading({ eyebrow, title, copy, align = "left", className }: SectionHeadingProps) {
  return <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}><p className="eyebrow">{eyebrow}</p><h2 className="mt-5 text-balance font-display text-4xl font-medium tracking-[-.055em] text-white sm:text-5xl lg:text-[3.6rem] lg:leading-[1.04]">{title}</h2>{copy ? <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-slate-400 sm:text-lg" style={align === "center" ? { marginInline: "auto" } : undefined}>{copy}</p> : null}</div>;
}
