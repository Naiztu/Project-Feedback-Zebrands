import { Router } from "express";

import {
  getAllEvaluar,
  getEvaluarPendiente,
  postAsignarCompaniero,
} from "../controllers/evaluar.controller";

const router = Router();

router.get("/:id_periodo/:id_user", getEvaluarPendiente);
router.get("/all/:id_periodo/:id_user", getAllEvaluar);
router.post("/", postAsignarCompaniero);

export default router;
