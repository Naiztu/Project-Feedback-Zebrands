import { Router } from "express";

import {

    getRespuestas,
    postRespuestas
    
  } from "../controllers/respuestas.controller";
  
  const router = Router();
  
  router.get("/:id_evaluador/:id_evaluado/:id_periodo", getRespuestas);
  router.post("/registrar", postRespuestas);

  
  export default router;