import { z } from "zod";

export const createBookingSchema = z.object({
  resourceId: z.string().min(1).max(64),
  startAt: z.string().datetime({ offset: true }),
  endAt: z.string().datetime({ offset: true }),
  customerEmail: z.string().email(),
  notes: z.string().max(500).optional(),
}).strict()
.refine(({ startAt, endAt }) => {
  const start = new Date(startAt);
  const end = new Date(endAt);
  return end > start;
}, {
  message: "endAt must be after startAt",
  path: ["endAt"],
})
.refine(({ startAt, endAt }) => {
  const start = new Date(startAt);
  const end = new Date(endAt);
  const durationMs = end.getTime() - start.getTime();
  const durationMinutes = durationMs / (1000 * 60);
  return durationMinutes >= 15;
}, {
  message: "Booking duration must be at least 15 minutes",
  path: ["endAt"],
})
.refine(({ startAt, endAt }) => {
  const start = new Date(startAt);
  const end = new Date(endAt);
  const durationMs = end.getTime() - start.getTime();
  const durationMinutes = durationMs / (1000 * 60);
  return durationMinutes <= 480; // 8 hours = 480 minutes
}, {
  message: "Booking duration must be at most 8 hours",
  path: ["endAt"],
});

export const updateBookingSchema = z.object({
  startAt: z.string().datetime({ offset: true }).optional(),
  endAt: z.string().datetime({ offset: true }).optional(),
  notes: z.string().max(500).optional(),
  status: z.enum(["confirmed", "cancelled"] as const).optional(),
}).strict()
.refine((data) => {
  const hasAnyField = data.startAt !== undefined || 
                      data.endAt !== undefined || 
                      data.notes !== undefined || 
                      data.status !== undefined;
  return hasAnyField;
}, {
  message: "At least one field must be provided for update",
})
.refine((data) => {
  // Only check time relationships if both timestamps are provided
  if (data.startAt !== undefined && data.endAt !== undefined) {
    return new Date(data.endAt) > new Date(data.startAt);
  }
  return true;
}, {
  message: "endAt must be after startAt",
  path: ["endAt"],
});

export const listBookingsQuerySchema = z.object({
  resourceId: z.string().optional(),
  from: z.string().datetime({ offset: true }).optional(),
  to: z.string().datetime({ offset: true }).optional(),
  status: z.enum(["confirmed", "cancelled"] as const).optional(),
}).strict()
.refine(({ from, to }) => {
  if (from !== undefined && to !== undefined) {
    return new Date(to) > new Date(from);
  }
  return true;
}, {
  message: "to must be after from",
  path: ["to"],
});

export const idParamSchema = z.object({
  id: z.string().min(1),
}).strict();