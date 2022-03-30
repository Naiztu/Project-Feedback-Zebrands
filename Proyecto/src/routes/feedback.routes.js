const { Router } = require("express");

const { getFeedback, getFeedbackHistory } = require("../controllers/feedback.controller");

const router = Router();

router.get("/:id_user/:id_periodo", getFeedback);
router.get("/:id_user", getFeedbackHistory);

module.exports = router;
