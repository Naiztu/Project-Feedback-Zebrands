const { Router } = require("express");
const { getEmpleado } = require("../controllers/empleado.controller");

const router = Router();

router.get("/:id_empleado", getEmpleado);

module.exports = router;
