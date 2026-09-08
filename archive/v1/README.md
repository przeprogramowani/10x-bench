# Frozen V1 baseline

Selected 2026-09-07 from dashboard revision `63aeb60630929ddcf67c4f71f088c94f79ed7657`: **122 attempts, 25 model families**. `results.json` and `leaderboard.json` retain their original bytes and generation timestamps. Current CSV regeneration matched both snapshots except its timestamp; see `provenance.json` and `node --import tsx scripts/audit-v1.ts`.

`inputs/` preserves evaluation CSVs, model metadata and the processing source used for the audit. That source is a historical reference, not an executable entrypoint at this relocated path. The audit's only processor change allowed outputs in a temporary directory and disabled execution on import; parsing, scoring and aggregation were unchanged.

`methodology/published/` preserves the evaluation repository's benchmark documents at `919d40bbb3760ae6480e9ffa7bd3ee833d04b5ba`. `methodology/local-skills/` preserves operator instructions as found locally. The two sources disagree on dependency versions and Cloudflare readiness. They are historical evidence, not a unified reconstructed rulebook. Per-attempt rule revisions were not recorded, so this archive cannot assert one uniform rubric was applied to every run. No scores have been reinterpreted or changed.

Screenshots and filmstrips remain under `website/public/screenshots/` to preserve URLs; their SHA-256 fingerprints are in provenance. Every expected attempt screenshot and model filmstrip existed at audit time. The snapshots retain cost and environment attribution and supersession mappings. Later V2 metadata must not be used to recompute these rankings.

Run `npm run verify:v1` to verify immutable archive files and screenshot bytes, then reproduce the ranking and API in a temporary directory using only the archived CSVs, metadata and processor source. `integrity.json` is the frozen checksum manifest; do not regenerate it to suppress a failure. The normal processor restores the snapshot bytes and does not import live model metadata. The historical live-input audit remains available separately in `scripts/audit-v1.ts` and `scripts/legacy-process-results.ts`.

The companion repository now has the identical published documents in `benchmark/v1/`. `/v1` and `/v1/benchmark` consume local frozen material. V2 processing and shared navigation are implemented; local desktop/mobile browser checks passed. Publication and deployed verification remain separate gates in V2_PLAN.md.
