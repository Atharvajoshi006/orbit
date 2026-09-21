import React from "react";
import { pulseData } from "@/lib/mock-data";
import { OrbitSeeingCard } from "./OrbitSeeingCard";
import {
  GoalsSection,
  ProjectsSection,
  LearningSection,
  IdeasSection,
} from "./PulseCards";

export const PulseOverview: React.FC = () => {
  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Hero Welcome Header */}
      <div className="space-y-1.5">
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-100">
          {pulseData.user.greeting}
        </h1>
        <p className="text-sm text-neutral-400 font-normal">
          {pulseData.user.subheading}
        </p>
      </div>

      {/* Orbit is Seeing - Intelligent Synthesis Card */}
      <section aria-label="AI Observation">
        <OrbitSeeingCard insight={pulseData.orbitSeeing} />
      </section>

      {/* Core Ecosystem Grid: Goals, Projects, Learning, Ideas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <GoalsSection goals={pulseData.goals} />
        <ProjectsSection projects={pulseData.projects} />
        <LearningSection learning={pulseData.learning} />
        <IdeasSection ideas={pulseData.ideas} />
      </div>
    </div>
  );
};
