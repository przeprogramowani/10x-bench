import type { Booking } from "./types";

// Check if two time windows overlap
// Formula: aStart < bEnd && bStart < aEnd
// Touching windows (aEnd === bStart) do NOT overlap
export function doTimeWindowsOverlap(
  aStart: Date, 
  aEnd: Date, 
  bStart: Date, 
  bEnd: Date
): boolean {
  return aStart < bEnd && bStart < aEnd;
}

// Check if a booking conflicts with any existing confirmed bookings
// excludeBookingId is used when updating a booking to exclude itself from conflict check
export function findConflict(
  newBooking: Pick<Booking, "resourceId" | "startAt" | "endAt" | "status">,
  existingBookings: Booking[],
  excludeBookingId?: string
): Booking | null {
  // If status is cancelled, no conflict check needed
  if (newBooking.status === "cancelled") {
    return null;
  }

  const newStart = new Date(newBooking.startAt);
  const newEnd = new Date(newBooking.endAt);

  for (const existing of existingBookings) {
    // Skip the booking being updated
    if (existing.id === excludeBookingId) {
      continue;
    }

    // Only confirmed bookings can cause conflicts
    if (existing.status === "cancelled") {
      continue;
    }

    // Must be the same resource to conflict
    if (existing.resourceId !== newBooking.resourceId) {
      continue;
    }

    const existingStart = new Date(existing.startAt);
    const existingEnd = new Date(existing.endAt);

    if (doTimeWindowsOverlap(newStart, newEnd, existingStart, existingEnd)) {
      return existing;
    }
  }

  return null;
}