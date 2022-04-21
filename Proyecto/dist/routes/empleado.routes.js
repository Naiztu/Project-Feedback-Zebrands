"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _empleado = require("../controllers/empleado.controller");

var router = (0, _express.Router)();
router.get("/all", _empleado.getAllEmpleado);
router.get("/me", _empleado.getCurrentEmpleado);
router.get("/:id_empleado", _empleado.getEmpleado);
router.post("/", _empleado.postEmpleado);
router.put("/updateCM", _empleado.updateChapterMember);
router.put("/updateCMCL", _empleado.updateCMasCL);
var _default = router;
exports["default"] = _default;