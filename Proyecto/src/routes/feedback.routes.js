const { Router } = require("express");

const { getFeedback, postFeedback } = require("../controllers/feedback.controller");

const router = Router();

router.get("/:id_user/:id_periodo", getFeedback);
router.post("/:id_assistant/:id_member", postFeedback);

module.exports = router;
