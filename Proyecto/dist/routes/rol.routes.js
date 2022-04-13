"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _rol = require("../controllers/rol.controller");

var router = (0, _express.Router)();
router.post("/asignacion", _rol.postAsignacion);
router.get("/:id_empleado", _rol.getRol);
var _default = router;
exports["default"] = _default;