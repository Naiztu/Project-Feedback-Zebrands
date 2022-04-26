import { Router } from "express";
import {
  getEmpleado,
  getAllEmpleado,
  notAsigned,
  getSearchEmpleado,
  postEmpleado,
  updateChapterMember,
  updateCMasCL,
  getCurrentEmpleado
} from "../controllers/empleado.controller";

const router = Router();

router.get("/all/:page/:filterName", getAllEmpleado);
router.get("/search/:page/:filterName", getSearchEmpleado);
router.get("/notAsigned/:page/:filterName", notAsigned);
router.get("/me", getCurrentEmpleado);
router.get("/:id_empleado", getEmpleado);
router.post("/", postEmpleado)
router.put("/updateCM", updateChapterMember)
router.put("/updateCMCL", updateCMasCL)

export default router;
