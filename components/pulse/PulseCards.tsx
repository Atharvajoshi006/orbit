import React from "react";
import { Target, FolderGit2, BookOpen, Lightbulb, ChevronRight, Clock, Hash, CheckCircle2 } from "lucide-react";
import { GoalItem, ProjectItem, LearningItem, IdeaItem } from "@/lib/mock-data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

// Goals Card List
export const GoalsSection: React.FC<{ goals: GoalItem[] }> = ({ goals }) => {
  return (
    <div className="rounded-2xl p-5 bg-[#101218]/90 border border-white/[0.07] hover:border-white/[0.1] transition-all flex flex-col justify-between">
      <div>
        <SectionHeader
          title="Active Goals"
          count={goals.length}
          icon={<Target className="w-4 h-4 text-sky-400" />}
        />
        <div className="space-y-3 mt-4">
          {goals.map((goal) => (
            <div
              key={goal.id}
              className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:border-white/[0.08] transition-colors"
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <span className="text-xs font-medium text-neutral-200 leading-snug">
                  {goal.title}
                </span>
                <Badge
                  variant={goal.status === "In Progress" ? "accent" : "subtle"}
                  className="text-[10px]"
                >
                  {goal.status}
                </Badge>
              </div>

              {/* Progress Bar */}
              <div className="space-y-1.5">
                <div className="w-full bg-white/[0.06] rounded-full h-1.5 overflow-hidden">
                  <div
                    className="bg-sky-400 h-full rounded-full transition-all duration-300"
                    style={{ width: `${goal.progress}%` }}
                  />
                </div>
                <div className="flex items-center justify-between text-[10px] text-neutral-500 font-mono">
                  <span>{goal.timeframe}</span>
                  <span>{goal.progress}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Projects Section Card
export const ProjectsSection: React.FC<{ projects: ProjectItem[] }> = ({ projects }) => {
  return (
    <div className="rounded-2xl p-5 bg-[#101218]/90 border border-white/[0.07] hover:border-white/[0.1] transition-all flex flex-col justify-between">
      <div>
        <SectionHeader
          title="Active Projects"
          count={projects.length}
          icon={<FolderGit2 className="w-4 h-4 text-indigo-400" />}
        />
        <div className="space-y-3 mt-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:border-white/[0.08] transition-colors"
            >
              <div className="flex items-start justify-between gap-2 mb-1.5">
                <span className="text-xs font-medium text-neutral-200 leading-snug">
                  {project.title}
                </span>
                <Badge
                  variant={project.status === "Active" ? "success" : "subtle"}
                  className="text-[10px]"
                >
                  {project.status}
                </Badge>
              </div>
              <div className="flex items-center justify-between text-[11px] text-neutral-500">
                <span className="text-neutral-400 text-[11px]">{project.tag}</span>
                <span className="text-[10px] font-mono text-neutral-500 flex items-center gap-1">
                  <Clock className="w-2.5 h-2.5" />
                  {project.lastActive}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Learning Section Card
export const LearningSection: React.FC<{ learning: LearningItem[] }> = ({ learning }) => {
  return (
    <div className="rounded-2xl p-5 bg-[#101218]/90 border border-white/[0.07] hover:border-white/[0.1] transition-all flex flex-col justify-between">
      <div>
        <SectionHeader
          title="Learning Nodes"
          count={learning.length}
          icon={<BookOpen className="w-4 h-4 text-emerald-400" />}
        />
        <div className="space-y-3 mt-4">
          {learning.map((item) => (
            <div
              key={item.id}
              className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:border-white/[0.08] transition-colors"
            >
              <div className="flex items-start justify-between gap-2 mb-1.5">
                <span className="text-xs font-medium text-neutral-200 leading-snug">
                  {item.topic}
                </span>
                <Badge variant="subtle" className="text-[10px]">
                  {item.level}
                </Badge>
              </div>
              <div className="flex items-center justify-between text-[11px] text-neutral-500">
                <span className="text-neutral-400 text-[11px]">{item.domain}</span>
                <span className="text-[10px] font-mono text-neutral-500">
                  {item.notesCount} notes
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Ideas Section Card
export const IdeasSection: React.FC<{ ideas: IdeaItem[] }> = ({ ideas }) => {
  return (
    <div className="rounded-2xl p-5 bg-[#101218]/90 border border-white/[0.07] hover:border-white/[0.1] transition-all flex flex-col justify-between">
      <div>
        <SectionHeader
          title="Recent Ideas"
          count={ideas.length}
          icon={<Lightbulb className="w-4 h-4 text-amber-400" />}
        />
        <div className="space-y-3 mt-4">
          {ideas.map((idea) => (
            <div
              key={idea.id}
              className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:border-white/[0.08] transition-colors"
            >
              <div className="flex items-start justify-between gap-2 mb-1.5">
                <span className="text-xs font-medium text-neutral-200 leading-snug">
                  {idea.title}
                </span>
                <Badge
                  variant={idea.resonance === "High" ? "warning" : "subtle"}
                  className="text-[10px]"
                >
                  {idea.resonance}
                </Badge>
              </div>
              <div className="text-[11px] text-neutral-500">
                Domain: <span className="text-neutral-400">{idea.context}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
