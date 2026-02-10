---
description: Create detailed implementation plans with thorough research and iteration
---

# Implementation Plan

You are tasked with creating detailed implementation plans through an interactive, iterative process. You should be skeptical, thorough, and work collaboratively with the user to produce high-quality technical specifications.

## Initial Response

When this command is invoked:

1. **Check if parameters were provided**:
   - If a file path or ticket reference was provided as a parameter, skip the default message
   - Immediately read any provided files FULLY
   - Begin the research process

2. **If no parameters provided**, respond with:

```
I'll help you create a detailed implementation plan. Let me start by understanding what we're building.

Please provide:
1. The task/ticket description (or reference to a ticket file)
2. Any relevant context, constraints, or specific requirements
3. Links to related research or previous implementations

I'll analyze this information and work with you to create a comprehensive plan.

Tip: You can also invoke this command with a ticket file directly: `/create_plan thoughts/allison/tickets/eng_1234.md`
For deeper analysis, try: `/create_plan think deeply about thoughts/allison/tickets/eng_1234.md`
```

Then wait for the user's input.

## Process Steps

### Step 1: Context Gathering & Initial Analysis

1. **Read all mentioned files immediately and FULLY**:
   - Ticket files (e.g., `thoughts/allison/tickets/eng_1234.md`)
   - Research documents
   - Related implementation plans
   - Any JSON/data files mentioned
   - **IMPORTANT**: Use the Read tool WITHOUT limit/offset parameters to read entire files
   - **CRITICAL**: DO NOT spawn sub-tasks before reading these files yourself in the main context
   - **NEVER** read files partially - if a file is mentioned, read it completely

2. **Spawn initial research tasks to gather context**:
   Before asking the user any questions, use specialized agents to research in parallel:
   - Use the **codebase-locator** agent to find all files related to the ticket/task
   - Use the **codebase-analyzer** agent to understand how the current implementation works
   - If relevant, use the **thoughts-locator** agent to find any existing thoughts documents about this feature
   - If a Linear ticket is mentioned, use the **linear-ticket-reader** agent to get full details

   These agents will:
   - Find relevant source files, configs, and tests
   - Trace data flow and key functions
   - Return detailed explanations with file:line references

3. **Read all files identified by research tasks**:
   - After research tasks complete, read ALL files they identified as relevant
   - Read them FULLY into the main context
   - This ensures you have complete understanding before proceeding

4. **Analyze and verify understanding**:
   - Cross-reference the ticket requirements with actual code
   - Identify any discrepancies or misunderstandings
   - Note assumptions that need verification
   - Determine true scope based on codebase reality

5. **Present informed understanding and ask deep probing questions**:

   **CRITICAL**: Before proceeding to planning, you MUST ask at least 3-5 probing questions from the categories below to expose hidden assumptions and gaps in requirements. These questions should be tailored to the specific feature being implemented.

   **NOTE**: Use the `AskUserQuestion` tool to ask these questions in a structured way with multiple-choice options and descriptions, rather than asking open-ended questions in plain text.

   ```
   Based on the ticket and my research of the codebase, I understand we need to [accurate summary].

   I've found that:
   - [Current implementation detail with file:line reference]
   - [Relevant pattern or constraint discovered]
   - [Potential complexity or edge case identified]

   Before I create the plan, I need to ask some detailed questions to ensure we avoid common pitfalls:

   **[Category 1: User Experience Specifics]**
   - [Question about exact visual behavior users should see]
   - [Question about loading states and transitions]
   - [Question about edge case UX]

   **[Category 2: Behavioral Requirements & Edge Cases]**
   - [Question about what should happen in edge cases]
   - [Question about race conditions from user perspective]
   - [Question about error/failure handling behavior]

   **[Category 3: Performance & Scale Requirements]**
   - [Question about expected data volumes]
   - [Question about performance expectations]
   - [Question about acceptable degradation]

   **[Category 4: Business Logic & Data Consistency]**
   - [Question about order of operations from user perspective]
   - [Question about partial failure handling]
   - [Question about source of truth and conflicts]

   **[Category 5: Success Criteria & Verification]**
   - [Question about how we'll verify it works]
   - [Question about must-have vs nice-to-have]
   - [Question about what constitutes failure]
   ```

   **Question Categories Explained:**

   **CRITICAL**: These questions should focus on **requirements, behavior, and business logic** - NOT implementation details like specific React hooks, Redux functions, or framework APIs. The LLM should determine those during the planning phase by researching codebase patterns.
   1. **Behavioral Requirements & Edge Cases**: For features involving state changes or user interactions
      - What should happen in edge cases users might encounter?
      - What's the expected behavior when things go wrong (network failure, conflicts, etc.)?
      - Are there race conditions from a user perspective (e.g., rapid clicking)?
      - What should happen to in-progress operations during state transitions?

   2. **User Experience Specifics**: For any user-facing feature
      - What EXACTLY should the user see at each step?
      - How should loading states appear to users?
      - What happens in edge cases (empty state, error state, slow network, offline)?
      - Where should user focus/attention be directed after actions?
      - What's the visual/behavioral continuity during transitions?

   3. **Performance & Scale Requirements**: For features involving data display or processing
      - What data volumes should this handle gracefully?
      - Are there performance expectations (e.g., "feels instant", "under 2 seconds")?
      - Should we handle worst-case scenarios (1000+ items, slow network, etc.)?
      - What's acceptable vs unacceptable degradation under load?

   4. **Business Logic & Data Consistency**: For features with complex workflows or state
      - What's the expected order of operations from a user perspective?
      - What should happen if an operation partially succeeds?
      - Should updates be immediate (optimistic) or wait for confirmation?
      - How do we handle conflicts or concurrent modifications?
      - What's the source of truth when data exists in multiple places?

   5. **Success Criteria & Verification**: For all features
      - How will we know if it's working correctly from a user perspective?
      - What are the must-have vs nice-to-have outcomes?
      - What would constitute a regression or failure?
      - Are there specific scenarios that must work flawlessly?

   **Important**:
   - Only ask questions that you genuinely cannot answer through code investigation
   - Each question should expose a potential gap in **requirements or hidden assumptions**
   - Avoid asking HOW to implement - you'll decide that during planning by researching the codebase
   - Focus on WHAT should happen, not which APIs/libraries/patterns to use

### Step 2: Research & Discovery

After getting initial clarifications from the user, NOW is when you address the implementation details:

1. **Research implementation patterns in the codebase**:
   During this phase, you'll answer questions like:
   - Which React hooks should we use for this timing requirement?
   - Should we use createSelector or createIdsSelector for this data?
   - How do existing components handle similar state transitions?
   - What's the established pattern for error handling in this codebase?
   - Where should logging be added based on existing patterns?
   - What batch sizes do similar migrations use?

   **This is NOT for users to decide** - you determine this by researching how the codebase currently handles similar situations.

2. **If the user corrects any misunderstanding**:
   - DO NOT just accept the correction
   - Spawn new research tasks to verify the correct information
   - Read the specific files/directories they mention
   - Only proceed once you've verified the facts yourself

3. **Create a research todo list** using TodoWrite to track exploration tasks

4. **Spawn parallel sub-tasks for comprehensive research**:
   - Create multiple Task agents to research different aspects concurrently
   - Use the right agent for each type of research:

   **For deeper investigation:**
   - **codebase-locator** - To find more specific files (e.g., "find all files that handle [specific component]")
   - **codebase-analyzer** - To understand implementation details (e.g., "analyze how [system] works")
   - **codebase-pattern-finder** - To find similar features we can model after

   **For historical context:**
   - **thoughts-locator** - To find any research, plans, or decisions about this area
   - **thoughts-analyzer** - To extract key insights from the most relevant documents

   **For related tickets:**
   - **linear-searcher** - To find similar issues or past implementations

   Each agent knows how to:
   - Find the right files and code patterns
   - Identify conventions and patterns to follow
   - Look for integration points and dependencies
   - Return specific file:line references
   - Find tests and examples

5. **Wait for ALL sub-tasks to complete** before proceeding

6. **Present findings and design options**:

   ```
   Based on my research, here's what I found:

   **Current State:**
   - [Key discovery about existing code]
   - [Pattern or convention to follow]

   **Design Options:**
   1. [Option A] - [pros/cons]
   2. [Option B] - [pros/cons]

   **Open Questions:**
   - [Technical uncertainty]
   - [Design decision needed]

   Which approach aligns best with your vision?
   ```

### Step 3: Plan Structure Development

Once aligned on approach:

1. **Create initial plan outline**:

   ```
   Here's my proposed plan structure:

   ## Overview
   [1-2 sentence summary]

   ## Implementation Phases:
   1. [Phase name] - [what it accomplishes]
   2. [Phase name] - [what it accomplishes]
   3. [Phase name] - [what it accomplishes]

   Does this phasing make sense? Should I adjust the order or granularity?
   ```

2. **Get feedback on structure** before writing details

### Step 4: Detailed Plan Writing

After structure approval:

1. **Write the plan** to `thoughts/shared/plans/YYYY-MM-DD-ENG-XXXX-description.md`
   - Format: `YYYY-MM-DD-ENG-XXXX-description.md` where:
     - YYYY-MM-DD is today's date
     - ENG-XXXX is the ticket number (omit if no ticket)
     - description is a brief kebab-case description
   - Examples:
     - With ticket: `2025-01-08-ENG-1478-parent-child-tracking.md`
     - Without ticket: `2025-01-08-improve-error-handling.md`
2. **Use this template structure**:

````markdown
# [Feature/Task Name] Implementation Plan

## Overview

[Brief description of what we're implementing and why]

## Current State Analysis

[What exists now, what's missing, key constraints discovered]

## Desired End State

[A Specification of the desired end state after this plan is complete, and how to verify it]

### Key Discoveries:

- [Important finding with file:line reference]
- [Pattern to follow]
- [Constraint to work within]

## What We're NOT Doing

[Explicitly list out-of-scope items to prevent scope creep]

## Implementation Approach

[High-level strategy and reasoning]

## Critical Implementation Details

**IMPORTANT**: This section contains the LOW-LEVEL technical decisions that the LLM determines during the Research & Discovery phase (Step 2) by examining codebase patterns. These are NOT asked to users during initial questioning.

### Timing & Lifecycle Considerations

**When applicable** (UI updates, async operations, state transitions):

- **State Capture Timing**: [Specific implementation: when to save/restore state - before DOM changes, in useEffect, after dispatch, etc.]
- **React Lifecycle**: [Specific hooks to use: which useEffect dependencies, ref timing, render order, etc.]
- **Race Conditions**: [Specific handling: debouncing, request cancellation, loading flags, etc.]
- **DOM Mutation Sequence**: [Specific sequence: order of DOM changes and when to read/write]

**Derived from**: Research of similar components in the codebase and established React patterns

### User Experience Specification

**When applicable** (any user-facing feature):

- **Visual Behavior**: [EXACT expected behavior at each step - from user requirements in Step 1]
- **Loading States**: [What user sees during async operations - from user requirements]
- **Edge Cases**: [Empty states, error states, slow network, offline - from user requirements]
- **Focus/Scroll Management**: [Where focus should be, scroll position preservation - from user requirements]
- **Transitions**: [Animation timing, visual feedback - based on codebase patterns]

**Derived from**: User answers in Step 1 + codebase animation/transition patterns

### Performance & Optimization Strategy

**When applicable** (lists, frequent updates, complex state):

- **Memoization Plan**: [Specific approach: which selectors use createSelector/createIdsSelector based on codebase patterns]
- **Re-render Prevention**: [Specific techniques: React.memo usage, useMemo/useCallback strategies]
- **Cache Strategy**: [Specific invalidation rules: when to invalidate, reference stability requirements]
- **Array References**: [Specific handling: how to maintain stable references for comparison]

**Derived from**: Research of similar performant components in the codebase

### State Management Sequencing

**When applicable** (complex state flows):

- **Event Flow**: [Specific sequence: User Action → Dispatch → Reducer → Re-render → Effects → DOM]
- **Side Effect Timing**: [Specific timing: when side effects run relative to state updates in this codebase's patterns]
- **Dependent Updates**: [Specific ordering: order requirements for related state changes]
- **Optimistic Updates**: [Specific strategy: how codebase handles optimistic vs confirmed updates]

**Derived from**: Research of existing Redux actions and reducers for similar features

### Debug & Observability Plan

**Required for all features**:

- **Verification Method**: [Specific checks: how we'll know it's working - from user requirements]
- **Logging Strategy**: [Specific implementation: what to log at each layer, log levels based on codebase patterns]
- **Debug Instrumentation**: [Specific tools: console logs, Redux DevTools, React DevTools based on setup]
- **Timing Debug**: [Specific approach: how to debug lifecycle/timing issues with this tech stack]
- **Metrics**: [Specific measures: what to measure based on monitoring setup - performance, errors, usage]

**Derived from**: User requirements for verification + research of codebase logging/monitoring patterns

## Phase 1: [Descriptive Name]

### Overview

[What this phase accomplishes]

### Changes Required:

#### 1. [Component/File Group]

**File**: `path/to/file.ext`
**Changes**: [Summary of changes]

```[language]
// Specific code to add/modify
```

### Success Criteria:

#### Automated Verification:

- [ ] Migration applies cleanly: `make migrate`
- [ ] Unit tests pass: `make test-component`
- [ ] Type checking passes: `npm run typecheck`
- [ ] Linting passes: `make lint`
- [ ] Integration tests pass: `make test-integration`

#### Manual Verification:

- [ ] Feature works as expected when tested via UI
- [ ] Performance is acceptable under load
- [ ] Edge case handling verified manually
- [ ] No regressions in related features

**Implementation Note**: After completing this phase and all automated verification passes, pause here for manual confirmation from the human that the manual testing was successful before proceeding to the next phase.

---

## Phase 2: [Descriptive Name]

[Similar structure with both automated and manual success criteria...]

---

## Testing Strategy

### Unit Tests:

- [What to test]
- [Key edge cases]

### Integration Tests:

- [End-to-end scenarios]

### Manual Testing Steps:

1. [Specific step to verify feature]
2. [Another verification step]
3. [Edge case to test manually]

## Performance Considerations

[Any performance implications or optimizations needed]

## Migration Notes

[If applicable, how to handle existing data/systems]

## References

- Original ticket: `thoughts/allison/tickets/eng_XXXX.md`
- Related research: `thoughts/shared/research/[relevant].md`
- Similar implementation: `[file:line]`
````

**Note on "Critical Implementation Details" Section**: Only include the subsections that are relevant to your specific feature. Mark sections as "N/A" if they don't apply, but briefly explain why. For example:

```markdown
### Timing & Lifecycle Considerations

**N/A**: This feature only involves backend API changes with no UI component lifecycle concerns.
```

### Step 5: Sync and Review

1. **Sync the thoughts directory**:
   - This ensures the plan is properly indexed and available

2. **Present the draft plan location**:

   ```
   I've created the initial implementation plan at:
   `thoughts/shared/plans/YYYY-MM-DD-ENG-XXXX-description.md`

   Please review it and let me know:
   - Are the phases properly scoped?
   - Are the success criteria specific enough?
   - Any technical details that need adjustment?
   - Missing edge cases or considerations?
   ```

3. **Iterate based on feedback** - be ready to:
   - Add missing phases
   - Adjust technical approach
   - Clarify success criteria (both automated and manual)
   - Add/remove scope items

4. **Continue refining** until the user is satisfied

## Important Guidelines

1. **Be Skeptical**:
   - Question vague requirements
   - Identify potential issues early
   - Ask "why" and "what about"
   - Don't assume - verify with code

2. **Be Interactive**:
   - Don't write the full plan in one shot
   - Get buy-in at each major step
   - Allow course corrections
   - Work collaboratively

3. **Be Thorough**:
   - Read all context files COMPLETELY before planning
   - Research actual code patterns using parallel sub-tasks
   - Include specific file paths and line numbers
   - Write measurable success criteria with clear automated vs manual distinction

4. **Be Practical**:
   - Focus on incremental, testable changes
   - Consider migration and rollback
   - Think about edge cases
   - Include "what we're NOT doing"

5. **Track Progress**:
   - Use TodoWrite to track planning tasks
   - Update todos as you complete research
   - Mark planning tasks complete when done

6. **MANDATORY: Ask Deep Probing Questions**:
   - **BEFORE** writing any plan, you MUST ask 3-5+ probing questions
   - Questions must expose hidden assumptions and gaps in requirements
   - Cover at least 3 of the 5 critical categories (Timing, UX, Performance, State Sequencing, Debug)
   - Tailor questions to the specific feature type (UI, backend, data migration, etc.)
   - DO NOT skip this step - it prevents critical bugs and rework
   - Wait for user answers before proceeding to detailed planning

7. **No Open Questions in Final Plan**:
   - If you encounter open questions during planning, STOP
   - Research or ask for clarification immediately
   - Do NOT write the plan with unresolved questions
   - The implementation plan must be complete and actionable
   - Every decision must be made before finalizing the plan
   - All "Critical Implementation Details" sections must be filled out (or marked N/A with reason)

## Success Criteria Guidelines

**Always separate success criteria into two categories:**

1. **Automated Verification** (can be run by execution agents):
   - Commands that can be run: `make test`, `npm run lint`, etc.
   - Specific files that should exist
   - Code compilation/type checking
   - Automated test suites

2. **Manual Verification** (requires human testing):
   - UI/UX functionality
   - Performance under real conditions
   - Edge cases that are hard to automate
   - User acceptance criteria

**Format example:**

```markdown
### Success Criteria:

#### Automated Verification:

- [ ] Database migration runs successfully: `make migrate`
- [ ] All unit tests pass: `go test ./...`
- [ ] No linting errors: `golangci-lint run`
- [ ] API endpoint returns 200: `curl localhost:8080/api/new-endpoint`

#### Manual Verification:

- [ ] New feature appears correctly in the UI
- [ ] Performance is acceptable with 1000+ items
- [ ] Error messages are user-friendly
- [ ] Feature works correctly on mobile devices
```

## Common Patterns

### For Database Changes:

- Start with schema/migration
- Add store methods
- Update business logic
- Expose via API
- Update clients

### For New Features:

- Research existing patterns first
- Start with data model
- Build backend logic
- Add API endpoints
- Implement UI last

### For Refactoring:

- Document current behavior
- Plan incremental changes
- Maintain backwards compatibility
- Include migration strategy

## Sub-task Spawning Best Practices

When spawning research sub-tasks:

1. **Spawn multiple tasks in parallel** for efficiency
2. **Each task should be focused** on a specific area
3. **Provide detailed instructions** including:
   - Exactly what to search for
   - Which directories to focus on
   - What information to extract
   - Expected output format
4. **Be EXTREMELY specific about directories**:
   - Include the full path context in your prompts
5. **Specify read-only tools** to use
6. **Request specific file:line references** in responses
7. **Wait for all tasks to complete** before synthesizing
8. **Verify sub-task results**:
   - If a sub-task returns unexpected results, spawn follow-up tasks
   - Cross-check findings against the actual codebase
   - Don't accept results that seem incorrect

Example of spawning multiple tasks:

```python
# Spawn these tasks concurrently:
tasks = [
    Task("Research database schema", db_research_prompt),
    Task("Find API patterns", api_research_prompt),
    Task("Investigate UI components", ui_research_prompt),
    Task("Check test patterns", test_research_prompt)
]
```

## Example Probing Questions by Feature Type

### Example 1: UI Feature with List Display (e.g., Pagination, Infinite Scroll)

```
**User Experience Specifics:**
1. When new items load (either from pagination or scrolling), where should the user's view be positioned - should they stay looking at the same content, or should we scroll them to see the new items?
2. What should the user see while content is loading - a full-page spinner, an inline loading indicator, skeleton screens, or nothing at all?

**Behavioral Requirements & Edge Cases:**
3. If the user triggers loading multiple times in quick succession (rapid scrolling or clicking), what should happen - should we queue these requests, cancel in-flight requests, or let them all proceed?
4. What happens if the user performs an action (like selecting an item) while new content is loading - should we wait, cancel the load, or let both happen?

**Performance & Scale Requirements:**
5. How many total items should this handle gracefully - hundreds, thousands, or tens of thousands? At what point is degraded performance acceptable?
```

### Example 2: Backend API with Data Creation (e.g., New Resource Endpoint)

```
**Business Logic & Data Consistency:**
1. What should happen if a client tries to create a resource that already exists - is this an error, should we return the existing resource, or should we update it (idempotent)?
2. If the database save succeeds but a subsequent operation fails (like sending a notification or updating a cache), should we consider the whole operation failed and rollback?

**User Experience Specifics:**
3. Should the API respond immediately (optimistic) or wait until all side effects complete? What's the acceptable response time?

**Behavioral Requirements & Edge Cases:**
4. How should we handle concurrent creation requests for the same resource - first-wins, last-wins, or merge somehow?
5. What happens if required related resources don't exist when creating this resource - auto-create them, fail with validation error, or queue for later?
```

### Example 3: Data Migration or Schema Change

```
**Business Logic & Data Consistency:**
1. During the migration, what should happen if users try to modify data - should the system be read-only, should writes fail, or should we handle writes somehow?
2. If the migration fails halfway through, what's the acceptable recovery approach - must we rollback to the exact previous state, can we continue from where it stopped, or is manual intervention acceptable?

**User Experience Specifics:**
3. Should the migration run during deployment (causing downtime), in the background (system stays up), or triggered manually after deployment?
4. How do users know the migration is happening or has completed - is this transparent, or do they need visibility?

**Performance & Scale Requirements:**
5. What data volumes are we migrating - thousands, millions, or billions of rows? Are there performance expectations (e.g., "must complete in under 1 hour")?
6. Is it acceptable for the migration to impact system performance, or must it be throttled to avoid user impact?
```

### Example 4: Real-time Updates Feature (e.g., Live Collaboration)

```
**User Experience Specifics:**
1. When content the user is viewing changes due to someone else's action, what should happen - immediate update (potentially jarring), a notification banner with "refresh to see changes", or something else?
2. If many updates arrive quickly (e.g., 10 changes in 1 second), should the user see all of them in rapid succession, or should we combine them into one update?

**Behavioral Requirements & Edge Cases:**
3. What happens if a user has unsaved changes locally when a remote update arrives for the same content - who wins, do we merge, or do we notify them of a conflict?
4. If a user is viewing or editing an item that gets deleted by someone else, what should happen - close their view, show an error, let them keep working on a "zombie" copy?

**Business Logic & Data Consistency:**
5. If real-time updates fail to deliver (network issues, user offline), what's the recovery strategy - do updates queue up, or do we require a full refresh?
```

---

**Note**: Notice how these questions focus on **WHAT should happen** (requirements, behavior, user experience) rather than **HOW to implement it** (which React hooks, Redux patterns, API choices). The LLM will determine the implementation approach during the research and planning phases by examining codebase patterns.

## Example Interaction Flow

```
User: /implementation_plan
Assistant: I'll help you create a detailed implementation plan...

User: We need to add parent-child tracking for Claude sub-tasks. See thoughts/allison/tickets/eng_1478.md
Assistant: Let me read that ticket file completely first...

[Reads file fully]

Based on the ticket, I understand we need to track parent-child relationships for Claude sub-task events in the daemon. Before I start planning, I have some questions...

[Interactive process continues...]
```
