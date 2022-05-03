import { Router } from "express";

import {
  getAllEvaluar,
  getEvaluarPendiente,
  postAsignarCompaniero,
  getResumen
} from "../controllers/evaluar.controller";

const router = Router();

router.get("/:id_periodo/:id_user", getEvaluarPendiente);
router.get("/all/:id_periodo/:id_user", getAllEvaluar);
router.post("/", postAsignarCompaniero);
router.get("/resumen/:id_periodo/:id_user", getResumen);

export default router;
 