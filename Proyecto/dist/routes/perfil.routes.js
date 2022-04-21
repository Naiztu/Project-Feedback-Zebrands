"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _perfil = require("../controllers/perfil.controller");

var router = (0, _express.Router)();
router.get("/:id_empleado", _perfil.getPerfil);
var _default = router;
exports["default"] = _default;