"use client";

import React, { useState } from "react";
import { Sidebar } from "@/components/shell/Sidebar";
import { Header } from "@/components/shell/Header";
import { ContextPanel } from "@/components/shell/ContextPanel";
import { PulseOverview } from "@/components/pulse/PulseOverview";
import { PlaceholderSection } from "@/components/shell/PlaceholderSection";

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>("Pulse");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const handleSelectTab = (tabName: string) => {
    setActiveTab(tabName);
    setMobileMenuOpen(false);
  };

  return (
    <div className="orbit-ambient-bg min-h-screen flex items-center justify-center p-2 sm:p-4 lg:p-6 text-neutral-800 selection:bg-indigo-50 selection:text-indigo-900 font-sans">
      {/* Main Unified Application Surface */}
      <div className="w-full max-w-7xl h-[94vh] max-h-[1100px] bg-white/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-black/[0.06] shadow-orbit-window flex overflow-hidden relative">
        {/* Desktop Left Sidebar Rail */}
        <div className="hidden md:flex h-full">
          <Sidebar currentTab={activeTab} onSelectTab={handleSelectTab} />
        </div>

        {/* Mobile Drawer Backdrop */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-xs z-40 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}

        {/* Mobile Sidebar */}
        <div
          className={`fixed top-0 bottom-0 left-0 z-50 transform transition-transform duration-200 ease-in-out md:hidden shadow-2xl ${
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <Sidebar currentTab={activeTab} onSelectTab={handleSelectTab} />
        </div>

        {/* Main Center & Right Rail Area */}
        <div className="flex-1 flex flex-col min-w-0 h-full bg-[#fafafc]/60">
          <Header
            currentSection={activeTab}
            mobileMenuOpen={mobileMenuOpen}
            onToggleMobileMenu={() => setMobileMenuOpen(!mobileMenuOpen)}
          />

          <div className="flex-1 flex min-w-0 overflow-hidden">
            {/* Main Application Center Area */}
            <main className="flex-1 min-w-0 overflow-y-auto px-4 sm:px-8 py-7">
              {activeTab === "Pulse" ? (
                <PulseOverview />
              ) : (
                <PlaceholderSection
                  sectionName={activeTab}
                  onBackToPulse={() => setActiveTab("Pulse")}
                />
              )}
            </main>

            {/* Desktop Right Context Area */}
            <ContextPanel />
          </div>
        </div>
      </div>
    </div>
  );
}

