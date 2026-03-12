# Git MCP Server

This project enables the **Git MCP server** (official [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) implementation) via `.cursor/mcp.json`.

## Requirements

- **uv** (recommended): Install from [astral.sh/uv](https://docs.astral.sh/uv/) so `uvx` can run `mcp-server-git` with no extra install.
- Or **Docker**: Use the `mcp/git` image (see alternative config below).
- Or **pip**: `pip install mcp-server-git` and run with `python -m mcp_server_git`.

## Configuration

Current config in `.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "git": {
      "command": "uvx",
      "args": ["mcp-server-git"]
    }
  }
}
```

To lock the server to a specific repository (optional):

```json
"git": {
  "command": "uvx",
  "args": ["mcp-server-git", "--repository", "/path/to/your/repo"]
}
```

**Restart Cursor** after changing MCP config.

## When to use Git MCP

Use the Git MCP when the user asks to:

- Check status, diff, or history of a repo
- Stage, commit, reset, or show commits
- Create/switch branches or compare branches
- Inspect or manipulate Git state in the current (or specified) repository

Always pass `repo_path` (absolute or relative to workspace) to each tool so the server knows which repo to use. For the current project, use the workspace root path.

## Tools (summary)

| Tool | Purpose |
|------|--------|
| `git_status` | Working tree status |
| `git_diff_unstaged` | Unstaged changes (optional `context_lines`) |
| `git_diff_staged` | Staged changes |
| `git_diff` | Diff vs branch/commit (`target`) |
| `git_commit` | Create commit with `message` |
| `git_add` | Stage `files` (array of paths) |
| `git_reset` | Unstage all |
| `git_log` | Commit log (`max_count`, `start_timestamp`, `end_timestamp`) |
| `git_create_branch` | Create branch (`branch_name`, optional `base_branch`) |
| `git_checkout` | Switch to `branch_name` |
| `git_show` | Show commit by `revision` (hash/branch/tag) |
| `git_branch` | List branches (`branch_type`: local/remote/all, optional `contains`/`not_contains`) |

## Debugging

- Run the MCP inspector: `npx @modelcontextprotocol/inspector uvx mcp-server-git`
- Check Cursor/MCP logs for errors if the server doesn’t appear or tools fail.
