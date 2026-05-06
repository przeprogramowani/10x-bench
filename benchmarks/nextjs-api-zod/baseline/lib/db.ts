import type { Booking } from "./types";

const store = new Map<string, Booking>();

export const db = {
  all(): Booking[] {
    return Array.from(store.values());
  },
  findById(id: string): Booking | undefined {
    return store.get(id);
  },
  insert(booking: Booking): Booking {
    store.set(booking.id, booking);
    return booking;
  },
  update(id: string, patch: Partial<Booking>): Booking | undefined {
    const existing = store.get(id);
    if (!existing) return undefined;
    const updated: Booking = {
      ...existing,
      ...patch,
      id: existing.id,
      createdAt: existing.createdAt,
      updatedAt: new Date().toISOString(),
    };
    store.set(id, updated);
    return updated;
  },
  delete(id: string): boolean {
    return store.delete(id);
  },
  reset(): void {
    store.clear();
  },
};
