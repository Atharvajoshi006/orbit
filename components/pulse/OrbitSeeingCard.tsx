import React from "react";
import { ArrowRight } from "lucide-react";
import { OrbitSeeingInsight } from "@/lib/mock-data";
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
        "relative rounded-2xl p-6 sm:p-7 bg-white/80 border border-black/[0.04] shadow-orbit-card backdrop-blur-xs transition-all",
        className
      )}
    >
      <div className="flex flex-col space-y-3.5">
        {/* Top Header Label */}
        <div className="flex items-center space-x-2">
          <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
          <span className="text-[11px] font-medium tracking-wider uppercase text-neutral-400">
            {insight.headline}
          </span>
        </div>

        {/* Observation text */}
        <div className="space-y-1 max-w-2xl">
          <p className="text-base sm:text-lg font-normal text-neutral-900 leading-snug">
            {insight.observation}
          </p>
          {insight.subObservation && (
            <p className="text-xs sm:text-sm text-neutral-500 font-normal leading-relaxed">
              {insight.subObservation}
            </p>
          )}
        </div>

        {/* Action Link */}
        <div className="pt-1">
          <button
            type="button"
            className="inline-flex items-center space-x-1.5 text-xs font-medium text-indigo-600 hover:text-indigo-800 transition-colors group cursor-pointer"
          >
            <span>{insight.actionText || "Explore this pattern →"}</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 stroke-[1.75]" />
          </button>
        </div>
      </div>
    </div>
  );
};
