# Code Standards — Brand-in-AI Monitor

**Quality Mode:** POC  
**Last Updated:** 2025-03-12

## Principles

- **Clean:** Readable, self-explanatory names and structure.
- **Minimal:** No over-engineering; YAGNI. No unnecessary abstractions for POC.
- **Consistent:** Same patterns for similar UI (cards, buttons, empty states, tooltips).

---

## Tech Stack (Reference)

- React 18 + TypeScript
- Vite, React Router v6, Tailwind CSS, Lucide React
- State: React (useState, useReducer, Context); persistence: localStorage

---

## Naming

| Kind       | Convention   | Example |
|------------|---------------|---------|
| Components | PascalCase    | `PromptCard`, `SidebarNav` |
| Files (components) | PascalCase or kebab-case | `PromptCard.tsx` or `prompt-card.tsx` |
| Hooks      | camelCase, `use` prefix | `usePrompts`, `useLocalStorage` |
| State / vars | camelCase   | `promptList`, `activeCount` |
| Constants  | UPPER_SNAKE   | `MAX_ACTIVE_PROMPTS` |
| Types/Interfaces | PascalCase | `Prompt`, `RunStatus` |

---

## Structure

- **Components:** Prefer function components; keep under ~80 lines; split into smaller components or hooks when logic grows.
- **State:** Prefer local state; lift only when needed (e.g. prompt list, runs). Context for “app-wide” data (e.g. prompts, personas, runs) if it avoids prop drilling.
- **Routes:** One main route per screen; nested route for Brief Editor (e.g. `/prompts/:id/brief`).
- **Data:** Types in a single `types` module (e.g. `Prompt`, `Persona`, `Brief`, `Run`); persistence helpers in a `storage` or `persist` module.

---

## UI / Tailwind

- Use Tailwind utility classes; avoid inline styles unless dynamic.
- Shared layout: sidebar width and main content area consistent; use a layout component.
- Cards: consistent border, radius, padding (e.g. `rounded-lg border bg-white` or dark equivalents).
- Buttons: primary (filled), secondary (outline), danger (destructive); consistent sizing (e.g. `btn-primary`, `btn-secondary` via Tailwind @apply or classes).
- Icons: Lucide; consistent size (e.g. 16 or 20) and color (currentColor or theme).
- Empty states: icon/illustration + headline + short copy + primary action.
- Tooltips: on dashboard metrics and on disabled “Run” when at 10 active prompts.

---

## Limits and Validation

- **Max 10 active prompts:** Constant `MAX_ACTIVE_PROMPTS = 10`. Before activating a prompt, check count of `status === 'active'`; disable “Run” and show tooltip when at limit.
- **Prompt title:** Non-empty on create/update; show inline error if empty.
- **IDs:** Generate with `crypto.randomUUID()` or a small id helper; avoid index-as-id.

---

## Accessibility (Minimum for POC)

- Semantic HTML (nav, main, headings, button vs div).
- Focus visible for keyboard (Tailwind `focus:ring`).
- Tooltips: ensure they’re reachable and dismissable (e.g. on focus for keyboard).

---

## Performance

- No heavy animations; smooth transitions (e.g. Tailwind `transition`).
- List rendering: if lists grow large later, consider virtualization; not required for POC.

---

## Security (POC)

- No auth; no secrets in code.
- No user-generated HTML rendered as raw HTML (avoid XSS); use text or safe markdown if needed later.
- localStorage: assume same-origin; no sensitive PII for POC.

---

## Files and Imports

- Group imports: external (react, router, etc.) → internal (components, hooks) → relative.
- Prefer named exports for components and hooks; default export for page/route components is fine.
- One main component per file; small subcomponents can live in same file if used only there.

---

## Checklist (before considering a feature “done”)

- [ ] Types for all props and state (TypeScript).
- [ ] Max 10 active prompts enforced; tooltip on disabled Run.
- [ ] Empty states and tooltips per Reqs.
- [ ] Card-based layouts for prompts and conversations; sidebar with clear active state.
- [ ] No Inter/Roboto; use chosen display + body fonts.
- [ ] Snappy transitions; no heavy animation.
