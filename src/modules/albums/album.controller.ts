import prisma from "../../config/prisma";
import { asyncHandler } from "../../utils/asyncHandler";
import { Request, Response } from "express";

export const createAlbum = asyncHandler(async (req: Request, res: Response) => {
  const { title, eventType } = req.body;

  const album = await prisma.album.create({
    data: {
      title,
      eventType,
      isPrivate: true,
    },
  });

  res.json({
    success: true,
    data: album,
  });
});
