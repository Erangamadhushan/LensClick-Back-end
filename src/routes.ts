import { Router } from "express";
import authRoutes from "./modules/auth/auth.routes";
import albumRoutes from "./modules/albums/album.routes";
import photoRoutes from "./modules/photos/photo.routes";
import accessRoutes from "./modules/access/access.routes";
import bookingRoutes from "./modules/bookings/booking.routes";
import dashboardRoutes from "./modules/dashboard/dashboard.routes";
import adminRoutes from "./modules/admin/admin.routes";

const router = Router();

router.use("/auth", authRoutes);
router.use("/albums", albumRoutes);
router.use("/albums-photos", photoRoutes);
router.use("/access", accessRoutes);
router.use("/bookings", bookingRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/admin", adminRoutes);
router.get("/health", async (_, res) => {
  res.json({
    success: true,
    service: "Photography Backend",
    db: "MySQL",
    status: "Healthy",
  });
});

export default router;
