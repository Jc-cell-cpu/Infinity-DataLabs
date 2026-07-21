import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { CSSProperties } from "react";
import type { Product } from "@/lib/site-data";

// Homepage teaser card for an in-house product. Each carries its own spectral
// accent matching its /products panel.

const ACCENT: Record<string, string> = {
  "voice-ai-agent": "#58e6ff",
  "testing-agent": "#5b8cff",
  "support-agent": "#8b5cf6",
};

// Animated mini-visuals, disabled for now: a waveform for Voice, a running
// pipeline for Testing, a routing splay for Support. Restore by uncommenting
// this and its call site below; the .pt-wave/.pt-segs/.pt-flow rules are still
// in globals.css.
// function Glyph({ slug }: { slug: string }) {
//   if (slug === "voice-ai-agent") {
//     return <div className="pt-wave" aria-hidden="true">{Array.from({ length: 16 }, (_, i) => <i key={i} />)}</div>;
//   }
//   if (slug === "testing-agent") {
//     return <div className="pt-segs" aria-hidden="true">{Array.from({ length: 6 }, (_, i) => <i key={i} />)}</div>;
//   }
//   return (
//     <div className="pt-flow" aria-hidden="true">
//       <span className="pt-flow-comet" />
//       <div className="pt-flow-nodes"><i /><i /><i className="hub" /><i /><i /></div>
//     </div>
//   );
// }

export function ProductTeaserCard({ product }: { product: Product }) {
  const Icon = product.icon;
  const accent = ACCENT[product.slug] ?? "#58e6ff";
  return (
    <Link
      href={`/products#${product.slug}`}
      style={{ "--ca": accent } as CSSProperties}
      className="pt-card group flex h-full flex-col rounded-[1.5rem] border border-white/10 bg-white/[.025] p-7 transition-colors"
    >
      <div className="flex items-center justify-between">
        <div className="pt-ic grid size-12 place-items-center rounded-2xl"><Icon className="size-6" strokeWidth={1.5} aria-hidden="true" /></div>
        <ArrowUpRight className="pt-arrow size-4" aria-hidden="true" />
      </div>
      <p className="eyebrow mt-6">{product.kicker}</p>
      <h3 className="mt-2 font-display text-2xl font-medium tracking-[-.03em] text-white">{product.name}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-400">{product.tagline}</p>
      {/* <div className="mt-auto pt-7"><Glyph slug={product.slug} /></div> */}
    </Link>
  );
}
