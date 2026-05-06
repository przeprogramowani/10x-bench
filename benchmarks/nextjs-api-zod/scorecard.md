# Scorecard — `nextjs-api-zod`

> **Evaluator-only.** This file MUST NOT be passed to implementation models
> and MUST NOT be listed in `runner.yaml -> model_visible_files`.

## How to evaluate

1. Apply the reset procedure from `baseline-manifest.md` and copy the
   model's submitted files over the baseline. Do not start the dev server
   yet.
2. Run `npm install` (the model is expected to have added `zod`). If
   `zod` is missing from `package.json`, that is a hard fail for criterion
   B1 only — keep evaluating but record it.
3. Run `npm run build`. If it fails, criterion B2 is 0; continue evaluation
   from the source code statically and from `npm run dev` if it boots.
4. Run `npm run dev` in the background. Probe endpoints with `curl` per
   the script in `context.md` plus the conflict scenarios below.
5. Fill `eval-result.csv` row by row. Use the format defined in the project
   `CLAUDE.md` (Criterion, Score, Max, Notes). Add `Task completion time`
   and `Test run` rows.

## Criteria

| #   | Criterion                                            | Max | Method | Evidence required                                                                                          |
| --- | ---------------------------------------------------- | --- | ------ | ---------------------------------------------------------------------------------------------------------- |
| B1  | `zod` declared and installed                         | 1   | auto   | Presence in `package.json` + successful `npm install`                                                      |
| B2  | `npm run build` succeeds                             | 2   | auto   | Build exits 0 with no TS/ESLint errors                                                                     |
| B3  | `npm run dev` boots without runtime error            | 1   | auto   | Server reaches "ready" within 30 s                                                                         |
| F1  | POST /api/bookings happy path → 201                  | 2   | auto   | curl create returns 201 + body matches `Booking` shape (id, status="confirmed", timestamps)                |
| F2  | POST validation error → 400 + Zod issues             | 2   | auto   | Send body with `endAt < startAt` and missing email; expect 400 + `issues[]` with paths `endAt` and `customerEmail` |
| F3  | POST conflict → 409                                  | 2   | auto   | Two overlapping confirmed bookings on same `resourceId`; second returns 409 with `error.code = "conflict"` |
| F4  | GET list with filters works                          | 2   | auto   | After seeding bookings, filter by `resourceId`, `from`, `to`, `status` and assert correct subset + order   |
| F5  | GET /[id] returns 200 / 404                          | 1   | auto   | One known id returns 200, random uuid returns 404                                                          |
| F6  | PATCH updates and re-validates conflicts             | 2   | auto   | PATCH that moves a booking onto another confirmed slot returns 409; legitimate PATCH returns 200           |
| F7  | PATCH status="cancelled" frees the slot              | 2   | auto   | Cancel booking A, then create overlapping booking B → 201                                                  |
| F8  | DELETE returns 204 then 404                          | 1   | auto   | DELETE existing returns 204; subsequent GET returns 404                                                    |
| Q1  | Idiomatic Zod usage                                  | 2   | manual | Separate Create/Update schemas, `.strict()`/passthrough discipline, `refine`/`superRefine` for cross-field rules, no manual re-implementation of Zod checks |
| Q2  | Code quality and structure                           | 2   | manual | No `any`, no `// @ts-ignore`, conflict logic factored out of route handlers, consistent error helper       |
| Q3  | Reuse of provided `lib/db.ts` and `lib/types.ts`     | 1   | manual | `Booking` type imported, `db` used directly; signatures of provided modules unchanged                      |
| Q4  | Error response shape matches `context.md`            | 1   | hybrid | Inspect at least one 400, one 404, one 409 response; check `error.code`, `message`, and `issues` shape      |

**Total max: 24**

## Scoring guidance

- For criteria worth `2`: full credit when fully correct, `1` when the
  endpoint behaves correctly on the happy path but mishandles one edge
  (e.g. wrong status code, missing `issues[]`), `0` otherwise.
- For criteria worth `1`: binary.
- Q1 and Q2 are manual. Award the full value only if the code would pass a
  reasonable code review at the "intermediate backend dev" bar. Halve if
  there are visible smells that still meet the contract; zero if the code
  works by accident.
- If `npm run build` fails (B2 = 0) but `npm run dev` boots and endpoints
  work, F-criteria are still scored from runtime behaviour — note the
  divergence in the row's `Notes`.

## Hard-stop rules

- If `npm install` fails for reasons other than missing `zod` (e.g. the
  model rewrote `package.json` and broke it), score B1 = 0, B2 = 0,
  B3 = 0, and evaluate F-criteria statically only.
- If the model deleted or replaced `lib/db.ts` / `lib/types.ts` with a
  different storage layer, score Q3 = 0 and cap Q2 at `1`.
- If the model wrote a frontend or removed the default `app/page.tsx`,
  note it in the row but do not penalize unless it broke the build.

## Common shortcuts and traps

- **Skipping Zod entirely** and validating with `if`/`typeof`. F2 may
  still pass for the obvious cases, but Q1 = 0.
- **Returning 422 instead of 400.** Treat as wrong status code → halve F2.
- **Touching windows treated as conflicting.** Schedule a booking ending at
  10:00 and another starting at 10:00 — second must succeed (201). If 409,
  halve F3.
- **Mutating `lib/db.ts` map directly from the route** — fine functionally
  but counts against Q2 if it bypasses the provided `db` API.
- **Using `params` synchronously** in Next.js App Router (must be awaited
  in newer versions). If it crashes at runtime, F5/F6/F7/F8 fail.
- **Hard-coded UUIDs** instead of `crypto.randomUUID()` — note in Q2.

## Bootstrap & project creation

Bootstrap is **not** scored — every attempt starts from the same baseline.
Models that rerun `create-next-app` are not penalized as long as the final
state still satisfies the deliverable.

## Comparison against baseline

For each attempt, diff the submitted repo against the baseline (excluding
`node_modules` and `.next/`). Expected changes:

- `app/api/bookings/route.ts` — added
- `app/api/bookings/[id]/route.ts` — added
- `lib/validation.ts` (or similar) — likely added
- `package.json`, `package-lock.json` — `zod` added
- `lib/db.ts`, `lib/types.ts` — unchanged or extended (not replaced)

Anything else (changes to `app/page.tsx`, new top-level configs) should be
called out in `Notes` for the relevant Q row.

## Output format

Write `eval-result.csv` in the project root of `eval-attempts/<attempt>/`:

```csv
Criterion,Score,Max,Notes,Evidence
B1,1,1,zod ^3.24.1 added,package.json line 14
B2,2,2,clean build,build.log
...
Task completion time,5min 12s,N/A,5min 12s,
Test run,9.05.2026 14:30,N/A,9.05.2026 14:30,
```
