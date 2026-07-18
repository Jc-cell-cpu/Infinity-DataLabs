import type { IconType } from "react-icons";
import {
  SiReact, SiNextdotjs, SiAngular, SiVuedotjs, SiNodedotjs, SiSpringboot,
  SiPython, SiFastapi, SiDotnet, SiGo, SiPostgresql, SiMongodb, SiRedis,
  SiGooglecloud, SiKubernetes, SiDocker,
} from "react-icons/si";
import { FaJava, FaAws } from "react-icons/fa6";
import { VscAzure } from "react-icons/vsc";
import { technologies } from "@/lib/site-data";

// Official brand colours (Next.js and .NET nudged lighter so they read on the dark chip).
const brand: Record<string, { icon: IconType; color: string }> = {
  "React": { icon: SiReact, color: "#61DAFB" },
  "Next.js": { icon: SiNextdotjs, color: "#F5F5F5" },
  "Angular": { icon: SiAngular, color: "#DD0031" },
  "Vue": { icon: SiVuedotjs, color: "#4FC08D" },
  "Node.js": { icon: SiNodedotjs, color: "#5FA04E" },
  "Java": { icon: FaJava, color: "#E76F00" },
  "Spring Boot": { icon: SiSpringboot, color: "#6DB33F" },
  "Python": { icon: SiPython, color: "#3776AB" },
  "FastAPI": { icon: SiFastapi, color: "#009688" },
  ".NET": { icon: SiDotnet, color: "#7C5CE8" },
  "Go": { icon: SiGo, color: "#00ADD8" },
  "PostgreSQL": { icon: SiPostgresql, color: "#4169E1" },
  "MongoDB": { icon: SiMongodb, color: "#47A248" },
  "Redis": { icon: SiRedis, color: "#FF4438" },
  "AWS": { icon: FaAws, color: "#FF9900" },
  "Azure": { icon: VscAzure, color: "#0089D6" },
  "Google Cloud": { icon: SiGooglecloud, color: "#4285F4" },
  "Kubernetes": { icon: SiKubernetes, color: "#326CE5" },
  "Docker": { icon: SiDocker, color: "#2496ED" },
};

export function TechMarquee() {
  // Four copies so one loop unit (25% of the track) always exceeds the viewport —
  // the seam repeats before any blank space can show. Per-item margin (not flex
  // gap) keeps that 25% landing exactly on a copy boundary.
  const copies = 4;
  const items = Array.from({ length: copies }, () => technologies).flat();
  return <div className="marquee-mask overflow-hidden border-y border-white/10 py-6" aria-label={`Technology capabilities: ${technologies.join(", ")}`}><div className="marquee-track flex w-max items-center hover:[animation-play-state:paused]">{items.map((item, index) => {
    const entry = brand[item];
    const Icon = entry?.icon;
    return <span key={`${item}-${index}`} title={item} aria-hidden="true" style={{ color: entry?.color }} className={`mr-3 grid size-12 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[.03] transition-transform duration-200 hover:scale-110 hover:border-white/25${index >= technologies.length ? " marquee-clone" : ""}`}>{Icon ? <Icon className="size-5" /> : <span className="px-2 font-mono text-[10px]">{item}</span>}</span>;
  })}</div></div>;
}
