const { Router } = require("express");

const { getFeedback } = require("../controllers/feedback.controller");

const router = Router();

router.get("/:id_user/:id_periodo", getFeedback);

module.exports = router;
