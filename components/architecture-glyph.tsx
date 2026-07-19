// Compact schematic of a product's pipeline for the homepage teaser cards — a
// spectral rail with a traveling pulse (stroke-dashoffset, matching globe-flow)
// and stage dots. Ambient and decorative; brightens on card hover, pauses under
// reduced motion. Aria-hidden — the card's text carries the meaning.
export function ArchitectureGlyph({ count }: { count: number }) {
  const dots = Math.max(3, Math.min(count, 7));
  const x = (i: number) => 6 + (i * 188) / (dots - 1);
  return (
    <svg viewBox="0 0 200 16" className="arch-glyph" fill="none" aria-hidden="true">
      <line x1="6" y1="8" x2="194" y2="8" stroke="#33507c" strokeWidth="1" />
      <line x1="6" y1="8" x2="194" y2="8" stroke="#9EEFFF" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="1.5 16" className="arch-glyph-flow" />
      {Array.from({ length: dots }, (_, i) => (
        <circle key={i} cx={x(i)} cy="8" r={i === 0 || i === dots - 1 ? 2.8 : 2} fill={i % 2 === 0 ? "#58E6FF" : "#5B8CFF"} />
      ))}
    </svg>
  );
}
