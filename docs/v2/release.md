# Coordinated V2 release

Status: local implementation and verification completed; publication is not authorized. No paid campaign is part of this release.

1. Complete contract/processor/workflow verification and desktop/mobile acceptance. Confirm normal build produces zero V2 attempts and the legacy API is byte-identical to `archive/v1/leaderboard.json`. Keep synthetic fixtures outside result inputs. Resolve any remaining audit gaps before declaring readiness.
2. Review the evaluation-repository changes first: `benchmark/v1/` preserves the historical documents; `benchmark/v2/` holds canonical candidate/public/evaluator material. Commit/publish those path-scoped changes only after publication authorization. Record the resulting Git revision. Content hashes identify the exact current bundle even before a remote commit exists.
3. In the dashboard repository run `npm run sync:benchmark -- --check` against the reviewed canonical checkout, then `npm run verify:v1`, `npm run verify:benchmark`, focused tests, lint and build. The vendored bundle enables offline builds and avoids a moving-branch dependency. Record the source Git revision in release notes without replacing the content hash with an unverified remote reference.
4. Review both repositories' scoped diffs, keeping the unrelated untracked `AGENTS.md` out of staging. Review generated API/data changes, screenshot scopes, root prompt pointer and tracked skills. Ensure the Kit page has no content edits.
5. Present the final changes and checks for publication authorization if not already given. Publish the evaluation material before the dashboard. Deploy using the existing dashboard workflow; candidate website deployment is unrelated and prohibited by the benchmark task.
6. Verify the deployed `/`, `/benchmark`, `/v1`, `/v1/benchmark`, `/kit`, `/api/leaderboard.json` and `/api/v2/leaderboard.json`. Check the empty V2 state, archive navigation at desktop/mobile widths, immutable V1 content, correct V2 revision, metadata and HTTP status. Record deployed revision/URL and checks separately from local evidence. Do not mark this gate complete from a local build.

No V1 attempt is rerun, converted or regraded. No first V2 campaign is implied by publishing the empty dashboard.
