"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

const stats = [
  { value: 9, suffix: "+", label: "Connected service disciplines" },
  { value: 4, suffix: "", label: "Flexible engagement models" },
  { value: 3, suffix: "", label: "Cloud ecosystems" },
  { value: 1, suffix: "", label: "Accountable delivery partner" },
];

export function Stats() {
  return <div className="grid grid-cols-2 border-l border-t border-white/10 lg:grid-cols-4">{stats.map((stat) => <Counter key={stat.label} {...stat} />)}</div>;
}

function Counter({ value, suffix, label }: (typeof stats)[number]) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduced = useReducedMotion();
  const [display, setDisplay] = useState(reduced ? value : 0);
  useEffect(() => {
    if (!inView || reduced) return;
    const started = performance.now();
    const duration = 900;
    let frame = 0;
    const tick = (time: number) => {
      const progress = Math.min((time - started) / duration, 1);
      setDisplay(Math.round(value * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduced, value]);
  return <div ref={ref} className="min-h-44 border-b border-r border-white/10 p-5 sm:p-7"><p className="font-display text-4xl font-medium tracking-[-.06em] text-white sm:text-5xl">{display}{suffix}</p><p className="mt-4 max-w-[12rem] text-xs leading-5 text-slate-500 sm:text-sm">{label}</p></div>;
}
