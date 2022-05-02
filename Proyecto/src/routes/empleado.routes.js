import { Router } from "express";
import {
  getEmpleado,
  getAllEmpleado,
  getSearchEmpleado,
  postEmpleado,
  updatePass,
  updateCMasCL,
  getCurrentEmpleado,
  getNotAssigned,
  getNotRequested,
  updateActivo,
  updateEmpleado,
} from "../controllers/empleado.controller";
import onlyLead from "../middlewares/onlyLead";

const router = Router();

router.post("/", onlyLead, postEmpleado);
router.put("/updatePass", updatePass);
router.put("/updateCMCL", updateCMasCL);
router.get("/get/notassigned/:page/:filterName", getNotAssigned);
router.get("/all", getAllEmpleado);
router.get("/notrequested/:page/:filterName/:id_periodo", getNotRequested);
router.get("/search/:page/:filterName", getSearchEmpleado);
router.get("/me", getCurrentEmpleado);
router.get("/:id_empleado", getEmpleado);
router.put("/desactivar", updateActivo);
router.put("/update", updateEmpleado);

export default router;
