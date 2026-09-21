"use client";

import React from "react";
import Link from "next/link";
import {
  Activity,
  Target,
  FolderGit2,
  BookOpen,
  Brain,
  Network,
  Sparkles,
  Bot,
  Settings,
  CircleDot,
  Layers,
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface NavItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  active?: boolean;
  tag?: string;
}

const mainNav: NavItem[] = [
  { name: "Pulse", href: "#", icon: Activity, active: true },
  { name: "Goals", href: "#", icon: Target },
  { name: "Projects", href: "#", icon: FolderGit2 },
  { name: "Journal", href: "#", icon: BookOpen },
  { name: "Memory", href: "#", icon: Brain },
  { name: "Knowledge", href: "#", icon: Network },
  { name: "AI Hub", href: "#", icon: Sparkles },
  { name: "Agents", href: "#", icon: Bot },
];

interface SidebarProps {
  currentTab?: string;
  onSelectTab?: (tabName: string) => void;
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentTab = "Pulse",
  onSelectTab,
  className,
}) => {
  return (
    <aside
      className={cn(
        "w-64 flex-shrink-0 flex flex-col justify-between h-screen sticky top-0 bg-[#0c0d12] border-r border-white/[0.06] select-none z-30",
        className
      )}
    >
      {/* Top section: Branding & Nav */}
      <div className="p-4 flex flex-col gap-6">
        {/* Brand */}
        <div className="flex items-center justify-between px-2 pt-1 pb-2">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neutral-800 to-neutral-900 border border-white/10 flex items-center justify-center relative shadow-sm">
              <CircleDot className="w-4 h-4 text-sky-400 animate-pulse" />
            </div>
            <div>
              <span className="text-sm font-semibold tracking-wider text-neutral-100 uppercase">
                ORBIT
              </span>
              <span className="ml-2 text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/[0.05] text-neutral-400 border border-white/[0.06]">
                v0.1
              </span>
            </div>
          </div>
        </div>

        {/* Navigation list */}
        <nav className="space-y-1">
          <div className="px-2 pb-1 text-[11px] font-medium uppercase tracking-wider text-neutral-500">
            Ecosystem
          </div>
          {mainNav.map((item) => {
            const isActive = currentTab === item.name;
            const Icon = item.icon;
            return (
              <button
                key={item.name}
                type="button"
                onClick={() => onSelectTab && onSelectTab(item.name)}
                className={cn(
                  "w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-all duration-150 group text-left",
                  isActive
                    ? "bg-white/[0.06] text-neutral-100 border border-white/[0.08] shadow-sm"
                    : "text-neutral-400 hover:text-neutral-200 hover:bg-white/[0.03]"
                )}
              >
                <div className="flex items-center space-x-2.5">
                  <Icon
                    className={cn(
                      "w-4 h-4 transition-colors",
                      isActive
                        ? "text-sky-400"
                        : "text-neutral-500 group-hover:text-neutral-300"
                    )}
                  />
                  <span>{item.name}</span>
                </div>
                {isActive ? (
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.6)]" />
                ) : (
                  <span className="text-[10px] text-neutral-600 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                    Phase+
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Bottom section: Settings & User status */}
      <div className="p-4 border-t border-white/[0.06] space-y-3">
        <button
          type="button"
          onClick={() => onSelectTab && onSelectTab("Settings")}
          className={cn(
            "w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-colors text-left",
            currentTab === "Settings"
              ? "bg-white/[0.06] text-neutral-100 border border-white/[0.08]"
              : "text-neutral-400 hover:text-neutral-200 hover:bg-white/[0.03]"
          )}
        >
          <div className="flex items-center space-x-2.5">
            <Settings className="w-4 h-4 text-neutral-500" />
            <span>Settings</span>
          </div>
          <span className="text-[10px] text-neutral-600 font-mono">v0.1</span>
        </button>

        {/* User Mini Profile */}
        <div className="flex items-center justify-between px-3 py-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05]">
          <div className="flex items-center space-x-2.5">
            <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-sky-500/20 to-indigo-500/20 border border-sky-400/30 flex items-center justify-center text-xs font-semibold text-sky-200">
              AJ
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-medium text-neutral-200">Atharva</span>
              <span className="text-[10px] text-neutral-500">Local Orbit</span>
            </div>
          </div>
          <div className="w-2 h-2 rounded-full bg-emerald-400/80 shadow-[0_0_6px_rgba(52,211,153,0.5)]" />
        </div>
      </div>
    </aside>
  );
};
