import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { createBookingSchema, listBookingsQuerySchema } from "@/lib/validation";
import { findConflict } from "@/lib/conflicts";
import { createErrorResponse, mapZodIssuesToResponse } from "@/lib/errors";
import type { Booking } from "@/lib/types";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const query = Object.fromEntries(searchParams.entries());
    
    const result = listBookingsQuerySchema.safeParse(query);
    if (!result.success) {
      return NextResponse.json(
        createErrorResponse(
          "validation_error",
          "Invalid query parameters",
          mapZodIssuesToResponse(result.error.issues)
        ),
        { status: 400 }
      );
    }

    const { resourceId, from, to, status } = result.data;
    let bookings = db.all();

    // Apply filters
    if (resourceId) {
      bookings = bookings.filter(b => b.resourceId === resourceId);
    }
    if (status) {
      bookings = bookings.filter(b => b.status === status);
    }
    if (from) {
      const fromDate = new Date(from);
      bookings = bookings.filter(b => new Date(b.endAt) > fromDate);
    }
    if (to) {
      const toDate = new Date(to);
      bookings = bookings.filter(b => new Date(b.startAt) < toDate);
    }

    // Sort by startAt ascending
    bookings.sort((a, b) => new Date(a.startAt).getTime() - new Date(b.startAt).getTime());

    return NextResponse.json({ items: bookings });
  } catch (error) {
    console.error("Error in GET /api/bookings:", error);
    return NextResponse.json(
      createErrorResponse(
        "validation_error",
        "Internal server error"
      ),
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const result = createBookingSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        createErrorResponse(
          "validation_error",
          "Invalid request body",
          mapZodIssuesToResponse(result.error.issues)
        ),
        { status: 400 }
      );
    }

    const { resourceId, startAt, endAt, customerEmail, notes } = result.data;
    
    // Create a temporary booking to check for conflicts
    const tempBooking: Omit<Booking, "id" | "customerEmail" | "notes" | "createdAt" | "updatedAt"> = {
      resourceId,
      startAt,
      endAt,
      status: "confirmed",
    };

    // Check for conflicts with existing confirmed bookings
    const existingBookings = db.all();
    const conflict = findConflict(tempBooking, existingBookings);
    
    if (conflict) {
      return NextResponse.json(
        createErrorResponse(
          "conflict",
          `Booking conflicts with existing booking ${conflict.id}`,
          [{ path: "resourceId", message: `Conflicts with booking ${conflict.id}` }]
        ),
        { status: 409 }
      );
    }

    // Create the new booking
    const now = new Date().toISOString();
    const newBooking: Booking = {
      id: crypto.randomUUID(),
      resourceId,
      startAt,
      endAt,
      customerEmail,
      notes,
      status: "confirmed",
      createdAt: now,
      updatedAt: now,
    };

    const savedBooking = db.insert(newBooking);
    
    return NextResponse.json(savedBooking, { status: 201 });
  } catch (error) {
    console.error("Error in POST /api/bookings:", error);
    return NextResponse.json(
      createErrorResponse(
        "validation_error",
        "Internal server error"
      ),
      { status: 500 }
    );
  }
}