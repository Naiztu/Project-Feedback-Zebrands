import { Router } from "express";
import {
  postPeriodo,
  cambiaPeriodo,
  getCurrentPeriodo,
  getPeriodos,
  cambiaEstatus,
} from "../controllers/periodo.controller";

const router = Router();

router.post("/newperiodo", postPeriodo);
router.put("/fechas", cambiaPeriodo);
router.get("/currentperiodo/:id_chapter", getCurrentPeriodo);
router.get("/nextperiodo/:id_chapter", getPeriodos);
router.get("/periodos/:id_chapter", getPeriodos);
router.put("/update_estatus", cambiaEstatus);

export default router;
