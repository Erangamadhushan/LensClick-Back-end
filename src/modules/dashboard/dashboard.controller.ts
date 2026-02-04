import prisma from "../../config/prisma";
import { asyncHandler } from "../../utils/asyncHandler";
import { Request, Response } from "express";

export const getDashboardStats = asyncHandler(
  async (req: Request, res: Response) => {
    const totalBookings = await prisma.booking.count();
    const confirmedBookings = await prisma.booking.count({
      where: { status: "CONFIRMED" },
    });
    const pendingBookings = await prisma.booking.count({
      where: { status: "PENDING" },
    });
    const upcomingAppointments = await prisma.booking.count({
      where: {
        status: "CONFIRMED",
        eventDate: {
          gt: new Date(),
        },
      },
    });
    const photoGalleries = await prisma.album.count();
    const completedBookings = await prisma.booking.count({
      where: { status: "COMPLETED" },
    });
    const cancelledBookings = await prisma.booking.count({
      where: { status: "CANCELLED" },
    });
    res.json({
      success: true,
      data: {
        totalBookings,
        confirmedBookings,
        pendingBookings,
        upcomingAppointments,
        photoGalleries,
        completedBookings,
        cancelledBookings,
      },
    });
  },
);