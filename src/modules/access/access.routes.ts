import { Router } from "express";
import { createAccessCode, validateAccessCode } from "./access.controller";
import { getAlbumPhotos } from "./access.photos";
import { requireAuth, requireRole } from "../../middlewares/auth.middleware";
import { requireAlbumToken } from "../../middlewares/albumToken.middleware";

const router = Router();

// Admin
router.post("/create", requireAuth, requireRole("ADMIN"), createAccessCode);

// Guest
router.post("/validate", validateAccessCode);

// Guest with album token
router.get("/photos", requireAlbumToken, getAlbumPhotos);

export default router;
