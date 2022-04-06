import { Router } from "express";
import {
  getEmpleado,
  getAllEmpleado,
} from "../controllers/empleado.controller";

const router = Router();

router.get("/:id_empleado", getEmpleado);
router.get("/", getAllEmpleado);

export default router;
