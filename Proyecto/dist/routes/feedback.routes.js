"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _feedback = require("../controllers/feedback.controller");

var router = (0, _express.Router)();
router.get("/:id_user/:id_periodo", _feedback.getFeedback);
router.get("/:id_user", _feedback.getFeedbackHistory);
router.get("/", _feedback.getAllFeedbacks);
router.post("/", _feedback.postFeedback);
var _default = router;
exports["default"] = _default;