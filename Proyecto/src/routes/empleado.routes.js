import { Router } from "express";
import {
  getEmpleado,
  getAllEmpleado,
  postEmpleado,
} from "../controllers/empleado.controller";

const router = Router();

router.get("/:id_empleado", getEmpleado);
router.get("/", getAllEmpleado);
router.post("/", postEmpleado)

export default router;
