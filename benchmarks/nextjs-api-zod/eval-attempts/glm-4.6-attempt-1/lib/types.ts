export type BookingStatus = "confirmed" | "cancelled";

export interface Booking {
  id: string;
  resourceId: string;
  startAt: string;
  endAt: string;
  customerEmail: string;
  notes?: string;
  status: BookingStatus;
  createdAt: string;
  updatedAt: string;
}

export type NewBooking = Omit<Booking, "id" | "status" | "createdAt" | "updatedAt">;
