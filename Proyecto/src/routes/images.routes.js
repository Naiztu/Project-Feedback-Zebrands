import { Router } from "express";
import path from "path";
import multer from "multer";
import { postImages } from "../controllers/images.controller";

const router = Router();

const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.originalname + "-" + uniqueSuffix);
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
  }).single("image"),
  postImages
);

export default router;
