# GLM-5.2 — 10xBench Evaluation Report

**Model:** GLM-5.2 (OpenCode environment)
**Attempts evaluated:** 5
**Test run:** 26.06.2026
**Result:** **8.5 / 10 (85%)** on every attempt — currently the **top-scoring model family** in the benchmark.

The five runs are remarkably consistent: identical score profile, identical strengths, and the *same* flaws reproduced in every attempt. This points to stable, repeatable behavior rather than lucky one-offs.

---

## Score breakdown (identical across all 5 attempts)

| Criterion | Score | Verdict |
|---|:---:|---|
| Local build | **1.0** | Builds cleanly |
| Manual testing | **1.0** | All routes 200; navigation, styles, content work |
| Tech stack | **0.5** | Wrong major versions (see flaws) |
| "O nas" page | **0.5** | Bios present but course assignments dropped |
| "Podcast" page | **0.5** | Hallucinated Spotify show ID |
| "YouTube" page | **1.0** | Real, unique, verified video IDs |
| "Kursy" section | **1.0** | 10xDevs featured; courses match |
| Consistent UI | **1.0** | Consistent across pages |
| Responsive design | **1.0** | Fully responsive |
| SEO Tags | **1.0** | Per-page meta in layout, matches context |
| Penalty | **0** | None applied |
| **Total** | **8.5 / 10** | |

The three half-point deductions (Tech stack, O nas, Podcast) are the *entire* gap to a perfect score, and all three are the same in every run.

---

## What works well

- **Always builds and runs.** 5/5 builds succeed; all four routes (`/`, `/o-nas`, `/podcast`, `/youtube`) return 200. No broken pages, no runtime errors.
- **Genuinely real YouTube data.** This is where weaker models lose points — GLM-5.2 does not. Every video ID was verified live against the YouTube oEmbed API: all unique, all resolving, titles matching the data files (attempt-1 used 9 videos, the others 6). No placeholders, no rick-rolls, no duplicates.
- **Solid UI quality.** Consistent styling across pages and fully responsive in all 5 attempts (user-confirmed).
- **Correct course positioning.** 10xDevs is featured prominently on the main page / hero in every attempt, with course descriptions matching the context file (a correct subset of the 6 courses — no fabricated courses).
- **Complete, well-wired SEO.** Per-page `title`/`description` plus OpenGraph and Twitter card meta tags injected through the shared layout on all pages, with `lang="pl"` set correctly and content matching the brand context.
- **Partial founder accuracy.** Both founders named correctly, with the key employer details right (Przemek → DAZN/Cabify, Marcin → SmartRecruiters).

---

## Main flaws (reproduced in all 5 attempts)

1. **Tech stack: outdated major versions.** All 5 shipped **Astro 5.18.2** where the criterion requires **Astro 6**. Only attempt-1 used Tailwind 4; attempts 2–5 used Tailwind 3 (criterion requires 4). Attempt-5 additionally **omitted the Cloudflare adapter** entirely. This is a regression from the GLM-5.1 runs, which hit Astro 6 and earned full marks here.

2. **Hallucinated podcast Spotify ID.** Every attempt invented the **same fake show ID** (`4qHUZJpeBK8Ij9e2wTVm2o`) and never used the real ones from the context file (Przeprogramowani `3yVvOAXSYq6sQB02w4A4wo`, OpanujAI `3D6LmchBdoqL2sWkQjvWOy`). Both podcasts are displayed and the episodes look plausible, but the canonical links are wrong, and episode URLs fall back to unverifiable `podcasters.spotify.com` slugs. Notably, the model fabricates podcast links while getting YouTube data exactly right — the failure is specific to this data source.

3. **Dropped per-founder course assignments.** Bios omit the course each founder owns (Przemek → "Opanuj JavaScript", Marcin → "10xDevs"), a key detail present in the context file.

---

## Takeaway

GLM-5.2 is a strong, reliable one-shot builder: it always produces a working, polished, responsive site with correct YouTube content and SEO. Its ceiling is held back by two repeatable accuracy issues — an **outdated framework stack** (Astro 5 / Tailwind 3 vs. the required Astro 6 / Tailwind 4) and a **fabricated podcast Spotify ID** — plus a minor content omission in the founder bios. Fixing the version targets and grounding the podcast links would lift it from 8.5 toward a near-perfect score.

> Tech-stack scoring used the **strict** interpretation (Astro 5 ≠ Astro 6 → not an exact match → 0.5). Under a lenient reading that accepts Astro 5, attempt-1 (which has Tailwind 4 + Cloudflare) would rise to 1.0 / overall 9.0.
