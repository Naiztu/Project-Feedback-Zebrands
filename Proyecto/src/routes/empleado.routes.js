import { Router } from "express";
import {
  getEmpleado,
  getAllEmpleado,
  postEmpleado,
  updateChapterMember,
  updateCMasCL,
} from "../controllers/empleado.controller";

const router = Router();

router.get("/:id_empleado", getEmpleado);
router.get("/", getAllEmpleado);
router.post("/", postEmpleado)
router.put("/updateCM", updateChapterMember)
router.put("/updateCMCL", updateCMasCL)

export default router;
