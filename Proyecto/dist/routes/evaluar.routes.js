"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _evaluar = require("../controllers/evaluar.controller");

var router = (0, _express.Router)();
router.get("/:id_periodo/:id_user", _evaluar.getEvaluarPendiente);
router.get("/all/:id_periodo/:id_user", _evaluar.getAllEvaluar);
router.post("/", _evaluar.postAsignarCompaniero);
var _default = router;
exports["default"] = _default;