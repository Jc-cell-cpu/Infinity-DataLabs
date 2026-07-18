"use client";

import { useEffect, useRef } from "react";

type Particle = {
  t: number;
  speed: number;
  size: number;
  alpha: number;
  trail: number;
  ox: number;
  oy: number;
  oz: number;
  birth: number; // staggered arrival offset [0,0.35] for the converge-and-settle
};

// Restrained white → cyan → blue → violet spectrum from the design system.
const SIGNAL = [126, 236, 255] as const; // cyan — signals flowing in
const SYSTEM = [172, 152, 255] as const; // violet-blue — systems flowing out
const CORE = [240, 250, 255] as const; //   white-hot convergence point

const CONFIG = {
  scale: 0.375, //  curve half-width as a fraction of container width
  yGain: 1.32, //   lobe height multiplier
  zGain: 0.6, //    depth of the 3D fold
  focal: 3.1, //    perspective focal length (world units)
  tilt: 0.19, //    fixed downward tilt (radians)
  centerY: 0.48, // vertical anchor of the crossover
};

// Cross-section of the luminous band: several ∞ ribbons stacked in depth.
const RIBBONS = [-0.092, -0.046, 0, 0.046, 0.092] as const;

function seededRandom(seed = 20260713) {
  let value = seed >>> 0;
  return () => {
    value = (value * 1664525 + 1013904223) >>> 0;
    return value / 4294967296;
  };
}

function createParticles(count: number): Particle[] {
  const random = seededRandom();
  return Array.from({ length: count }, (_, index): Particle => {
    // Most particles hug the ribbon; a few drift into a wider luminous haze.
    const spread = 0.03 + Math.pow(random(), 3) * 0.11;
    return {
      t: random() * Math.PI * 2,
      speed: (0.00006 + random() * 0.00013) * (index % 6 === 0 ? 0.58 : 1),
      size: 0.55 + Math.pow(random(), 2.2) * 2.4,
      alpha: 0.28 + random() * 0.6,
      trail: 9 + Math.floor(random() * 14),
      ox: (random() - 0.5) * spread,
      oy: (random() - 0.5) * spread,
      oz: (random() - 0.5) * spread * 1.2,
      birth: Math.pow(random(), 1.6) * 0.35,
    };
  });
}

// Gerono figure-eight (x=cos t, y=½sin2t) folded into depth (z=sin t), then
// rocked around the vertical axis and tilted, and finally projected. The two
// strands genuinely cross in front of / behind each other at the centre.
function project(
  t: number,
  ox: number,
  oy: number,
  oz: number,
  spin: number,
  width: number,
  cx: number,
  cy: number,
) {
  const st = Math.sin(t);
  const ct = Math.cos(t);
  const x0 = ct + ox;
  const y0 = st * ct * CONFIG.yGain + oy;
  const z0 = st * CONFIG.zGain + oz;

  const cs = Math.cos(spin);
  const sn = Math.sin(spin);
  const x1 = x0 * cs + z0 * sn;
  const z1 = -x0 * sn + z0 * cs;

  const ctilt = Math.cos(CONFIG.tilt);
  const stilt = Math.sin(CONFIG.tilt);
  const y2 = y0 * ctilt - z1 * stilt;
  const z2 = y0 * stilt + z1 * ctilt;

  const persp = CONFIG.focal / (CONFIG.focal - z2);
  const s = width * CONFIG.scale * persp;
  return { x: cx + x1 * s, y: cy + y2 * s, depth: persp };
}

// A flow pulse's arc length; also used to locate its bright head at phase + span.
const FLOW_SPAN = 0.72;

// Brief 0→1 spark as a pulse head passes a crossover of the ∞ (t = π/2 or 3π/2),
// where the two strands meet at the core — a signal firing through the junction.
function crossoverFlare(phase: number) {
  const nodes = [Math.PI / 2, (3 * Math.PI) / 2];
  let nearest = Math.PI;
  for (const node of nodes) {
    const d = Math.abs(Math.atan2(Math.sin(phase - node), Math.cos(phase - node)));
    if (d < nearest) nearest = d;
  }
  return Math.exp(-((nearest / 0.3) ** 2));
}

export function InfinityNebula() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current!;
    const canvas = canvasRef.current!;
    if (!container || !canvas) return;
    const context = canvas.getContext("2d", { alpha: true })!;
    if (!context) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const particles = createParticles(coarsePointer ? 130 : 220);
    const pointer = { x: 0, y: 0, currentX: 0, currentY: 0 };
    let width = 0;
    let height = 0;
    let frame = 0;
    let visible = true;
    const startedAt = performance.now();

    function resize() {
      const rect = container.getBoundingClientRect();
      width = Math.max(rect.width, 1);
      height = Math.max(rect.height, 1);
      const density = Math.min(window.devicePixelRatio || 1, coarsePointer ? 1.15 : 1.5);
      canvas.width = Math.round(width * density);
      canvas.height = Math.round(height * density);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(density, 0, 0, density, 0, 0);
    }

    // Horizontal cyan → white → violet wash: signals on the left, systems on
    // the right, fading out toward the lobe tips.
    function bandGradient(cx: number, intensity: number) {
      const gradient = context.createLinearGradient(cx - width * 0.4, 0, cx + width * 0.4, 0);
      gradient.addColorStop(0, `rgba(${SIGNAL[0]},${SIGNAL[1]},${SIGNAL[2]},0)`);
      gradient.addColorStop(0.13, `rgba(${SIGNAL[0]},${SIGNAL[1]},${SIGNAL[2]},${0.5 * intensity})`);
      gradient.addColorStop(0.5, `rgba(236,250,255,${0.92 * intensity})`);
      gradient.addColorStop(0.87, `rgba(${SYSTEM[0]},${SYSTEM[1]},${SYSTEM[2]},${0.5 * intensity})`);
      gradient.addColorStop(1, `rgba(${SYSTEM[0]},${SYSTEM[1]},${SYSTEM[2]},0)`);
      return gradient;
    }

    function strokeInfinity(offset: number, spin: number, cx: number, cy: number, lineWidth: number) {
      context.beginPath();
      for (let step = 0; step <= 168; step += 1) {
        const t = (step / 168) * Math.PI * 2;
        const point = project(t, 0, offset * 0.35, offset, spin, width, cx, cy);
        if (step === 0) context.moveTo(point.x, point.y);
        else context.lineTo(point.x, point.y);
      }
      context.lineWidth = lineWidth;
      context.stroke();
    }

    // The glowing ∞ band — each ribbon drawn as a soft-wide + crisp-thin pass.
    function drawRibbons(spin: number, cx: number, cy: number, progress: number) {
      context.lineCap = "round";
      context.lineJoin = "round";
      for (const offset of RIBBONS) {
        const edge = 1 - Math.min(1, Math.abs(offset) / 0.1) * 0.45;
        context.strokeStyle = bandGradient(cx, 0.1 * edge * progress);
        strokeInfinity(offset, spin, cx, cy, 6.5);
        context.strokeStyle = bandGradient(cx, 0.16 * edge * progress);
        strokeInfinity(offset, spin, cx, cy, 2.4);
        context.strokeStyle = bandGradient(cx, 0.5 * edge * progress);
        strokeInfinity(offset, spin, cx, cy, 0.8);
      }
    }

    // A bright pulse coursing along the curve — a signal in transit.
    function drawFlow(phase: number, spin: number, cx: number, cy: number, progress: number) {
      const segments = 30;
      const span = FLOW_SPAN;
      let previous = project(phase, 0, 0, 0, spin, width, cx, cy);
      for (let i = 1; i <= segments; i += 1) {
        const ratio = i / segments; // 0 tail → 1 head
        const point = project(phase + ratio * span, 0, 0, 0, spin, width, cx, cy);
        context.strokeStyle = `rgba(224,248,255,${ratio * ratio * 0.55 * progress})`;
        context.lineWidth = 0.6 + ratio * 1.5;
        context.beginPath();
        context.moveTo(previous.x, previous.y);
        context.lineTo(point.x, point.y);
        context.stroke();
        previous = point;
      }
      const glow = context.createRadialGradient(previous.x, previous.y, 0, previous.x, previous.y, width * 0.036);
      glow.addColorStop(0, `rgba(255,255,255,${0.68 * progress})`);
      glow.addColorStop(1, "rgba(200,240,255,0)");
      context.fillStyle = glow;
      context.beginPath();
      context.arc(previous.x, previous.y, width * 0.036, 0, Math.PI * 2);
      context.fill();
    }

    // Light modelled as layered falloff — a small intense point wrapped in a
    // colored corona and a wide, faint atmospheric bloom, rather than one flat
    // white disc. The peak stays tiny so it never clips to a washed-out blob.
    function drawCore(cx: number, cy: number, progress: number, time: number, flare: number) {
      const pulse = reducedMotion ? 1 : 0.9 + Math.sin(time * 0.0013) * 0.1;
      // Synapse flare: as a signal crosses the junction, the cyan corona briefly
      // swells and brightens. The white core is left untouched so the primary
      // CTA stays the brightest object on screen.
      const coronaR = width * 0.12 * pulse * (1 + flare * 0.22);
      const lift = 1 + flare * 0.5;

      const bloom = context.createRadialGradient(cx, cy, 0, cx, cy, width * 0.3 * pulse);
      bloom.addColorStop(0, `rgba(120,190,255,${0.12 * progress})`);
      bloom.addColorStop(0.45, `rgba(74,122,214,${0.055 * progress})`);
      bloom.addColorStop(1, "rgba(6,10,20,0)");
      context.fillStyle = bloom;
      context.beginPath();
      context.arc(cx, cy, width * 0.3 * pulse, 0, Math.PI * 2);
      context.fill();

      const corona = context.createRadialGradient(cx, cy, 0, cx, cy, coronaR);
      corona.addColorStop(0, `rgba(206,242,255,${Math.min(1, 0.5 * progress * lift)})`);
      corona.addColorStop(0.32, `rgba(${SIGNAL[0]},${SIGNAL[1]},${SIGNAL[2]},${Math.min(1, 0.28 * progress * lift)})`);
      corona.addColorStop(0.72, `rgba(91,140,255,${Math.min(1, 0.09 * progress * lift)})`);
      corona.addColorStop(1, "rgba(10,20,40,0)");
      context.fillStyle = corona;
      context.beginPath();
      context.arc(cx, cy, coronaR, 0, Math.PI * 2);
      context.fill();

      const coreR = width * 0.033 * pulse;
      const hot = context.createRadialGradient(cx, cy, 0, cx, cy, coreR);
      hot.addColorStop(0, `rgba(255,255,255,${0.96 * progress})`);
      hot.addColorStop(0.5, `rgba(224,246,255,${0.72 * progress})`);
      hot.addColorStop(1, "rgba(150,224,255,0)");
      context.fillStyle = hot;
      context.beginPath();
      context.arc(cx, cy, coreR, 0, Math.PI * 2);
      context.fill();

      // A single thin anamorphic streak — a whisper of a lens, not a cross.
      const streakW = width * 0.32;
      const streak = context.createLinearGradient(cx - streakW, cy, cx + streakW, cy);
      streak.addColorStop(0, "rgba(150,220,255,0)");
      streak.addColorStop(0.5, `rgba(198,238,255,${0.13 * progress})`);
      streak.addColorStop(1, "rgba(150,220,255,0)");
      context.save();
      context.filter = "blur(1.4px)";
      context.fillStyle = streak;
      context.beginPath();
      context.ellipse(cx, cy, streakW, Math.max(1.1, height * 0.005), 0, 0, Math.PI * 2);
      context.fill();
      context.filter = "none";
      context.restore();
    }

    function draw(timestamp: number) {
      if (!visible) {
        frame = requestAnimationFrame(draw);
        return;
      }

      const load = Math.min((timestamp - startedAt) / 2800, 1);
      const progress = reducedMotion ? 1 : 1 - Math.pow(1 - load, 3);
      pointer.currentX += (pointer.x - pointer.currentX) * 0.03;
      pointer.currentY += (pointer.y - pointer.currentY) * 0.03;

      const cx = width * 0.5 + pointer.currentX * width * 0.02;
      const cy = height * CONFIG.centerY + pointer.currentY * height * 0.028;
      // A gentle rock at rest; on arrival the whole figure rotates in from a
      // slightly steeper angle and settles as the load completes.
      const spin = reducedMotion
        ? 0.34
        : Math.sin(timestamp * 0.00016) * 0.5 + pointer.currentX * 0.5 + (1 - progress) * 0.6;

      context.clearRect(0, 0, width, height);

      const background = context.createRadialGradient(cx, cy, 0, cx, cy, width * 0.72);
      background.addColorStop(0, `rgba(22,45,92,${0.2 * progress})`);
      background.addColorStop(0.48, `rgba(8,18,39,${0.2 * progress})`);
      background.addColorStop(1, "rgba(5,7,12,0)");
      context.fillStyle = background;
      context.fillRect(0, 0, width, height);

      context.globalCompositeOperation = "lighter";
      drawRibbons(spin, cx, cy, progress);

      for (const particle of particles) {
        const headT = particle.t + timestamp * particle.speed;

        // Signals (cyan) become systems (violet) as they pass the white core.
        const lobe = Math.cos(headT);
        const centerness = 1 - Math.min(1, Math.abs(lobe) / 0.55);
        const base = lobe < 0 ? SIGNAL : SYSTEM;
        const mix = centerness * 0.85;
        const red = base[0] + (CORE[0] - base[0]) * mix;
        const green = base[1] + (CORE[1] - base[1]) * mix;
        const blue = base[2] + (CORE[2] - base[2]) * mix;

        // Arrival: each particle condenses out of the white-hot core and settles
        // onto the ribbon — the whole segment scales up from (cx,cy) as it forms.
        const local = reducedMotion ? 1 : Math.min(1, Math.max(0, (load - particle.birth) / 0.5));
        const form = reducedMotion ? 1 : 1 - Math.pow(1 - local, 3);

        context.beginPath();
        for (let step = particle.trail; step >= 0; step -= 1) {
          const point = project(headT - step * 0.02, particle.ox, particle.oy, particle.oz, spin, width, cx, cy);
          const px = cx + (point.x - cx) * form;
          const py = cy + (point.y - cy) * form;
          if (step === particle.trail) context.moveTo(px, py);
          else context.lineTo(px, py);
        }
        const head = project(headT, particle.ox, particle.oy, particle.oz, spin, width, cx, cy);
        const hx = cx + (head.x - cx) * form;
        const hy = cy + (head.y - cy) * form;
        const depth = Math.min(1, Math.max(0, (head.depth - 0.8) / 0.5));
        const near = 0.42 + 0.58 * depth;

        context.strokeStyle = `rgba(${red | 0},${green | 0},${blue | 0},${particle.alpha * 0.32 * near * progress})`;
        context.lineWidth = Math.max(0.4, particle.size * 0.5 * (0.7 + 0.5 * depth));
        context.stroke();

        context.fillStyle = `rgba(${red | 0},${green | 0},${blue | 0},${particle.alpha * near * progress})`;
        context.beginPath();
        context.arc(hx, hy, particle.size * (0.68 + 0.5 * depth), 0, Math.PI * 2);
        context.fill();
      }

      let flare = 0;
      if (!reducedMotion) {
        const flow = timestamp * 0.00019;
        drawFlow(flow % (Math.PI * 2), spin, cx, cy, progress);
        drawFlow((flow + Math.PI) % (Math.PI * 2), spin, cx, cy, progress);
        // The core fires as either pulse head reaches a crossover.
        flare = Math.max(
          crossoverFlare(flow + FLOW_SPAN),
          crossoverFlare(flow + Math.PI + FLOW_SPAN),
        );
      }

      drawCore(cx, cy, progress, timestamp, flare);
      context.globalCompositeOperation = "source-over";
      if (!reducedMotion) frame = requestAnimationFrame(draw);
    }

    const onPointerMove = (event: PointerEvent) => {
      pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.y = (event.clientY / window.innerHeight) * 2 - 1;
    };
    const resizeObserver = new ResizeObserver(resize);
    const visibilityObserver = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; }, { rootMargin: "120px" });
    resizeObserver.observe(container);
    visibilityObserver.observe(container);
    if (!reducedMotion && !coarsePointer) window.addEventListener("pointermove", onPointerMove, { passive: true });
    resize();
    frame = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  // Scroll-coupled depth: the nebula drifts down and dims a little as the hero
  // scrolls away, so it reads as sitting behind the page (parallax lag).
  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const p = Math.min(1, window.scrollY / (window.innerHeight * 0.85));
      wrap.style.transform = `translate3d(0, ${(p * 40).toFixed(2)}px, 0)`;
      wrap.style.opacity = (1 - p * 0.38).toFixed(3);
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return <div ref={wrapRef} className="will-change-transform">
    <div ref={containerRef} className="infinity-nebula relative aspect-[1.2/1] w-full min-w-0 max-w-full overflow-hidden" aria-hidden="true">
      <canvas ref={canvasRef} className="infinity-particle-field absolute inset-0 size-full" />
    </div>
  </div>;
}
