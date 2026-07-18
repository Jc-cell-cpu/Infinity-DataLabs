import { ButtonLink } from "@/components/ui/button";
export default function NotFound() {
  return <section className="grid min-h-screen place-items-center px-5"><div className="max-w-xl text-center"><p className="font-mono text-sm text-cyan-200">404 / route not found</p><h1 className="mt-5 font-display text-6xl font-medium tracking-[-.07em] text-white">This path ends here.</h1><p className="mt-5 text-slate-400">The page may have moved, or the address may be incomplete.</p><div className="mt-8"><ButtonLink href="/" arrow>Back to home</ButtonLink></div></div></section>;
}
