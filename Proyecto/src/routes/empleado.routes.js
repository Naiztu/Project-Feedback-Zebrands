import { Router } from "express";
import {
  getEmpleado,
  getAllEmpleado,
  postEmpleado,
  updateChapterMember,
} from "../controllers/empleado.controller";

const router = Router();

router.get("/:id_empleado", getEmpleado);
router.get("/", getAllEmpleado);
router.post("/", postEmpleado)
router.put("/updateCM", updateChapterMember)

export default router;
