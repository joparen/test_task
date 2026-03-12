# Product Epics: Brand-in-AI Monitor

## Epic 1: Prompt Library

**Priority:** High  
**Description:** Central place to manage the prompts used for brand-in-AI testing. Users see a list (card-based) of prompts with title, status (active / paused / running), and run count. Max 10 active prompts in v1.

**Features:**

- List view of all prompts (card layout)
- Per-prompt: title, status (active / paused / running), run count
- Add / edit / delete prompts
- Activate or pause prompts (enforcement of max 10 active)
- Clear run-status indicators (badge or dot)
- Empty state: “Add your first prompt to start tracking”
- When 10 prompts are active: “Run” disabled with tooltip explaining the limit

---

## Epic 2: Brief Editor

**Priority:** High  
**Description:** Context brief attached to each prompt. The brief describes what the prompt simulates (e.g. “user researching CRM tools”) so runs are consistent and interpretable.

**Features:**

- Open brief editor from prompt (e.g. from prompt card or detail)
- Rich text or structured fields for “what this prompt simulates”
- Save / cancel; brief linked to prompt
- Optional: brief preview in prompt card or list

---

## Epic 3: Persona Builder

**Priority:** High  
**Description:** Define user personas (role, tone, behavior traits) that frame how conversations are run. Personas make runs repeatable and comparable (e.g. “Enterprise buyer” vs “SMB researcher”).

**Features:**

- Persona cards: role, tone, behavior traits
- Create / edit / delete personas
- List or gallery of personas
- Associate persona with runs (conversation runner uses prompt + persona + brief)
- Empty state for “Create your first persona”

---

## Epic 4: Conversation Runner

**Priority:** High  
**Description:** Execute and inspect AI conversations generated from a chosen prompt + persona + brief. One card per conversation thread; show live and completed runs.

**Features:**

- Start run from a combination of prompt + persona + brief
- One card per conversation thread
- Live runs: show in-progress state (e.g. spinner)
- Completed runs: show result (e.g. checkmark), allow drill-down
- List or grid of conversation cards
- Respect max concurrent running prompts (e.g. 10); disable “Run” with tooltip when at limit
- Micro-interactions: e.g. spinner → checkmark on completion

---

## Epic 5: Analytics Dashboard

**Priority:** High  
**Description:** Single dashboard for brand-in-AI performance: mention rate, sentiment trend, share of voice vs competitors, and which prompts drive or miss brand visibility.

**Features:**

- **Primary metric** surfaced first (visual hierarchy)
- Brand mention rate (e.g. % of runs where brand is mentioned)
- Sentiment trend over time
- Share of voice vs competitors
- Top prompts where brand appears / does not appear
- Tooltips on each widget explaining the metric
- Scannable at a glance; consistent with rest of app (buttons, cards, fonts, icons)

---

## Epic 6: Layout, Consistency & Polish (Design System)

**Priority:** Medium  
**Description:** Refine layout hierarchy across all five screens; improve spacing, visual weight, and information density; ensure consistency and micro-interactions.

**Features:**

- Consistent layout hierarchy across Prompt Library, Brief Editor, Persona Builder, Conversation Runner, Analytics Dashboard
- Component spacing, visual weight, and information density tuned per screen
- Consistent button styles, card borders, font sizes, icon usage
- Sidebar navigation: icons + labels; clearly highlighted active state
- Micro-interactions for run status (e.g. spinner → checkmark)
- Empty states and disabled states (e.g. Run at limit) with helpful tooltips
