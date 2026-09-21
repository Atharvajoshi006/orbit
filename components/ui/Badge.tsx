import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "subtle" | "accent" | "ai" | "success" | "warning";
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  className,
  variant = "default",
  ...props
}) => {
  const variantStyles = {
    default: "bg-white/[0.04] text-neutral-300 border-white/[0.08]",
    subtle: "bg-white/[0.02] text-neutral-400 border-white/[0.05]",
    accent: "bg-sky-500/[0.08] text-sky-400 border-sky-500/20",
    ai: "bg-indigo-500/[0.08] text-indigo-300 border-indigo-500/20",
    success: "bg-emerald-500/[0.08] text-emerald-400 border-emerald-500/20",
    warning: "bg-amber-500/[0.08] text-amber-400 border-amber-500/20",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-md border tracking-wide transition-colors duration-150",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
