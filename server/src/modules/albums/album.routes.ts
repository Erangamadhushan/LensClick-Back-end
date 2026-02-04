import { Router } from "express";
import { createAlbum } from "./album.controller";
import { validate } from "../../middlewares/validate.middleware";
import { createAlbumSchema } from "./album.schema";
import { requireAuth, requireRole } from "../../middlewares/auth.middleware";

const router = Router();

router.post(
  "/",
  requireAuth,
  requireRole("ADMIN"),
  validate(createAlbumSchema),
  createAlbum,
);

export default router;
