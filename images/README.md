# Images

Two-layer Docker scheme used by the `run-model-attempts` skill.

```
ghcr.io/10xbench/harness:<tag>           # stack-agnostic, built once
  └─ @anthropic-ai/claude-code (npm)
  └─ @openai/codex            (npm)
  └─ opencode-ai              (npm)
  └─ /usr/local/bin/run-attempt          # orchestrator entrypoint

ghcr.io/10xbench/<benchmark>:<tag>       # per benchmark
  FROM ghcr.io/10xbench/harness:<tag>
  + stack runtime (go / python / jdk / …)
```

The skill never references the harness image directly. It pulls and runs the
benchmark image declared in `benchmark/runner.yaml`. The harness image is an
internal layer.

## Build the harness image

```bash
TAG=$(date +%Y-%m-%d)
docker build -t ghcr.io/10xbench/harness:"$TAG" images/harness
docker push  ghcr.io/10xbench/harness:"$TAG"
```

CLI versions are pinned via `ARG`s in `images/harness/Dockerfile`. Bump them
deliberately and re-tag.

## Build a benchmark image

Each benchmark owns a `benchmark/Dockerfile` that inherits from a specific
harness tag and adds whatever stack runtime the agent will need.

```bash
TAG=$(date +%Y-%m-%d)
docker build -t ghcr.io/10xbench/przeprogramowani:"$TAG" benchmark
docker push  ghcr.io/10xbench/przeprogramowani:"$TAG"
```

After pushing, update `benchmark/runner.yaml`:

```yaml
image: ghcr.io/10xbench/przeprogramowani:2026-05-06
```

The skill resolves and pins the digest at run time.

## Why two layers

- **Cold-start cost.** The harness install (npm + opencode script) happens
  once at image build time, not on every attempt. `docker run` startup drops
  from ~60-90 s to ~1-2 s.
- **Reproducibility.** The benchmark-image digest pins both the stack runtime
  and all three harness versions transitively.
- **Cache reuse.** Multiple benchmark images share the harness layer, so
  `docker pull` of a second benchmark only fetches the stack diff.
