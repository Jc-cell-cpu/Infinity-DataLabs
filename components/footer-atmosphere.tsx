"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

const particles = [
  [8, 18, 1.2, 0], [16, 64, 1, 4], [24, 38, 1.4, 7], [33, 80, 1, 2],
  [42, 24, 1.3, 9], [52, 70, 1, 5], [61, 42, 1.5, 1], [70, 17, 1, 8],
  [78, 76, 1.3, 3], [86, 34, 1, 6], [94, 59, 1.4, 10], [48, 48, 1, 11],
] as const;

export function FooterAtmosphere() {
  const target = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target, offset: ["start end", "end start"] });
  const meshY = useTransform(scrollYProgress, [0, 1], [-22, 22]);
  const glowY = useTransform(scrollYProgress, [0, 1], [18, -18]);

  useEffect(() => {
    const footer = target.current?.closest("footer");
    if (!footer) return;

    if (!("IntersectionObserver" in window)) {
      footer.dataset.motionActive = "true";
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      footer.dataset.motionActive = String(entry.isIntersecting);
    }, { rootMargin: "180px 0px" });

    observer.observe(footer);
    return () => {
      observer.disconnect();
      delete footer.dataset.motionActive;
    };
  }, []);

  return <div ref={target} className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
    <motion.div className="footer-ambient-glow absolute -left-[12%] top-[8%] size-[38rem] rounded-full" style={reducedMotion ? undefined : { y: glowY }} />
    <motion.svg className="absolute inset-x-[-8%] top-0 h-[72%] w-[116%] opacity-55" style={reducedMotion ? undefined : { y: meshY }} viewBox="0 0 1600 720" fill="none" preserveAspectRatio="none">
      <defs><linearGradient id="footer-mesh-gradient" x1="180" y1="120" x2="1380" y2="610" gradientUnits="userSpaceOnUse"><stop stopColor="#3B82F6" stopOpacity=".36" /><stop offset=".5" stopColor="#06B6D4" stopOpacity=".15" /><stop offset="1" stopColor="#10B981" stopOpacity=".3" /></linearGradient></defs>
      <g className="footer-mesh-lines" stroke="url(#footer-mesh-gradient)" strokeWidth="1">
        <path d="M-80 496C180 340 298 412 486 254S798 168 948 304s314 180 728-42" />
        <path d="M-40 584c226-190 386-118 568-278s310-172 486-28 358 188 662-26" opacity=".45" />
        <path d="M30 206c246-94 370 20 520-62s328-88 486 28 320 74 594-64" opacity=".34" />
        <path d="M188 700C320 500 406 432 602 486s282 92 468-52 298-182 510-116" opacity=".28" />
      </g>
      <g fill="#8BE7F0">{[[172,389],[486,254],[700,226],[948,304],[1174,390],[1368,328],[550,144],[1060,190]].map(([x,y], index) => <g key={index} className="footer-mesh-node" style={{ animationDelay: `${index * -.8}s` }}><circle cx={x} cy={y} r="10" opacity=".035" /><circle cx={x} cy={y} r="2.2" opacity=".55" /></g>)}</g>
      <path className="footer-data-stream" d="M-60 536C216 332 376 442 534 254s382-42 506 88 326 118 636-90" stroke="url(#footer-mesh-gradient)" strokeWidth="1.5" pathLength="1" />
    </motion.svg>
    <div className="footer-grid-layer absolute inset-0" />
    {particles.map(([left, top, size, delay], index) => <span key={index} className="footer-particle absolute rounded-full bg-cyan-200" style={{ left: `${left}%`, top: `${top}%`, width: size, height: size, animationDelay: `${delay * -1}s` }} />)}
  </div>;
}
