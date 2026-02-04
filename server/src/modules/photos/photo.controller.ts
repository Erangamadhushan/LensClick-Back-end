import cloudinary from "../../config/cloudinary";
import prisma from "../../config/prisma";
import { asyncHandler } from "../../utils/asyncHandler";
import { Request, Response } from "express";

export const uploadPhoto = asyncHandler(
  async (req: Request & { file: Express.Multer.File }, res: Response) => {
    const albumId = Number(req.params.albumId);
    const file = req.file;

    if (!file) {
      throw { statusCode: 400, message: "No file uploaded" };
    }

    const result = await cloudinary.uploader.upload(file.buffer, {
      folder: `albums/${albumId}`,
      resource_type: "image",
      type: "authenticated",
    });

    const photo = await prisma.photo.create({
      data: {
        albumId,
        publicId: result.public_id,
        secureUrl: result.secure_url,
      },
    });

    res.json({
      success: true,
      data: photo,
    });
  },
);
