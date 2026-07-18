import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070c]",
  {
    variants: {
      variant: {
        primary: "bg-white text-[#07101d] shadow-[0_12px_40px_rgba(91,140,255,.15)] hover:bg-cyan-100",
        secondary: "border border-white/15 bg-white/[.04] text-white hover:border-white/30 hover:bg-white/[.08]",
        ghost: "text-slate-200 hover:bg-white/[.06] hover:text-white",
      },
      size: {
        default: "h-12 px-6",
        sm: "h-11 px-5",
        lg: "h-14 px-7 text-[15px]",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  },
);

type ButtonLinkProps = VariantProps<typeof buttonVariants> & {
  href: string;
  children: React.ReactNode;
  className?: string;
  arrow?: boolean;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

export function ButtonLink({ href, children, variant, size, className, arrow = false, onClick }: ButtonLinkProps) {
  return (
    <Link href={href} onClick={onClick} className={cn(buttonVariants({ variant, size }), className)}>
      {children}
      {arrow ? <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" /> : null}
    </Link>
  );
}
