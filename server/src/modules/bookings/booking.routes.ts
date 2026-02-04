import { Router } from "express";
import { createBooking, updateBookingStatus } from "./booking.controller";
import { validate } from "../../middlewares/validate.middleware";
import { createBookingSchema } from "./booking.schema";
import { requireAuth, requireRole } from "../../middlewares/auth.middleware";
import rateLimit from "express-rate-limit";

const router = Router();

const bookingRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 100, 
});

// Public
router.post("/", bookingRateLimiter, createBooking);

// Admin only
router.patch(
  "/:id/status",
  bookingRateLimiter,
  requireAuth,
  requireRole("ADMIN"),
  updateBookingStatus,
);

export default router;
