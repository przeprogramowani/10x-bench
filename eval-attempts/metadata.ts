export enum AGENT_ENVIRONMENT {
  ClaudeCode = "Claude Code",
  OpenCode = "OpenCode",
  CodexDesktop = "Codex Desktop",
  Cursor = "Cursor",
}

export const AGENT_ENV: Record<string, AGENT_ENVIRONMENT> = {
  "claude-opus-attempt-1": AGENT_ENVIRONMENT.ClaudeCode,
  "claude-opus-attempt-2": AGENT_ENVIRONMENT.ClaudeCode,
  "claude-opus-attempt-3": AGENT_ENVIRONMENT.ClaudeCode,
  "gpt-codex-attempt-1": AGENT_ENVIRONMENT.CodexDesktop,
  "gpt-codex-attempt-2": AGENT_ENVIRONMENT.CodexDesktop,
  "gpt-codex-attempt-3": AGENT_ENVIRONMENT.CodexDesktop,
  "glm-4.7-attempt-1": AGENT_ENVIRONMENT.OpenCode,
  "glm-4.7-attempt-2": AGENT_ENVIRONMENT.OpenCode,
  "glm-4.7-attempt-3": AGENT_ENVIRONMENT.OpenCode,
  "kimi-k2.5-attempt-1": AGENT_ENVIRONMENT.OpenCode,
  "kimi-k2.5-attempt-2": AGENT_ENVIRONMENT.OpenCode,
  "kimi-k2.5-attempt-3": AGENT_ENVIRONMENT.OpenCode,
  "gemini-3-pro-attempt-1": AGENT_ENVIRONMENT.Cursor,
  "gemini-3-pro-attempt-2": AGENT_ENVIRONMENT.Cursor,
  "gemini-3-pro-attempt-3": AGENT_ENVIRONMENT.Cursor,
};
