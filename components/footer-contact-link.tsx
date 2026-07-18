"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import type { PointerEvent } from "react";

export function FooterContactLink() {
  const reducedMotion = useReducedMotion();
  const xTarget = useMotionValue(0);
  const yTarget = useMotionValue(0);
  const x = useSpring(xTarget, { stiffness: 260, damping: 18, mass: .4 });
  const y = useSpring(yTarget, { stiffness: 260, damping: 18, mass: .4 });

  function move(event: PointerEvent<HTMLDivElement>) {
    if (reducedMotion || event.pointerType !== "mouse") return;
    const rect = event.currentTarget.getBoundingClientRect();
    xTarget.set((event.clientX - rect.left - rect.width / 2) * .11);
    yTarget.set((event.clientY - rect.top - rect.height / 2) * .16);
  }

  function reset() { xTarget.set(0); yTarget.set(0); }

  return <motion.div onPointerMove={move} onPointerLeave={reset} style={{ x, y }} className="w-fit">
    <Link href="/contact" className="footer-cta group inline-flex min-h-12 cursor-pointer items-center gap-3 rounded-full border border-white/15 bg-white/[.065] px-5 text-sm font-semibold text-white backdrop-blur-xl transition-colors duration-200 hover:bg-white/[.11] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
      Start a conversation
      <span className="grid size-7 place-items-center rounded-full bg-white text-[#07101d]"><ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" /></span>
    </Link>
  </motion.div>;
}
