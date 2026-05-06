# Per-benchmark image for the Przeprogramowani.pl website task.
#
# Inherits the harness image (which already provides Node 22, the three CLIs,
# and the run-attempt orchestrator). This benchmark is a Node/Astro project,
# so no extra stack runtime is required.
#
# Build:
#   TAG=$(date +%Y-%m-%d)
#   docker build -t ghcr.io/10xbench/przeprogramowani:"$TAG" benchmark
#
# After pushing, bump `image:` in benchmark/runner.yaml to the new tag.

ARG HARNESS_TAG=2026-05-06
FROM ghcr.io/10xbench/harness:${HARNESS_TAG}

# Node 22 already present from the harness base; nothing else to install.
