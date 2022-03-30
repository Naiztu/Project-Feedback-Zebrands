const { Router } = require("express");

const { getEvaluarPendiente } = require("../controllers/evaluar.controller");

const router = Router();

router.get("/:id_periodo/:id_user", getEvaluarPendiente);

module.exports = router;
