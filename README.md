# 10xBench V2
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

10xBench V2 compares autonomous completion of a precise Przeprogramowani.pl website specification. Each candidate receives the complete task, researches real content, implements the site and verifies it within **60 minutes**. The initial assessment assigns **80 points to outcomes and 20 to candidate self-verification**. Cloudflare Workers configuration is required; the candidate does **not** publish the site.

V2 starts with no attempts. The V1 model roster is not rerun, regraded or imported as V2. A future paid campaign is a separate action.

## Pages and APIs

| Path | Content |
| --- | --- |
| `/` | V2 results, initially an explicit empty state |
| `/benchmark` | Complete V2 task and public scoring breakdown |
| `/v1` | Frozen V1 ranking: 122 attempts, 25 model families |
| `/v1/benchmark` | Preserved V1 public methodology, with historical discrepancies disclosed |
| `/kit` | Existing Kit page |
| `/api/leaderboard.json` | Original V1 schema and exact frozen dataset |
| `/api/v2/leaderboard.json` | Separate V2 leaderboard; only finalized evaluations |

## Development and verification

```bash
npm install
npm run dev
npm run build
npm run verify:v1
npm run verify:benchmark
node --import tsx --test scripts/process-v2.test.ts scripts/workflow-v2.test.ts
npm --prefix website run lint
```

Use the local URL printed by Astro. Build output is `website/dist/`. Normal processing verifies both immutable bundles, restores V1 snapshot bytes and validates structured V2 results before publishing local generated data. It never reads historical implementation code or mixes unversioned CSVs into V2.

The dashboard retains **Astro 5, React 19 and Tailwind 3**. Candidate websites follow the independent latest-stable-major-at-start policy in the V2 specification; do not upgrade dashboard Tailwind to satisfy a candidate requirement.

## Canonical materials and workflows

The authoritative bundle lives in the companion repository at `10x-bench-eval/benchmark/v2/`. `npm run sync:benchmark` vendors exact copies with a SHA-256 content revision. `npm run verify:benchmark` validates the local bundle offline; `npm run sync:benchmark -- --check` additionally compares the sibling checkout. The launch skill and public methodology use this same revision. `prompt.md` is only a pointer; candidate inputs are the complete `prompt.md` and `assessment.md` from the bundle plus the frozen dependency baseline.

The tracked workflows are `.claude/skills/10x-eval-model/SKILL.md` and `.claude/skills/10x-score-attempts/SKILL.md`. They retain the model/attempt naming workflow, with explicit version and reading boundaries. See [the operator guide](docs/v2/operator-guide.md) for preparation, evidence, finalization, costs and screenshots, and [release handoff](docs/v2/release.md) for coordinated publication.

| Files | Responsibility |
| --- | --- |
| `benchmark/v2/` | Vendored immutable spec, public assessment, rubric and operator/evaluator protocol |
| `benchmark/models-v2.json` | V2-only model setup metadata; initially empty |
| `eval-attempts/v2/{model-id}-attempt-{N}/` | Candidate implementation and candidate verification artifacts |
| `eval-results/v2/{model-id}-attempt-{N}/` | Operator `attempt.json`, evaluator `evaluation.json`, registry evidence and human feedback |
| `archive/v1/` | Frozen scores/API, inputs, metadata, original methodology and provenance |
| `website/public/screenshots/v2/` | V2 screenshots and filmstrips; V1 URLs stay unchanged |
| `scripts/process-v2.ts` | Validation, exclusion of unfinished records and V2 aggregation |

Historical CSVs and implementation folders remain in place. Archive integrity checks use frozen copies and original screenshot URLs. Do not modify their scores or regenerate archive hashes to conceal a mismatch. Original V1 README and guidance are retained in `archive/v1/`.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://www.linkedin.com/in/y4r14/"><img src="https://avatars.githubusercontent.com/u/202833470?v=4?s=100" width="100px;" alt="Maciej Jarlaczyński"/><br /><sub><b>Maciej Jarlaczyński</b></sub></a><br /><a href="https://github.com/przeprogramowani/10x-bench/commits?author=MacJar" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/dikamilo"><img src="https://avatars.githubusercontent.com/u/317874?v=4?s=100" width="100px;" alt="Kamil Łuszczki"/><br /><sub><b>Kamil Łuszczki</b></sub></a><br /><a href="https://github.com/przeprogramowani/10x-bench/commits?author=dikamilo" title="Code">💻</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!