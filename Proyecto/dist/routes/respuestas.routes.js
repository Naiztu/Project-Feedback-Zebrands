"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _respuestas = require("../controllers/respuestas.controller");

var router = (0, _express.Router)();
router.get("/:id_evaluador/:id_evaluado/:id_periodo", _respuestas.getRespuestas);
router.post("/registrar", _respuestas.postRespuestas);
var _default = router;
exports["default"] = _default;