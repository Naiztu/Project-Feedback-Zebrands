import { Router } from "express";
import path from "path";
import { randomUUID } from "crypto";
import multer from "multer";
import { postImages } from "../controllers/images.controller";

const router = Router();

const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, randomUUID() + path.extname(file.originalname));
  },
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../../public/img"));
  },
});

router.post(
  "/",
  multer({
    storage,
    dest: path.join(__dirname, "public/img"),
    limits: { fileSize: 2000000 },
    fileFilter: (req, file, cb) => {
      const filetypes = /jpeg|jpg|png|gif/;
      const mimetype = filetypes.test(file.mimetype);
      const extname = filetypes.test(path.extname(file.originalname));
      if (mimetype && extname) {
        return cb(null, true);
      }
      cb("Archivo no soportado");
    },
  }).single("image"),
  postImages
);

export default router;
