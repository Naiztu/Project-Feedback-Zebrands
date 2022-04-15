import { Router } from "express";

import {
  getPreguntas,
  registraPregunta,
  eliminaPregunta,
  getPreguntasDimension,
  cambiaIndex,
  updatePregunta
} from "../controllers/preguntas.controller";

const router = Router();

router.get("/:nivel", getPreguntas);
router.get("/:nivel/:dimension", getPreguntasDimension);
router.post("/registra", registraPregunta);
router.delete("/:id_pregunta", eliminaPregunta);
router.put("/index", cambiaIndex);
router.put("/descripcion", updatePregunta);

export default router;
 