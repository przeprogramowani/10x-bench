# Domain context — Bookings

A booking represents a reservation of a single resource (a room, a piece of
equipment, a coach session) for a continuous time window.

## Entity

The TypeScript entity already lives in `lib/types.ts`:

```ts
export type BookingStatus = "confirmed" | "cancelled";

export interface Booking {
  id: string;
  resourceId: string;
  startAt: string;     // ISO 8601, UTC
  endAt: string;       // ISO 8601, UTC
  customerEmail: string;
  notes?: string;
  status: BookingStatus;
  createdAt: string;   // ISO 8601, set by server
  updatedAt: string;   // ISO 8601, set by server
}
```

`id` is server-generated. Use `crypto.randomUUID()` from the standard library.

## Validation rules (apply to create and update)

- `resourceId`: non-empty string, max 64 chars.
- `startAt`, `endAt`: valid ISO 8601 datetime strings.
- `endAt` must be strictly after `startAt`.
- Duration `endAt - startAt`:
  - minimum 15 minutes
  - maximum 8 hours
- `customerEmail`: valid email.
- `notes`: optional string, max 500 chars.
- On create, `status` is implicitly `"confirmed"` (clients cannot send it).
- On update, `status` may be `"confirmed"` or `"cancelled"` only.

Reject any unknown fields (use `.strict()` or equivalent).

## Conflict rule

A new or updated **confirmed** booking conflicts with any **other confirmed**
booking on the same `resourceId` whose time window overlaps it.

Two windows overlap when `aStart < bEnd && bStart < aEnd`. Touching windows
(`aEnd === bStart`) do **not** overlap.

Cancelled bookings are ignored when checking conflicts and never produce a
409. When a PATCH changes `status` to `"cancelled"`, no conflict check is
needed for that request.

When PATCH updates times of a still-confirmed booking, exclude the booking
itself from the conflict comparison.

## Endpoints

### POST `/api/bookings`

Request body:

```json
{
  "resourceId": "room-101",
  "startAt": "2026-06-01T09:00:00Z",
  "endAt":   "2026-06-01T10:00:00Z",
  "customerEmail": "ada@example.com",
  "notes": "Whiteboard required"
}
```

Responses:

- `201` with the full `Booking` (status `"confirmed"`, server-generated
  `id`, `createdAt`, `updatedAt`).
- `400` on validation failure.
- `409` on conflict (see error format below).

### GET `/api/bookings`

Query parameters (all optional):

- `resourceId` — exact match.
- `from` — ISO 8601; include bookings with `endAt > from`.
- `to` — ISO 8601; include bookings with `startAt < to`.
- `status` — `"confirmed"` or `"cancelled"`.

If `from` and `to` are both supplied, `to` must be after `from`.
Invalid query params → `400`.

Response: `200` with `{ "items": Booking[] }`. Order by `startAt` ascending.

### GET `/api/bookings/[id]`

- `200` with the `Booking`.
- `404` if not found.

### PATCH `/api/bookings/[id]`

Partial update. Allowed fields: `startAt`, `endAt`, `notes`, `status`.
At least one field must be supplied. The same per-field validation rules as
on create apply, plus: if either `startAt` or `endAt` is supplied, both
final values (current ∪ patch) must satisfy the duration and order rules.

Responses:

- `200` with the updated `Booking`.
- `400` on validation failure or empty body.
- `404` if the id does not exist.
- `409` if the resulting confirmed booking conflicts with another confirmed
  booking.

### DELETE `/api/bookings/[id]`

- `204` with no body on success.
- `404` if the id does not exist.

## Error format

All `4xx` responses share this shape:

```json
{
  "error": {
    "code": "validation_error" | "not_found" | "conflict",
    "message": "human-readable summary",
    "issues": [
      { "path": "endAt", "message": "endAt must be after startAt" }
    ]
  }
}
```

`issues` is required for `validation_error` (map Zod issues into it) and
optional for the other codes. For `conflict`, include the conflicting
booking id under `issues[0].path = "resourceId"` and a clear message.

## Sample requests

```bash
# Create
curl -X POST http://localhost:3000/api/bookings \
  -H 'content-type: application/json' \
  -d '{"resourceId":"room-101","startAt":"2026-06-01T09:00:00Z","endAt":"2026-06-01T10:00:00Z","customerEmail":"ada@example.com"}'

# List filtered
curl 'http://localhost:3000/api/bookings?resourceId=room-101&from=2026-06-01T00:00:00Z&to=2026-06-02T00:00:00Z'

# Cancel
curl -X PATCH http://localhost:3000/api/bookings/<id> \
  -H 'content-type: application/json' \
  -d '{"status":"cancelled"}'
```

## Non-goals

- No authentication, no authorization.
- No persistence across server restarts (in-memory only).
- No pagination.
- No idempotency keys.
- No rate limiting.
- No frontend UI for bookings.
