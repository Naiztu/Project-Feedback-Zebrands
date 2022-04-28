import { Router } from "express";
import {
  getEmpleado,
  getAllEmpleado,
  getSearchEmpleado,
  postEmpleado,
  updateChapterMember,
  updateCMasCL,
  getCurrentEmpleado,
  getNotAssigned,
  getNotRequested
} from "../controllers/empleado.controller";

const router = Router();

router.post("/", postEmpleado);
router.put("/updateCM", updateChapterMember);
router.put("/updateCMCL", updateCMasCL);
router.get("/get/notassigned", getNotAssigned);
router.get("/all", getAllEmpleado);
router.get("/notrequested/:page/:filterName/:id_periodo", getNotRequested);
router.get("/search/:page/:filterName", getSearchEmpleado);
router.get("/me", getCurrentEmpleado);
router.get("/:id_empleado", getEmpleado);


export default router;
