"use client";
import { ButtonLink } from "@/components/ui/button";
export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return <section className="grid min-h-screen place-items-center px-5"><div className="max-w-xl text-center"><p className="eyebrow">Something went wrong</p><h1 className="mt-5 font-display text-5xl font-medium tracking-[-.06em] text-white">The system hit an unexpected edge.</h1><p className="mt-5 text-slate-400">Try the request once more, or return to the home page.</p><div className="mt-8 flex justify-center gap-3"><button onClick={reset} className="h-12 cursor-pointer rounded-full bg-white px-6 text-sm font-semibold text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">Try again</button><ButtonLink href="/" variant="secondary">Home</ButtonLink></div></div></section>;
}
