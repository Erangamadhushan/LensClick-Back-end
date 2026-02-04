import prisma from "../../config/prisma";
import cloudinary from "../../config/cloudinary";
import { asyncHandler } from "../../utils/asyncHandler";
import { Response } from "express";

export const getAlbumPhotos = asyncHandler(
  async (req: any & { album: { albumId: number } }, res: Response) => {
    const albumId = req.album.albumId;

    const photos = await prisma.photo.findMany({
      where: { albumId },
    });

    const signedPhotos = photos.map(
      (photo: { id: number; publicId: string }) => ({
        id: photo.id,
        url: cloudinary.url(photo.publicId, {
          secure: true,
          sign_url: true,
          expires_at: Math.floor(Date.now() / 1000) + 3600, // 60 min
        }),
      }),
    );

    res.json({
      success: true,
      data: signedPhotos,
    });
  },
);
