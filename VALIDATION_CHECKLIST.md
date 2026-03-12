# Agent Validation Checklist

Use this checklist when creating or updating agents to ensure quality and completeness.

---

## Pre-Creation Validation

### Uniqueness Check
- [ ] Scanned existing agents for duplicates
- [ ] Verified no similar functionality exists
- [ ] Checked for naming conflicts
- [ ] Identified potential integration with existing agents

### Requirements Check
- [ ] All required tools are available
- [ ] All dependent agents exist
- [ ] All MCPs are installed
- [ ] File access patterns are valid

### Design Check
- [ ] Category is appropriate
- [ ] Scope is well-defined
- [ ] Responsibility is clear
- [ ] No feature creep

---

## Content Validation

### Metadata Section
- [ ] Name is descriptive and follows convention
- [ ] Version is set (1.0.0 for new)
- [ ] Category is from CATEGORIES.md
- [ ] Created date is present
- [ ] Last updated date is present

### System Prompt
- [ ] Comprehensive behavior definition
- [ ] Clear personality/tone
- [ ] Explicit capabilities listed
- [ ] Constraints defined
- [ ] Error handling guidance included

### Trigger Phrases
- [ ] At least 2-3 trigger phrases
- [ ] Phrases are unambiguous
- [ ] No conflict with existing agents
- [ ] Natural language patterns
- [ ] Include usage context

### Tool Requirements
- [ ] All required tools listed
- [ ] Optional tools marked clearly
- [ ] File access patterns specified
- [ ] Permission requirements noted
- [ ] External services documented

### Dependencies
- [ ] All agent dependencies exist
- [ ] Sub-agent dependencies documented
- [ ] External dependencies listed
- [ ] No circular dependencies
- [ ] Version compatibility noted

### Interconnections
- [ ] "Can Call" section complete
- [ ] "Called By" section complete
- [ ] Data flow documented
- [ ] Integration points clear
- [ ] Failure modes handled

### Capabilities
- [ ] Core functions listed (3-5 items)
- [ ] Each function is actionable
- [ ] Limitations documented
- [ ] Scope boundaries clear
- [ ] Known issues noted

### Usage Examples
- [ ] At least 2 examples provided
- [ ] Examples cover common scenarios
- [ ] Examples show input/output
- [ ] Examples are realistic
- [ ] Edge cases included

### Execution Flow
- [ ] Step-by-step workflow documented
- [ ] Decision points identified
- [ ] Error paths shown
- [ ] Recovery strategies included
- [ ] Diagram/flowchart present

### Testing
- [ ] At least 2 test cases
- [ ] Test inputs defined
- [ ] Expected outputs defined
- [ ] Edge cases tested
- [ ] Failure scenarios tested

### Change Log
- [ ] Version 1.0.0 entry exists
- [ ] Creation date documented
- [ ] Initial features listed

### Notes Section
- [ ] Important gotchas documented
- [ ] Performance considerations noted
- [ ] Security concerns mentioned
- [ ] Future improvements listed

---

## Logic Validation

### Execution Logic
- [ ] Can execute from start to finish (0-to-hero)
- [ ] All steps are achievable
- [ ] No missing steps
- [ ] Error handling is complete
- [ ] Timeout scenarios handled

### Dependency Logic
- [ ] All dependencies are resolvable
- [ ] Circular dependencies avoided
- [ ] Fallback options exist
- [ ] Graceful degradation possible
- [ ] Dependencies are minimal

### Tool Logic
- [ ] Tools are used correctly
- [ ] Tool alternatives considered
- [ ] Tool failures handled
- [ ] Tool permissions validated
- [ ] Tool availability confirmed

### Data Flow
- [ ] Input validation present
- [ ] Output format defined
- [ ] Data transformations clear
- [ ] State management sound
- [ ] Side effects documented

---

## Integration Validation

### Agent Ecosystem
- [ ] Fits into existing ecosystem
- [ ] Enhances other agents
- [ ] No functionality overlap
- [ ] Clear differentiation
- [ ] Composable with others

### Claude Code Integration
- [ ] Compatible with Claude Code skills
- [ ] Follows Claude Code conventions
- [ ] Uses appropriate tools
- [ ] Respects permissions model
- [ ] Works in Cursor/Antigravity

### User Experience
- [ ] Easy to trigger
- [ ] Clear feedback provided
- [ ] Progress indicators present
- [ ] Error messages helpful
- [ ] Success confirmation clear

---

## Quality Validation

### Completeness
- [ ] No TODO items
- [ ] No placeholder text
- [ ] No empty sections
- [ ] All examples complete
- [ ] All fields filled

### Clarity
- [ ] Language is clear
- [ ] No ambiguous terms
- [ ] Technical jargon explained
- [ ] Examples are understandable
- [ ] Instructions are actionable

### Consistency
- [ ] Naming is consistent
- [ ] Format matches template
- [ ] Style is uniform
- [ ] Terminology is standard
- [ ] Version format correct

### Maintainability
- [ ] Well-organized
- [ ] Easy to update
- [ ] Clear update path
- [ ] Version strategy defined
- [ ] Change log structure set

### Documentation
- [ ] Self-documenting
- [ ] Usage is clear
- [ ] Integration is documented
- [ ] Troubleshooting included
- [ ] Examples are sufficient

---

## Post-Creation Validation

### File System
- [ ] File created in correct location
- [ ] Filename follows convention
- [ ] File permissions correct
- [ ] File is readable
- [ ] File is valid markdown

### Registry Update
- [ ] AGENT_INDEX.md updated
- [ ] Dependencies registered
- [ ] Category recorded
- [ ] Version tracked

### Integration Test
- [ ] Trigger phrase works
- [ ] Tools are accessible
- [ ] Dependencies resolve
- [ ] Output is correct
- [ ] No errors occur

### User Handoff
- [ ] Usage instructions provided
- [ ] Integration steps clear
- [ ] Next steps suggested
- [ ] Testing guidance given
- [ ] Support info included

---

## Special Validations

### For Orchestrator Agents
- [ ] Sub-agent coordination clear
- [ ] Task decomposition sound
- [ ] Progress tracking present
- [ ] Rollback strategy defined
- [ ] Parallel execution safe

### For Sub-Agents
- [ ] Parent agent identified
- [ ] Input contract clear
- [ ] Output contract clear
- [ ] Error propagation handled
- [ ] Timeout behavior defined

### For Skills
- [ ] Slash command unique
- [ ] Arguments well-defined
- [ ] Quick execution
- [ ] User-friendly
- [ ] Help text present

---

## Sign-Off

Before declaring an agent complete, verify:

✓ All sections of this checklist passed
✓ Agent can execute successfully
✓ Documentation is complete
✓ Integration is tested
✓ User can use it immediately

---

**Validation Status Template:**

```
Agent: [name]
Validated by: Master of Agents
Date: [date]
Version: [version]

Pre-Creation: ✓ / ✗
Content: ✓ / ✗
Logic: ✓ / ✗
Integration: ✓ / ✗
Quality: ✓ / ✗
Post-Creation: ✓ / ✗

Overall: APPROVED / NEEDS REVISION

Notes:
[Any concerns or recommendations]
```

---

Last Updated: 2026-03-04
Version: 1.0.0
