import { Router } from "express";

import {
  getPreguntas,
  registraPregunta,
  eliminaPregunta,
  getPreguntasDimension,
} from "../controllers/preguntas.controller";

const router = Router();

router.get("/:nivel", getPreguntas);
router.get("/:nivel/:dimension", getPreguntasDimension);
router.post("/registra", registraPregunta);
router.delete("/:id_pregunta", eliminaPregunta);

export default router;
