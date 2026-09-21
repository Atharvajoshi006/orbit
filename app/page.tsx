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
    <div className="flex min-h-screen bg-[#090a0d] text-neutral-100 overflow-x-hidden">
      {/* Desktop Left Sidebar */}
      <div className="hidden md:block">
        <Sidebar currentTab={activeTab} onSelectTab={handleSelectTab} />
      </div>

      {/* Mobile Drawer Backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 bottom-0 left-0 z-50 transform transition-transform duration-200 ease-in-out md:hidden ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar currentTab={activeTab} onSelectTab={handleSelectTab} />
      </div>

      {/* Center & Right Rail Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <Header
          currentSection={activeTab}
          mobileMenuOpen={mobileMenuOpen}
          onToggleMobileMenu={() => setMobileMenuOpen(!mobileMenuOpen)}
        />

        <div className="flex-1 flex min-w-0">
          {/* Main Application Center Area */}
          <main className="flex-1 min-w-0 overflow-y-auto px-4 sm:px-8 py-8">
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
  );
}
