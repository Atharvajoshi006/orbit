"use client";

import React from "react";
import { Search, Command, Menu, X, Sparkles, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  currentSection: string;
  mobileMenuOpen: boolean;
  onToggleMobileMenu: () => void;
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({
  currentSection,
  mobileMenuOpen,
  onToggleMobileMenu,
  className,
}) => {
  return (
    <header
      className={cn(
        "h-14 border-b border-white/[0.06] bg-[#090a0d]/80 backdrop-blur-md sticky top-0 z-20 flex items-center justify-between px-4 sm:px-6",
        className
      )}
    >
      {/* Left side: Mobile Toggle & Breadcrumb */}
      <div className="flex items-center space-x-3">
        <button
          type="button"
          onClick={onToggleMobileMenu}
          className="p-1.5 rounded-lg text-neutral-400 hover:text-neutral-200 hover:bg-white/[0.05] md:hidden"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        <div className="flex items-center space-x-2 text-xs">
          <span className="text-neutral-500 font-medium">ORBIT</span>
          <span className="text-neutral-600">/</span>
          <span className="text-neutral-200 font-medium">{currentSection}</span>
        </div>
      </div>

      {/* Right side: Quick Search Mock & Status */}
      <div className="flex items-center space-x-3">
        <div className="hidden sm:flex items-center space-x-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-xs text-neutral-400">
          <Search className="w-3.5 h-3.5 text-neutral-500" />
          <span className="text-neutral-400">Search orbit...</span>
          <div className="flex items-center space-x-0.5 text-[10px] text-neutral-500 font-mono bg-white/[0.05] px-1.5 py-0.5 rounded border border-white/[0.05]">
            <Command className="w-2.5 h-2.5" />
            <span>K</span>
          </div>
        </div>

        <div className="flex items-center space-x-2 text-xs text-neutral-400 bg-white/[0.02] border border-white/[0.05] px-2.5 py-1 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
          <span className="text-[11px] font-mono text-neutral-300">Phase 0 Active</span>
        </div>
      </div>
    </header>
  );
};
