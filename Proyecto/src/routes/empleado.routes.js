import { Router } from "express";
import {
  getEmpleado,
  getAllEmpleado,
  postEmpleado,
  updateChapterMember,
  updateCMasCL,
  getCurrentEmpleado
} from "../controllers/empleado.controller";

const router = Router();

router.get("/all", getAllEmpleado);
router.get("/me", getCurrentEmpleado);
router.get("/:id_empleado", getEmpleado);
router.post("/", postEmpleado)
router.put("/updateCM", updateChapterMember)
router.put("/updateCMCL", updateCMasCL)

export default router;
