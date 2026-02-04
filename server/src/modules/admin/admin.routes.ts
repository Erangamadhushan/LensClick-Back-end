import { Router } from "express";
import { requireAuth, requireRole } from "../../middlewares/auth.middleware";
import { getAllAppointments } from "./admin.controller";

const router = Router();

router.get("/appointments", requireAuth, requireRole("ADMIN"), getAllAppointments);
// Define admin routes here
export default router;