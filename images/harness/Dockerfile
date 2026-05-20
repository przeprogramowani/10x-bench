# 10xbench harness image
#
# Stack-agnostic. Ships the three coding-agent CLIs the eval supports plus the
# `run-attempt` orchestrator. Per-benchmark images inherit FROM this and add
# only their stack runtime (Go, Python, JDK, etc.).
#
# Build:
#   docker build -t ghcr.io/10xbench/harness:$(date +%Y-%m-%d) images/harness
#
# Pin the three CLI versions via build args so the resulting tag is fully
# reproducible. Bump deliberately.

FROM node:22-bookworm-slim

RUN apt-get update && apt-get install -y --no-install-recommends \
      bash curl ca-certificates git jq \
 && rm -rf /var/lib/apt/lists/*

ARG CLAUDE_CODE_VERSION=2.1.131
ARG CODEX_VERSION=0.128.0
ARG OPENCODE_VERSION=1.14.39

RUN npm install -g \
      "@anthropic-ai/claude-code@${CLAUDE_CODE_VERSION}" \
      "@openai/codex@${CODEX_VERSION}" \
      "opencode-ai@${OPENCODE_VERSION}"

ENV DISABLE_AUTOUPDATER=1

COPY run-attempt /usr/local/bin/run-attempt
RUN chmod +x /usr/local/bin/run-attempt

WORKDIR /workspace
ENTRYPOINT ["run-attempt"]
