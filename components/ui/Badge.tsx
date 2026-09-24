import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "subtle" | "accent" | "ai" | "success" | "warning" | "danger";
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  className,
  variant = "default",
  ...props
}) => {
  const variantStyles = {
    default: "bg-neutral-100 text-neutral-700 border-neutral-200/70",
    subtle: "bg-black/[0.03] text-neutral-500 border-black/[0.04]",
    accent: "bg-indigo-50 text-indigo-700 border-indigo-200/60",
    ai: "bg-violet-50 text-violet-700 border-violet-200/60",
    success: "bg-emerald-50 text-emerald-700 border-emerald-200/60",
    warning: "bg-amber-50 text-amber-800 border-amber-200/60",
    danger: "bg-rose-50 text-rose-700 border-rose-200/60",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-0.5 text-[11px] font-medium rounded-md border tracking-tight transition-colors duration-150",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
