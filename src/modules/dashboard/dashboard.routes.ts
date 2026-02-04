import { Router } from "express";
import { getDashboardStats } from "./dashboard.controller";
import { requireAuth, requireRole } from "../../middlewares/auth.middleware";

const router = Router();

router.get(
    "/stats",
    requireAuth,
    requireRole("ADMIN"),
    getDashboardStats,
    
);
router.get("/health", (req, res) => {
    res.json({
        success: true,
        message: "Dashboard route is healthy",
    });
})

export default router;