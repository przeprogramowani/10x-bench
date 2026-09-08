# 10xBench v2 transformation plan

Status: local V2 migration implemented and verified; publication and deployed verification remain pending authorization. No paid model runs were launched.
Last updated: 2026-09-07.

Decision record: the candidate does not publish the website. Workers readiness means compatible, correctly configured adapter/runtime and clear deployment instructions, with explicit observable criteria. Each attempt has at most 60 minutes. The user delegated the initial scoring distribution to the implementer for later revision; the first revision uses 80 outcome points and 20 self-verification points. Historical V1 attempts will not be rerun or regraded. This decision does not authorize publishing the benchmark dashboard or paid model runs.

This plan spans `10x-bench` (this repository) and sibling `10x-bench-eval` (benchmark specification, reference material, and evaluation guidance). It records the agreed direction, the remaining decisions, and the implementation sequence. An unchecked item is pending, not an implicit approval of any unresolved choice.

## Progress rules

- Mark a checkbox complete only when its deliverable exists and its stated checks have passed.
- Record relevant files, validation results, and remaining limitations in the phase's evidence field.
- Keep implementation, automated verification, manual acceptance, and publication distinct.
- Update this document as decisions are resolved and work progresses. Preserve decisions and evidence across sessions.
- Do not execute benchmark attempts, publish changes, or modify historical scores merely to complete planning work.

## Objective and agreed requirements

V1 measured how models interpreted vague requirements in a one-shot website task. V2 measures autonomous completion of a more complex, precise specification. The candidate receives one end-to-end description of expected outcomes and chooses its own implementation approach. Native goal mode is used where the coding environment supports it.

The initial idea of fixed staged user messages was superseded during the interview. Do not implement a scripted multi-turn task sequence. Multi-step work happens within the candidate's autonomous run; any continuation behavior must follow the documented run protocol.

- [x] Keep the Przeprogramowani.pl website as the benchmark task.
- [x] Specify dedicated pages rather than accepting all content on the landing page.
- [x] Require a podcast hub and dedicated pages for both Opanuj.AI and Przeprogramowani podcasts.
- [x] Require real recent podcast and YouTube content researched online, with flexible selection rather than a fixed item count.
- [x] Require embedded playback and working original-source links. Preserve source links when an embed is unavailable.
- [x] Require server-side external-content fetching in dedicated data-source modules, separate from page and UI components. Components consume structured data; browser-side feed fetching does not satisfy the requirement. Build-time or request-time fetching is the model's choice.
- [x] Require the latest stable major versions of Astro, React, and Tailwind available at attempt start. Record the resolved versions for later evaluation; exclude prereleases.
- [x] Require a properly configured Cloudflare adapter and Cloudflare Workers readiness.
- [x] Adapt the existing launch and evaluation skills and keep the existing attempt-folder workflow with explicit reading restrictions.
- [x] Score final outcomes, demonstrated verification, and compliance with explicit constraints. Do not grade an implementation sequence that was never prescribed.
- [x] Make the homepage v2-only, initially with no v2 results.
- [x] Preserve v1 on a separate archive page with its original methodology and results.
- [x] Keep `/api/leaderboard.json` serving v1 for existing consumers; expose v2 through a separate versioned endpoint.
- [x] Do not rerun the previous V1 model roster for V2, regrade V1 attempts under V2 rules, or convert V1 results into V2 entries. V2 starts empty; any future model selection and paid campaign is a separate user-directed action (reconfirmed 2026-09-07).

## Phase 0 — Analyze the current system

- [x] Inspect dashboard entrypoints, shared layout, comparison components, and the results processor.
- [x] Inspect both local skills: `10x-eval-model` and `10x-score-attempts`.
- [x] Inspect the evaluation repository's prompt, rubric, operator guidance, and reference material.
- [x] Establish the product and execution direction through the user interview.
- [x] Identify archive, API compatibility, methodology consistency, and empty-state requirements.

Findings:

- `scripts/process-results.ts` reads unversioned `eval-results/` directories and generates dashboard data plus the public leaderboard API.
- The processor imports shared model metadata from `eval-attempts/metadata`; versioning must account for metadata and model supersession as well as scores.
- The benchmark page fetches evaluation material from the evaluation repository's moving `master` branch. This cannot preserve historical methodology after a prompt replacement.
- The root prompt is used by the launch skill, while the public benchmark page uses the evaluation repository. These paths need one authoritative versioned specification.
- The checked-in dashboard snapshot inspected during analysis contained 122 attempts across 25 model families. This is an observed snapshot, not a selected archive baseline or a guarantee about regenerated data.
- The candidate prompt, published rubric, and local scoring skill disagree about some requirements, including dependency versions and deployment readiness.
- Current evaluation has no structured evidence of candidate verification. Build-failure handling zeros remaining criteria, which would obscure independently scoreable v2 process evidence.
- Existing dashboard controls remain visible with empty arrays; a deliberate v2 empty state is required.
- No candidate implementation content was inspected. Existing untracked `AGENTS.md` is unrelated work and must be preserved.

Evidence: read-only review and interview completed on 2026-09-07. No implementation, build, browser acceptance, or deployment was performed.

## Phase 1 — Finalize the benchmark contract

Resolve these before implementing dependent behavior:

- [x] Define the exact required pages, routes, navigation, course content, 10xDevs hero placement, and page-specific SEO outcomes.
- [x] Define observable acceptance rules for recent media, source authenticity, playback, unavailable embeds, and external-source failures without imposing an unagreed fixed item count.
- [x] Define how candidate self-verification is recorded and distinguished from checks later performed by the evaluator.
- [x] Define scoring categories, weights, partial credit, pending manual reviews, penalties, and which evidence remains scoreable when the final build fails.
- [x] Define run completion, clarification handling, continuation behavior when native goal mode is unavailable, time limits, interruption handling, and retry rules.
- [x] Confirm whether Workers readiness requires actual deployment or only verifiable configuration and deployment instructions. Live deployment is not yet agreed.
- [x] Verify the current official Astro/Cloudflare integration requirements when authoring the specification, then describe the expected Workers behavior without unnecessarily dictating the candidate's implementation.
- [x] Select the v1 archive baseline: reconcile existing CSVs, generated data, methodology revisions, and screenshots before freezing it. Record source revisions and any discrepancies; do not silently regrade old attempts.
- [x] Confirm final versioned paths and archive routes. Proposed defaults: `/v1`, `/v1/benchmark`, and `/api/v2/leaderboard.json`, with `/benchmark` describing v2.
- [x] Define result and evidence storage so v1 and v2 attempt identifiers, screenshots, cost attribution, and model metadata cannot collide while preserving the familiar attempt-folder workflow.

Deliverable: a complete outcome specification and evaluation/run contract with no hidden scored requirements.

Evidence: user resolved the open decisions on 2026-09-07: no candidate publication, at most 60 minutes, initial scoring delegated for later revision. `docs/v2/contract.md` records the selected seven routes, 90-day media window with inactive-source fallback, server-side source modules, verification evidence, run deadline, partial credit, invalid/pending handling and versioned identity/storage. The canonical candidate-visible prompt and assessment are in sibling `benchmark/v2/`; the initial rubric totals 100 points (80 outcome / 20 candidate verification). The original V1 baseline audit and source revisions remain in `archive/v1/provenance.json`.

## Phase 2 — Preserve v1 and establish version boundaries

Depends on: Phase 1 archive and storage decisions.

- [x] Preserve the selected v1 prompt, rubric, reference content, and evaluation guidance as explicitly versioned historical material in `10x-bench-eval`.
- [x] Preserve v1 results, associated metadata, screenshots, and attribution using the chosen archive baseline.
- [x] Separate current v2 inputs from archived v1 inputs in this repository's processing workflow.
- [x] Ensure later v2 model additions or supersession changes cannot alter the frozen v1 rankings.
- [x] Preserve the existing API response shape and v1 dataset at `/api/leaderboard.json` for existing clients.
- [x] Record archive provenance and verify that preserved scores and totals match the selected baseline.
- [x] Preserve existing artifact links where possible; update internal archive references if files move.

Deliverable: an independently reproducible v1 archive that v2 processing cannot overwrite or mix into v2 results.

Evidence: `archive/v1/` preserves data, API, CSVs, metadata, methodology and image-cache hashes. `integrity.json` fingerprints 314 immutable files including original screenshot URLs. `npm run verify:v1` passed: a temporary reconstruction using only frozen processor/metadata/CSV inputs reproduces the full dataset and legacy API except generation time. Normal `process-results` verifies the archive first and copies its exact snapshot bytes without importing mutable model metadata. The original live-input processor is retained as `scripts/legacy-process-results.ts` solely for the separate audit. After filesystem approval, the preserved published docs were copied to `../10x-bench-eval/benchmark/v1/` and compared byte-for-byte. `scripts/process-v2.ts` now ingests only `eval-results/v2/`; `scripts/process-results.ts` preserves V1 bytes and writes separate V2 data/API outputs. `archive/v1/integrity.json` now covers 318 files after adding original README, agent guidance and cost/screenshot tooling. V1 source folders and image URLs remain in place.

## Phase 3 — Author the v2 specification and evaluator material

Depends on: Phase 1 benchmark contract and Phase 2 version boundaries.

- [x] Write the authoritative v2 candidate specification in `10x-bench-eval`, covering the complete expected outcome in one prompt.
- [x] Explicitly describe dedicated pages, both podcasts, YouTube, courses, responsive behavior, navigation, metadata, and all other agreed product requirements.
- [x] State the server-side data-source module requirement and structured-data boundary between fetching and presentation.
- [x] State latest-stable-major dependency policy, Cloudflare adapter configuration, and Workers readiness requirements.
- [x] Define expected completion and self-verification evidence while allowing the model to choose how to perform the work.
- [x] Write matching v2 criteria and evaluator instructions. Every scored requirement must trace to a candidate-visible requirement.
- [x] Separate candidate inputs from evaluator guidance; document that candidates must not inspect evaluator material or other attempts.
- [x] Preserve live research as part of the task and document how evaluators verify content against the attempt's timing and evidence.
- [x] Update the launch prompt source and public methodology source to use the same authoritative v2 revision; avoid independently maintained copies drifting apart.
- [x] Ensure archived v1 pages consume frozen v1 material rather than mutable current documents.

Deliverable: aligned candidate prompt, rubric, reference guidance, and operator protocol.

Evidence: canonical sibling `benchmark/v2/{prompt.md,assessment.md,criteria.json,eval.md,run-protocol.md}` authored and copied to the dashboard by `scripts/sync-benchmark.ts`. Both repositories match the manifest content revision `sha256:65b837747dcecd9b08058e2085bde69cc27ca86270abf7dbf6e34aad9092e1df`. `npm run verify:benchmark` verifies document hashes, 52 unique subchecks, 100 total points and prompt-section references. Semantic prompt/assessment/rubric correspondence was reviewed while authoring. Root `prompt.md` is now a pointer; launch and public methodology use the same vendored documents. V1 methodology stays local/frozen.

## Phase 4 — Update launch, scoring, and evidence workflows

Depends on: Phases 2–3.

- [x] Update `10x-eval-model` for v2 while retaining its familiar model setup, metadata, and attempt preparation workflow.
- [x] Launch one complete specification per attempt, using native goal mode where available and the agreed fallback elsewhere.
- [x] Record attempt identity, benchmark revision, model/environment, attempt start time, and latest stable dependency versions before execution.
- [x] Apply explicit reading restrictions to the existing attempt folders. Describe this accurately as procedural isolation, not an enforced sandbox.
- [x] Capture the agreed completion and verification evidence without exposing evaluator material to the candidate.
- [x] Update `10x-score-attempts` to select the correct benchmark version and use its matching rubric and outputs.
- [x] Keep candidate verification evidence distinct from evaluator checks and user-confirmed visual acceptance.
- [x] Preserve independently earned evidence scores after build failure according to the agreed rubric.
- [x] Prevent pending manual evaluations from being treated as finalized published results according to the chosen result contract.
- [x] Update cost attribution and screenshot tooling for the selected versioned identity/storage scheme.
- [x] Document version-specific evaluation of historical attempts so v1 cannot accidentally be graded with v2 rules.

Deliverable: documented, reviewable v2 launch and evaluation workflows. Actual paid benchmark runs remain a separate action.

Evidence: both tracked `.claude/skills` workflows now use the versioned full candidate package, 60-minute deadline, native goal/neutral fallback, procedural reading restrictions, frozen baseline/artifacts and separate evaluator/human evidence. Both passed the skill-creator quick validator (PyYAML installed only in temporary tooling cache). `scripts/process-v2.ts` rejects invalid final records and excludes draft/invalid records; 14 focused tests cover version boundaries, pending/missing evidence, build-failure credit, deadline rules, frozen artifacts, later dependency releases and exact cost-session attribution. The rewritten cost CLI targets V2 records only. The screenshot CLI captures an identified evaluator preview without rebuilding candidate source; an isolated temporary fixture verified image/filmstrip outputs, identity mismatch rejection and V1 path isolation. `docs/v2/operator-guide.md` documents preparation through publication. This phase verifies the documented workflow and synthetic tooling, not an actual paid benchmark campaign.

## Phase 5 — Implement version-aware processing and dashboard

Depends on: Phase 2 archive and Phase 3 result contract.

- [x] Generate separate v1 and v2 datasets and enforce benchmark-version separation during processing.
- [x] Initialize v2 with zero attempts and no model rankings. Running the normal build must not repopulate it from v1 CSVs.
- [x] Add the separate v2 API endpoint while retaining the existing endpoint's v1 compatibility contract.
- [x] Move the historical dashboard experience to the selected v1 archive route and label it clearly as archived.
- [x] Make `/` show v2 purpose, an explicit no-results state, and links to the v2 methodology and v1 archive. Hide inapplicable ranking/comparison controls until data exists.
- [x] Make `/benchmark` display the authoritative v2 specification and scoring methodology; provide preserved v1 methodology through the archive.
- [x] Update desktop/mobile navigation, page titles, descriptions, and structured metadata so default pages no longer describe v2 as vague one-shot coding.
- [x] Keep screenshots and comparisons scoped to their benchmark version.
- [x] Preserve the existing Kit page and unrelated content, adjusting shared navigation only as needed.

Deliverable: empty v2 dashboard, functional historical archive, and compatible versioned data outputs.

Evidence: normal processing/build generates `results-v2.json` and `/api/v2/leaderboard.json` with zero attempts/models, while preserving original V1 dataset/API bytes. `/` shows V2 purpose and an explicit empty state without ranking controls or React islands; `/benchmark` renders the pinned prompt/assessment locally. `/v1` and `/v1/benchmark` use frozen material. Shared navigation, titles, descriptions, structured metadata and sitemap distinguish the versions. Screenshots/filmstrips pass a version-scoped base path through shared components; V2 omits V1-specific comparison filters/legend. Kit content has no diff.

## Phase 6 — Verify the transformation

Depends on: Phases 3–5.

- [x] Verify the normal results-processing/build workflow produces zero v2 attempts from the migrated repository state.
- [x] Verify archived v1 scores, attempt counts, rankings, metadata, and screenshot references against the recorded baseline.
- [x] Verify the legacy API retains its expected v1 shape and content, while the new API reports empty v2 data.
- [x] Use isolated synthetic fixtures to verify a v2 result appears only in v2 outputs and a v1 result only in v1 outputs; do not publish fixtures as benchmark results.
- [x] Check versioned identity collisions, pending manual evaluations, missing evidence, and build-failure scoring against the agreed contracts.
- [x] Check that a dependency major released after attempt start does not retroactively change that attempt's expected major.
- [x] Run the relevant repository lint/build checks and any focused tests added for version separation and API compatibility.
- [x] Inspect homepage, methodology, archive, navigation, and empty-state behavior at desktop and mobile sizes.
- [x] Validate the prompt-to-rubric mapping and skill paths across both repositories without launching a paid model run.
- [x] Record automated results and manual acceptance separately, including anything not verified.

Deliverable: evidence that v1 remains intact, v2 starts empty, and the new workflow matches the specification.

Evidence (2026-09-07): `npm run test:v2` passed 14 tests, including a full isolated output-pipeline fixture proving a V2 result appears only in V2 files and V1 outputs stay byte-identical. Stable-release selection ignores later majors/prereleases; missing/duplicate/pending checks, incorrect evidence origins, mutated candidate artifacts and extended deadlines are rejected. Frozen V1 reproduction verifies all results, averages, metadata and original screenshot hashes. `npm run build`, website lint, focused TypeScript checking and both skill validators passed. `scripts/check-v2-browser.mjs` passed against the built site on 390/768/1440px for homepage, both methodology pages, archive and Kit: 200 responses, no horizontal page overflow or page errors, working archive navigation, empty V2 with no ranking controls, and exact legacy API plus empty V2 API. Initial mobile methodology overflow was fixed with contained table scrolling and wrapping, then rechecked. Homepage desktop/mobile and mobile methodology screenshots were visually inspected by the agent; earlier V1 screenshots were inspected separately. `scripts/check-screenshot-v2.ts` passed isolated screenshot/filmstrip capture and wrong-identity rejection. These are automated/agent checks, not user-confirmed manual acceptance or deployed QA. No paid attempt was run.

## Phase 7 — Documentation and release handoff

Depends on: Phase 6.

- [x] Update both repository READMEs and applicable agent guidance for v1/v2 responsibilities, canonical files, commands, result paths, and reading restrictions.
- [x] Clearly distinguish the dashboard's dependencies from the candidate website's latest-major requirements.
- [x] Document adding a v2 model, starting an attempt, recording evidence, scoring it, completing manual review, and publishing its results.
- [x] Review all changes with path-scoped diffs and preserve unrelated work.
- [x] Prepare a coordinated release sequence for both repositories so the website cannot reference unavailable evaluation materials.
- [ ] Record release readiness and remaining limitations; obtain publication authorization if it has not already been provided.
- [ ] After authorized publication, verify the deployed empty v2 homepage, v1 archive, methodology pages, and both API contracts.

Deliverable: documented migration and verified publication when authorized. A first real v2 benchmark campaign is separate from the empty-dashboard migration.

Evidence: both repository READMEs updated; current dashboard `CLAUDE.md` and tracked workflows document V1/V2 boundaries, while original guidance is preserved in the archive. The unrelated untracked `AGENTS.md` remains untouched. `docs/v2/operator-guide.md` covers the lifecycle; `docs/v2/release.md` specifies evaluation-material publication before the dashboard and post-deployment checks. Scoped diffs and `git diff --check` were reviewed. Publication has not been authorized or performed, so deployed verification remains pending. Current V2 supports the initial pinned revision; a future changed rubric must be preserved and explicitly handled rather than silently applied to earlier attempts. No first campaign is included.
