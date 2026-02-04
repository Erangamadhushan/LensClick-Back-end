import jwt from "jsonwebtoken";
import env from "../config/env";
import { NextFunction, Request, Response } from "express";

export function requireAlbumToken(req: any, res: Response, next: NextFunction) {
  const auth = req.headers.authorization;
  if (!auth) return res.status(401).json({ message: "Unauthorized" });

  const token = auth.split(" ")[1];
  const payload = jwt.verify(token, env.ALBUM_TOKEN_SECRET);

  req.album = payload;
  next();
}
