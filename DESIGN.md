---
name: Infinity DataLabs
description: Dark, precise, spectral-lit marketing site for an AI-first engineering partner.
colors:
  deep-space: "#05070C"
  elevated: "#0A0E17"
  surface: "#101725"
  starlight: "#F4F7FB"
  muted: "#9AA8BC"
  hairline: "#FFFFFF1A"
  electric-blue: "#5B8CFF"
  signal-cyan: "#58E6FF"
  spectral-violet: "#8B5CF6"
  success-mint: "#4ADE80"
  pure-white: "#FFFFFF"
  ink-inverse: "#07101D"
typography:
  display:
    fontFamily: "Space Grotesk, Inter, sans-serif"
    fontSize: "clamp(3.55rem, 7.4vw, 7.35rem)"
    fontWeight: 500
    lineHeight: 0.88
    letterSpacing: "-0.075em"
  headline:
    fontFamily: "Space Grotesk, Inter, sans-serif"
    fontSize: "2.25rem → 3.75rem"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.055em"
  title:
    fontFamily: "Space Grotesk, Inter, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.04em"
  body:
    fontFamily: "Inter, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  label:
    fontFamily: "Inter, Arial, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 650
    lineHeight: 1.4
    letterSpacing: "0.19em"
rounded:
  pill: "999px"
  field: "12px"
  tile: "16px"
  card: "24px"
  panel: "28px"
  feature: "32px"
spacing:
  gutter-sm: "1.25rem"
  gutter: "2rem"
  card-pad: "1.5rem"
  card-pad-lg: "2rem"
  section: "clamp(5rem, 10vw, 8.5rem)"
components:
  button-primary:
    backgroundColor: "{colors.pure-white}"
    textColor: "{colors.ink-inverse}"
    rounded: "{rounded.pill}"
    height: "48px"
    padding: "0 24px"
  button-primary-hover:
    backgroundColor: "#CFFAFE"
  button-secondary:
    backgroundColor: "#FFFFFF0A"
    textColor: "{colors.pure-white}"
    rounded: "{rounded.pill}"
    height: "48px"
    padding: "0 24px"
  button-secondary-hover:
    backgroundColor: "#FFFFFF14"
  button-ghost:
    textColor: "#E2E8F0"
    rounded: "{rounded.pill}"
    height: "48px"
    padding: "0 24px"
  input:
    backgroundColor: "#00000033"
    textColor: "{colors.pure-white}"
    rounded: "{rounded.field}"
    height: "48px"
    padding: "0 16px"
  card:
    backgroundColor: "#FFFFFF06"
    rounded: "{rounded.card}"
    padding: "24px"
  nav-link:
    textColor: "#CBD5E1"
    rounded: "{rounded.pill}"
    height: "44px"
    padding: "0 16px"
---

# Design System: Infinity DataLabs

## 1. Overview

**Creative North Star: "The Observatory"**

The interface is a dark observatory: a near-black canvas where light is information, never decoration. Spectral accents — Electric Blue, Signal Cyan, Spectral Violet — behave like distant phenomena: glows, hairlines, particle fields, and focus rings that reward attention. Structure comes from 1px lines of light and generous space, not from boxes and shadows. The signature moments (the hero's infinity nebula, the living footer atmosphere) are the telescope views — a few places where the frontier is shown in full, while everything around them stays calm and exact.

The personality is precise, calm, ambitious (PRODUCT.md). Editorial restraint meets engineering precision: content is served in a stable 1240px column with deliberate section rhythm (`clamp(5rem, 10vw, 8.5rem)` block padding), asymmetry used selectively over a twelve-column grid. Controls are tactile and confident — generous pills, soft glows, immediate feedback — warmer to touch than the clinical darkness suggests. This system explicitly rejects the generic agency site: no giant gradient blobs, neon overload, carousels, stock-office photography, excessive glass, or gratuitous motion — and it never manufactures trust with fake logos, unverified metrics, or invented case studies.

**Key Characteristics:**
- Near-black canvas (#05070C) with depth drawn by light: hairline borders, translucent white fills, ambient glow
- Spectral accents used as light sources at small scale, never as large painted surfaces
- Space Grotesk display voice with tightening negative tracking; Inter for everything else
- Tactile, confident controls: pill buttons, soft cyan feedback, 44px minimum targets
- Motion is purposeful and staged: one 2.8s hero arrival, 500–700ms reveals, 180–260ms micro-interactions, slow ambient loops in the footer
- WCAG AA contrast, visible focus rings, and reduced-motion alternatives are non-negotiable brand requirements

## 2. Colors: The Spectral Palette

A dark, blue-leaning neutral core lit by three spectral accents; the brightest object on any screen is the primary action.

### Primary
- **Electric Blue** (#5B8CFF, `--blue`): The brand's core light. Ambient halos under primary buttons, gradient endpoints in the scroll progress bar, service-card hover glow, data visuals. Appears as light (glow, stroke, small text) — never as a large filled surface.
- **Signal Cyan** (#58E6FF, `--cyan`): The interaction voice. Focus rings, hover feedback (link underlines, icon tiles, footer glows), selection highlight, live-status dots. If it glows cyan, it responds.

### Secondary
- **Spectral Violet** (#8B5CF6, `--violet`): The depth tone. Far edge of spectral gradients, nebula and atmosphere fields, large blurred background orbs at 4–13% opacity. Rarely a foreground color.
- **Success Mint** (#4ADE80): Confirmation states only — form success, positive checks. Rendered as tinted translucent panels (`emerald-400/[.06]` fill, `/20` border) rather than solid green.

### Neutral
- **Deep Space** (#05070C, `--canvas`): The body background everywhere. The night sky the whole system sits on.
- **Elevated** (#0A0E17, `--surface`) and **Surface** (#101725, `--surface-2`): Stepped panel tones for grouped content; in practice most panels are Deep Space plus a translucent white fill (2.5–8%).
- **Starlight** (#F4F7FB, `--ink`): Primary text. Headings step up to pure white; body copy uses the slate ramp (slate-300 #CBD5E1 → slate-400 #94A3B8) for secondary voice.
- **Muted** (#9AA8BC, `--muted`): Tertiary text and quiet metadata on the canvas.
- **Hairline** (rgba(255,255,255,.10), `--line`): The structural line weight. Card borders, dividers, table rules — 1px, always.
- **Pure White** (#FFFFFF) and **Ink Inverse** (#07101D): The primary button pair — the one large bright surface in the system and the near-black text that sits on it.

### Named Rules
**The Brightest Object Rule.** The brightest element on any screen is the primary CTA (white pill). Nothing else — no panel, no illustration, no heading treatment — may out-shine the action we want taken.

**The Light, Not Paint Rule.** Spectral accents appear as light: glows, 1px gradient lines, focus rings, particles, small type. A large flat fill of Electric Blue, Signal Cyan, or Spectral Violet is off-system.

## 3. Typography

**Display Font:** Space Grotesk (variable, with Inter fallback)
**Body Font:** Inter (variable, with Arial fallback)
**Label/Mono Font:** System mono stack (`font-mono`) — tiny operational badges and card indices only

**Character:** A geometric display voice with compact leading and confident negative tracking, grounded by Inter's neutrality at text sizes. The pairing reads as engineering precision without coldness; the mono voice only whispers (10–11px badges, `01`-style indices).

### Hierarchy
- **Display** (500, `clamp(3.55rem, 7.4vw, 7.35rem)`, line-height 0.88, tracking −0.075em): Homepage hero only. Carries the animated white→ice-blue display gradient.
- **Headline** (500, 2.25rem → 3.75rem stepped by breakpoint, tracking −0.055em): Section and page headings (`h2`), balanced with `text-wrap: balance`.
- **Title** (500, 1.5rem, tracking −0.04em): Card and sub-section headings (`h3`).
- **Body** (400, 1rem minimum, line-height ~1.7): Paragraphs in slate-300/400; lead paragraphs step to 1.125–1.25rem with line-height 1.75+. Cap prose at 65–75ch (`max-w-xl` on lead copy).
- **Label** (650, 0.72rem, tracking 0.19em, uppercase, #9EEFFF): The `.eyebrow` kicker above section headings — part of the committed section grammar.

### Named Rules
**The Tightening Rule.** Tracking tightens as type grows: −0.04em at title, −0.055em at headline, −0.075em at display — and never goes negative at body sizes.

**The One Gradient Rule.** The animated display gradient exists in exactly one place: the homepage hero's leading word. It is a signature, not a technique — never reuse gradient text on any other heading.

## 4. Elevation

**Light defines depth.** Edges are drawn with light, not cast shadows: 1px hairline borders, translucent white fills stepped from 2.5% (rest) to 8% (hover), and occasional ambient glow. Surfaces are flat at rest; depth is a property of light hitting structure, which keeps the dark canvas clean and the geometry exact. Cast shadow is reserved for floating chrome — elements that genuinely leave the page surface.

### Shadow Vocabulary
- **Button halo** (`box-shadow: 0 12px 40px rgba(91,140,255,.15)`): The blue ambient glow under the primary CTA. Conversion has its own light.
- **Header float** (`box-shadow: 0 12px 50px rgba(0,0,0,.28)` + `backdrop-blur-xl`): The scrolled navigation bar, the one true floating layer.
- **Node glow** (`box-shadow: 0 0 12px #58E6FF`): Live-status dots and small luminous markers.
- **Footer CTA** (`inset 0 1px rgba(255,255,255,.08), 0 16px 48px rgba(0,0,0,.22)`): Inset light edge plus soft drop for the footer's featured panel.

### Named Rules
**The Floating Chrome Rule.** Only elements that float above the page (scrolled header, primary CTA, toasts) may cast shadow. Panels, cards, and sections in the page flow get borders and fills, never drop shadows.

## 5. Components

Controls are tactile and confident: generous pill shapes, soft luminous feedback, immediate response. Every interactive element meets a 44px minimum target and shows a visible cyan focus ring (`ring-2 ring-cyan-300`, offset against the canvas).

### Buttons
- **Shape:** Full pill (999px radius); heights 44px (sm) / 48px (default) / 56px (lg)
- **Primary:** Pure white fill, Ink Inverse text (#07101D), blue ambient halo; hover shifts the fill to ice cyan (#CFFAFE). The brightest object on screen.
- **Secondary:** Ghost pill — 1px white/15 border over 4% white fill; hover brightens both (border 30%, fill 8%)
- **Ghost:** Text-only pill in slate-200; hover adds 6% white fill
- **Hover / Focus:** 200ms color transitions; optional arrow icon nudges 2px up-right; cyan focus ring with canvas offset
- **Loading:** Spinner replaces icon, label switches (e.g. "Sending"), `disabled` at 70% opacity with wait cursor

### Cards / Containers
- **Corner Style:** 24px radius (cards), 28px (form panel), 32px (feature/CTA panels), 16px (icon tiles)
- **Background:** 2.5% white over canvas, 1px hairline border
- **Hover:** Border to white/20, fill to 4.5%, plus a soft blue radial glow rising from the card's lower edge (300ms)
- **Anatomy (service card):** 48px icon tile (16px radius, cyan icon at 1.6px stroke), mono index (`01`) top-right, title + short copy pushed to the base, uppercase "Explore" affordance that warms to cyan on hover
- **Internal Padding:** 24px, 28px from the `sm` breakpoint

### Inputs / Fields
- **Style:** 48px height, 12px radius, 1px white/10 border over black/20 fill, white text, 16px side padding; labels are 14px medium slate-300 above the field
- **Focus:** Border to cyan at 60% + soft cyan ring (`ring-2 ring-cyan-300/15`) — a gentle glow, not a hard outline
- **Hover:** Border to white/20
- **Error / Success:** Message panel below the form — 12px radius, tinted fill at 6%, tinted border at 20% (red for error, emerald for success), `role="status"`

### Navigation
- **Structure:** Fixed floating bar in a 16px-radius container; transparent at top of page, condensing on scroll (72px → 64px) into a translucent #080B12/85 panel with backdrop blur, hairline border, and the header-float shadow
- **Links:** Pill hit-areas, slate-300 → white; active and hover states draw a 1px cyan→blue gradient underline that scales in from the left (200ms)
- **Progress:** A 1px cyan→blue→violet gradient bar across the very top tracks scroll position
- **Mobile:** Full-screen overlay at 98% canvas opacity with backdrop blur; links become display-type rows (3xl, hairline-divided) staggering in at 40ms intervals; CTA pinned at the bottom

### Infinity Nebula & Footer Atmosphere (signature)
The two telescope views. The homepage hero hosts an infinity-shaped field of orbital light trails and particles arriving over ~2.8s (blur + rise + scale, `cubic-bezier(.16,1,.3,1)`); the footer runs slow mesh lines, drifting particles, data streams, and a traveling divider light (12–22s loops) beneath a static, server-rendered information layer. Both honor reduced motion (animations pause via `data-motion-active`); nothing in them is announced to assistive technology.

### Named Rules
**The Brighten, Don't Bounce Rule.** State changes brighten — border, fill, glow — over 180–260ms. Nothing bounces, scales, or displaces layout; the only permitted travel is a ≤2px icon nudge.

## 6. Do's and Don'ts

### Do:
- **Do** keep body text at AA contrast or better: slate-300 (#CBD5E1) is the floor for paragraph copy on the canvas; muted tones are for metadata only.
- **Do** hold the structural line at exactly 1px white/10 — structure is drawn, not boxed.
- **Do** route every hover state through light: brighter border, brighter fill, soft glow, within 180–260ms.
- **Do** keep the primary CTA the brightest object on every screen (The Brightest Object Rule).
- **Do** ship a reduced-motion path for every animation: hero arrival, marquee, footer atmosphere, smooth scroll, and cursor glow all degrade to static or instant.
- **Do** keep sections on the shared rhythm: 1240px max width, 20/32px gutters, `clamp(5rem, 10vw, 8.5rem)` vertical padding.
- **Do** concentrate ambition in signature moments (nebula, footer atmosphere) and keep everything around them calm — "frontier, not gimmick" (PRODUCT.md).

### Don't:
- **Don't** use giant gradient blobs, neon overload, carousels, stock-office photography, excessive glass, or gratuitous motion (PRODUCT.md anti-references, verbatim).
- **Don't** manufacture trust: no fake client logos, unverified metrics, invented case studies, or named leadership profiles — anywhere, ever.
- **Don't** paint large surfaces with spectral accents; they are light sources (The Light, Not Paint Rule).
- **Don't** reuse gradient text beyond the hero's single signature word (The One Gradient Rule).
- **Don't** add fonts. Two voices (Space Grotesk display, Inter text) plus whispered mono badges is the complete cast.
- **Don't** animate layout properties or add bounce/elastic easing; opacity, transform, and filter only, eased out.
- **Don't** use colored side-stripe borders (`border-left` accents), nested cards, or icon-heading-text card grids that read as template scaffolding.
- **Don't** let any interactive target fall under 44px or ship without a visible focus ring.
- Audit test: if a section could be screenshotted into a generic SaaS template deck without anyone noticing, it fails The Observatory — rework it.
