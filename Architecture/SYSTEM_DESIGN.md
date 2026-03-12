# System Design — Brand-in-AI Monitor

**Architecture Pattern:** Single-page application (SPA), client-only  
**Quality Mode:** POC  
**Last Updated:** 2025-03-12

## High-Level Architecture

Single React app. No backend. All logic and persistence in the browser.

```
┌─────────────────────────────────────────────────────────────┐
│                     Browser (single tab)                      │
│  ┌─────────────┐  ┌──────────────────────────────────────┐  │
│  │   Sidebar   │  │           Main content area           │  │
│  │  (nav)      │  │  Prompt Library | Brief | Persona |   │  │
│  │             │  │  Conversation Runner | Analytics     │  │
│  └─────────────┘  └──────────────────────────────────────┘  │
│                           │                                  │
│                           ▼                                  │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  React state + Context (prompts, personas, runs)     │   │
│  └──────────────────────────────────────────────────────┘   │
│                           │                                  │
│                           ▼                                  │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  localStorage (persist for POC)                       │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

## Layers (Logical)

1. **UI layer** — React components: layout (sidebar + main), screens (Prompt Library, Brief Editor, Persona Builder, Conversation Runner, Analytics), shared components (cards, buttons, tooltips, empty states).
2. **State layer** — React state and Context for prompts, personas, briefs, runs, and analytics-derived data; no separate store for POC.
3. **Persistence layer** — Read/write to localStorage (and optional in-memory fallback); shape defined in DATA_MODEL.md.

## Main Screens (Routes)

| Route (example)     | Screen             | Purpose |
|---------------------|--------------------|--------|
| `/` or `/prompts`   | Prompt Library     | List/manage prompts (card list, status, run count). |
| `/prompts/:id/brief`| Brief Editor       | Edit context brief for a prompt. |
| `/personas`         | Persona Builder   | List/manage personas (role, tone, traits). |
| `/conversations`    | Conversation Runner | Start runs, view conversation cards (live + completed). |
| `/analytics`        | Analytics Dashboard| Brand mention rate, sentiment, SOV, top prompts. |

## Key Flows

- **Prompt management:** List → Add/Edit/Delete → Toggle active/paused; enforce max 10 active.
- **Brief:** From prompt card/detail → open Brief Editor → save/cancel; brief stored per prompt.
- **Persona:** List → Add/Edit/Delete; personas referenced when starting a run.
- **Run:** Conversation Runner: select prompt + persona (+ brief) → Run → new card (spinner → checkmark); runs stored and feed analytics.
- **Analytics:** Read from stored runs; compute mention rate, sentiment trend, SOV, top prompts; display in dashboard with tooltips.

## Design Constraints (from Reqs)

- Max 10 active prompts; disable “Run” with tooltip when at limit.
- Card-based layouts for prompts and conversations; no dense tables.
- Sidebar: icons + labels; active route clearly highlighted.
- Empty states instructive; dashboard metrics have tooltips.
- Snappy transitions; no heavy animations.

## Scalability / Future (Out of POC)

- Backend API for multi-user, auth, and real AI provider calls.
- Real database for prompts, runs, analytics.
- Optional: message queue or background jobs for running many conversations.
