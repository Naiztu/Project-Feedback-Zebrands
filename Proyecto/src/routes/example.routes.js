//Ejemplo de la estructura de las rutas

import { Router } from "express";
import { getExample, updateExample } from "../controllers/example.controller";

const router = Router();

router.get("/", getExample);
router.put("/", updateExample);

export default router;
