# Agent Index

**Last Updated:** 2026-03-04
**Version:** 1.0.0

This file tracks all agents, sub-agents, and skills in the system.

---

## Agents

| Name | Category | Version | Status | File |
|------|----------|---------|--------|------|
| Product Manager | Manager (Orchestrator) | 1.0.0 | ✅ Active | `agents/product-manager.md` |
| Solution Architect | Technical Leader | 1.0.0 | ✅ Active | `agents/solution-architect.md` |
| Developer | Action (Implementation) | 1.0.0 | ✅ Active | `agents/developer.md` |

**Total:** 3

---

## Sub-Agents

| Name | Parent Agent | Version | Status | File |
|------|--------------|---------|--------|------|
| Market Research Sub-Agent | Product Manager | 1.0.0 | ✅ Active | `sub-agents/market-research-sub.md` |
| Competitor Analysis Sub-Agent | Product Manager | 1.0.0 | ✅ Active | `sub-agents/competitor-analysis-sub.md` |
| Scenario Formatter Sub-Agent | Product Manager | 1.0.0 | ✅ Active | `sub-agents/scenario-formatter-sub.md` |

**Total:** 3

---

## Skills

| Name | Slash Command | Version | Status | File |
|------|---------------|---------|--------|------|
| *No skills yet* | - | - | - | - |

**Total:** 0

---

## Dependency Graph

```mermaid
graph TD
    User[User] -->|"Start project!"| PM[Product Manager Agent]
    User -->|"Start project!"| SA[Solution Architect Agent]

    PM -->|calls| MR[Market Research Sub-Agent]
    PM -->|calls| CA[Competitor Analysis Sub-Agent]
    PM -->|calls| SF[Scenario Formatter Sub-Agent]

    MR -->|market insights| PM
    CA -->|competitive intel| PM
    SF -->|formatted scenarios| PM

    PM -->|creates Reqs/| ARTIFACTS1[Product Artifacts]
    ARTIFACTS1 -->|user approves| User
    User -->|approval| SA

    SA -->|reads| ARTIFACTS1
    SA -->|creates Architecture/| ARTIFACTS2[Architecture Artifacts]

    SA -->|tech stack & architecture| DEV[Developer Agent]
    PM -->|backlog & requirements| DEV

    DEV -->|implements| CODE[Code Implementation]
    CODE -->|feature complete| SA
    SA -->|code review| REVIEW{Approve?}
    REVIEW -->|approved| NEXT[Next Feature]
    REVIEW -->|rejected| DEV

    NEXT -->|all done| QA[QA Agent - TBD]
    QA -->|reports issues| PM
    PM -->|reports to| User
```

---

## Quick Stats

- **Total Entities:** 6 (3 agents + 3 sub-agents)
- **Categories Used:** 3 (Technical Leader, Manager, Action)
- **Most Common Category:** Manager/Technical Leader
- **Average Dependencies:** 2.7 per agent
- **Last Agent Created:** Solution Architect (2026-03-06)

---

## Recent Activity

### 2026-03-06 (Evening)
- ✅ Created Solution Architect agent (Technical Leader)
- ✅ Added "Technical Leader" category to CATEGORIES.md
- ✅ Integrated SA with PM and Developer agents
- ✅ Code review workflow: Developer → SA approval/rejection
- ✅ Architecture artifacts creation system (8 file types)
- ✅ Three quality modes: POC, MVP, Full Charge
- ✅ Coordinated trigger: "Start project!" launches PM + SA

### 2026-03-06 (Afternoon)
- ✅ Created Product Manager agent (Manager/Orchestrator)
- ✅ Created Developer agent (Action/Implementation)
- ✅ Created Market Research Sub-Agent (for PM)
- ✅ Created Competitor Analysis Sub-Agent (for PM)
- ✅ Created Scenario Formatter Sub-Agent (for PM)
- ✅ Added "Manager" category to CATEGORIES.md
- ✅ Complete product management → development workflow

### 2026-03-04
- System initialized
- Templates created
- Master of Agents deployed

---

## Notes

This index is automatically updated by the Master of Agents when creating or updating entities.
