import crypto from "crypto";
import bcrypt from "bcryptjs";

export const generateAccessCode = () => crypto.randomBytes(4).toString("hex"); // 8 characters are included

export const hashAccessCode = (code: string) => bcrypt.hash(code, 10);

export const compareAccessCode = (code: string, hash: string) =>
  bcrypt.compare(code, hash);
