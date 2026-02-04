import jwt from "jsonwebtoken";
import env from "../config/env";

export const signToken = (payload: object) =>
  jwt.sign(payload, env.JWT_SECRET, { expiresIn: "1h" });

export const verifyToken = (token: string) => jwt.verify(token, env.JWT_SECRET);
