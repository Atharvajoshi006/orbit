import React from "react";
import { FolderGit2, BookOpen, Lightbulb, BookText } from "lucide-react";
import { pulseData } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

interface ContextPanelProps {
  className?: string;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "a-1": FolderGit2,
  "a-2": BookOpen,
  "a-3": Lightbulb,
  "a-4": BookText,
};

export const ContextPanel: React.FC<ContextPanelProps> = ({ className }) => {
  return (
    <aside
      className={cn(
        "w-64 flex-shrink-0 hidden xl:flex flex-col h-full bg-white/40 backdrop-blur-md border-l border-black/[0.04] p-5 select-none text-neutral-800",
        className
      )}
    >
      {/* Top Header */}
      <div className="pb-4">
        <h4 className="text-[11px] font-medium tracking-wider text-neutral-400 uppercase">
          Recent Activity
        </h4>
      </div>

      {/* Activity List */}
      <div className="space-y-3">
        {pulseData.recentActivity.map((activity) => {
          const Icon = iconMap[activity.id] || FolderGit2;
          return (
            <div
              key={activity.id}
              className="p-2.5 rounded-xl hover:bg-black/[0.025] transition-colors cursor-pointer group flex items-start space-x-2.5"
            >
              <div className="mt-0.5 p-1 rounded-md bg-black/[0.03] text-neutral-400 group-hover:text-neutral-700 transition-colors">
                <Icon className="w-3 h-3 stroke-[1.75]" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-neutral-800 truncate">
                    {activity.title}
                  </span>
                  <span className="text-[10px] text-neutral-400 font-mono flex-shrink-0 ml-1">
                    {activity.timeAgo}
                  </span>
                </div>
                <p className="text-[10px] text-neutral-400 truncate">
                  {activity.category}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
};
