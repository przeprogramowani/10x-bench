# Bookings API — Next.js + Zod + in-memory DB

You are working in an existing Next.js project (App Router, TypeScript). Your
task is to implement a small **Bookings REST API** under `app/api/bookings/`
using Zod for input validation and the provided in-memory store at `lib/db.ts`.

This is a **brownfield** task: do **not** re-bootstrap Next.js, do **not**
remove Tailwind/ESLint, and do **not** rename existing files. Only add or
extend what the task requires.

You must finish in a single attempt. **Do not ask follow-up questions** —
make reasonable decisions and document them in code comments only when the
choice is non-obvious.

## What is already in place

- The Next.js scaffold (`app/page.tsx`, `package.json`, `tsconfig.json`, etc.)
  is generated and ready to run.
- `lib/types.ts` defines the `Booking` entity and `BookingStatus` union.
- `lib/db.ts` exposes an in-memory `db` object with
  `all`, `findById`, `insert`, `update`, `delete`, `reset`.

You must use the provided `db` module — do **not** introduce a different
storage layer (no SQLite, no Prisma, no JSON file).

## What you must build

Implement the following endpoints. All request and response bodies are JSON.

| Method | Path                    | Purpose                                     |
| ------ | ----------------------- | ------------------------------------------- |
| POST   | `/api/bookings`         | Create a booking                            |
| GET    | `/api/bookings`         | List bookings (filterable)                  |
| GET    | `/api/bookings/[id]`    | Fetch one booking by id                     |
| PATCH  | `/api/bookings/[id]`    | Update times, notes, or status              |
| DELETE | `/api/bookings/[id]`    | Hard-delete a booking                       |

Detailed request/response shapes, validation rules, conflict rules, and error
formats are in `context.md`. **Read it before you start.**

## Required behaviour

1. **Zod validation** for every body and query input. Reject invalid input
   with HTTP 400 and a machine-readable list of issues.
2. **Conflict detection** on POST and PATCH: a confirmed booking must not
   overlap any other confirmed booking on the same `resourceId`. Cancelled
   bookings never block. On conflict return HTTP 409.
3. **404** when an id is not found on GET / PATCH / DELETE.
4. **Stable timestamps**: the server sets `createdAt` on insert and
   `updatedAt` on insert and on every successful update.
5. **Type safety**: no `any`, no `// @ts-ignore`. Reuse `Booking` from
   `lib/types.ts`; create separate Zod schemas for create vs. update.

## Deliverables

- Route handlers under `app/api/bookings/route.ts` and
  `app/api/bookings/[id]/route.ts`.
- Any supporting modules you need (e.g. `lib/validation.ts`,
  `lib/conflicts.ts`) — keep them under `lib/`.
- `zod` added to `package.json` dependencies (run `npm install zod`).

## Constraints

- Stack is fixed: **Next.js App Router + TypeScript + Zod + the provided
  in-memory `db`**.
- Do not add a database client, ORM, or external service.
- Do not write a frontend. The default `app/page.tsx` may stay untouched.
- Do not write tests — they are not part of the deliverable.
- Do not modify `lib/types.ts` or `lib/db.ts` beyond adding new exports if
  strictly needed; never change existing signatures.

## Definition of done

- `npm install` and `npm run build` succeed without TypeScript or ESLint
  errors.
- `npm run dev` boots the server and the documented endpoints respond as
  specified in `context.md`.
- All five endpoints behave according to the validation, conflict, and error
  rules above.
