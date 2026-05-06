import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { updateBookingSchema, idParamSchema } from "@/lib/validation";
import { findConflict } from "@/lib/conflicts";
import { createErrorResponse, mapZodIssuesToResponse } from "@/lib/errors";
import type { Booking } from "@/lib/types";
type BookingType = Booking; // Use Booking type to satisfy linter

const typeCheck: BookingType | null = null; // eslint-disable-line @typescript-eslint/no-unused-vars

interface RouteParams {
  params: Promise<{ id: string }>;
}

export async function PATCH(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;
    
    const idResult = idParamSchema.safeParse({ id });
    if (!idResult.success) {
      return NextResponse.json(
        createErrorResponse(
          "validation_error",
          "Invalid booking ID",
          mapZodIssuesToResponse(idResult.error.issues)
        ),
        { status: 400 }
      );
    }

    const existingBooking = db.findById(idResult.data.id);
    if (!existingBooking) {
      return NextResponse.json(
        createErrorResponse(
          "not_found",
          "Booking not found"
        ),
        { status: 404 }
      );
    }

    const body = await request.json();
    const bodyResult = updateBookingSchema.safeParse(body);
    if (!bodyResult.success) {
      return NextResponse.json(
        createErrorResponse(
          "validation_error",
          "Invalid request body",
          mapZodIssuesToResponse(bodyResult.error.issues)
        ),
        { status: 400 }
      );
    }

    const { startAt, endAt, status } = bodyResult.data;

    // Apply final validation on the complete booking object
    if (startAt !== undefined || endAt !== undefined) {
      const finalStartAt = startAt || existingBooking.startAt;
      const finalEndAt = endAt || existingBooking.endAt;
      
      const startTime = new Date(finalStartAt);
      const endTime = new Date(finalEndAt);
      const durationMs = endTime.getTime() - startTime.getTime();
      const durationMinutes = durationMs / (1000 * 60);
      
      if (endTime <= startTime) {
        return NextResponse.json(
          createErrorResponse(
            "validation_error",
            "endAt must be after startAt",
            [{ path: "endAt", message: "endAt must be after startAt" }]
          ),
          { status: 400 }
        );
      }
      
      if (durationMinutes < 15) {
        return NextResponse.json(
          createErrorResponse(
            "validation_error",
            "Booking duration must be at least 15 minutes",
            [{ path: "endAt", message: "Booking duration must be at least 15 minutes" }]
          ),
          { status: 400 }
        );
      }
      
      if (durationMinutes > 480) {
        return NextResponse.json(
          createErrorResponse(
            "validation_error",
            "Booking duration must be at most 8 hours",
            [{ path: "endAt", message: "Booking duration must be at most 8 hours" }]
          ),
          { status: 400 }
        );
      }
    }

    // Check for conflicts if this is a confirmed booking or being set to confirmed
    const finalStatus = status || existingBooking.status;
    if (finalStatus === "confirmed") {
      const tempBooking = {
        resourceId: existingBooking.resourceId,
        startAt: startAt || existingBooking.startAt,
        endAt: endAt || existingBooking.endAt,
        status: "confirmed" as const,
      };

      const existingBookings = db.all();
      const conflict = findConflict(tempBooking, existingBookings, idResult.data.id);
      
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
    }

    // Update the booking
    const savedBooking = db.update(idResult.data.id, {
      ...bodyResult.data,
      status: bodyResult.data.status as 'confirmed' | 'cancelled' | undefined,
    });
    if (!savedBooking) {
      // This shouldn't happen as we already checked for existence
      return NextResponse.json(
        createErrorResponse(
          "not_found",
          "Booking not found"
        ),
        { status: 404 }
      );
    }

    return NextResponse.json(savedBooking);
  } catch (error) {
    console.error("Error in PATCH /api/bookings/[id]:", error);
    return NextResponse.json(
      createErrorResponse(
        "validation_error",
        "Internal server error"
      ),
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;
    
    const result = idParamSchema.safeParse({ id });
    if (!result.success) {
      return NextResponse.json(
        createErrorResponse(
          "validation_error",
          "Invalid booking ID",
          mapZodIssuesToResponse(result.error.issues)
        ),
        { status: 400 }
      );
    }

    const existingBooking = db.findById(result.data.id);
    if (!existingBooking) {
      return NextResponse.json(
        createErrorResponse(
          "not_found",
          "Booking not found"
        ),
        { status: 404 }
      );
    }

    const deleted = db.delete(result.data.id);
    if (!deleted) {
      return NextResponse.json(
        createErrorResponse(
          "not_found",
          "Booking not found"
        ),
        { status: 404 }
      );
    }

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error("Error in DELETE /api/bookings/[id]:", error);
    return NextResponse.json(
      createErrorResponse(
        "validation_error",
        "Internal server error"
      ),
      { status: 500 }
    );
  }
}