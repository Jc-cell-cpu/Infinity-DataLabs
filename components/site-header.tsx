"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { Logo } from "@/components/logo";
import { ButtonLink } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "/services", label: "Services" },
  { href: "/talent", label: "Talent" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.div className="fixed inset-x-0 top-0 z-[70] h-px origin-left bg-gradient-to-r from-cyan-300 via-blue-500 to-violet-500" style={{ scaleX: scrollYProgress }} aria-hidden="true" />
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
        <div className={cn("mx-auto flex max-w-[1240px] items-center justify-between rounded-2xl border px-3 transition-all duration-300 sm:px-4", scrolled ? "h-16 border-white/10 bg-[#080b12]/85 shadow-[0_12px_50px_rgba(0,0,0,.28)] backdrop-blur-xl" : "h-[72px] border-transparent bg-transparent")}>
          <Logo />
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link key={link.href} href={link.href} aria-current={active ? "page" : undefined} className={cn("group relative flex min-h-11 cursor-pointer items-center rounded-full px-4 text-sm font-medium text-slate-300 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300", active && "text-white")}>
                  {link.label}
                  <span className={cn("absolute inset-x-4 bottom-1 h-px origin-left bg-gradient-to-r from-cyan-300 to-blue-500 transition-transform duration-200", active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100")} />
                </Link>
              );
            })}
          </nav>
          <div className="hidden lg:block"><ButtonLink href="/contact" size="sm" arrow>Talk to experts</ButtonLink></div>
          <button type="button" className="grid size-11 cursor-pointer place-items-center rounded-full border border-white/10 bg-white/[.04] text-white transition-colors hover:bg-white/[.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 lg:hidden" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close navigation" : "Open navigation"}>
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </header>
      <AnimatePresence>
        {open ? (
          <motion.div id="mobile-navigation" className="fixed inset-0 z-40 flex flex-col bg-[#05070c]/98 px-6 pb-8 pt-28 backdrop-blur-2xl lg:hidden" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.2 }}>
            <nav className="flex flex-1 flex-col" aria-label="Mobile navigation">
              {links.map((link, index) => (
                <motion.div key={link.href} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.04 }}>
                  <Link href={link.href} onClick={() => setOpen(false)} className="flex min-h-16 items-center border-b border-white/10 font-display text-3xl font-medium tracking-tight text-white">{link.label}</Link>
                </motion.div>
              ))}
            </nav>
            <ButtonLink href="/contact" onClick={() => setOpen(false)} size="lg" className="w-full" arrow>Start a conversation</ButtonLink>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
