import { Router } from "express";
import {
  postPeriodo,
  cambiaPeriodo
} from "../controllers/periodo.controller";

const router = Router();

router.post("/newperiodo", postPeriodo);
router.put("/fechas", cambiaPeriodo);
export default router;
