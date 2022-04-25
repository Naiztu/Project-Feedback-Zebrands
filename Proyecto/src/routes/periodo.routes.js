import { Router } from "express";
import {
  postPeriodo,
  cambiaPeriodo,
  getCurrentPeriodo,
} from "../controllers/periodo.controller";

const router = Router();

router.post("/newperiodo", postPeriodo);
router.put("/fechas", cambiaPeriodo);
router.get("/currentperiodo", getCurrentPeriodo);
export default router;


