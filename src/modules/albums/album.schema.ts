import { z } from "zod";

export const createAlbumSchema = z.object({
  title: z.string().min(3),
  eventType: z.enum(["WEDDING", "BIRTHDAY", "CONVOCATION", "OTHER"]),
});
