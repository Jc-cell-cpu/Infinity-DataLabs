"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const glow = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const onMove = (event: PointerEvent) => {
      if (!glow.current) return;
      glow.current.style.transform = `translate3d(${event.clientX - 220}px, ${event.clientY - 220}px, 0)`;
      glow.current.style.opacity = "1";
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);
  return <div ref={glow} className="pointer-events-none fixed left-0 top-0 z-[1] hidden size-[440px] rounded-full bg-[radial-gradient(circle,rgba(91,140,255,.07),transparent_66%)] opacity-0 transition-opacity duration-500 lg:block" aria-hidden="true" />;
}
