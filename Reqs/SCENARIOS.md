# Product Scenarios: Brand-in-AI Monitor

Scenarios are grouped by use case. Each scenario has preconditions, steps, expected outcome, and edge cases.

---

## Use Case: Prompt Library Management

### Scenario A: User adds first prompt

**Preconditions:** User has no prompts yet; Prompt Library is the current view.

**Steps:**

1. User opens the app and lands on Prompt Library (or selects it from the sidebar).
2. User sees empty state: e.g. “Add your first prompt to start tracking” with a clear primary action.
3. User clicks “Add prompt” (or equivalent).
4. User enters a title (e.g. “Best CRM for small business”) and saves.
5. Prompt appears in the list as a card with title, status (e.g. active or paused), run count (0).

**Expected Outcome:** New prompt is visible in the list with default status and run count 0. Empty state is replaced by the prompt card.

**Edge Cases:** Empty title rejected with inline validation; duplicate titles allowed but user can distinguish by editing.

---

### Scenario B: User activates and pauses prompts (under 10 active)

**Preconditions:** User has several prompts; fewer than 10 are active.

**Steps:**

1. User sees prompt cards with status badges (e.g. active / paused / running).
2. User toggles a paused prompt to active (or vice versa).
3. Status updates immediately (e.g. badge and optional dot).
4. If prompt was “running,” pausing stops new runs; existing run may complete.

**Expected Outcome:** Status reflects in the UI; run limit (10 active) is not yet reached.

**Edge Cases:** If user tries to activate when 10 are already active, show tooltip/message that limit is reached and suggest pausing one first.

---

### Scenario C: User hits max 10 active prompts

**Preconditions:** User has 10 prompts in “active” status.

**Steps:**

1. User sees “Run” (or “Start run”) disabled or greyed out where it would start a new run.
2. User hovers (or focuses) the disabled control and sees a tooltip explaining the limit (e.g. “Maximum 10 active prompts. Pause one to run more.”).
3. User pauses one prompt; “Run” becomes enabled again where applicable.

**Expected Outcome:** Limit is enforced in UI; tooltip is clear and instructive.

**Edge Cases:** “Running” vs “active” semantics: clarify in UI whether “active” means “eligible to run” and “running” means “currently executing.”

---

### Scenario D: User edits and deletes a prompt

**Preconditions:** At least one prompt exists in the library.

**Steps:**

1. User opens edit (e.g. from card action or row).
2. User changes title and saves; card updates.
3. User deletes a prompt (with confirmation if destructive); prompt is removed from the list.

**Expected Outcome:** Edits persist; delete removes the prompt and any runs tied to it are handled (e.g. still visible in Conversation Runner or archived, per product rule).

**Edge Cases:** Deleting a prompt that has runs: clarify in UX whether runs are kept for analytics or removed.

---

## Use Case: Brief Editor

### Scenario E: User creates a brief for a prompt

**Preconditions:** At least one prompt exists; user can open the brief for that prompt.

**Steps:**

1. User opens the Brief Editor for a prompt (from prompt card or detail).
2. User sees a context field (e.g. “What does this prompt simulate?”).
3. User enters text (e.g. “User researching CRM tools for a 50-person team”).
4. User saves; brief is stored and associated with the prompt.

**Expected Outcome:** Brief is saved and can be used when running conversations; next time user opens the brief, the same content is shown.

**Edge Cases:** Empty brief allowed (run may still proceed with prompt + persona only); optional preview of brief in prompt card.

---

### Scenario F: User edits an existing brief

**Preconditions:** Prompt already has a brief.

**Steps:**

1. User opens Brief Editor for the prompt.
2. User sees existing text; edits and saves.
3. New runs use the updated brief.

**Expected Outcome:** Stored brief is updated; no loss of data; future runs use the new context.

---

## Use Case: Persona Builder

### Scenario G: User creates first persona

**Preconditions:** Persona Builder is accessible; no personas exist (or user adds a new one).

**Steps:**

1. User opens Persona Builder (sidebar or dedicated view).
2. User sees empty state or list; clicks “Create persona.”
3. User fills role (e.g. “Marketing manager”), tone (e.g. “Professional, concise”), behavior traits (e.g. “Compares features, cares about price”).
4. User saves; persona card appears in the list.

**Expected Outcome:** Persona is saved and available when starting a conversation run (prompt + persona + brief).

**Edge Cases:** Minimal required fields (e.g. at least role); optional traits.

---

### Scenario H: User edits and deletes a persona

**Preconditions:** At least one persona exists.

**Steps:**

1. User opens a persona card for edit.
2. User changes role, tone, or traits and saves.
3. User deletes a persona (with confirmation); persona is removed from selection in Conversation Runner.

**Expected Outcome:** Edits persist; deleted persona no longer selectable for new runs. Historical runs can still show persona name if stored.

---

## Use Case: Conversation Runner

### Scenario I: User starts a conversation run

**Preconditions:** At least one prompt is active; user has at least one persona and (optionally) a brief; under 10 running prompts if limit applies.

**Steps:**

1. User opens Conversation Runner.
2. User selects prompt, persona, and (if available) brief.
3. User clicks “Run” (or “Start conversation”).
4. A new conversation card appears with “running” state (e.g. spinner).
5. When the run completes, the card updates (e.g. checkmark, or “Completed”) and result is viewable.

**Expected Outcome:** Run executes; user sees live then completed state; result is available for analytics and review.

**Edge Cases:** Run fails: show error state on the card with retry or dismiss. At 10 running limit: disable “Run” and show same tooltip as in Scenario C.

---

### Scenario J: User views completed conversations

**Preconditions:** At least one completed run exists.

**Steps:**

1. User is on Conversation Runner.
2. User sees conversation cards (one per thread); completed ones show checkmark or “Completed” and optional summary.
3. User opens a card to see full thread (prompt, persona, brief used; AI response(s)).

**Expected Outcome:** User can scan completed runs and drill into any thread for detail.

**Edge Cases:** Many cards: consider sorting/filtering by date, prompt, or status (if not in v1, note in backlog).

---

### Scenario K: Run status micro-interaction

**Preconditions:** User has started a run; card is visible.

**Steps:**

1. Card shows “running” (e.g. spinner or pulse).
2. Run completes; spinner is replaced by success indicator (e.g. checkmark) with a smooth transition.
3. No heavy animation; transition is snappy.

**Expected Outcome:** Clear, smooth feedback that the run finished; consistent with “snappy” POC constraint.

---

## Use Case: Analytics Dashboard

### Scenario L: User opens dashboard and sees primary metric first

**Preconditions:** Some runs have been executed; analytics data exists (or placeholder).

**Steps:**

1. User opens Analytics Dashboard from the sidebar.
2. Layout surfaces the most important metric first (e.g. brand mention rate or overall visibility score) via size, position, or emphasis.
3. Other widgets (sentiment trend, share of voice, top prompts) are visible in a clear hierarchy.

**Expected Outcome:** User can understand “how we’re doing” at a glance; secondary metrics are easy to find.

**Edge Cases:** No data yet: show empty state with explanation (e.g. “Run conversations to see analytics”).

---

### Scenario M: User understands a metric via tooltip

**Preconditions:** Dashboard widgets are visible.

**Steps:**

1. User hovers (or focuses) a metric or widget label.
2. A tooltip explains what the metric means (e.g. “Brand mention rate: % of runs where your brand was cited by the AI”).
3. User can read and dismiss without affecting layout.

**Expected Outcome:** Each dashboard metric has an explanatory tooltip so marketing/SEO users can interpret the data.

---

### Scenario N: User sees brand mention and sentiment trends

**Preconditions:** Enough run data for trends.

**Steps:**

1. User sees brand mention rate (e.g. over time or as a single KPI).
2. User sees sentiment trend (e.g. positive / neutral / negative over time or as distribution).
3. User sees share of voice vs competitors if that data is available.

**Expected Outcome:** Trends are readable and labeled; user can infer whether brand visibility is improving or declining.

**Edge Cases:** Single run or no competitors: show partial data or “Not enough data” where appropriate.

---

### Scenario O: User sees top prompts where brand appears or doesn’t

**Preconditions:** Multiple prompts have been run; brand detection has run.

**Steps:**

1. User sees a widget (or section) “Top prompts where brand appears.”
2. User sees “Top prompts where brand doesn’t appear” (or “Missing opportunities”).
3. Lists or cards are scannable (prompt title, optional count or %).

**Expected Outcome:** User can prioritize which prompts to improve or which contexts to target.

---

## Use Case: Navigation and Consistency

### Scenario P: User navigates between screens via sidebar

**Preconditions:** App is loaded; sidebar is visible.

**Steps:**

1. User sees sidebar with icons and labels (e.g. Prompt Library, Brief Editor, Persona Builder, Conversation Runner, Analytics).
2. User clicks a item; that view loads; active state is clearly highlighted (e.g. background, border, or icon style).
3. User moves between all five screens; active state always matches current view.

**Expected Outcome:** Navigation is obvious; no confusion about where the user is.

**Edge Cases:** Brief Editor might be a sub-view of a prompt; if so, breadcrumb or context (e.g. “Editing brief for: [Prompt title]”) keeps orientation clear.

---

### Scenario Q: Visual consistency across screens

**Preconditions:** User visits multiple screens.

**Steps:**

1. User notices buttons: same style (primary, secondary, danger) across Prompt Library, Persona Builder, Conversation Runner, etc.
2. User notices cards: consistent border, radius, padding.
3. User notices typography: same display font for headings, same body font; consistent font sizes.
4. User notices icons: same family and weight where applicable.

**Expected Outcome:** The app feels like one product; no jarring style changes between screens.

**Edge Cases:** Empty states use the same pattern (illustration or icon + headline + short description + action).
