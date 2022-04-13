"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _assistant_list = require("../controllers/assistant_list.controller");

var router = (0, _express.Router)();
router.get("/:id_assistant", _assistant_list.getAssistantList);
var _default = router;
exports["default"] = _default;