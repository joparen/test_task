# Sub-Agent Name: [SUB_AGENT_NAME]

**Version:** 1.0.0
**Parent Agent:** [PARENT_AGENT_NAME]
**Category:** [specialized/helper/validator]
**Created:** [DATE]
**Last Updated:** [DATE]

---

## System Prompt

```
[Focused system prompt for this specific sub-task]
```

---

## Purpose

This sub-agent handles [specific task] for the parent agent [PARENT_AGENT_NAME].

---

## Trigger Conditions

Called when:
- [Condition 1]
- [Condition 2]
- [Condition 3]

---

## Tool Requirements

### Required Tools
- [ ] Tool/MCP 1: [description]

### Optional Tools
- [ ] Tool/MCP 2: [description]

---

## Input/Output Contract

### Input Schema
```json
{
  "field1": "type/description",
  "field2": "type/description"
}
```

### Output Schema
```json
{
  "result": "type/description",
  "status": "success/failure",
  "metadata": {}
}
```

---

## Dependencies

### Other Sub-Agents
- **[Sub-Agent Name]**: [When needed]

### External Services
- [Service/API]

---

## Execution Logic

1. [Step 1]
2. [Step 2]
3. [Step 3]
4. Return result to parent

---

## Usage Example

```
Parent Agent → Sub-Agent Input:
{
  "param1": "value1"
}

Sub-Agent Processing:
[Description of what happens]

Sub-Agent → Parent Agent Output:
{
  "result": "processed_value"
}
```

---

## Error Handling

| Error Type | Handling Strategy |
|------------|-------------------|
| [Error 1]  | [Strategy]        |
| [Error 2]  | [Strategy]        |

---

## Change Log

### v1.0.0 - [DATE]
- Initial creation

---

## Notes

[Additional notes specific to this sub-agent]
