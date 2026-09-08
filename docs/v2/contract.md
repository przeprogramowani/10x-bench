# V2 implementation contract

Status: Phase 1 decisions resolved on 2026-09-07. The user requires no candidate deployment, a maximum of 60 minutes per attempt, and delegates initial scoring design for later correction. This document records implementation decisions; canonical candidate and evaluator materials live in `10x-bench-eval/benchmark/v2/`. Revision changes apply to future attempts and never silently regrade completed runs.

## Required outcome

One Polish-language Przeprogramowani website, with these independently accessible routes (trailing slash equivalents accepted):

| Route | Observable outcome |
| --- | --- |
| `/` | Brand introduction, prominent 10xDevs hero with genuine course CTA, previews linking to the dedicated pages. |
| `/o-nas` | Research-grounded description of the project and both founders, Przemek Smyrdek and Marcin Czarkowski. Paraphrases accepted; no requirement to reproduce hidden reference prose or stale employment details. |
| `/podcast` | Hub identifying both podcasts and linking to each dedicated page. |
| `/podcast/opanuj-ai` | Opanuj.AI description, recent real episodes, embedded playback and individual original-source links. |
| `/podcast/przeprogramowani` | Przeprogramowani podcast description, recent real episodes, embedded playback and individual original-source links. |
| `/youtube` | Recent real videos from the official Przeprogramowani channel, embedded playback and original video links. |
| `/kursy` | Opanuj Frontend, Opanuj TypeScript and 10xDevs, with factual descriptions and working course links. |

All routes must return successful HTML responses in the documented local production preview. Global navigation reaches about, podcast hub, YouTube and courses; hub links reach both shows; every page links home. Mobile navigation works with pointer and keyboard. No dead CTA, placeholder link, clipped content or horizontal page overflow at 390px and 1440px. Consistent typography, spacing and controls across pages; visible focus, meaningful link labels and image alternatives. Each page has a unique descriptive title, relevant description, canonical URL using a configurable deployment origin, matching Open Graph title/description/URL, one main heading and Polish document language. No fixed visual design or pixel match is prescribed.

## External content and failure behavior

The candidate researches official public sources during its run. For each show and the YouTube channel, display a nonempty selection from the newest available publication window: the 90 days ending at attempt start. If the source has published nothing during that window, display its newest available material and accurately show its date. There is no fixed item count or target count bonus. Do not include material published after attempt start in the evaluation's expected set.

For each displayed item retain title, original item URL, publication date where the source provides it, source identity and retrieval timestamp in structured data or research evidence. Missing source dates must be labeled unknown, never invented. Evaluators compare source IDs, titles and channel/show identity using original sources and candidate snapshots as of the attempt, not title plausibility or today's list. Preserve source responses or compact factual extracts for audit, without credentials or unnecessary copyrighted text.

Every selected playable item has an appropriate provider embed or native audio/video player plus an independent original-source link. Provider refusal, region restrictions or a removed embed do not invalidate otherwise authentic content: provide a clear unavailable state or persistent playback-help text and retain the item link. Evaluator-side network failures are recorded as unverified and must not be called fabrication.

Dedicated server-side data-source modules fetch and normalize remote content at build or request time. Page/UI components consume structured values; browser-side feed fetching, fetching inline in presentation files, or only shipping manually invented arrays does not meet this boundary. A source timeout, non-2xx response or malformed payload must not crash the whole website: use validated last-known data explicitly marked stale, or an honest unavailable state with the show/channel link. Failure handling earns resilience credit; an empty fallback does not prove successful media retrieval. Demonstrate at least one controlled external-source failure during self-verification.

## Dependencies and Workers

Use actual installed stable Astro, React and Tailwind versions in the latest stable major available at attempt start. The operator records the registry response, retrieval time and resolved reference versions before launch; prereleases are excluded. Evaluators compare lockfile/resolved installations with that frozen major baseline. Later major releases never change an earlier attempt's baseline. Patch/minor choice within that major remains free. A manifest range alone does not prove installation.

Install and configure the official Cloudflare adapter compatible with the chosen Astro version. Provide a working production build, local Workers runtime preview, and exact deployment instructions including required bindings/environment setup. Build-time and request-time data loading are both allowed. Do not grade a specific Wrangler entrypoint string or obsolete output directory across adapter versions.

The candidate must not publish the website or run a command that creates or changes remote Cloudflare resources. No Cloudflare account or credential is needed. Evaluators verify configuration, local production preview and instructions; a public URL earns no points.

Official integration guidance inspected 2026-09-07: https://docs.astro.build/en/guides/integrations-guide/cloudflare/ . The current adapter supports local production preview through `astro preview`; configuration is version-dependent. A hand-written Wrangler file is not universally required, because the adapter can generate configuration. This benchmark explicitly requires the adapter even where a static-only site could otherwise deploy without one.

## Candidate verification evidence

The candidate submits `VERIFICATION.md` in its own attempt directory before completion. It records commands, start/end timestamps, exit codes and concise observed results for installation, resolved versions, production build, local Workers preview, every required route, source research, links/playback, desktop/mobile interaction, SEO and controlled external failure. Link to logs/screenshots or test artifacts captured during the run. Distinguish passed, failed, not run and externally blocked checks. Do not claim tests on the basis of intended commands.

Evaluator checks occur after the run is frozen and are stored separately. They cannot earn candidate verification points. Human visual acceptance has its own reviewer, timestamp and scores; automated screenshots alone are not human acceptance. A missing or failed candidate check is not a missing evaluator check, and vice versa.

## Initial scoring, 100 points

Each subcheck below is binary unless stated otherwise; partial credit is the sum of independently proven subchecks. Publish these checks with the candidate prompt so there are no hidden requirements. No arbitrary penalty row: deduct only from the affected published check, never twice for the same check. Procedural reading violations invalidate the run and exclude it from ranking rather than inventing a numeric penalty.

| Category | Max | Subchecks |
| --- | ---: | --- |
| Production operation | 10 | Production build 5; local Workers preview serves required routes 5 (proportional to routes passing, rounded to 2 decimals). |
| Pages and navigation | 10 | All seven dedicated pages 7 (1 each); global links 1; show hub links 1; working mobile navigation 1. |
| Brand and courses | 10 | Accurate brand/about 2; both founders 2 (1 each); three courses with real links 3 (1 each); prominent homepage 10xDevs hero/CTA 3. |
| Media | 15 | Each of the three sources earns 2 for authentic recent selection, 2 for playback or evidenced provider refusal with fallback, 1 for individual source links. |
| Data modules and resilience | 10 | Server-side retrieval 4; structured data outside presentation 3; observed controlled-failure recovery 3. |
| Dependency compliance | 10 | Astro major 3; React major 3; Tailwind major 3; lockfile with reproducible install 1. |
| Workers readiness | 5 | Compatible configured adapter 3; coherent deployment instructions/configuration 2. No public deployment; no account or credential required. |
| Presentation and SEO | 10 | Human-confirmed consistent UI 2; human-confirmed desktop/mobile usability 3 (1.5 each); keyboard focus/labels/alternatives 2; all page-specific SEO outcomes 3 (proportional to fully compliant routes). |
| Candidate verification | 20 | Captured build/version results 4; route/Workers results 4; genuine research evidence 4; desktop/mobile and playback observations 4; controlled source-failure experiment 4. Each group earns 2 for concrete reproducible procedure/artifact and 2 for captured outcomes with honest limitations; merely listing intentions earns 0. |

A failed final build zeros its build check and makes unavailable runtime outcomes zero with an explicit reason. Independently established source architecture, dependency installation and prior candidate evidence remain scoreable. Build failure is not an all-zero shortcut. External evaluator infrastructure failures leave affected checks pending, not zero. Any pending required check excludes the result from final published datasets; drafts remain inspectable by the operator.

## Run protocol

One complete pinned specification at launch; no staged feature requests. Native goal mode where supported. Otherwise the only continuation message is: "Continue toward the original specification. Verify the outcome and record what remains incomplete." No hints, repair instructions or new requirements. Record environment and continuation mode so cross-environment comparisons remain interpretable.

Budget: at most 60 minutes elapsed from candidate launch, fixed across a campaign. Research, reasoning, tool execution, builds, testing and debugging all count. Store an absolute UTC deadline. An interruption never resets or extends that deadline: resume the same live session only within its original budget, otherwise freeze an interrupted attempt. An observation timeout never proves a process stopped; poll its existing live handle before taking action. Completion is a candidate declaration, budget expiry or explicit cancellation; freeze artifacts at that boundary. If a candidate declares completion, evaluator failures do not reopen the run.

Clarification response: "Use the supplied specification and your best judgment; document assumptions." A missing operator-provided resource is an infrastructure interruption, not permission to coach or extend the deadline. If the original specification is defective, invalidate the run, correct/version the contract, and use a new attempt identity. No hidden retries: interrupted runs resume their original session where possible; replacement runs get new identities with links to the interrupted record. Never erase old attempt directories or select only the best retries.

## Version and storage boundaries

Dashboard routes: `/` and `/benchmark` are V2; `/v1` and `/v1/benchmark` are historical. `/api/leaderboard.json` retains its exact V1 schema/dataset; `/api/v2/leaderboard.json` serves only final V2 records. V2 begins empty.

User-confirmed scope, 2026-09-07: do not rerun the V1 model roster for V2, regrade historical attempts with V2 criteria, or import historical scores as V2 results. The migration does not schedule a replacement campaign. Future V2 model selection and paid attempts require a separate user-directed campaign.

The selected V1 baseline is the checked-in dashboard/API snapshot at `63aeb60630929ddcf67c4f71f088c94f79ed7657`; audit confirms current CSV regeneration matches except generation timestamps. Preserve original timestamps. Freeze CSVs, model names/environments/pricing/supersession, screenshots and source hashes without regrading. Preserve the public evaluation documents at `919d40bbb3760ae6480e9ffa7bd3ee833d04b5ba` plus the divergent local scoring instructions as distinct historical artifacts. Do not imply either was uniformly applied to every historical attempt: per-attempt rubric revisions were not recorded.

Keep historical attempt directories and screenshot URLs in place. New attempts use `eval-attempts/v2/{model-id}-attempt-{N}/`; new evaluator outputs use `eval-results/v2/{model-id}-attempt-{N}/`; new images use `/screenshots/v2/`. Identity is `(benchmarkVersion, modelId, attemptNumber)` and the canonical physical attempt path, never basename alone. Keep V2 model metadata separate from frozen V1 metadata. Attribution uses the exact session IDs and canonical cwd recorded for the run, so later manual sessions in the same directory cannot add benchmark cost.

An operator-created `attempt.json` records version, identity, spec revision/hash, prompt hash, model and environment, UTC start/completion times, frozen dependency baseline, budget, continuation mode, run/session IDs and terminal state. Candidate `VERIFICATION.md` and artifacts stay within its directory. Evaluator-owned `evaluation.json` records matching identity/revision, each check's score/max/status, evidence origin/reference, evaluator observations, manual reviewer confirmations and finalization state. CSV may be a derived compatibility artifact, never the finalization authority. Missing evidence references, unknown checks, duplicate identities and out-of-range scores fail validation. Pending manual checks never become numeric zero defaults that publish automatically.

The launch skill and methodology page must consume the same immutable evaluation-repository revision. Vendor exact candidate/public documents into the dashboard with an integrity manifest to allow offline builds; do not maintain an independent prompt copy. Candidate packages include the full outcome and visible assessment contract, but not evaluator procedures, private result evidence or other attempts. Reading restrictions are procedural isolation, not a security sandbox.
