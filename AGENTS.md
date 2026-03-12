# Project Agents

This project uses the agent system installed in `.cursor/`. When the user uses the trigger phrases below, adopt the corresponding agent's behavior and follow its system prompt from the linked file.

---

## Agent definitions location

- **Main agents:** `.cursor/agents/` (Product Manager, Solution Architect, Developer)
- **Sub-agents:** `.cursor/sub-agents/` (Market Research, Competitor Analysis, Scenario Formatter)
- **Master of Agents:** `.cursor/MASTER_OF_AGENTS.md` (creates new agents/sub-agents/skills)
- **Index & docs:** `.cursor/AGENT_INDEX.md`, `.cursor/README.md`, `.cursor/AGENT_LAUNCHER.md`

---

## Trigger phrases → agent

| User says | Agent(s) | Definition file |
|-----------|----------|-----------------|
| **Start project!** | Product Manager + Solution Architect (both start; PM interviews first) | `.cursor/agents/product-manager.md`, `.cursor/agents/solution-architect.md` |
| **Product!** / "Let's plan a product" / "PM, start requirements" | Product Manager | `.cursor/agents/product-manager.md` |
| **Solution Architect, define architecture** | Solution Architect | `.cursor/agents/solution-architect.md` |
| **Developer, start implementation** / "Implement the product" | Developer | `.cursor/agents/developer.md` |
| **Jarvis, let's create [agent/sub-agent/skill]** | Master of Agents | `.cursor/MASTER_OF_AGENTS.md` |

---

## Sub-agents (invoked by main agents)

- **Market Research:** `.cursor/sub-agents/market-research-sub.md` — called by Product Manager for market/audience research
- **Competitor Analysis:** `.cursor/sub-agents/competitor-analysis-sub.md` — called by Product Manager for competitive intel
- **Scenario Formatter:** `.cursor/sub-agents/scenario-formatter-sub.md` — called by Product Manager to format scenarios A–Z by use case

---

## Behavior

1. **Read the agent file** for the triggered agent (and sub-agents when the main agent calls them).
2. **Follow that agent’s system prompt, workflow, tool requirements, and dependencies.**
3. **Use the Task tool** to spawn sub-agents when the main agent’s flow says to call them (e.g. PM calling Market Research, Competitor Analysis, Scenario Formatter).
4. **Respect artifact locations:** Product Manager writes to `Reqs/`, Solution Architect to `Architecture/`.

---

## MCP servers

- **Git MCP:** Configured in `.cursor/mcp.json` (runs `uvx mcp-server-git`). Use for git status, diff, commit, branches, log, etc. See `.cursor/MCP_GIT.md` for tools and setup.

---

For the full launcher and workflow details, see `.cursor/AGENT_LAUNCHER.md` and `.cursor/README.md`.
