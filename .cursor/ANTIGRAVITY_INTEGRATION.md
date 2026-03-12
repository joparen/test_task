# Antigravity Integration Guide

**How to use your agents in Antigravity IDE**

---

## ✅ Your Agents Are Already Integrated!

Good news: Your agents work **automatically** in Antigravity because they're conversational agents that work through Claude.

**No installation needed!** Just use the trigger phrases.

---

## 🚀 Quick Start in Antigravity

### Step 1: Open Antigravity
Open Antigravity IDE and start a Claude Code session (open terminal, run `claude`)

### Step 2: Navigate to Your Project
```bash
cd /path/to/your/project
```

### Step 3: Trigger Your Agents
Say any of these trigger phrases:

#### Start Complete Project
```
Start project!
```
Triggers: Product Manager + Solution Architect simultaneously

#### Product Requirements Only
```
Product!
```
Triggers: Product Manager only

#### Architecture Only
```
Solution Architect, define architecture
```
Triggers: Solution Architect only

#### Implementation Only
```
Developer, start implementation
```
Triggers: Developer only

---

## 📁 What Gets Created

When you run agents in Antigravity, they create folders in your current project:

```
YourProject/
├── Reqs/                    # Created by Product Manager
│   ├── PRODUCT_VISION.md
│   ├── EPICS.md
│   ├── SCENARIOS.md
│   └── BACKLOG.md
│
├── Architecture/            # Created by Solution Architect
│   ├── TECH_STACK.md
│   ├── SYSTEM_DESIGN.md
│   ├── DATA_MODEL.md
│   ├── API_DESIGN.md
│   ├── DIAGRAMS.md
│   ├── DEPLOYMENT.md
│   ├── SECURITY.md
│   └── CODE_STANDARDS.md
│
└── [your code]              # Created by Developer
```

You can view and edit these files directly in Antigravity's file explorer!

---

## 🎯 Example Session in Antigravity

```
# In Antigravity terminal
$ claude

# In Claude Code conversation
You: Start project!

[Product Manager interviews you]
[Solution Architect interviews you]

[Artifacts are created in current directory]

# Open files in Antigravity
You can now open Reqs/ and Architecture/ folders in Antigravity's explorer

[Developer starts implementation]
[Files are created and you see them appear in Antigravity]
```

---

## 🔧 Advanced: Custom Keyboard Shortcuts (Optional)

If you want quick access to agents, you can create Antigravity keyboard shortcuts:

### Step 1: Open Keybindings
`Cmd+K Cmd+S` in Antigravity

### Step 2: Add Custom Keybindings
Unfortunately, these agents work conversationally, so keyboard shortcuts won't work directly. The best approach is to use trigger phrases in the Claude conversation.

---

## 💡 Pro Tips for Antigravity

### 1. Use Split View
- Left: Antigravity file explorer + code editor
- Bottom: Claude Code terminal with your agents
- Watch files appear as agents create them!

### 2. Real-Time File Updates
When Developer creates or edits files, Antigravity will show them immediately. You can:
- Edit files manually if needed
- Developer will see your changes
- Solution Architect will review your edits too

### 3. Git Integration
All agents use git (Developer commits code). Antigravity's git integration will show:
- Commits made by Developer
- Branches created
- Changes ready to push

### 4. Multi-Project Workflow
Open multiple Antigravity windows for multiple projects:
- Window 1: Project A with agents working
- Window 2: Project B with different agents
- Each has independent agent state

---

## 🎨 Visual Workflow in Antigravity

```
┌─────────────────────────────────────┐
│  Antigravity IDE                     │
│                                      │
│  ┌──────────┐  ┌──────────────────┐ │
│  │ Files    │  │ Code Editor      │ │
│  │          │  │                  │ │
│  │ Reqs/    │  │ [Your code]      │ │
│  │ ├─VISION │  │                  │ │
│  │ ├─EPICS  │  │                  │ │
│  │ └─...    │  │                  │ │
│  │          │  │                  │ │
│  │ Arch/    │  │                  │ │
│  │ ├─TECH   │  │                  │ │
│  │ └─...    │  │                  │ │
│  └──────────┘  └──────────────────┘ │
│                                      │
│  ┌────────────────────────────────┐ │
│  │ Claude Code Terminal            │ │
│  │                                 │ │
│  │ You: Start project!             │ │
│  │ PM: [Interview questions]       │ │
│  │ SA: [Architecture questions]    │ │
│  │ Dev: [Implementing...]          │ │
│  └────────────────────────────────┘ │
└─────────────────────────────────────┘
```

---

## 🔄 Complete Workflow Example

### Starting a New Project in Antigravity

1. **Create Project Folder**
   ```bash
   mkdir my-new-project
   cd my-new-project
   git init
   ```

2. **Start Claude Code**
   ```bash
   claude
   ```

3. **Launch Agents**
   ```
   Start project!
   ```

4. **Answer Interviews**
   - Product Manager asks about features, users, vision
   - Solution Architect asks about tech stack, architecture, performance

5. **Review in Antigravity**
   - Open `Reqs/` folder in file explorer
   - Read through artifacts
   - Edit if needed

6. **Approve**
   ```
   Approved!
   ```

7. **Watch Development**
   - Developer starts creating files
   - See them appear in Antigravity real-time
   - Solution Architect reviews each feature
   - Code quality enforced automatically

8. **Git Integration**
   - Developer makes commits
   - View in Antigravity's Source Control panel
   - Push when ready

---

## 🛠️ Troubleshooting in Antigravity

### Issue: "Agent doesn't respond"
**Solution:**
```
Claude, please load the Product Manager agent from ~/agents/agents/product-manager.md and follow its system prompt.
```

### Issue: "Files not appearing"
**Solution:**
- Check current directory: `pwd`
- Make sure you're in project root
- Refresh Antigravity file explorer (right-click → Refresh)

### Issue: "Want to use agents in different project"
**Solution:**
```bash
cd /path/to/other/project
# Then use trigger phrase
Start project!
```

### Issue: "Developer can't find Reqs/ folder"
**Solution:**
Make sure Product Manager completed and you approved artifacts first. Developer needs those files to exist.

---

## 📊 Monitoring Agent Progress

In Antigravity, you can monitor agents through:

### 1. File Explorer
Watch folders and files appear:
- `Reqs/` → Product Manager working
- `Architecture/` → Solution Architect working
- `src/`, `tests/` → Developer working

### 2. Source Control
See git commits from Developer

### 3. Terminal Output
Claude Code shows agent conversations and actions

### 4. File Content
Open and read artifacts as they're created

---

## 🎯 Best Practices for Antigravity

### 1. Use Workspace
Save your project as an Antigravity workspace to preserve:
- Open files
- Terminal state
- Layout preferences

### 2. Side-by-Side
Keep Claude conversation visible while editing files:
- Ask questions about code
- Request changes
- Get explanations

### 3. Quick Edits
If agents create something not quite right:
- Edit file manually in Antigravity
- Tell agents: "I updated [file], proceed with my changes"
- They'll continue from your version

### 4. Backup Important Decisions
Agents create comprehensive docs, but you might want to:
- Save key decisions in your own notes
- Screenshot diagrams for presentations
- Export artifacts for sharing with team

---

## 🚀 Advanced Integration (Future)

While your agents work now through conversation, future enhancements could include:

### Potential Future Features:
- [ ] Quick Commands panel (custom Antigravity extension)
- [ ] Agent status indicator in status bar
- [ ] Right-click context menu: "Review with Solution Architect"
- [ ] Keyboard shortcut to trigger "Start project!"
- [ ] Agent activity log panel

**Note:** These require building a custom Antigravity extension. Your agents work perfectly through conversation for now!

---

## 📚 Quick Reference Card

**Print this or keep it handy:**

```
┌─────────────────────────────────────────┐
│  AGENT TRIGGER PHRASES                  │
├─────────────────────────────────────────┤
│                                         │
│  🚀 START PROJECT                       │
│  "Start project!"                       │
│  → PM + SA together                     │
│                                         │
│  📋 PRODUCT ONLY                        │
│  "Product!"                             │
│  → Product Manager                      │
│                                         │
│  🏗️ ARCHITECTURE ONLY                   │
│  "Solution Architect, define arch"      │
│  → Solution Architect                   │
│                                         │
│  💻 IMPLEMENTATION ONLY                 │
│  "Developer, start implementation"      │
│  → Developer                            │
│                                         │
│  📁 FILES CREATED                       │
│  → Reqs/ (Product Manager)              │
│  → Architecture/ (Solution Architect)   │
│  → src/, tests/ (Developer)             │
│                                         │
│  🎯 QUALITY MODES                       │
│  → POC: Quick & dirty                   │
│  → MVP: Balanced                        │
│  → Full Charge: Enterprise-grade        │
│                                         │
└─────────────────────────────────────────┘
```

---

## ✅ Integration Complete!

Your agents are now ready to use in Antigravity. Just:

1. Open Antigravity
2. Navigate to project
3. Start Claude Code (`claude`)
4. Say trigger phrase: `Start project!`

That's it! The agents will guide you through everything. 🎉

---

**Last Updated:** 2026-03-06
**Status:** ✅ Ready for Antigravity
**Agent Files:** `~/agents/agents/`
**Launcher:** `~/agents/AGENT_LAUNCHER.md`
