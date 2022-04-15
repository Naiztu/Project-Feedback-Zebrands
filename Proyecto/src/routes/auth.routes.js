import { Router } from "express";
import { loginRouter } from "../controllers/auth.controller";

const router = Router();

router.post("/", loginRouter);

export default router;


