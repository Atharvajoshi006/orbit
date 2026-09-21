import React from "react";
import { Sparkles, ArrowUpRight } from "lucide-react";
import { OrbitSeeingInsight } from "@/lib/mock-data";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

interface OrbitSeeingCardProps {
  insight: OrbitSeeingInsight;
  className?: string;
}

export const OrbitSeeingCard: React.FC<OrbitSeeingCardProps> = ({
  insight,
  className,
}) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-[#131722]/90 via-[#0e1118]/80 to-[#0b0d13]/90 border border-sky-500/20 shadow-orbit-card backdrop-blur-md transition-all duration-200",
        className
      )}
    >
      {/* Subtle background glow effect */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-indigo-500/5 rounded-full blur-2xl pointer-events-none -ml-20 -mb-20" />

      <div className="relative z-10 flex flex-col space-y-4">
        {/* Top Header Badge */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400"></span>
            </span>
            <span className="text-[11px] font-mono tracking-widest uppercase font-semibold text-sky-400">
              {insight.headline}
            </span>
          </div>
          <span className="text-[11px] text-neutral-500 font-mono">
            {insight.timestamp}
          </span>
        </div>

        {/* Insight Observation text */}
        <p className="text-base sm:text-lg font-normal text-neutral-100 leading-relaxed max-w-3xl">
          "{insight.observation}"
        </p>

        {/* Connected Context Areas */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/[0.06]">
          <span className="text-xs text-neutral-500 font-medium">Cross-domain link:</span>
          {insight.connectedAreas.map((area, index) => (
            <Badge
              key={index}
              variant="ai"
              className="text-[11px] py-0.5 px-2 bg-indigo-500/[0.08] text-indigo-200 border-indigo-500/20"
            >
              {area}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};
