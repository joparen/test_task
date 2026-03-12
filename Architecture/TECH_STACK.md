# Technology Stack — Brand-in-AI Monitor

**Quality Mode:** POC  
**Last Updated:** 2025-03-12

## Overview

Single-page app, local-only for POC. No backend or auth. Focus on fast iteration, clean UI, and a polished demo for stakeholders.

---

## Frontend

| Layer        | Choice              | Rationale |
|-------------|---------------------|-----------|
| **Runtime** | Node 20.x (dev)     | LTS; standard for tooling. |
| **Framework** | React 18 + TypeScript | Component-based UI, type safety, broad ecosystem. |
| **Build**   | Vite                | Fast HMR, simple config, good DX for POC. |
| **Routing** | React Router v6     | Declarative routes for 5 main screens + nested (e.g. brief editor). |
| **Styling** | Tailwind CSS        | Utility-first; dark sidebar, cards, spacing, typography without custom CSS. |
| **State**   | React (useState, useReducer, Context) | No global store needed for POC; keep minimal. |
| **Persistence** | localStorage (+ optional JSON file export) | No backend; persist prompts, personas, briefs, runs for demo. |
| **Icons**   | Lucide React        | Consistent, tree-shakeable, matches “clean SaaS” look. |
| **Fonts**   | Google Fonts: display + body (e.g. **DM Sans** or **Plus Jakarta Sans** for headings; **Source Sans 3** or **IBM Plex Sans** for body — avoid Inter/Roboto per Reqs) | Distinctive but readable; easy to swap. |

---

## Data & “Backend” (POC)

- **No server.** All data in memory + localStorage.
- **Conversation runs:** Mock or stub for POC (e.g. delay + fake success); real AI integration is future.
- **Analytics:** Derived from stored runs (counts, mock mention rate, sentiment) for dashboard.

---

## DevOps & Tooling (POC)

| Concern      | Choice           | Notes |
|-------------|------------------|--------|
| **Package manager** | npm or pnpm | Lockfile committed. |
| **Lint**    | ESLint           | React + TypeScript recommended config. |
| **Format**  | Prettier         | Consistent formatting. |
| **Type checking** | `tsc --noEmit` | In CI or pre-commit if desired. |
| **Deploy**  | Local only       | `npm run dev` for demo; optional static build for sharing. |

---

## Out of Scope for POC

- Backend API, database, auth
- Real AI provider integration (ChatGPT, Claude, Gemini)
- Tests (optional for POC; add later for MVP)
- CI/CD beyond basic lint/typecheck

---

## Trade-offs (POC)

- **State:** Context + local state instead of Redux/Zustand — simpler, good enough for 5 screens and limited data.
- **Data:** localStorage only — no sync, no multi-user; sufficient for demo.
- **Runs:** Mocked — real integrations come in a later phase.
- **Typography:** One display + one body font from Google Fonts to meet “distinctive + readable” without custom font pipeline.
