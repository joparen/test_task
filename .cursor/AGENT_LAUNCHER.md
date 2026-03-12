# Agent Launcher

**Quick reference for activating your agents in any IDE (Antigravity, Cursor, etc.)**

---

## 🚀 Available Agents

### 1. Product Manager + Solution Architect (Coordinated Start)

**Trigger Phrase:**
```
Start project!
```

**What Happens:**
- ✅ Product Manager interviews you about product requirements
- ✅ Solution Architect interviews you about technical architecture
- ✅ PM creates `Reqs/` folder with product artifacts
- ✅ SA creates `Architecture/` folder with technical specs
- ✅ Both coordinate with Developer Agent for implementation

**When to Use:**
- Starting a new project from scratch
- Need both product requirements AND technical architecture
- Want complete project setup

**Quality Modes:**
- POC: Quick and dirty prototype
- MVP: Production-ready with balanced approach
- Full Charge: Enterprise-grade, no compromises

---

### 2. Product Manager (Solo)

**Trigger Phrase:**
```
Product!
```

**What Happens:**
- ✅ Interviews you about product requirements
- ✅ Creates product vision, epics, scenarios (A-Z by use case)
- ✅ Builds prioritized backlog
- ✅ Calls sub-agents (Market Research, Competitor Analysis, Scenario Formatter)
- ✅ Hands off to Developer Agent after approval

**When to Use:**
- Need product requirements only
- Already have architecture decided
- Want to plan features and roadmap

---

### 3. Solution Architect (Solo)

**Trigger Phrase:**
```
Solution Architect, define architecture
```

**What Happens:**
- ✅ Interviews you about technical requirements
- ✅ Defines tech stack based on your needs
- ✅ Creates architecture documentation (8 files)
- ✅ Generates system diagrams
- ✅ Reviews Developer's code for quality
- ✅ Enforces clean, minimalistic code

**When to Use:**
- Need architecture for existing project
- Want code review and quality enforcement
- Need tech stack recommendations

---

### 4. Developer (Solo)

**Trigger Phrase:**
```
Developer, start implementation
```

**What Happens:**
- ✅ Reads `Reqs/` and `Architecture/` folders
- ✅ Catches tasks from `Reqs/BACKLOG.md`
- ✅ Implements features in priority order
- ✅ Writes tests for all code
- ✅ Submits to Solution Architect for review
- ✅ Asks Product Manager when blocked

**When to Use:**
- Have requirements and architecture ready
- Ready to start coding
- Want systematic feature implementation

---

## 🎯 Quick Start Guide

### For New Projects (Recommended):

1. **Say:** `Start project!`
2. **Answer:** PM's interview (product questions)
3. **Answer:** SA's interview (technical questions)
4. **Review:** Both agents' artifacts
5. **Approve:** When satisfied
6. **Watch:** Developer implements automatically

### For Existing Projects:

1. **Product Planning:** `Product!` → Get product specs
2. **Architecture:** `Solution Architect, define architecture` → Get tech specs
3. **Implementation:** `Developer, start implementation` → Build features

---

## 📂 Folder Structure After Activation

When agents run, they create:

```
YourProject/
├── Reqs/                          # Product Manager creates this
│   ├── PRODUCT_VISION.md
│   ├── EPICS.md
│   ├── SCENARIOS.md               # A-Z by use case (NOT user stories!)
│   └── BACKLOG.md                 # Tasks for Developer
│
├── Architecture/                  # Solution Architect creates this
│   ├── TECH_STACK.md
│   ├── SYSTEM_DESIGN.md
│   ├── DATA_MODEL.md
│   ├── API_DESIGN.md
│   ├── DIAGRAMS.md
│   ├── DEPLOYMENT.md
│   ├── SECURITY.md
│   └── CODE_STANDARDS.md
│
└── [Your code files]              # Developer creates these
```

---

## 🔄 Complete Workflow Example

```
You: Start project!

[Product Manager interviews about product]
[Solution Architect interviews about architecture]

Product Manager: ✓ Created Reqs/ artifacts. Please approve.
You: Approved!

Solution Architect: ✓ Created Architecture/ artifacts.

Solution Architect → Developer: "Here's your tech stack: Node.js, PostgreSQL, React"
Product Manager → Developer: "Here's your backlog: 15 tasks"

Developer: Starting implementation...
Developer: ✓ Feature 1 complete. Ready for review.

Solution Architect: [Reviews code] APPROVED
Developer: ✓ Feature 2 complete. Ready for review.

Solution Architect: [Reviews code] REJECTED - fix X and Y
Developer: [Fixes issues] Ready for re-review.

Solution Architect: [Re-reviews] APPROVED
Developer: ✓ All features complete!
```

---

## 🎨 Agent Personalities

### Product Manager
- **Role:** Business-focused, user-centric
- **Interviews:** Deep questions about product vision, users, features
- **Creates:** Product documentation
- **Authority:** Decides WHAT to build

### Solution Architect
- **Role:** Technical leader, quality enforcer
- **Interviews:** Technical requirements, architecture, performance
- **Creates:** Architecture documentation + diagrams
- **Authority:** Decides HOW to build, reviews code quality
- **Philosophy:** CLEAN and MINIMALISTIC code always

### Developer
- **Role:** Implementation specialist
- **Reads:** Both Reqs/ and Architecture/
- **Creates:** Code, tests, documentation
- **Authority:** Decides implementation details
- **Asks:** PM when requirements unclear, SA for architectural guidance

---

## 💡 Pro Tips

### 1. Always Start with "Start project!"
If starting fresh, this gives you both product AND architecture in one go.

### 2. Solution Architect Can Reject Multiple Times
Don't worry - SA will keep rejecting until code is clean and minimalistic. This ensures quality!

### 3. Developer Asks for Help
When Developer is blocked, they'll ask PM (requirements) or SA (technical). You'll be consulted.

### 4. Scenarios, Not User Stories
Product Manager creates detailed A-Z scenarios by use case, NOT traditional user stories.

### 5. Three Quality Modes
- **POC:** Fast prototype (1 week)
- **MVP:** Balanced production (2-4 weeks)
- **Full Charge:** Enterprise-grade (1-3 months)

---

## 🔧 Troubleshooting

### "Agent doesn't respond to trigger phrase"
- Make sure you're using exact trigger phrase
- Check that agent file exists in `~/agents/agents/`
- Try saying: "Load [agent-name] agent from ~/agents/agents/"

### "Agent seems confused about workflow"
- Reference the agent file explicitly: "Follow the workflow in ~/agents/agents/product-manager.md"
- Or ask me to re-read the agent spec

### "Want to modify agent behavior"
- Edit the agent .md file in `~/agents/agents/`
- Update the System Prompt section
- Increment version number in Change Log

---

## 📚 Agent Files Location

All agents are stored in:
```
~/agents/agents/
├── product-manager.md          # 16KB - Product requirements
├── solution-architect.md       # 30KB - Technical architecture
└── developer.md                # 11KB - Code implementation
```

Sub-agents are in:
```
~/agents/sub-agents/
├── market-research-sub.md
├── competitor-analysis-sub.md
└── scenario-formatter-sub.md
```

---

## 🎯 Next Steps

1. **Test the system:** Say `Start project!` in any conversation with Claude
2. **Answer interviews:** Both PM and SA will interview you
3. **Review artifacts:** Check `Reqs/` and `Architecture/` folders
4. **Watch it work:** Developer implements automatically
5. **Code review:** SA ensures quality

---

**Last Updated:** 2026-03-06
**System Status:** ✅ All agents active and ready
**Total Agents:** 3 main + 3 sub-agents
