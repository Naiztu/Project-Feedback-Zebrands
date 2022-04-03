const { Router } = require("express");

const {
  getEvaluarPendiente,
  postAsignarCompaniero,
} = require("../controllers/evaluar.controller");

const router = Router();

router.get("/:id_periodo/:id_user", getEvaluarPendiente);
router.post("/", postAsignarCompaniero);

export default router;
