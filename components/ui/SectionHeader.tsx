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
      <div className="flex items-center space-x-2.5">
        {icon && <span className="text-neutral-400">{icon}</span>}
        <h3 className="text-sm font-semibold text-neutral-200 tracking-tight flex items-center gap-2">
          {title}
          {count !== undefined && (
            <span className="text-xs font-normal text-neutral-500 font-mono">
              ({count})
            </span>
          )}
        </h3>
        {description && (
          <span className="text-xs text-neutral-500 hidden sm:inline-block">
            — {description}
          </span>
        )}
      </div>
      {action && <div>{action}</div>}
    </div>
  );
};
