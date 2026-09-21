# ORBIT — Architecture Documentation (v0.1 Foundation)

## 1. Current Architecture (Phase 0)

The ORBIT v0.1 Foundation is structured as a modern, lightweight, type-safe Next.js frontend application.

```
orbit/
├── app/
│   ├── globals.css         # Base resets, design tokens, custom scrollbars
│   ├── layout.tsx          # Root layout, metadata, font variable bindings
│   └── page.tsx            # Main shell orchestrator (Sidebar, Header, Main, ContextPanel)
├── components/
│   ├── pulse/
│   │   ├── OrbitSeeingCard.tsx   # "ORBIT IS SEEING" insight presentation
│   │   ├── PulseCards.tsx        # Modular cards for Goals, Projects, Learning, Ideas
│   │   └── PulseOverview.tsx     # Pulse page layout assembly
│   ├── shell/
│   │   ├── ContextPanel.tsx      # Desktop right-rail contextual matrix
│   │   ├── Header.tsx            # Top application bar & mobile navigation trigger
│   │   ├── PlaceholderSection.tsx# Placeholder renderer for inactive ecosystem modules
│   │   └── Sidebar.tsx           # Desktop & mobile navigation drawer
│   └── ui/
│       ├── Badge.tsx             # Standardized status & tag badge component
│       └── SectionHeader.tsx     # Typography & count header component
├── docs/
│   ├── ARCHITECTURE.md     # Architecture documentation
│   ├── PRODUCT.md          # Product vision & principles
│   └── ROADMAP.md          # Multi-phase development roadmap
├── lib/
│   ├── mock-data.ts        # Typed local mock data structures
│   └── utils.ts            # Tailwind class merger utility (clsx + twMerge)
├── public/                 # Static assets
├── tailwind.config.ts      # ORBIT design tokens (colors, radii, shadows, fonts)
└── tsconfig.json           # Strict TypeScript configuration
```

## 2. Design System & Styling Conventions
- **Color Tokens**: Semantic palette under `orbit.*` with deep dark surfaces (`#090a0d`, `#111318`), subtle borders (`rgba(255, 255, 255, 0.07)`), and restrained accent highlights (Sky `#38bdf8` and Indigo `#818cf8`).
- **Typography**: Inter for primary UI elements with JetBrains Mono for system metrics, version tags, and timestamps.
- **Layout Grid**: 3-column desktop shell (Left: 256px Sidebar, Center: Fluid main content, Right: 320px Context panel).
- **Responsiveness**: Fluid center panel with mobile drawer for the sidebar and hidden right context panel on viewports < 1280px.

---

## 3. Explicit Boundaries: What is NOT Implemented Yet

To adhere to Phase 0 Foundation constraints, the following systems are deliberately excluded from this version:

- **No Backend / API Services**: No server routes, endpoints, or microservices.
- **No Database / ORM**: No Postgres, Supabase, SQLite, Prisma, or Drizzle.
- **No Authentication**: No sessions, JWTs, OAuth, or user management.
- **No LLM / AI APIs**: No OpenAI, Anthropic, Gemini, or local Ollama runtime calls.
- **No Vector DB / Embeddings**: No Pinecone, pgvector, Chroma, or embedding pipelines.
- **No Knowledge Graph Engine**: No Neo4j or graph traversal algorithms.
- **No Autonomous Agents**: No agent loops, tool executors, or background workers.
- **No Third-Party Integrations**: No GitHub, Google Calendar, Notion, or Slack sync.
