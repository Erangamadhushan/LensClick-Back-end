import jwt from "jsonwebtoken";
import env from "../../config/env";

export const signAlbumToken = (albumId: number) =>
  jwt.sign(
    { albumId },
    env.ALBUM_TOKEN_SECRET,
    { expiresIn: "1h" }, // short-lived
  );

export const verifyAlbumToken = (token: string) =>
  jwt.verify(token, env.ALBUM_TOKEN_SECRET) as { albumId: number };
