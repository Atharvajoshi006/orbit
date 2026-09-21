# ORBIT — Development Roadmap

This document outlines the phased roadmap for building the ORBIT personal AI ecosystem.

---

### Phase 0 — Foundation *(Current — Completed)*
- Initialize Next.js, TypeScript, Tailwind CSS foundation.
- Establish clean directory structure (`app/`, `components/`, `lib/`, `docs/`).
- Create ORBIT design system tokens (surfaces, typography, borders, restrained accents).
- Implement 3-column desktop shell and responsive mobile navigation.
- Implement initial Pulse screen with "ORBIT IS SEEING" mock intelligence card and 4 core quadrants (Goals, Projects, Learning, Ideas).
- Create architectural and product documentation.

---

### Phase 1 — UI / App Shell Expansion
- Refine navigation interactions, shortcut palette (`Cmd+K`), and quick action switcher.
- Implement theme preference overrides and responsive sidebar collapse behavior.
- Establish shared component primitives (modals, dropdowns, tooltips, toast signals).

---

### Phase 2 — Personal Profile + Pulse Refinement
- Editable user settings, personal context preferences, and daily briefing configuration.
- Dynamic filtering and timeframe grouping for Pulse feed.
- Interactive Pulse timeline and activity heatmaps.

---

### Phase 3 — Goals System
- Hierarchical OKRs / Goals (Annual, Quarterly, Sprint).
- Milestones, progress tracking, and key result metrics.
- Goal alignment links to active projects and learning threads.

---

### Phase 4 — Projects Space
- Project management boards (Kanban, List, Timeline views).
- Multi-repository workspace tracking and task dependency trees.
- Project status health monitoring and deliverable checklists.

---

### Phase 5 — Journal + Ideas
- Daily reflection engine with markdown and rich-text note taking.
- Quick capture drawer for fleeting thoughts and seed ideas.
- Resonance scoring and tag-based ideation pipelines.

---

### Phase 6 — Backend + Personal Memory
- Database schema initialization (PostgreSQL / Supabase or SQLite local-first).
- User authentication and encrypted data storage.
- Vector database integration for embedding generation and semantic memory storage.

---

### Phase 7 — Knowledge Graph
- Personal knowledge graph node and edge modeling.
- Bi-directional entity relationship extraction across notes, projects, and goals.
- Interactive 2D/3D graph visualization and node inspection.

---

### Phase 8 — ORBIT AI (Context & Synthesis Engine)
- LLM inference integration (cloud & local model support).
- Automatic cross-domain synthesis ("ORBIT IS SEEING" powered by real context embeddings).
- Proactive suggestions, focus recommendations, and daily briefing generation.

---

### Phase 9 — AI Hub + Agents
- Specialized agent team configuration (Researcher, Planner, Architect, Critic).
- Tool use execution sandbox (web search, code execution, repo parsing).
- Background asynchronous agent task execution with progress logging.

---

### Phase 10 — Personal Machine Learning
- On-device / local ML models for personal habit analysis and focus forecasting.
- Cognitive load estimation and flow-state pattern recognition.
- Personalized ranking and semantic clustering of journal notes and ideas.

---

### Phase 11 — Plugins + Autonomous ORBIT
- Extensible plugin marketplace / SDK for third-party integrations (GitHub, Linear, Notion, Calendar).
- Fully autonomous agent triggers and scheduled maintenance routines.
- Cross-platform syncing and local-first offline resilience.
