import { Router } from "express";
import { upload } from "../../config/multer";
import { uploadPhoto } from "./photo.controller";
import { requireAuth, requireRole } from "../../middlewares/auth.middleware";

const router = Router();

router.post(
  "/:albumId/photos",
  requireAuth,
  requireRole("ADMIN"),
  upload.single("photo"),
  uploadPhoto,
);

export default router;
