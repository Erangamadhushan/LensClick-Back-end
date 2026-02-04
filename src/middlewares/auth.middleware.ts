import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import env from "../config/env";

export function requireAuth(req: any, res: Response, next: NextFunction) {
  const auth = req.headers.authorization;
  if (!auth) return res.status(401).json({ message: "Unauthorized" });

  const token = auth.split(" ")[1];
  const payload = jwt.verify(token, env.JWT_SECRET);

  req.user = payload;
  next();
}

export const requireRole = (role: string) => {
  return (req: any, res: Response, next: NextFunction) => {
    if (req.user.role !== role)
      return res.status(403).json({ message: "Forbidden" });
    next();
  };
};
