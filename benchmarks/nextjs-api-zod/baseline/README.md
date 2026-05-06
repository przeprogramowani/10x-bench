# Baseline overlay

This directory holds the files that overlay onto a freshly bootstrapped Next.js
app for the `nextjs-api-zod` benchmark.

After running the official Next.js bootstrap (see `baseline-manifest.md`), copy
`baseline/lib/` into the project's root so models start with:

- `lib/types.ts` — `Booking` entity type and helper aliases
- `lib/db.ts` — in-memory key/value store with `all`, `findById`, `insert`,
  `update`, `delete`, `reset`

The model is responsible for everything under `app/api/` and any extra modules
it needs (validation schemas, helpers, etc.).
