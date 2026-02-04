import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  PORT: z.string().default("4000"),
  DATABASE_URL: z.string(),
  JWT_SECRET: z.string(),
  ALBUM_TOKEN_SECRET: z.string(),

  CLOUDINARY_CLOUD_NAME: z.string(),
  CLOUDINARY_API_KEY: z.string(),
  CLOUDINARY_API_SECRET: z.string(),
});

const env = envSchema.parse(process.env);

export default env;
