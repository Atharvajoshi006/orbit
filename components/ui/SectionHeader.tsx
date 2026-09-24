import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  count?: number;
  description?: string;
  icon?: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  count,
  description,
  icon,
  action,
  className,
}) => {
  return (
    <div className={cn("flex items-center justify-between mb-3.5", className)}>
      <div className="flex items-center space-x-2">
        {icon && <span className="text-neutral-500">{icon}</span>}
        <h3 className="text-xs font-semibold text-neutral-800 tracking-wider uppercase flex items-center gap-1.5">
          {title}
          {count !== undefined && (
            <span className="text-[11px] font-normal text-neutral-400 font-mono">
              ({count})
            </span>
          )}
        </h3>
        {description && (
          <span className="text-xs text-neutral-400 hidden sm:inline-block">
            — {description}
          </span>
        )}
      </div>
      {action && <div>{action}</div>}
    </div>
  );
};
