"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _preguntas = require("../controllers/preguntas.controller");

var router = (0, _express.Router)();
router.get("/:nivel", _preguntas.getPreguntas);
router.get("/:nivel/:dimension", _preguntas.getPreguntasDimension);
router.post("/registra", _preguntas.registraPregunta);
router["delete"]("/:id_pregunta", _preguntas.eliminaPregunta);
router.put("/index", _preguntas.cambiaIndex);
router.put("/descripcion", _preguntas.updatePregunta);
var _default = router;
exports["default"] = _default;