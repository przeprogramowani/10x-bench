# V2 assessment — initial revision, 100 points

This file is candidate-visible and accompanies `prompt.md`. The detailed evaluator procedure is separate.

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


## Evidence and partial credit

The nine categories map in order to prompt requirements P01/P05/P06, P01, P02, P03, P04, P05, P06, P07, and P08. All evidence must identify what was checked. For each binary subcheck award its full listed weight only when proven, otherwise zero; the two route-proportional subchecks use the count of passing routes divided by seven. Do not award arbitrary partial points outside these rules. Round each category to two decimals, then sum category scores. Maximum total is 100.

For each media source, authentic recent selection requires all displayed items to have verified identity and meet the stated time rule. Playback points require implemented playback for available selected items; provider refusal needs evidence and a preserved item link. Failure to verify due solely to evaluator network conditions is pending. Missing or fake content is zero for the relevant subcheck.

Workers adapter points require the installed compatible official adapter, its activation in Astro, and coherent generated or explicit Workers configuration. The other two points require README commands and binding/environment instructions that agree with actual build output and local preview. No remote deployment or credential is needed or permitted. Local runtime behavior is scored in Production operation, so configuration and runtime are separate observations.

Human review covers consistent UI and usability at both stated widths. Pending human review is not an assumed pass or numeric zero; it keeps the evaluation in draft. When a candidate build fails and the UI cannot be served, those untestable runtime checks are zero with the failure evidence and do not require a fictional human acceptance. The evaluator must still inspect independent source/dependency and candidate-verification evidence.

Reading other attempts/evaluator-only material, publishing remote resources, coaching, or work after the deadline makes a run invalid for the leaderboard. Record the exact violation and evidence; do not infer a violation from coding style. An unverified allegation remains pending investigation.
