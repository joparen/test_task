# Quick Reference Guide

Fast lookup for common tasks and commands.

---

## Creating Agents

```
Jarvis, let's create an agent
Jarvis, let's create a sub-agent
Jarvis, let's create a skill
```

---

## Viewing Agents

```bash
# List all agents
ls ~/agents/agents/

# List all sub-agents
ls ~/agents/sub-agents/

# List all skills
ls ~/agents/skills/

# View specific agent
cat ~/agents/agents/[agent-name].md

# Search for agent by keyword
grep -r "keyword" ~/agents/agents/
```

---

## Managing Agents

```
# Update existing agent
Jarvis, update [agent-name]

# Validate agent
Jarvis, validate [agent-name]

# Test agent
Jarvis, test [agent-name]

# Show all agents
Jarvis, show me existing agents
```

---

## File Locations

```bash
~/agents/                    # Root
├── agents/                  # Main agents
├── sub-agents/              # Sub-agents
├── skills/                  # Skills
├── templates/               # Templates
├── MASTER_OF_AGENTS.md      # The architect
├── CATEGORIES.md            # Category guide
├── README.md                # Full documentation
├── AGENT_INDEX.md           # Agent registry
└── QUICK_REFERENCE.md       # This file
```

---

## Agent Categories

| Category | Purpose | Use When |
|----------|---------|----------|
| **Research** | Gather info | Need to search, analyze, explore |
| **Action** | Execute ops | Need to modify, create, delete |
| **Orchestrator** | Coordinate | Complex multi-step workflows |
| **Domain-Specific** | Specialized | Domain expertise needed |

---

## Common Patterns

### Creating a Research Agent
```
Purpose: Gather and analyze information
Tools: Grep, Glob, Read, WebFetch, WebSearch
Returns: Synthesized information
```

### Creating an Action Agent
```
Purpose: Execute specific operations
Tools: Write, Edit, Bash, Git
Returns: Confirmation of action
```

### Creating an Orchestrator
```
Purpose: Coordinate multiple agents
Tools: Task (for sub-agents), all file tools
Returns: Complete workflow result
```

---

## Template Sections

### Agent Template
1. Metadata (name, version, category, dates)
2. System Prompt (behavior definition)
3. Trigger Phrases (how to invoke)
4. Tool Requirements (needed tools)
5. Dependencies (other agents/services)
6. Interconnections (calls/called-by)
7. Capabilities (functions/limitations)
8. Usage Examples (scenarios)
9. Execution Flow (workflow)
10. Testing (test cases)
11. Change Log (version history)

### Sub-Agent Template
1. Metadata + Parent
2. System Prompt
3. Purpose
4. Trigger Conditions
5. Tool Requirements
6. Input/Output Contract
7. Dependencies
8. Execution Logic
9. Usage Example
10. Error Handling
11. Change Log

### Skill Template
1. Metadata + Slash Command
2. System Prompt
3. Trigger (command format)
4. Arguments (parameters)
5. Tool Requirements
6. Dependencies
7. Execution Flow
8. Usage Examples
9. Integration (how to install)
10. Testing
11. Change Log

---

## Integration

### Deploy Skill to Claude Code
```bash
cp ~/agents/skills/[skill-name].md ~/.claude/skills/
# Then restart Claude Code
```

### Deploy Skill to Cursor
```bash
cp ~/agents/skills/[skill-name].md ~/.cursor/skills/
# Then reload Cursor window
```

### Deploy Skill to Antigravity
```bash
cp ~/agents/skills/[skill-name].md ~/.antigravity/skills/
# Then reload Antigravity
```

---

## Naming Conventions

### Agents
- `CodeArcheologist.md` or `code-archeologist.md`
- `APIExplorer.md` or `api-explorer.md`

### Sub-Agents
- `dependency-resolver-sub.md`
- `schema-validator-sub.md`

### Skills
- `scaffold-component.md` → `/scaffold-component`
- `auto-commit.md` → `/auto-commit`

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Agent not responding | Check trigger phrase matches exactly |
| Dependency error | Verify required agents exist |
| Tool not found | Install required MCP/tool |
| Skill not available | Copy to `~/.claude/skills/` and reload |
| Circular dependency | Review interconnections, break cycle |

---

## Common Tools

| Tool | Purpose | When to Use |
|------|---------|-------------|
| Read | Read files | Always for file inspection |
| Write | Create files | New files only |
| Edit | Modify files | Existing file changes |
| Bash | Run commands | Git, npm, system ops |
| Glob | Find files | Pattern matching |
| Grep | Search content | Code search |
| WebFetch | Get web content | Fetch URLs |
| WebSearch | Search web | Find information |
| Task | Spawn sub-agents | Complex workflows |

---

## Version Numbers

Format: `MAJOR.MINOR.PATCH`

- **1.0.0** - Initial release
- **1.1.0** - New features added
- **1.0.1** - Bug fixes
- **2.0.0** - Breaking changes

---

## Master of Agents Commands

```
Jarvis, let's create an agent
Jarvis, let's create a sub-agent
Jarvis, let's create a skill
Jarvis, show me existing agents
Jarvis, update [agent-name]
Jarvis, validate [agent-name]
Jarvis, test [agent-name]
Jarvis, help with agents
```

---

## Quality Checklist

Before finalizing an agent, verify:

- [ ] All template sections completed
- [ ] System prompt is clear and comprehensive
- [ ] Trigger phrases are unambiguous
- [ ] Tool requirements listed
- [ ] Dependencies documented
- [ ] Usage examples provided
- [ ] Test cases included
- [ ] No circular dependencies
- [ ] 0-to-hero execution possible
- [ ] Follows naming convention
- [ ] Change log started
- [ ] Version number set

---

## Resources

- Full docs: `~/agents/README.md`
- Categories: `~/agents/CATEGORIES.md`
- Master: `~/agents/MASTER_OF_AGENTS.md`
- Templates: `~/agents/templates/`
- Index: `~/agents/AGENT_INDEX.md`

---

Last Updated: 2026-03-04
