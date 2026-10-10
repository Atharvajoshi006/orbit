"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

/* ─────────────────────────────────────────────
   Intersection Observer hook for reveal animations
   ───────────────────────────────────────────── */
function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ─────────────────────────────────────────────
   Reusable reveal wrapper
   ───────────────────────────────────────────── */
function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, visible } = useReveal(0.12);
  return (
    <div
      ref={ref}
      className={`transition-all duration-[900ms] ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────
   SVG Components
   ───────────────────────────────────────────── */

function OrbitalHero() {
  return (
    <div className="relative w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] mx-auto">
      {/* Orbital rings */}
      <svg className="absolute inset-0 w-full h-full animate-spin-very-slow" viewBox="0 0 420 420" fill="none">
        <circle cx="210" cy="210" r="140" stroke="url(#ring1)" strokeWidth="0.5" opacity="0.4" />
        <circle cx="210" cy="210" r="185" stroke="url(#ring2)" strokeWidth="0.5" opacity="0.25" />
        <circle cx="210" cy="210" r="100" stroke="url(#ring3)" strokeWidth="0.5" opacity="0.35" />
        {/* Orbital dot */}
        <circle cx="210" cy="70" r="3" fill="#7c3aed" opacity="0.6">
          <animateTransform attributeName="transform" type="rotate" from="0 210 210" to="360 210 210" dur="20s" repeatCount="indefinite" />
        </circle>
        <circle cx="350" cy="210" r="2" fill="#6366f1" opacity="0.5">
          <animateTransform attributeName="transform" type="rotate" from="0 210 210" to="-360 210 210" dur="28s" repeatCount="indefinite" />
        </circle>
        <circle cx="210" cy="350" r="2.5" fill="#8b5cf6" opacity="0.4">
          <animateTransform attributeName="transform" type="rotate" from="0 210 210" to="360 210 210" dur="35s" repeatCount="indefinite" />
        </circle>
        <defs>
          <linearGradient id="ring1" x1="0" y1="0" x2="420" y2="420">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
          <linearGradient id="ring2" x1="420" y1="0" x2="0" y2="420">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>
          <linearGradient id="ring3" x1="0" y1="420" x2="420" y2="0">
            <stop offset="0%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
        </defs>
      </svg>
      {/* Core glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-3 h-3 rounded-full bg-violet-500/60 shadow-[0_0_40px_12px_rgba(124,58,237,0.15)]" />
      </div>
    </div>
  );
}

function OrbitSystem() {
  const items = ["Goals", "Projects", "Ideas", "Knowledge", "Learning"];
  return (
    <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] mx-auto">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" fill="none">
        <circle cx="200" cy="200" r="130" stroke="#6366f1" strokeWidth="0.5" opacity="0.2" strokeDasharray="4 6" />
        <circle cx="200" cy="200" r="80" stroke="#7c3aed" strokeWidth="0.5" opacity="0.15" strokeDasharray="3 5" />
      </svg>
      {/* Center — YOU */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-[0_0_30px_8px_rgba(99,102,241,0.15)]">
          <span className="text-white text-xs font-semibold tracking-wider">YOU</span>
        </div>
      </div>
      {/* Orbiting items */}
      {items.map((item, i) => {
        const angle = (i / items.length) * 2 * Math.PI - Math.PI / 2;
        const r = 130;
        const cx = 200 + r * Math.cos(angle);
        const cy = 200 + r * Math.sin(angle);
        const pctX = (cx / 400) * 100;
        const pctY = (cy / 400) * 100;
        return (
          <div
            key={item}
            className="absolute -translate-x-1/2 -translate-y-1/2 animate-float"
            style={{
              left: `${pctX}%`,
              top: `${pctY}%`,
              animationDelay: `${i * 0.6}s`,
            }}
          >
            <div className="px-3 py-1.5 bg-white/80 backdrop-blur-sm border border-black/[0.06] rounded-full text-xs font-medium text-orbit-text-secondary shadow-sm">
              {item}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function KnowledgeGraph() {
  const nodes = [
    { id: "ideas", label: "Ideas", x: 80, y: 60 },
    { id: "projects", label: "Projects", x: 320, y: 80 },
    { id: "learning", label: "Learning", x: 200, y: 180 },
    { id: "goals", label: "Goals", x: 60, y: 260 },
    { id: "knowledge", label: "Knowledge", x: 340, y: 260 },
  ];
  const edges = [
    [0, 1], [0, 2], [1, 2], [2, 3], [2, 4], [3, 4], [0, 3], [1, 4],
  ];
  return (
    <div className="relative w-full max-w-[420px] h-[340px] mx-auto">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 340" fill="none">
        {edges.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            stroke="#6366f1"
            strokeWidth="0.7"
            opacity="0.2"
            strokeDasharray="4 4"
          >
            <animate attributeName="opacity" values="0.1;0.3;0.1" dur={`${3 + i * 0.5}s`} repeatCount="indefinite" />
          </line>
        ))}
        {nodes.map((n, i) => (
          <circle key={i} cx={n.x} cy={n.y} r="4" fill="#7c3aed" opacity="0.5">
            <animate attributeName="r" values="3;5;3" dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
          </circle>
        ))}
      </svg>
      {nodes.map((n) => (
        <div
          key={n.id}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${(n.x / 400) * 100}%`, top: `${(n.y / 340) * 100}%` }}
        >
          <span className="block mt-6 text-[11px] font-medium text-orbit-text-muted tracking-wide">{n.label}</span>
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   Section wrapper
   ───────────────────────────────────────────── */
function Section({
  children,
  className = "",
  dark = false,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`relative px-6 sm:px-10 lg:px-20 ${
        dark
          ? "bg-[#0a0a0c] text-white"
          : "bg-[#fafafa] text-[#14151a]"
      } ${className}`}
    >
      <div className="mx-auto max-w-[1100px]">{children}</div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   LANDING PAGE
   ───────────────────────────────────────────── */
export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="landing-page bg-[#fafafa] text-[#14151a] font-sans overflow-x-hidden">
      {/* ── NAV ────────────────────────────── */}
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/70 backdrop-blur-xl border-b border-black/[0.04] shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-[1100px] px-6 sm:px-10 lg:px-20 h-16 flex items-center justify-between">
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-[#14151a]">
            Orbit
          </span>
          <Link
            href="/app"
            className="text-xs font-medium tracking-wide text-orbit-text-secondary hover:text-[#14151a] transition-colors duration-300"
          >
            Open App →
          </Link>
        </div>
      </nav>

      {/* ══════════════════════════════════════
          1 · HERO
          ══════════════════════════════════════ */}
      <Section className="min-h-screen flex flex-col items-center justify-center pt-20 pb-32">
        <Reveal>
          <h1 className="text-center text-5xl sm:text-7xl lg:text-8xl font-bold tracking-[-0.04em] leading-[0.95]">
            ORBIT
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-6 text-center text-lg sm:text-xl text-orbit-text-secondary font-light tracking-wide">
            Your life, connected.
          </p>
        </Reveal>
        <Reveal delay={400}>
          <p className="mt-6 text-center text-sm sm:text-base text-orbit-text-muted max-w-md leading-relaxed">
            Your goals. Your ideas. Your knowledge.<br />
            Your projects. Your thinking.
          </p>
        </Reveal>
        <Reveal delay={550}>
          <OrbitalHero />
        </Reveal>
        <Reveal delay={700}>
          <Link
            href="/app"
            className="mt-4 inline-block px-8 py-3.5 bg-[#14151a] text-white text-sm font-medium tracking-wide rounded-full hover:bg-[#2a2b30] transition-all duration-300 hover:shadow-lg hover:shadow-black/10 hover:-translate-y-0.5"
          >
            Enter your orbit
          </Link>
        </Reveal>
      </Section>

      {/* ══════════════════════════════════════
          2 · THE PROBLEM
          ══════════════════════════════════════ */}
      <Section dark className="py-32 sm:py-44">
        <Reveal>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.03em] leading-[1.1] max-w-2xl">
            Everything you do<br />is connected.
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-16 flex flex-wrap gap-3">
            {["Goals", "Projects", "Ideas", "Knowledge", "Learning"].map((t, i) => (
              <span
                key={t}
                className="px-4 py-2 border border-white/10 rounded-full text-sm text-white/50 animate-float"
                style={{ animationDelay: `${i * 0.3}s` }}
              >
                {t}
              </span>
            ))}
          </div>
        </Reveal>
        <Reveal delay={400}>
          <p className="mt-20 text-2xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] text-white/40 leading-[1.15]">
            But your tools aren't.
          </p>
        </Reveal>
        <Reveal delay={600}>
          <div className="mt-12 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
        </Reveal>
      </Section>

      {/* ══════════════════════════════════════
          3 · INTRODUCE ORBIT
          ══════════════════════════════════════ */}
      <Section className="py-32 sm:py-44">
        <Reveal>
          <p className="text-xs font-medium tracking-[0.25em] uppercase text-orbit-text-muted">
            Introducing
          </p>
          <h2 className="mt-4 text-3xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.03em] leading-[1.1]">
            Meet ORBIT.
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-8 text-base sm:text-lg text-orbit-text-secondary max-w-lg leading-relaxed">
            A personal AI ecosystem that connects what you know,
            what you do, and what you think.
          </p>
        </Reveal>
        <Reveal delay={400}>
          <div className="mt-16">
            <OrbitSystem />
          </div>
        </Reveal>
      </Section>

      {/* ══════════════════════════════════════
          4 · MEMORY
          ══════════════════════════════════════ */}
      <Section dark className="py-32 sm:py-44">
        <Reveal>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.03em] leading-[1.1]">
            It remembers<br />what matters.
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-lg">
            {["Notes", "Projects", "Ideas", "Decisions", "Learning", "Context"].map(
              (item, i) => (
                <div
                  key={item}
                  className="px-4 py-3 border border-white/[0.06] rounded-xl bg-white/[0.03] text-sm text-white/60 animate-float"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  <div className="w-1 h-1 rounded-full bg-violet-400/60 mb-2" />
                  {item}
                </div>
              )
            )}
          </div>
        </Reveal>
        <Reveal delay={400}>
          <p className="mt-20 text-lg sm:text-xl text-white/40 font-light">
            So you don't have to start from zero.
          </p>
        </Reveal>
      </Section>

      {/* ══════════════════════════════════════
          5 · CONNECTIONS
          ══════════════════════════════════════ */}
      <Section className="py-32 sm:py-44">
        <Reveal>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.03em] leading-[1.1]">
            Connections you<br />didn't see.
          </h2>
        </Reveal>
        <Reveal delay={300}>
          <div className="mt-16">
            <KnowledgeGraph />
          </div>
        </Reveal>
      </Section>

      {/* ══════════════════════════════════════
          6 · INTELLIGENCE
          ══════════════════════════════════════ */}
      <Section dark className="py-32 sm:py-44">
        <Reveal>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.03em] leading-[1.1] max-w-xl">
            It doesn't just<br />remember.<br />
            <span className="text-violet-400">It understands.</span>
          </h2>
        </Reveal>
        <Reveal delay={300}>
          <div className="mt-16 max-w-lg p-6 sm:p-8 border border-white/[0.06] rounded-2xl bg-white/[0.02]">
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-violet-400/70 mb-4">
              ORBIT observation
            </p>
            <p className="text-base sm:text-lg text-white/70 leading-relaxed">
              "You've been exploring <span className="text-white/90 font-medium">AI agents</span> across 3 projects,
              8 notes and your recent learning."
            </p>
            <div className="mt-6 h-px bg-white/[0.06]" />
            <p className="mt-6 text-sm text-white/40 italic">
              "There might be something here worth exploring."
            </p>
          </div>
        </Reveal>
      </Section>

      {/* ══════════════════════════════════════
          7 · AI CAPABILITIES
          ══════════════════════════════════════ */}
      <Section className="py-32 sm:py-44">
        <Reveal>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.03em] leading-[1.1]">
            AI that knows<br />your context.
          </h2>
        </Reveal>
        <Reveal delay={300}>
          <div className="mt-20 flex flex-wrap gap-x-6 gap-y-8 sm:gap-x-10">
            {[
              { name: "Research", icon: "◎" },
              { name: "Planning", icon: "◇" },
              { name: "Learning", icon: "△" },
              { name: "Coding", icon: "⬡" },
              { name: "Brainstorming", icon: "○" },
            ].map((cap, i) => (
              <Reveal key={cap.name} delay={400 + i * 100}>
                <div className="group flex flex-col items-center gap-3 cursor-default">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border border-black/[0.06] bg-white flex items-center justify-center text-2xl text-orbit-text-muted group-hover:border-violet-300/40 group-hover:shadow-[0_0_20px_4px_rgba(124,58,237,0.06)] transition-all duration-500">
                    {cap.icon}
                  </div>
                  <span className="text-xs font-medium text-orbit-text-secondary tracking-wide">
                    {cap.name}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* ══════════════════════════════════════
          8 · PRODUCT
          ══════════════════════════════════════ */}
      <Section dark className="py-32 sm:py-44">
        <Reveal>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.03em] leading-[1.1]">
            Everything connected.<br />
            <span className="text-white/40">Nothing unnecessary.</span>
          </h2>
        </Reveal>
        <Reveal delay={300}>
          <div className="mt-16 p-1 rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden">
            {/* Simulated dashboard — simplified representation */}
            <div className="rounded-xl bg-[#f6f6f7] p-4 sm:p-6">
              <div className="flex gap-4">
                {/* Sidebar mock */}
                <div className="hidden sm:flex flex-col gap-2 w-12 py-2">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-8 h-8 rounded-lg ${
                        i === 0 ? "bg-indigo-100 border border-indigo-200/60" : "bg-white/60 border border-black/[0.04]"
                      }`}
                    />
                  ))}
                </div>
                {/* Content area */}
                <div className="flex-1 space-y-3">
                  <div className="h-8 bg-white rounded-lg border border-black/[0.04] flex items-center px-3">
                    <div className="w-3 h-3 rounded-full bg-indigo-100 mr-2" />
                    <div className="h-2 w-24 bg-black/[0.06] rounded-full" />
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="h-20 sm:h-24 bg-white rounded-xl border border-black/[0.04] p-3">
                        <div className="h-1.5 w-12 bg-black/[0.06] rounded-full mb-2" />
                        <div className="h-1.5 w-16 bg-black/[0.04] rounded-full" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* ══════════════════════════════════════
          9 · FUTURE
          ══════════════════════════════════════ */}
      <Section className="py-32 sm:py-44 text-center">
        <Reveal>
          <p className="text-base sm:text-lg tracking-[0.15em] uppercase text-orbit-text-muted font-light">
            Remember · Connect · Understand · Act
          </p>
        </Reveal>
        <Reveal delay={200}>
          <h2 className="mt-8 text-3xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.03em]">
            ORBIT grows<br />with you.
          </h2>
        </Reveal>
      </Section>

      {/* ══════════════════════════════════════
          10 · FINAL CTA
          ══════════════════════════════════════ */}
      <Section dark className="py-32 sm:py-48 text-center">
        <Reveal>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-[-0.04em]">
            Build your orbit.
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-6 text-base sm:text-lg text-white/40 font-light">
            Your personal AI ecosystem.
          </p>
        </Reveal>
        <Reveal delay={400}>
          <Link
            href="/app"
            className="mt-10 inline-block px-10 py-4 bg-white text-[#14151a] text-sm font-semibold tracking-wide rounded-full hover:bg-white/90 transition-all duration-300 hover:shadow-[0_0_30px_6px_rgba(255,255,255,0.1)] hover:-translate-y-0.5"
          >
            Enter ORBIT
          </Link>
        </Reveal>

        {/* Footer */}
        <Reveal delay={600}>
          <div className="mt-32 pt-8 border-t border-white/[0.06]">
            <p className="text-xs text-white/20 tracking-wide">
              ORBIT · Personal AI Ecosystem
            </p>
          </div>
        </Reveal>
      </Section>
    </div>
  );
}
