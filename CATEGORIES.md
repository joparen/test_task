# Agent Categories

This document defines the standard categories for organizing agents, sub-agents, and skills.

---

## Agent Categories

### 1. Technical Leader Agents
**Purpose:** Provide technical leadership, define architecture, ensure code quality

**Typical Capabilities:**
- Architecture design and tech stack selection
- Code review and quality assurance
- Technical standards enforcement
- System design and diagramming
- Security and performance architecture
- Technical decision-making authority

**Example Agents:**
- Solution Architect (defines architecture, reviews code, ensures quality)
- Tech Lead (technical guidance, code standards, mentoring)
- Platform Architect (infrastructure, deployment, scalability)

---

### 2. Manager Agents
**Purpose:** Orchestrate workflows, manage requirements, coordinate teams

**Typical Capabilities:**
- Requirements gathering and analysis
- Vision and strategy formulation
- Task planning and prioritization
- Team coordination (dev, QA, design)
- Quality control and approval
- Product/project lifecycle management

**Example Agents:**
- Product Manager (gathers requirements, creates epics/scenarios)
- Project Manager (manages timelines, resources, deliverables)
- Release Manager (coordinates releases, deployments)

---

### 2. Research Agents
**Purpose:** Gather, analyze, and synthesize information

**Typical Capabilities:**
- Web search and content extraction
- Code exploration and analysis
- Documentation review
- Data aggregation
- Pattern recognition

**Example Agents:**
- Code Archeologist (explores codebase architecture)
- Documentation Hunter (finds and summarizes docs)
- API Explorer (discovers and tests API endpoints)

---

### 2. Action Agents
**Purpose:** Execute concrete operations and modifications

**Typical Capabilities:**
- File operations (create, edit, delete)
- Git operations (commit, push, branch)
- Build and deployment
- Database operations
- System commands

**Example Agents:**
- Git Commander (handles all git workflows)
- Build Master (manages build processes)
- File Surgeon (precise file modifications)

---

### 3. Orchestrator Agents
**Purpose:** Coordinate multiple agents/sub-agents to accomplish complex workflows

**Typical Capabilities:**
- Task decomposition
- Agent coordination
- Workflow management
- Decision routing
- Progress tracking

**Example Agents:**
- Project Bootstrapper (sets up new projects end-to-end)
- Deployment Orchestrator (coordinates full deployment)
- Testing Commander (runs comprehensive test suites)

---

### 4. Domain-Specific Agents
**Purpose:** Specialized expertise in particular domains

**Subcategories:**
- **Frontend:** React, Vue, Angular, CSS, UI/UX
- **Backend:** APIs, databases, authentication, services
- **DevOps:** CI/CD, containers, cloud infrastructure
- **Data:** Analytics, ML, data processing
- **Security:** Penetration testing, vulnerability scanning, compliance
- **Mobile:** iOS, Android, cross-platform

**Example Agents:**
- React Specialist (React-specific development)
- API Architect (designs REST/GraphQL APIs)
- Docker Master (container management)

---

## Sub-Agent Categories

### 1. Specialized Sub-Agents
**Purpose:** Handle specific sub-tasks within a larger workflow

**Example Sub-Agents:**
- Dependency Resolver
- Config Validator
- Code Formatter

---

### 2. Helper Sub-Agents
**Purpose:** Provide utility functions to parent agents

**Example Sub-Agents:**
- File Parser
- JSON Transformer
- Path Navigator

---

### 3. Validator Sub-Agents
**Purpose:** Verify conditions, data, or results

**Example Sub-Agents:**
- Schema Validator
- Test Result Checker
- Security Auditor

---

## Skill Categories

### 1. Utility Skills
**Purpose:** Common operations available via slash commands

**Example Skills:**
- `/scaffold` - Generate boilerplate
- `/refactor` - Code refactoring
- `/optimize` - Performance optimization

---

### 2. Automation Skills
**Purpose:** Automate repetitive tasks

**Example Skills:**
- `/auto-commit` - Smart git commits
- `/auto-test` - Run and fix tests
- `/auto-deploy` - Deploy with checks

---

### 3. Workflow Skills
**Purpose:** Complete multi-step processes

**Example Skills:**
- `/feature` - Full feature implementation
- `/bugfix` - Bug investigation and fix
- `/release` - Release preparation

---

## Naming Conventions

### Agents
- **Format:** PascalCase or kebab-case
- **Pattern:** `[Domain/Action] [Noun]`
- **Examples:**
  - `CodeArcheologist` or `code-archeologist`
  - `APIExplorer` or `api-explorer`

### Sub-Agents
- **Format:** kebab-case
- **Pattern:** `[function]-[noun]-sub`
- **Examples:**
  - `dependency-resolver-sub`
  - `schema-validator-sub`

### Skills
- **Format:** kebab-case
- **Pattern:** `[action]-[object]`
- **Slash Command:** `/[action]-[object]`
- **Examples:**
  - `scaffold-project` → `/scaffold-project`
  - `auto-commit` → `/auto-commit`

---

## Tags System

Use tags to improve discoverability:

### Common Tags
- `#frontend` `#backend` `#fullstack`
- `#testing` `#deployment` `#ci-cd`
- `#git` `#docker` `#kubernetes`
- `#react` `#vue` `#angular`
- `#nodejs` `#python` `#go`
- `#aws` `#azure` `#gcp`
- `#security` `#performance` `#refactoring`

---

## Category Matrix

| Category | Scope | Complexity | Autonomy | Examples |
|----------|-------|------------|----------|----------|
| Research | Broad | Medium | High | Code analysis, doc search |
| Action | Narrow | Low-Medium | Medium | File ops, git commands |
| Orchestrator | Broad | High | Very High | Full workflows |
| Domain-Specific | Domain | Medium-High | High | React dev, API design |
| Sub-Agent | Narrow | Low | Low | Validators, parsers |
| Skill | Narrow | Low-Medium | Medium | Slash commands |

---

## Version: 1.0.0
Last Updated: 2026-03-04
