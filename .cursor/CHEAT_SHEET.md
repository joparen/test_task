# Agent System Cheat Sheet

**Quick reference for using your agents**

---

## 🚀 Trigger Phrases

| Phrase | What It Does |
|--------|--------------|
| `Start project!` | 🎯 **RECOMMENDED** - Launches Product Manager + Solution Architect together |
| `Product!` | 📋 Product Manager only (requirements & backlog) |
| `Solution Architect, define architecture` | 🏗️ Solution Architect only (tech stack & architecture) |
| `Developer, start implementation` | 💻 Developer only (implements code from backlog) |

---

## 📂 What Gets Created

```
YourProject/
├── Reqs/                    # Product Manager
│   ├── PRODUCT_VISION.md
│   ├── EPICS.md
│   ├── SCENARIOS.md         # A-Z by use case
│   └── BACKLOG.md
│
├── Architecture/            # Solution Architect
│   ├── TECH_STACK.md
│   ├── SYSTEM_DESIGN.md
│   ├── DATA_MODEL.md
│   ├── API_DESIGN.md
│   ├── DIAGRAMS.md
│   ├── DEPLOYMENT.md
│   ├── SECURITY.md
│   └── CODE_STANDARDS.md
│
└── src/, tests/, etc.       # Developer
```

---

## 🎯 Quality Modes (Solution Architect)

| Mode | Goal | Timeline | Example |
|------|------|----------|---------|
| **POC** | Quick & dirty prototype | <1 week | Express + SQLite, single server |
| **MVP** | Production-ready, balanced | 2-4 weeks | Node.js + PostgreSQL + Redis, cloud |
| **Full Charge** | Enterprise-grade, no compromises | 1-3 months | Microservices + Kubernetes + full stack |

---

## 🔄 Typical Workflow

```
1. Say: "Start project!"
2. Answer: Product Manager's interview (product)
3. Answer: Solution Architect's interview (tech)
4. Review: Both create artifacts in Reqs/ and Architecture/
5. Approve: "Approved!"
6. Watch: Developer implements automatically
7. Review: Solution Architect reviews each feature
8. Done: All features complete!
```

---

## 👥 Agent Roles

| Agent | Role | Decides | Can Reject |
|-------|------|---------|------------|
| **Product Manager** | Business/Product | WHAT to build | No |
| **Solution Architect** | Technical Leader | HOW to build | ✅ Yes (code review) |
| **Developer** | Implementation | Implementation details | No |

---

## 🛑 When Agents Block

### Developer Blocked
```
Developer: "Product Manager, I need clarification on..."
PM → Asks You → Answers Developer
```

### Architecture Unclear
```
Developer: "Solution Architect, which pattern should I use?"
SA → Provides guidance or asks You
```

### Code Rejected
```
SA: "REJECTED - Fix X, Y, Z"
Developer → Fixes → Resubmits
SA → Re-reviews → Approves or rejects again
```

---

## 💡 Pro Tips

✅ Always start with **"Start project!"** for new projects
✅ Solution Architect can reject multiple times - ensures quality!
✅ Developer asks PM/SA when blocked - you're consulted
✅ Scenarios are A-Z by use case, NOT user stories
✅ Three quality modes map to timeline and complexity

---

## 📍 File Locations

```bash
# Agent specifications
~/agents/agents/
├── product-manager.md
├── solution-architect.md
└── developer.md

# Sub-agents
~/agents/sub-agents/
├── market-research-sub.md
├── competitor-analysis-sub.md
└── scenario-formatter-sub.md

# Documentation
~/agents/
├── README.md                    # Full system docs
├── AGENT_LAUNCHER.md            # How to use agents
├── ANTIGRAVITY_INTEGRATION.md   # Antigravity-specific guide
├── CHEAT_SHEET.md               # This file
├── QUICK_REFERENCE.md           # Quick lookup
└── CATEGORIES.md                # Agent categories
```

---

## 🔧 Troubleshooting

| Issue | Solution |
|-------|----------|
| Agent doesn't respond | Use exact trigger phrase |
| Files not appearing | Check `pwd`, make sure you're in project root |
| Want different tech stack | Tell Solution Architect your preference when asked |
| Code quality issues | Solution Architect will reject until fixed |
| Developer stuck | They'll ask PM or SA (you'll be consulted) |

---

## 🎨 Agent Philosophies

**Product Manager:**
- User-centric, business-focused
- Creates detailed scenarios (not user stories!)
- Has authority over Developer + QA

**Solution Architect:**
- **CLEAN and MINIMALISTIC code always**
- Technical responsibility for app success
- Can reject code multiple times
- Enforces best practices

**Developer:**
- Code quality over speed
- Ask questions rather than assume
- Test as you build
- Follows PM's requirements + SA's architecture

---

## 📊 Quick Commands

```bash
# In Antigravity/Cursor/Terminal
cd /path/to/project
claude

# In Claude Code conversation
Start project!           # Start everything
Product!                 # Just requirements
Developer, start        # Just implementation

# Check agent files
ls ~/agents/agents/
cat ~/agents/agents/product-manager.md
```

---

## ✅ Integration Checklist

- [x] Agents created in `~/agents/agents/`
- [x] Sub-agents created in `~/agents/sub-agents/`
- [x] Documentation complete
- [x] Cheat sheet created
- [x] Ready to use in Antigravity
- [x] Ready to use in Cursor
- [x] Works with Claude Code CLI

---

## 🚀 Get Started Now

1. Open Antigravity or Cursor
2. Open terminal and run `claude`
3. Navigate to your project: `cd /path/to/project`
4. Say: **`Start project!`**
5. Follow the interview
6. Watch your agents build your project!

---

**Last Updated:** 2026-03-06
**Quick Help:** Read `~/agents/AGENT_LAUNCHER.md`
**Full Docs:** Read `~/agents/README.md`
