import React from "react";
import { Paperclip, SlidersHorizontal, ArrowUp, Sparkles } from "lucide-react";
import { pulseData } from "@/lib/mock-data";
import { OrbitSeeingCard } from "./OrbitSeeingCard";
import { YourWorldSection } from "./PulseCards";
import { Goal, Project, Idea } from "@/lib/api";

export interface PulseOverviewProps {
  displayName?: string;
  currentFocus?: string;
  goals?: Goal[];
  projects?: Project[];
  ideas?: Idea[];
}

export const PulseOverview: React.FC<PulseOverviewProps> = ({
  displayName,
  currentFocus,
  goals,
  projects,
  ideas,
}) => {
  // Dynamically compute counts for the "YOUR WORLD" cards
  const activeGoals = goals
    ? goals.filter((g) => g.status?.toLowerCase() === "active" || g.status === "In Progress").length
    : undefined;
  const activeProjects = projects
    ? projects.filter((p) => p.status?.toLowerCase() === "active").length
    : undefined;
  const ideasCount = ideas ? ideas.length : undefined;

  const goalsSummary = activeGoals !== undefined ? `${activeGoals} active` : pulseData.metrics.goalsSummary;
  const projectsSummary = activeProjects !== undefined ? `${activeProjects} active` : pulseData.metrics.projectsSummary;
  const ideasSummary = ideasCount !== undefined ? `${ideasCount} recent` : pulseData.metrics.ideasSummary;

  return (
    <div className="space-y-10 max-w-3xl mx-auto py-2 pb-6">
      {/* Hero Welcome Header with subtle Editorial Orbital Illustration */}
      <div className="relative flex items-center justify-between pt-2">
        <div className="space-y-1.5 z-10">
          <h1 className="text-2xl sm:text-3xl font-normal tracking-tight text-neutral-900">
            {displayName ? `Welcome back, ${displayName}` : pulseData.user.greeting}
          </h1>
          <p className="text-sm text-neutral-400 font-normal">
            {currentFocus || pulseData.user.subheading}
          </p>
        </div>

        {/* Minimal Editorial Orbital Illustration */}
        <div className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none opacity-85">
          <svg width="140" height="90" viewBox="0 0 140 90" fill="none" className="overflow-visible">
            {/* Primary Orbital Ellipse */}
            <ellipse
              cx="70"
              cy="45"
              rx="60"
              ry="24"
              stroke="#e2e4ea"
              strokeWidth="1"
              strokeDasharray="3 3"
            />
            {/* Secondary Inner Ellipse */}
            <ellipse
              cx="70"
              cy="45"
              rx="36"
              ry="14"
              stroke="#eceef3"
              strokeWidth="0.75"
            />
            {/* Central Sun / Core Node */}
            <circle cx="70" cy="45" r="4.5" fill="#18181b" />
            <circle cx="70" cy="45" r="7" stroke="#e4e4e7" strokeWidth="0.75" />

            {/* Orbiting Planet 1 (Soft Lavender/Indigo) */}
            <circle cx="120" cy="38" r="3.5" fill="#818cf8" />

            {/* Orbiting Planet 2 (Soft Peach) */}
            <circle cx="28" cy="50" r="2.5" fill="#fb923c" />

            {/* Orbiting Tiny Satellite (Soft Mint) */}
            <circle cx="86" cy="32" r="1.5" fill="#34d399" />
          </svg>
        </div>
      </div>

      {/* Orbit is Seeing - Calm Insight Observation */}
      <section aria-label="AI Observation">
        <OrbitSeeingCard insight={pulseData.orbitSeeing} />
      </section>

      {/* Your World - Lightweight Horizontal Information */}
      <section aria-label="Your World">
        <YourWorldSection
          goalsSummary={goalsSummary}
          projectsSummary={projectsSummary}
          ideasSummary={ideasSummary}
        />
      </section>

      {/* Bottom AI Command Bar */}
      <div className="pt-2">
        <div className="relative flex items-center bg-white rounded-2xl border border-black/[0.06] shadow-orbit-input px-4 py-3 transition-all hover:border-black/[0.1] focus-within:border-indigo-400 focus-within:ring-2 focus-within:ring-indigo-500/10">
          <div className="flex items-center space-x-2 text-neutral-400 mr-2.5">
            <Sparkles className="w-3.5 h-3.5 text-indigo-500 stroke-[1.75]" />
          </div>

          <input
            type="text"
            readOnly
            placeholder="Ask ORBIT anything..."
            className="w-full bg-transparent text-xs sm:text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none cursor-default selection:bg-indigo-50"
          />

          <div className="flex items-center space-x-1.5 ml-2">
            <button
              type="button"
              className="p-1.5 text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100/70 rounded-lg transition-colors"
              title="Attach context (Visual Mock)"
              aria-label="Attach context"
            >
              <Paperclip className="w-3.5 h-3.5 stroke-[1.75]" />
            </button>
            <button
              type="button"
              className="p-1.5 text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100/70 rounded-lg transition-colors"
              title="Parameters (Visual Mock)"
              aria-label="Options"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 stroke-[1.75]" />
            </button>
            <button
              type="button"
              className="w-6 h-6 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white flex items-center justify-center transition-colors shadow-xs ml-1"
              aria-label="Submit command"
            >
              <ArrowUp className="w-3 h-3 stroke-[2.2]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
