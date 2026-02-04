import multer from "multer";

export const upload = multer({
  limits: {
    fileSize: 20 * 1024 * 1024, // 20MB
  },
});
