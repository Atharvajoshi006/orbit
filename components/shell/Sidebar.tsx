"use client";

import React from "react";
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
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface NavItem {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

const primaryNav: NavItem[] = [
  { name: "Pulse", icon: Activity },
  { name: "Goals", icon: Target },
  { name: "Projects", icon: FolderGit2 },
  { name: "Journal", icon: BookOpen },
  { name: "Memory", icon: Brain },
  { name: "Knowledge", icon: Network },
];

const secondaryNav: NavItem[] = [
  { name: "AI Hub", icon: Sparkles },
  { name: "Agents", icon: Bot },
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
        "w-52 flex-shrink-0 flex flex-col justify-between h-full bg-white/60 backdrop-blur-md border-r border-black/[0.04] select-none text-neutral-800 py-5 px-3.5",
        className
      )}
    >
      {/* Top section: Branding & Nav */}
      <div className="flex flex-col space-y-6">
        {/* Brand */}
        <div className="flex items-center space-x-2 px-2.5 pt-1">
          <svg
            className="w-4 h-4 text-neutral-900"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="3" fill="currentColor" />
            <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(-30 12 12)" strokeWidth="1.5" />
          </svg>
          <span className="text-xs font-semibold tracking-wider text-neutral-900 uppercase">
            ORBIT
          </span>
        </div>

        {/* Navigation lists */}
        <div className="space-y-4">
          <nav className="space-y-0.5">
            {primaryNav.map((item) => {
              const isActive = currentTab === item.name;
              const Icon = item.icon;
              return (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => onSelectTab && onSelectTab(item.name)}
                  className={cn(
                    "w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-150 text-left",
                    isActive
                      ? "bg-black/[0.04] text-neutral-900 font-semibold"
                      : "text-neutral-500 hover:text-neutral-900 hover:bg-black/[0.02]"
                  )}
                >
                  <div className="flex items-center space-x-2.5">
                    <Icon
                      className={cn(
                        "w-3.5 h-3.5 transition-colors stroke-[1.75]",
                        isActive
                          ? "text-neutral-900"
                          : "text-neutral-400 group-hover:text-neutral-700"
                      )}
                    />
                    <span>{item.name}</span>
                  </div>
                  {isActive && (
                    <span className="w-1 h-1 rounded-full bg-neutral-900" />
                  )}
                </button>
              );
            })}
          </nav>

          <div className="h-px bg-black/[0.04] mx-2" />

          <nav className="space-y-0.5">
            {secondaryNav.map((item) => {
              const isActive = currentTab === item.name;
              const Icon = item.icon;
              return (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => onSelectTab && onSelectTab(item.name)}
                  className={cn(
                    "w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-150 text-left",
                    isActive
                      ? "bg-black/[0.04] text-neutral-900 font-semibold"
                      : "text-neutral-500 hover:text-neutral-900 hover:bg-black/[0.02]"
                  )}
                >
                  <div className="flex items-center space-x-2.5">
                    <Icon
                      className={cn(
                        "w-3.5 h-3.5 transition-colors stroke-[1.75]",
                        isActive
                          ? "text-neutral-900"
                          : "text-neutral-400 group-hover:text-neutral-700"
                      )}
                    />
                    <span>{item.name}</span>
                  </div>
                  {isActive && (
                    <span className="w-1 h-1 rounded-full bg-neutral-900" />
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Bottom section: Divider & Settings & User status */}
      <div className="space-y-3">
        <div className="h-px bg-black/[0.04] mx-2" />

        <button
          type="button"
          onClick={() => onSelectTab && onSelectTab("Settings")}
          className={cn(
            "w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors text-left",
            currentTab === "Settings"
              ? "bg-black/[0.04] text-neutral-900 font-semibold"
              : "text-neutral-500 hover:text-neutral-900 hover:bg-black/[0.02]"
          )}
        >
          <div className="flex items-center space-x-2.5">
            <Settings className="w-3.5 h-3.5 text-neutral-400 stroke-[1.75]" />
            <span>Settings</span>
          </div>
        </button>

        {/* User Profile */}
        <div className="flex items-center space-x-2.5 px-2.5 py-1.5">
          <div className="w-6 h-6 rounded-full bg-neutral-900 text-white flex items-center justify-center text-[10px] font-medium">
            AJ
          </div>
          <span className="text-xs font-medium text-neutral-700">AJ</span>
        </div>
      </div>
    </aside>
  );
};
