"use client";

import { Plus } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

const faqs = [
  { question: "What kinds of engagements do you take on?", answer: "We build complete products, modernize existing systems, develop AI capabilities, augment engineering teams, and provide structured managed support. The model is shaped around the outcome and your internal capacity." },
  { question: "Can you work with an existing product and engineering team?", answer: "Yes. We can own a defined workstream, add specialist capability, or form a blended team with your people. Roles, decision rights, and delivery standards are made explicit from the start." },
  { question: "How do you approach AI projects?", answer: "We start with the operating problem, the available data, and the required level of control. We then validate feasibility before designing retrieval, agent, model, integration, evaluation, and security layers." },
  { question: "Do you support remote and hybrid delivery?", answer: "Yes. We support remote, hybrid, and onsite models based on role requirements, geography, security needs, and team cadence." },
  { question: "How quickly can an engagement begin?", answer: "Timing depends on scope and specialist availability. A focused discovery can usually begin sooner than a full delivery team. We confirm a realistic mobilization plan during the first conversation." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return <div className="border-t border-white/10">{faqs.map((item, index) => { const expanded = open === index; return <div key={item.question} className="border-b border-white/10"><h3><button type="button" className="flex min-h-20 w-full cursor-pointer items-center justify-between gap-6 py-5 text-left font-display text-lg font-medium text-white transition-colors hover:text-cyan-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-cyan-300 sm:text-xl" onClick={() => setOpen(expanded ? null : index)} aria-expanded={expanded}><span>{item.question}</span><Plus className={cn("size-5 shrink-0 text-slate-500 transition-transform duration-200", expanded && "rotate-45 text-cyan-300")} aria-hidden="true" /></button></h3><AnimatePresence initial={false}>{expanded ? <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.22 }}><p className="max-w-3xl pb-7 pr-12 text-sm leading-7 text-slate-400 sm:text-base">{item.answer}</p></motion.div> : null}</AnimatePresence></div>; })}</div>;
}
