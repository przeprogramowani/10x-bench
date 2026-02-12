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
  "minimax-m25": "Minimax M2.5",
  "devstral-2": "Devstral 2",
  "qwen-3-max": "Qwen 3 Max",
  "grok-code-fast-1": "Grok Code Fast 1",
};

export const AGENT_ENV: Record<string, AGENT_ENVIRONMENT> = {
  "claude-opus-46": AGENT_ENVIRONMENT.ClaudeCodeHigh,
  "claude-sonnet-45": AGENT_ENVIRONMENT.ClaudeCodeHigh,
  "gpt-53-codex": AGENT_ENVIRONMENT.CodexDesktopHigh,
  "glm-47": AGENT_ENVIRONMENT.OpenCode,
  "kimi-k25": AGENT_ENVIRONMENT.OpenCode,
  "gemini-3-pro": AGENT_ENVIRONMENT.Cursor,
  "minimax-m21": AGENT_ENVIRONMENT.OpenCode,
  "minimax-m25": AGENT_ENVIRONMENT.OpenCode,
  "devstral-2": AGENT_ENVIRONMENT.OpenCode,
  "qwen-3-max": AGENT_ENVIRONMENT.OpenCode,
  "grok-code-fast-1": AGENT_ENVIRONMENT.OpenCode,
};

/** Base model IDs to exclude from processed results (all attempts are skipped) */
// Sonnet results are ready but not to publish before YT video release on 16.02.2026.
export const DISABLED_MODELS: Set<string> = new Set();

/** Token pricing per 1M tokens (USD, no cache) */
export interface ModelPricing {
  input: number;
  output: number;
}

export const MODEL_PRICING: Record<string, ModelPricing> = {
  "claude-opus-46": { input: 5.0, output: 25.0 },
  "claude-sonnet-45": { input: 3.0, output: 15.0 },
  "gpt-53-codex": { input: 1.75, output: 14.0 },
  "glm-47": { input: 0.6, output: 2.2 },
  "kimi-k25": { input: 0.6, output: 3.0 },
  "gemini-3-pro": { input: 2.0, output: 12.0 },
  "minimax-m21": { input: 0.27, output: 0.95 },
  "minimax-m25": { input: 0.3, output: 2.4 },
  "devstral-2": { input: 0.4, output: 2.0 },
  "qwen-3-max": { input: 1.2, output: 6.0 },
  "grok-code-fast-1": { input: 0.2, output: 1.5 },
};

/** Extract base model ID from a directory name like "claude-opus-46-attempt-3" → "claude-opus-46" */
export function getModelBaseId(dirname: string): string {
  const match = dirname.match(/^(.+)-attempt-\d+$/);
  return match ? match[1] : dirname;
}
