# Architecture Diagrams — Brand-in-AI Monitor

**Last Updated:** 2025-03-12

---

## System Architecture (High-Level)

```mermaid
graph TB
    subgraph Browser["Browser (SPA)"]
        UI[React UI]
        State[React State + Context]
        Store[localStorage]
        UI --> State
        State --> Store
    end
    User[User] --> UI
```

---

## Component Structure (Logical)

```mermaid
graph TB
    subgraph Layout
        Sidebar[SidebarNav]
        Main[MainContent]
    end

    subgraph Screens
        PL[PromptLibrary]
        BE[BriefEditor]
        PB[PersonaBuilder]
        CR[ConversationRunner]
        AD[AnalyticsDashboard]
    end

    subgraph Shared
        Card[Card]
        Button[Button]
        EmptyState[EmptyState]
        Tooltip[Tooltip]
        StatusBadge[StatusBadge]
    end

    Layout --> Screens
    PL --> Card
    PL --> EmptyState
    PL --> StatusBadge
    CR --> Card
    CR --> Button
    AD --> Card
    AD --> Tooltip
    BE --> Button
    PB --> Card
```

---

## Data Flow (Runs and Analytics)

```mermaid
sequenceDiagram
    participant User
    participant ConversationRunner
    participant State
    participant Storage
    participant Analytics

    User->>ConversationRunner: Select prompt + persona, click Run
    ConversationRunner->>State: Add run (status: running)
    State->>Storage: Persist runs
    ConversationRunner->>ConversationRunner: Simulate/mock run completion
    ConversationRunner->>State: Update run (status: completed, result)
    State->>Storage: Persist runs
    User->>Analytics: Open dashboard
    Analytics->>State: Read runs
    Analytics->>Analytics: Compute mention rate, sentiment, top prompts
    Analytics->>User: Render widgets + tooltips
```

---

## Route / Screen Map

```mermaid
graph LR
    Root["/"] --> Prompts["/prompts"]
    Root --> Personas["/personas"]
    Root --> Conversations["/conversations"]
    Root --> Analytics["/analytics"]
    Prompts --> Brief["/prompts/:id/brief"]
```
