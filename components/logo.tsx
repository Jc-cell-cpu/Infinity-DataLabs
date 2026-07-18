import Link from "next/link";
import { useId } from "react";
import { cn } from "@/lib/utils";

type LogoProps = { className?: string; showWordmark?: boolean };

export function Logo({ className, showWordmark = true }: LogoProps) {
  const gradientId = useId().replaceAll(":", "");

  return (
    <Link href="/" className={cn("inline-flex min-h-11 items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300", className)} aria-label="Infinity DataLabs home">
      <svg className="h-9 w-[58px] shrink-0" viewBox="-4 0 112 64" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id={gradientId} x1="5" y1="15" x2="101" y2="52" gradientUnits="userSpaceOnUse">
            <stop stopColor="#315BFF" />
            <stop offset=".34" stopColor="#477CFF" />
            <stop offset=".56" stopColor="#704CFF" />
            <stop offset=".8" stopColor="#4937E8" />
            <stop offset="1" stopColor="#8A5CFF" />
          </linearGradient>
          <mask id={`mask-${gradientId}`} maskUnits="userSpaceOnUse" x="-200" y="-200" width="1000" height="1000">
            <rect x="-20" y="-20" width="160" height="120" fill="white" />
            <circle cx="2" cy="32" r="3.5" fill="black" />
            <circle cx="102" cy="32" r="3.5" fill="black" />
          </mask>
        </defs>
        <g mask={`url(#mask-${gradientId})`}>
          <path d="M24 49c-10.5 0-19-7.6-19-17 0-9.4 8.5-17 19-17 14 0 14 8 28 8s14-8 28-8c10.5 0 19 7.6 19 17 0 9.4-8.5 17-19 17-14 0-14-8-28-8s-14 8-28 8z" stroke={`url(#${gradientId})`} strokeWidth="11" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <circle cx="2" cy="32" r="3.5" fill="none" stroke={`url(#${gradientId})`} strokeWidth="2.5" />
        <circle cx="102" cy="32" r="3.5" fill="none" stroke={`url(#${gradientId})`} strokeWidth="2.5" />
        <path d="M18 32h12" stroke="#3B9DFF" strokeWidth="6" strokeLinecap="round" />
        <path d="M74 32h12" stroke="#78E2BD" strokeWidth="6" strokeLinecap="round" />
      </svg>
      {showWordmark ? <span className="font-display whitespace-nowrap text-[18px] tracking-[-.035em] text-white"><span className="font-light">Infinity </span><span className="font-bold">DataLabs</span></span> : null}
    </Link>
  );
}
