export enum AGENT_ENVIRONMENT {
  ClaudeCodeHigh = "Claude Code (High Effort)",
  OpenCode = "OpenCode",
  CodexDesktopHigh = "Codex Desktop (High Effort)",
  Cursor = "Cursor",
  ClaudeDesktop = "Claude Desktop",
}

export type ModelId =
  | "claude-opus-46"
  | "claude-opus-47"
  | "claude-sonnet-45"
  | "claude-sonnet-46"
  | "gpt-53-codex"
  | "glm-47"
  | "kimi-k25"
  | "gemini-3-pro"
  | "minimax-m21"
  | "minimax-m25"
  | "devstral-2"
  | "qwen-3-max"
  | "grok-code-fast-1"
  | "gemini-31-pro"
  | "glm-5"
  | "glm-51"
  // | "minimax-m27"
  // | "qwen-36-plus"
  | "gpt-54";

// Keyed by base model ID (directory name without "-attempt-{n}")
export const AGENT_NAMES: Record<ModelId, string> = {
  "claude-opus-46": "Claude Opus 4.6",
  "claude-opus-47": "Claude Opus 4.7",
  "claude-sonnet-45": "Claude Sonnet 4.5",
  "claude-sonnet-46": "Claude Sonnet 4.6",
  "gpt-53-codex": "GPT-5.3-Codex",
  "glm-47": "GLM-4.7",
  "kimi-k25": "Kimi K2.5",
  "gemini-3-pro": "Gemini 3 Pro",
  "minimax-m21": "Minimax M2.1",
  "minimax-m25": "Minimax M2.5",
  "devstral-2": "Devstral 2",
  "qwen-3-max": "Qwen 3 Max",
  "grok-code-fast-1": "Grok Code Fast 1",
  "gemini-31-pro": "Gemini 3.1 Pro",
  "glm-5": "GLM-5",
  "glm-51": "GLM-5.1",
  // "minimax-m27": "Minimax M2.7",
  // "qwen-36-plus": "Qwen 3.6 Plus",
  "gpt-54": "GPT-5.4",
};

export const AGENT_ENV: Record<ModelId, AGENT_ENVIRONMENT> = {
  "claude-opus-46": AGENT_ENVIRONMENT.ClaudeCodeHigh,
  "claude-opus-47": AGENT_ENVIRONMENT.ClaudeDesktop,
  "claude-sonnet-45": AGENT_ENVIRONMENT.ClaudeCodeHigh,
  "claude-sonnet-46": AGENT_ENVIRONMENT.ClaudeCodeHigh,
  "gpt-53-codex": AGENT_ENVIRONMENT.CodexDesktopHigh,
  "glm-47": AGENT_ENVIRONMENT.OpenCode,
  "kimi-k25": AGENT_ENVIRONMENT.OpenCode,
  "gemini-3-pro": AGENT_ENVIRONMENT.Cursor,
  "minimax-m21": AGENT_ENVIRONMENT.OpenCode,
  "minimax-m25": AGENT_ENVIRONMENT.OpenCode,
  "devstral-2": AGENT_ENVIRONMENT.OpenCode,
  "qwen-3-max": AGENT_ENVIRONMENT.OpenCode,
  "grok-code-fast-1": AGENT_ENVIRONMENT.OpenCode,
  "gemini-31-pro": AGENT_ENVIRONMENT.Cursor,
  "glm-5": AGENT_ENVIRONMENT.OpenCode,
  "glm-51": AGENT_ENVIRONMENT.OpenCode,
  // "minimax-m27": AGENT_ENVIRONMENT.OpenCode,
  // "qwen-36-plus": AGENT_ENVIRONMENT.OpenCode,
  "gpt-54": AGENT_ENVIRONMENT.CodexDesktopHigh,
};

/** Models superseded by newer versions (old → new) */
export const SUPERSEDED_MODELS: Partial<Record<ModelId, ModelId>> = {
  "claude-opus-46": "claude-opus-47",
  "claude-sonnet-45": "claude-sonnet-46",
  "gemini-3-pro": "gemini-31-pro",
  "glm-47": "glm-5",
  "minimax-m21": "minimax-m25",
  "glm-5": "glm-51",
  // "minimax-m25": "minimax-m27",
  // "qwen-3-max": "qwen-36-plus",
};

/** Base model IDs to exclude from processed results (all attempts are skipped) */
// Sonnet results are ready but not to publish before YT video release on 16.02.2026.
export const DISABLED_MODELS: Set<string> = new Set();

/** Token pricing per 1M tokens (USD, no cache) */
export interface ModelPricing {
  input: number;
  output: number;
}

export const MODEL_PRICING: Record<ModelId, ModelPricing> = {
  "claude-opus-46": {input: 5.0, output: 25.0},
  "claude-opus-47": {input: 5.0, output: 25.0},
  "claude-sonnet-45": {input: 3.0, output: 15.0},
  "claude-sonnet-46": {input: 3.0, output: 15.0},
  "gpt-53-codex": {input: 1.75, output: 14.0},
  "glm-47": {input: 0.6, output: 2.2},
  "kimi-k25": {input: 0.6, output: 3.0},
  "gemini-3-pro": {input: 2.0, output: 12.0},
  "minimax-m21": {input: 0.27, output: 0.95},
  "minimax-m25": {input: 0.3, output: 2.4},
  "devstral-2": {input: 0.4, output: 2.0},
  "qwen-3-max": {input: 1.2, output: 6.0},
  "grok-code-fast-1": {input: 0.2, output: 1.5},
  "gemini-31-pro": {input: 2.0, output: 12.0},
  "glm-5": {input: 0.3, output: 2.55},
  "glm-51": {input: 1.4, output: 4.4},
  // "minimax-m27": {input: 0.3, output: 1.2},
  // "qwen-36-plus": {input: 0.5, output: 3.0},
  "gpt-54": {input: 1.75, output: 14.0},
};

/** Type guard: check whether a runtime string is a known ModelId */
export function isModelId(value: string): value is ModelId {
  return value in AGENT_NAMES;
}

/** Extract base model ID from a directory name like "claude-opus-46-attempt-3" → "claude-opus-46" */
export function getModelBaseId(dirname: string): string {
  const match = dirname.match(/^(.+)-attempt-\d+$/);
  return match ? match[1] : dirname;
}
