import { Router } from "express";
import {
  postPeriodo,
  cambiaPeriodo,
  getPeriodo,
} from "../controllers/periodo.controller";

const router = Router();

router.post("/newperiodo", postPeriodo);
router.put("/fechas", cambiaPeriodo);
router.get("/currentperiodo", getPeriodo);
export default router;
