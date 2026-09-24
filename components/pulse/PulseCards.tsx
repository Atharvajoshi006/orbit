import React from "react";
import { Target, FolderGit2, BookOpen, Lightbulb } from "lucide-react";
import { pulseData } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

export const YourWorldSection: React.FC<{ className?: string }> = ({ className }) => {
  const items = [
    {
      title: "Goals",
      value: pulseData.metrics.goalsSummary,
      icon: Target,
      highlight: false,
    },
    {
      title: "Projects",
      value: pulseData.metrics.projectsSummary,
      icon: FolderGit2,
      highlight: false,
    },
    {
      title: "Learning",
      value: pulseData.metrics.learningSummary,
      icon: BookOpen,
      highlight: true,
    },
    {
      title: "Ideas",
      value: pulseData.metrics.ideasSummary,
      icon: Lightbulb,
      highlight: false,
    },
  ];

  return (
    <div className={cn("space-y-3", className)}>
      <h3 className="text-[11px] font-medium tracking-wider uppercase text-neutral-400">
        Your World
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {items.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-white/70 border border-black/[0.035] shadow-orbit-subtle hover:bg-white hover:border-black/[0.06] transition-all flex flex-col justify-between space-y-2"
            >
              <div className="flex items-center space-x-2">
                <Icon className="w-3.5 h-3.5 text-neutral-400 stroke-[1.75]" />
                <span className="text-xs font-medium text-neutral-700">
                  {item.title}
                </span>
              </div>
              <p
                className={cn(
                  "text-xs leading-snug font-normal",
                  item.highlight ? "text-indigo-600 font-medium" : "text-neutral-500"
                )}
              >
                {item.value}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

