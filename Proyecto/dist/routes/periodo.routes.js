"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _periodo = require("../controllers/periodo.controller");

var router = (0, _express.Router)();
router.post("/newperiodo", _periodo.postPeriodo);
router.put("/fechas", _periodo.cambiaPeriodo);
router.get("/currentperiodo", _periodo.getCurrentPeriodo);
var _default = router;
exports["default"] = _default;