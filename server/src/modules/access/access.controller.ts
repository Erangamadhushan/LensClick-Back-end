import prisma from "../../config/prisma";
import { asyncHandler } from "../../utils/asyncHandler";
import {
  generateAccessCode,
  hashAccessCode,
  compareAccessCode,
} from "./access.utils";
import { signAlbumToken } from "./access.token";
import { Request, Response } from "express";

// ADMIN — create access code
export const createAccessCode = asyncHandler(
  async (req: Request, res: Response) => {
    const { albumId, expiresAt, maxUses, canDownload } = req.body;

    const code = generateAccessCode();
    const hash = await hashAccessCode(code);

    await prisma.albumAccess.create({
      data: {
        albumId,
        codeHash: hash,
        expiresAt,
        maxUses,
        canDownload,
      },
    });

    // ⚠️ return code ONCE
    res.json({
      success: true,
      accessCode: code,
    });
  },
);

// GUEST — validate access code
export const validateAccessCode = asyncHandler(
  async (req: Request, res: Response) => {
    const { albumId, accessCode } = req.body;

    const access = await prisma.albumAccess.findFirst({
      where: { albumId },
      orderBy: { createdAt: "desc" },
    });

    if (!access) throw { statusCode: 403, message: "Invalid access" };

    const valid = await compareAccessCode(accessCode, access.codeHash);
    if (!valid) throw { statusCode: 403, message: "Invalid access code" };

    if (access.expiresAt && new Date() > access.expiresAt)
      throw { statusCode: 403, message: "Access code expired" };

    if (access.maxUses && access.usedCount >= access.maxUses)
      throw { statusCode: 403, message: "Access limit reached" };

    await prisma.albumAccess.update({
      where: { id: access.id },
      data: { usedCount: { increment: 1 } },
    });

    const token = signAlbumToken(albumId);

    res.json({
      success: true,
      token,
      permissions: {
        canDownload: access.canDownload,
      },
    });
  },
);
