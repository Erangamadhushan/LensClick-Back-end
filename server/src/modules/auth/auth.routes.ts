import { Router } from "express";
import { registerAdmin, login, verifySessionToken } from "./auth.controller";

const router = Router();

router.post("/register", registerAdmin);
router.post("/login", login);
router.post("/verify-token", verifySessionToken);

export default router;
