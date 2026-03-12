# Skill Name: [SKILL_NAME]

**Version:** 1.0.0
**Slash Command:** `/[command-name]`
**Category:** [utility/automation/workflow]
**Created:** [DATE]
**Last Updated:** [DATE]

---

## System Prompt

```
[Concise prompt that defines what this skill does when invoked]
```

---

## Trigger

Users invoke this skill with:
```
/[command-name] [optional-args]
```

---

## Arguments

| Argument | Type | Required | Default | Description |
|----------|------|----------|---------|-------------|
| `arg1`   | string | Yes    | -       | [description] |
| `arg2`   | number | No     | 10      | [description] |

---

## Tool Requirements

### Required Tools
- [ ] Tool 1
- [ ] Tool 2

### Optional Tools
- [ ] Tool 3

---

## Dependencies

### Agents
- **[Agent Name]**: [When/why used]

### Sub-Agents
- **[Sub-Agent Name]**: [Purpose]

---

## Execution Flow

1. Parse arguments
2. Validate input
3. Execute core function
4. Return result

---

## Usage Examples

### Example 1: Basic Usage
```
User: /[command-name] arg1_value

Skill: [What happens]

Output: [Result]
```

### Example 2: With Options
```
User: /[command-name] arg1_value --arg2 20

Skill: [What happens]

Output: [Result]
```

---

## Integration

### Claude Code Integration
This skill is loaded as:
```json
{
  "name": "[command-name]",
  "description": "[Short description]",
  "prompt": "[Prompt from System Prompt section]"
}
```

### Installation
1. Copy this file to `~/.claude/skills/[command-name].md`
2. Restart Claude Code or reload skills
3. Test with `/[command-name] --help`

---

## Testing

| Test Case | Input | Expected Output | Status |
|-----------|-------|-----------------|--------|
| Test 1    | [input] | [output]      | ✓/✗    |
| Test 2    | [input] | [output]      | ✓/✗    |

---

## Change Log

### v1.0.0 - [DATE]
- Initial creation

---

## Notes

[Additional implementation notes]
