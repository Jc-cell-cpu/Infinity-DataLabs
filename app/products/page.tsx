import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { ProductPanel } from "@/components/product-panel";
import { CtaSection } from "@/components/cta-section";
import { products } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Products",
  description: "In-house AI products built and run by Infinity DataLabs: Voice AI Agent, Testing Agent, and Support Agent—what each one does and how it works.",
  alternates: { canonical: "/products" },
};

const VARIANT: Record<string, "voice" | "testing" | "support" | undefined> = {
  "voice-ai-agent": "voice",
  "testing-agent": "testing",
  "support-agent": "support",
};

export default function ProductsPage() {
  return <>
    <PageHero eyebrow="In-house products" title="Products we build, run, and stand behind." copy="Alongside client delivery, we develop our own AI products—applied systems that show how we think about agents, quality, and support at production scale.">
      <div className="flex flex-col gap-3 sm:flex-row"><ButtonLink href={`#${products[0].slug}`} size="lg">Explore products</ButtonLink><ButtonLink href="/contact" variant="secondary" size="lg">Talk to us</ButtonLink></div>
    </PageHero>

    <section className="pb-8 sm:pb-16"><div className="mx-auto max-w-[1240px] px-5 sm:px-8"><div className="border-t border-white/10">
      {products.map((product, index) => { const Icon = product.icon; const variant = VARIANT[product.slug]; return (
        <Reveal key={product.slug}>
          <article id={product.slug} className="scroll-mt-28 border-b border-white/10 py-14 last:border-b-0 sm:py-20">
            <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start lg:gap-16">
              <div>
                <div className="flex items-center gap-4"><span className="font-mono text-xs text-slate-600">0{index + 1}</span><div className="grid size-12 place-items-center rounded-2xl border border-white/10 bg-white/[.03] text-cyan-200"><Icon className="size-6" strokeWidth={1.5} aria-hidden="true" /></div><p className="eyebrow">{product.kicker}</p></div>
                <h2 className="mt-6 font-display text-4xl font-medium tracking-[-.05em] text-white sm:text-5xl">{product.name}</h2>
                <p className="mt-5 max-w-xl text-pretty text-lg leading-8 text-slate-200 sm:text-xl">{product.tagline}</p>
                <p className="mt-4 max-w-xl text-pretty text-base leading-7 text-slate-400">{product.description}</p>
                <div className="mt-8"><ButtonLink href="/contact" arrow>Discuss {product.name}</ButtonLink></div>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[.18em] text-slate-500">What sets it apart</p>
                <div className="mt-5 grid gap-3">
                  {product.highlights.map((highlight) => (
                    <div key={highlight.title} className="rounded-2xl border border-white/10 bg-white/[.025] p-5 transition-colors hover:border-white/20">
                      <h3 className="font-display text-base font-medium tracking-[-.01em] text-white">{highlight.title}</h3>
                      <p className="mt-1.5 text-sm leading-6 text-slate-400">{highlight.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {variant ? <div className="mt-12 sm:mt-14"><ProductPanel variant={variant} /></div> : null}
          </article>
        </Reveal>
      ); })}
    </div></div></section>

    <CtaSection title="Want one of these adapted to your stack?" copy="We deploy these products into real environments and build new ones. Tell us the problem and we'll shape the right approach." />
  </>;
}
