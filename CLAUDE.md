# CLAUDE.md

Corporate marketing site for Infinity DataLabs (Next.js App Router, TypeScript, Tailwind v4, Framer Motion, Lenis). Dev server: `npm run dev` (port 3000). Quality gates: `npm run lint`, `npm run typecheck`, `npm run build`.

## Design Context

Read before any UI or content work:

- **PRODUCT.md** — strategy: brand register, dual audience (buyers of complex work + engineering candidates), positioning, belief ladder, and anti-references. Hard constraint: no invented proof — no fake testimonials, client logos, metrics, case studies, or named leadership profiles, anywhere.
- **DESIGN.md** — the visual system as implemented: tokens, type hierarchy, elevation doctrine ("light defines depth"), component specs, and do's/don'ts. Creative north star: "The Observatory". Machine-readable extensions live in `.impeccable/design.json`.
- **design-system/MASTER.md** — the hand-written design intent; DESIGN.md is its code-accurate capture.
- **public/brand/BRAND-GUIDELINES.md** — logo usage and brand palette.

The site is the proof: performance, precision, and accessibility (WCAG AA, 44px targets, reduced-motion alternatives) are brand requirements, not nice-to-haves. Content is centralized in `lib/site-data.ts` — edit copy there, not inline in pages.
