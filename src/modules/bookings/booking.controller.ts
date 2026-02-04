import prisma from "../../config/prisma";
import { asyncHandler } from "../../utils/asyncHandler";
import { Request, Response } from "express";

export const createBooking = asyncHandler(
  async (req: Request, res: Response) => {
    const { organizerName, organizerEmail, phoneNumber, servicePackage, eventType, eventDate, eventTime, eventLocation, eventDescription } = req.body;

    const date = new Date(eventDate);

    // conflict check
    const conflict = await prisma.booking.findFirst({
      where: {
        eventDate: date,
        eventTime,
      },
    });

    if (conflict) {
      res.status(409).json({
        success: false,
        message: "The selected date and time slot is already booked.",
      })
    }

    const booking = await prisma.booking.create({
      data: {
        organizerName,
        organizerEmail,
        phoneNumber,
        servicePackage,
        eventType,
        eventDate: date,
        eventTime,
        eventLocation,
        eventDescription,
      },
    });

    res.json({
      success: true,
      data: booking,
    });
  },
);

export const updateBookingStatus = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const { status } = req.body;

    const booking = await prisma.booking.update({
      where: { id: Number(id) },
      data: { status },
    });

    res.json({
      success: true,
      data: booking,
    });
  },
);
