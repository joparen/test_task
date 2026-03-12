# Product Backlog: Brand-in-AI Monitor

Prioritized tasks for implementation. POC quality: polished for demo, local-only, no auth in UI.

---

## High Priority

- [x] **App shell and navigation** — Sidebar with icons + labels for all 5 areas; active state clearly highlighted; dark sidebar + light content (or full dark); layout hierarchy consistent.
- [x] **Design system base** — Distinctive display font + clean body font (not Inter/Roboto); button styles (primary, secondary, danger); card style (border, radius, padding); consistent icon set and sizes.
- [x] **Prompt Library screen** — Card-based list; each card: title, status (active/paused/running), run count; add/edit/delete prompt; status toggle; empty state: “Add your first prompt to start tracking”; run-status badge/dot.
- [x] **Max 10 active prompts** — Enforce limit; when 10 are active, disable “Run” (or equivalent) with tooltip: e.g. “Maximum 10 active prompts. Pause one to run more.”
- [x] **Brief Editor screen** — Open from prompt; context field(s) for “what this prompt simulates”; save/cancel; brief linked to prompt.
- [x] **Persona Builder screen** — Persona cards: role, tone, behavior traits; create/edit/delete; list or gallery; empty state for first persona.
- [x] **Conversation Runner screen** — Select prompt + persona + brief; start run; one card per conversation thread; live state (spinner) → completed state (checkmark); micro-interaction for status change (smooth, snappy).
- [x] **Analytics Dashboard screen** — Primary metric surfaced first (visual hierarchy); widgets: brand mention rate, sentiment trend, share of voice vs competitors, top prompts where brand appears / doesn’t appear; tooltip on each metric; scannable at a glance.
- [x] **Empty states** — Instructive copy and primary action on Prompt Library, Persona Builder, Conversation Runner, Analytics (e.g. “Run conversations to see analytics”).

---

## Medium Priority

- [x] **Card layouts over dense tables** — Use cards for prompt list and conversation list; avoid dense data tables.
- [x] **Tooltips** — Dashboard metric tooltips; disabled “Run” tooltip at 10 active prompts; any other key affordances.
- [x] **Spacing and density** — Tune component spacing, visual weight, and information density across all 5 screens for consistency and readability.
- [x] **Transitions** — Smooth transitions between views; no heavy animations; keep interactions snappy.
- [x] **Run limit feedback** — When user tries to activate an 11th prompt, show message/tooltip and suggest pausing one.

---

## Low Priority

- [ ] **Brief preview** — Optional: show brief summary or link in prompt card.
- [ ] **Conversation list filtering/sorting** — By date, prompt, or status (if time allows for POC).
- [ ] **Delete prompt with runs** — Clarify and implement behavior (keep runs for analytics vs remove).

---

## Future Considerations

- [ ] Auth and multi-user (out of scope for POC).
- [ ] Real AI integration (ChatGPT, Claude, Gemini) for actual runs (POC may use mocks or stubs).
- [ ] Persistence (local storage or simple DB for POC).
- [ ] Export or share dashboard/reports.
- [ ] More persona fields or templates.
- [ ] Prompt templates or categories.
