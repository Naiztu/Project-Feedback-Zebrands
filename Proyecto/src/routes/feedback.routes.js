const { Router } = require("express");

const {
  getFeedback,
  getFeedbackHistory,
  postFeedback,
  getAllFeedbacks,
} = require("../controllers/feedback.controller");

const router = Router();

router.get("/:id_user/:id_periodo", getFeedback);
router.get("/:id_user", getFeedbackHistory);
router.get("/", getAllFeedbacks);
router.post("/:id_assistant/:id_member", postFeedback);

module.exports = router;
