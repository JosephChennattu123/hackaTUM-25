# AI Coding Agent Rules

This file establishes the ground rules for AI agents contributing to this project. **Do not update this file unless explicitly instructed by a human user.**

## Core Principles

1.  **Bulletproof React**: Strictly adhere to the [Bulletproof React](https://github.com/alan2207/bulletproof-react) architecture.
    *   Code should be organized by feature in `src/features`.
    *   Shared components go in `src/components`.
    *   Global state in `src/stores`.
    *   Providers in `src/providers`.
2.  **No "Magic"**: Avoid obscure one-liners or overly complex logic where simple, readable code suffices.
3.  **Type Safety**: Maintain strict TypeScript usage. Avoid `any` unless absolutely necessary and documented.
4.  **Conciseness**: Keep code and documentation concise but informative.

## Documentation Update Rules

AI agents must maintain the project documentation up-to-date. Follow these specific rules for updating documentation:

### 1. `AI_CODING_RULES.md` (This File)
*   **Update Trigger**: ONLY when explicitly requested by a human user.
*   **Content**: Rules and guidelines for AI contributors.

### 2. `ARCHITECTURE.md`
*   **Update Trigger**: After a major new page or feature is finished that impacts the global flow or structure.
*   **Content**: High-level overview of the frontend architecture, page flows, and key architectural decisions. Keep it abstract; avoid implementation details.

### 3. Feature Dives (`src/features/<feature>/FEATURE_DIVE.md`)
*   **Update Trigger**: Each time a user implements or significantly modifies a feature.
*   **Content**: In-depth technical explanation of the feature. Include:
    *   API calls and data fetching logic.
    *   State management (local and global).
    *   Tricky edge cases or complex logic.
    *   Component structure within the feature.
    *   **Goal**: Enable a human maintainer to quickly understand the "how" and "why" of the feature.

### 4. `TODOS.md`
*   **Update Trigger**: When a user adds a todo or suggests a future feature.
*   **Content**: A global list of pending tasks and ideas.

## General Workflow

*   Always check `TODOS.md` for pending tasks.
*   When creating a new feature, instantiate a `FEATURE_DIVE.md` from the template.
*   After completing a task, verify if `ARCHITECTURE.md` needs an update.
