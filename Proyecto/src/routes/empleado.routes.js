import { Router } from "express";
import {
  getEmpleado,
  getAllEmpleado,
  getSearchEmpleado,
  postEmpleado,
  updatePass,
  updateCMasCL,
  getCurrentEmpleado,
} from "../controllers/empleado.controller";

const router = Router();

router.get("/all", getAllEmpleado);
router.get("/search/:page/:filterName/:id_periodo", getSearchEmpleado);
router.get("/me", getCurrentEmpleado);
router.get("/:id_empleado", getEmpleado);
router.post("/", postEmpleado);
router.put("/updatePass", updatePass);
router.put("/updateCMCL", updateCMasCL);

export default router;
