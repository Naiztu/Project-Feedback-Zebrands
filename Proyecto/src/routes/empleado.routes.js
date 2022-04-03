import { Router } from "express";
import { getEmpleado } from "../controllers/empleado.controller";

const router = Router();

router.get("/:id_empleado", getEmpleado);

export default router;
