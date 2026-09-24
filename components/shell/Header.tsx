"use client";

import React from "react";
import { Search, Command, Menu, X } from "lucide-react";
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
        "h-14 border-b border-black/[0.04] bg-white/40 backdrop-blur-md sticky top-0 z-20 flex items-center justify-between px-4 sm:px-8 select-none",
        className
      )}
    >
      {/* Left side: Mobile Toggle & Breadcrumb */}
      <div className="flex items-center space-x-3">
        <button
          type="button"
          onClick={onToggleMobileMenu}
          className="p-1.5 rounded-lg text-neutral-500 hover:text-neutral-900 hover:bg-black/[0.03] md:hidden"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>

        <div className="flex items-center space-x-2 text-xs">
          <span className="text-neutral-400 font-normal">ORBIT</span>
          <span className="text-neutral-300">/</span>
          <span className="text-neutral-800 font-medium">{currentSection}</span>
        </div>
      </div>

      {/* Right side: Search & Avatar */}
      <div className="flex items-center space-x-3">
        <div className="hidden sm:flex items-center space-x-2 px-3 py-1 rounded-full bg-black/[0.025] hover:bg-black/[0.04] transition-colors border border-black/[0.03] text-xs text-neutral-400 cursor-pointer">
          <Search className="w-3.5 h-3.5 text-neutral-400 stroke-[1.75]" />
          <span className="text-neutral-400">Search orbit...</span>
          <div className="flex items-center space-x-0.5 text-[10px] text-neutral-400 font-mono bg-white px-1.5 py-0.5 rounded shadow-xs">
            <Command className="w-2.5 h-2.5" />
            <span>K</span>
          </div>
        </div>

        <div className="w-6 h-6 rounded-full bg-neutral-900 text-white flex items-center justify-center text-[10px] font-medium shadow-xs">
          AJ
        </div>
      </div>
    </header>
  );
};

