"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _empleado = require("../controllers/empleado.controller");

var router = (0, _express.Router)();
router.get("/:id_empleado", _empleado.getEmpleado);
router.get("/", _empleado.getAllEmpleado);
var _default = router;
exports["default"] = _default;