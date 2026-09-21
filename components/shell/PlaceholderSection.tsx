import React from "react";
import { Sparkles, Construction, Layers, ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

interface PlaceholderSectionProps {
  sectionName: string;
  onBackToPulse: () => void;
}

const sectionPhaseMap: Record<string, { phase: string; description: string }> = {
  Goals: {
    phase: "Phase 3",
    description: "Hierarchical goal tracking, milestones, and alignment with active projects.",
  },
  Projects: {
    phase: "Phase 4",
    description: "Multi-repository workspace orchestration, task graph, and codebase integration.",
  },
  Journal: {
    phase: "Phase 5",
    description: "Daily reflective capture, continuous notes, and structured synthesis.",
  },
  Memory: {
    phase: "Phase 6",
    description: "Vector embeddings, persistent memory store, and context retrieval engine.",
  },
  Knowledge: {
    phase: "Phase 7",
    description: "Personal knowledge graph, bidirectional relationships, and entity extraction.",
  },
  "AI Hub": {
    phase: "Phase 9",
    description: "Model routing, local & cloud LLM endpoints, and specialized inference pipelines.",
  },
  Agents: {
    phase: "Phase 9 & 11",
    description: "Autonomous goal-seeking agents, tool orchestration, and background executors.",
  },
  Settings: {
    phase: "Foundation",
    description: "Ecosystem configuration, UI preferences, model keys, and storage rules.",
  },
};

export const PlaceholderSection: React.FC<PlaceholderSectionProps> = ({
  sectionName,
  onBackToPulse,
}) => {
  const meta = sectionPhaseMap[sectionName] || {
    phase: "Upcoming Phase",
    description: "This module will be activated in an upcoming roadmap phase.",
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-4 flex flex-col items-center justify-center text-center space-y-6">
      <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center">
        <Sparkles className="w-6 h-6 text-sky-400" />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-center gap-2">
          <h2 className="text-xl font-semibold text-neutral-100">{sectionName}</h2>
          <Badge variant="accent" className="text-[10px] font-mono">
            {meta.phase}
          </Badge>
        </div>
        <p className="text-sm text-neutral-400 max-w-md mx-auto leading-relaxed">
          {meta.description}
        </p>
      </div>

      <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] max-w-lg text-xs text-neutral-500">
        In accordance with Phase 0 foundation guidelines, future modules are represented as navigational anchors.
      </div>

      <button
        type="button"
        onClick={onBackToPulse}
        className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.08] text-xs font-medium text-neutral-200 transition-colors"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Return to Pulse</span>
      </button>
    </div>
  );
};
