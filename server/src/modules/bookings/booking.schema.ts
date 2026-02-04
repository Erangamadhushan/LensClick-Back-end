import { z } from "zod";

export const createBookingSchema = z.object({
  organizerName: z.string().min(2),
  organizerEmail: z.string().email(),
  phoneNumber: z.string().min(10).max(15),
  servicePackage: z.string().min(1),
  eventType: z.enum(["WEDDING", "BIRTHDAY", "CONVOCATION", "OTHER"]),
  eventDate: z.string().datetime(),
  eventTime: z.string().min(1),
  eventLocation: z.string().min(5),
  eventDescription: z.string().min(10).max(1000),
});
