# Baseline manifest — `nextjs-api-zod`

## State mode

`brownfield` — every attempt starts from the same prepared scaffold. The model
modifies the existing repo and is **not** asked to bootstrap Next.js from
scratch.

## Baseline source

A freshly generated Next.js project (App Router + TypeScript), with the
`lib/` directory from `benchmarks/nextjs-api-zod/baseline/lib/` overlaid on top.

Bootstrap command (official, verified May 2026):

```bash
npx create-next-app@latest workspace --yes
```

Reference: <https://nextjs.org/docs/app/api-reference/cli/create-next-app>

The `--yes` flag pins the recommended defaults: TypeScript, App Router,
Tailwind CSS, ESLint, Turbopack, `@/*` import alias. Tailwind/ESLint are not
relevant to the task but kept on so every attempt starts from an identical
known-good template.

`zod` is **not** pre-installed. Adding it (`npm install zod`) is part of the
task and the model is expected to do it.

## Files visible to implementation models

The model sees the entire generated workspace plus the overlaid `lib/`
directory:

- `lib/types.ts` (overlay)
- `lib/db.ts` (overlay)
- `prompt.md`
- `context.md`
- the rest of the create-next-app scaffold (package.json, tsconfig.json,
  next.config.*, app/page.tsx, etc.) — read/write as needed

## Files forbidden to implementation models

- `scorecard.md`
- `baseline-manifest.md`
- `runner.yaml`
- any `eval-attempts/` or `eval-results/` directory

## Reset procedure (per attempt)

For each fresh attempt the runner must reproduce the same starting state:

1. Create an empty workspace directory.
2. Run `npx create-next-app@latest workspace --yes` inside it.
3. Copy `benchmarks/nextjs-api-zod/baseline/lib/` into `workspace/lib/`,
   overwriting any conflicting files.
4. Copy `prompt.md` and `context.md` into the workspace root (or the location
   the harness expects — see `runner.yaml -> model_visible_files`).
5. Do **not** run `npm install zod` for the model. The task description
   requires the model to install it itself.

## Final artifact expectation

A full working repo containing:

- `app/api/bookings/route.ts`
- `app/api/bookings/[id]/route.ts`
- any helper modules the model decides to add (e.g. `lib/validation.ts`)
- `package.json` with `zod` declared as a dependency
- existing `lib/types.ts` and `lib/db.ts` retained or extended (not deleted)

The evaluator captures the full repo (excluding `node_modules` and
`.next/`) so manual review can inspect the whole solution.
