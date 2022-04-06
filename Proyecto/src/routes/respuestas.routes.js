import { Router } from "express";

import {

    //getRespuestas,
    postRespuestas
    
  } from "../controllers/respuestas.controller";
  
  const router = Router();
  
  //router.get("/:nivel", getRespuestas);
  router.post("/registrar", postRespuestas);

  
  export default router;