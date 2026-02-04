import prisma from "../../config/prisma";
import { hashPassword, comparePassword } from "../../utils/password";
import { signToken, verifyToken } from "../../utils/jwt";
import { asyncHandler } from "../../utils/asyncHandler";
import { Request, Response } from "express";

export const registerAdmin = asyncHandler(
  async (req: Request, res: Response) => {
    const { fullName, email, password, role } = req.body;

    // find existing user with same email and role
    const exists = await prisma.user.findFirst({ where: { email, role: role.toUpperCase() } });

    if (exists) throw { statusCode: 400, message: "User already exists" };

    const user = await prisma.user.create({
      data: {
        name: fullName,
        email,
        password: await hashPassword(password),
        role: role.toUpperCase(),
      },
    });

    res.json({ success: true, data: user });
  },
);

export const login = asyncHandler(async (req: Request, res: Response) => {
  const { email, password, role } = req.body;

  console.log("Login attempt:", { email, role });
  const user = await prisma.user.findFirst({ where: { email, role: role.toUpperCase() } });
  if (!user) throw { statusCode: 401, message: "Invalid credentials" };

  console.log("User found:", { id: user.id, email: user.email, role: user.role.toUpperCase() });
  const valid = await comparePassword(password, user.password);
  console.log("Password valid:", valid);
  if (!valid) throw { statusCode: 401, message: "Invalid credentials" };

  const token = signToken({
    id: user.id,
    email: user.email,
    role: user.role.toUpperCase(),
  });
  console.log("Token generated:", token);

  res.json({ success: true, token });
});

export const verifySessionToken = asyncHandler(
  async (req: Request, res: Response) => {
    const { token } = req.body;
    try {
      const decoded = verifyToken(token);

      if (typeof decoded === 'string') {
        res.json({ success: true, valid: false, user: null });
        return;
      }

      const user = await prisma.user.findUnique({
        where: { email: decoded.email },
      });

      if (!user) {
        res.json({ success: true, valid: false, user: null });
        return;
      }
      res.json({ success: true, valid: true, user: { id: user.id, email: user.email, role: user.role.toUpperCase() } });
    } catch (err) {
      res.json({ success: true, valid: false, user: null });
    }
  },
);