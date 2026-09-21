import React from "react";
import { Zap, Radio, Layers, Sparkles, Compass, Shield } from "lucide-react";
import { pulseData } from "@/lib/mock-data";
import { Badge } from "@/lib/../components/ui/Badge";
import { cn } from "@/lib/utils";

interface ContextPanelProps {
  className?: string;
}

export const ContextPanel: React.FC<ContextPanelProps> = ({ className }) => {
  return (
    <aside
      className={cn(
        "w-80 flex-shrink-0 hidden xl:flex flex-col h-[calc(100vh-3.5rem)] sticky top-14 bg-[#0a0b0f] border-l border-white/[0.06] p-5 overflow-y-auto space-y-6 select-none",
        className
      )}
    >
      {/* Top Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
        <div className="flex items-center space-x-2">
          <Radio className="w-3.5 h-3.5 text-sky-400" />
          <h4 className="text-xs font-semibold tracking-wider text-neutral-300 uppercase">
            Context Matrix
          </h4>
        </div>
        <Badge variant="subtle" className="text-[10px] font-mono">
          Ready
        </Badge>
      </div>

      {/* Orbit Intelligence Status */}
      <div className="p-4 rounded-xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/[0.07] space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-medium text-neutral-400">Context Mesh</span>
          <span className="text-[10px] font-mono text-sky-400">Phase 0 Initialized</span>
        </div>
        <p className="text-xs text-neutral-300 leading-relaxed">
          Local context model is listening to active goals, project spaces, and learning threads.
        </p>
        <div className="grid grid-cols-3 gap-2 pt-1 border-t border-white/[0.05] text-center">
          <div className="p-1.5 rounded-lg bg-white/[0.02]">
            <div className="text-xs font-mono font-semibold text-neutral-200">3</div>
            <div className="text-[10px] text-neutral-500">Goals</div>
          </div>
          <div className="p-1.5 rounded-lg bg-white/[0.02]">
            <div className="text-xs font-mono font-semibold text-neutral-200">3</div>
            <div className="text-[10px] text-neutral-500">Projects</div>
          </div>
          <div className="p-1.5 rounded-lg bg-white/[0.02]">
            <div className="text-xs font-mono font-semibold text-neutral-200">3</div>
            <div className="text-[10px] text-neutral-500">Domains</div>
          </div>
        </div>
      </div>

      {/* Live Signals Placeholder */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h5 className="text-[11px] font-medium uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
            <Zap className="w-3 h-3 text-neutral-400" />
            Ecosystem Signals
          </h5>
          <span className="text-[10px] font-mono text-neutral-500">Mock Data</span>
        </div>

        <div className="space-y-2">
          {pulseData.signals.map((signal, idx) => (
            <div
              key={idx}
              className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.1] transition-colors"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-medium text-neutral-200">
                  {signal.title}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400/80" />
              </div>
              <p className="text-[11px] text-neutral-400 leading-snug">
                {signal.detail}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Contextual Focus Tip */}
      <div className="p-3.5 rounded-lg bg-sky-500/[0.03] border border-sky-500/10 space-y-1.5">
        <div className="flex items-center space-x-1.5 text-sky-300 text-xs font-medium">
          <Sparkles className="w-3.5 h-3.5 text-sky-400" />
          <span>Continuous Synthesis</span>
        </div>
        <p className="text-[11px] text-neutral-400 leading-relaxed">
          In future phases, this area will render real-time knowledge graph connections, active agent thoughts, and memory traces.
        </p>
      </div>
    </aside>
  );
};
