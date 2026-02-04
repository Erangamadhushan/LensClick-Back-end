import { Request, Response } from "express";
import prisma from "../../config/prisma";


export const getAllAppointments = async (req: Request, res: Response) => {
  const allbookings = await prisma.booking.findMany();
    res.json({
        success: true,
        data: allbookings,
    });
}