# Data Model — Brand-in-AI Monitor

**Storage:** localStorage (POC); in-memory structures mirror these shapes.  
**Last Updated:** 2025-03-12

## Entities

### Prompt

Represents a single prompt used for brand-in-AI testing.

| Field      | Type     | Description |
|-----------|----------|-------------|
| id        | string   | Unique id (e.g. uuid or nanoid). |
| title     | string   | User-facing title. |
| status    | `'active' \| 'paused' \| 'running'` | active = eligible to run; running = currently executing. |
| runCount  | number   | Total number of runs (completed) for this prompt. |
| briefId   | string?  | Optional link to a Brief (or embed brief text per prompt). |
| createdAt | string   | ISO date (optional, for ordering). |

**Invariant:** At most 10 prompts with `status === 'active'` at any time (enforced in UI and state).

---

### Brief

Context brief for a prompt (what the prompt simulates).

| Field   | Type   | Description |
|---------|--------|-------------|
| id      | string | Unique id. |
| promptId| string | Owner prompt id. |
| body    | string | Plain or rich text: “what this prompt simulates”. |
| updatedAt | string | ISO date (optional). |

One brief per prompt (1:1). Can be stored as `briefs[promptId]` or as array with `promptId` FK.

---

### Persona

User persona for framing conversations.

| Field   | Type   | Description |
|---------|--------|-------------|
| id      | string | Unique id. |
| role    | string | e.g. “Marketing manager”. |
| tone    | string | e.g. “Professional, concise”. |
| traits  | string | e.g. “Compares features, cares about price” (or array of strings). |
| createdAt | string | ISO date (optional). |

---

### Run (Conversation run)

A single conversation run: prompt + persona + brief → one “thread” (mock or real).

| Field      | Type   | Description |
|------------|--------|-------------|
| id         | string | Unique id. |
| promptId   | string | Prompt used. |
| personaId  | string | Persona used. |
| briefId    | string?| Brief used (optional). |
| status     | `'running' \| 'completed' \| 'failed'` | |
| startedAt  | string | ISO date. |
| completedAt| string?| ISO date when status became completed/failed. |
| result     | object?| Mock or real: e.g. `{ brandMentioned: boolean, sentiment?: string, rawResponse?: string }`. |

---

### Analytics (derived)

Not stored as a separate entity; computed from runs when rendering the dashboard.

- **Brand mention rate:** % of completed runs where `result.brandMentioned === true`.
- **Sentiment trend:** Aggregate by time window from `result.sentiment` (or mock).
- **Share of voice:** From mock or stored competitor mentions per run.
- **Top prompts where brand appears / doesn’t:** Group runs by `promptId`, filter by `brandMentioned`, sort by count.

---

## localStorage Shape (POC)

Single key or namespaced keys, e.g.:

```ts
interface StoredState {
  prompts: Prompt[];
  briefs: Brief[];  // or Record<string, Brief> keyed by promptId
  personas: Persona[];
  runs: Run[];
}
```

- Serialize to JSON; save on relevant state changes (e.g. after add/update/delete of prompts, personas, briefs, runs).
- On load: read from localStorage; if missing or invalid, start with empty arrays.
- Optional: version field for future migrations.

---

## Indexes / Access Patterns

- Prompts: by id; filter by status (e.g. count active).
- Briefs: by promptId (one per prompt).
- Personas: by id; list all for Conversation Runner dropdown.
- Runs: by id; by promptId and personaId for analytics; by status for “running” count (to enforce limit).
