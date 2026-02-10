export enum AGENT_ENVIRONMENT {
  ClaudeCodeHigh = "Claude Code (High Effort)",
  OpenCode = "OpenCode",
  CodexDesktopHigh = "Codex Desktop (High Effort)",
  Cursor = "Cursor",
}

// Keyed by base model ID (directory name without "-attempt-{n}")
export const AGENT_NAMES: Record<string, string> = {
  "claude-opus-46": "Claude Opus 4.6",
  "claude-sonnet-45": "Claude Sonnet 4.5",
  "gpt-53-codex": "GPT-5.3-Codex",
  "glm-47": "GLM-4.7",
  "kimi-k25": "Kimi K2.5",
  "gemini-3-pro": "Gemini 3 Pro",
  "minimax-m21": "Minimax M2.1",
  "devstral-2": "Devstral 2",
  "qwen-3-max": "Qwen 3 Max",
};

export const AGENT_ENV: Record<string, AGENT_ENVIRONMENT> = {
  "claude-opus-46": AGENT_ENVIRONMENT.ClaudeCodeHigh,
  "claude-sonnet-45": AGENT_ENVIRONMENT.ClaudeCodeHigh,
  "gpt-53-codex": AGENT_ENVIRONMENT.CodexDesktopHigh,
  "glm-47": AGENT_ENVIRONMENT.OpenCode,
  "kimi-k25": AGENT_ENVIRONMENT.OpenCode,
  "gemini-3-pro": AGENT_ENVIRONMENT.Cursor,
  "minimax-m21": AGENT_ENVIRONMENT.OpenCode,
  "devstral-2": AGENT_ENVIRONMENT.OpenCode,
  "qwen-3-max": AGENT_ENVIRONMENT.OpenCode,
};

/** Base model IDs to exclude from processed results (all attempts are skipped) */
// Sonnet results are ready but not to publish before YT video release on 16.02.2026.
export const DISABLED_MODELS: Set<string> = new Set(["claude-sonnet-45"]);

/** Extract base model ID from a directory name like "claude-opus-46-attempt-3" → "claude-opus-46" */
export function getModelBaseId(dirname: string): string {
  const match = dirname.match(/^(.+)-attempt-\d+$/);
  return match ? match[1] : dirname;
}
