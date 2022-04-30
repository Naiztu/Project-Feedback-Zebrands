import { Router } from "express";
import {
  postAsignacion,
  getRol
} from "../controllers/rol.controller";

const router = Router();

router.post("/asignacion", postAsignacion);
router.get("/:id_empleado",getRol);

export default router;
