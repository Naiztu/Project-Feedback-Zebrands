import { Router } from "express";
import {
  getEmpleado,
  getAllEmpleado,
  updateNivelEmpleado
} from "../controllers/empleado.controller";

const router = Router();

router.get("/:id_empleado", getEmpleado);
router.get("/", getAllEmpleado);
router.put("/",updateNivelEmpleado);

export default router;
