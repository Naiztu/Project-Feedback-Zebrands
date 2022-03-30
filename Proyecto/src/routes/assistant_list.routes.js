const { Router } = require("express");

const { getAssistantList } = require("../controllers/assistant_list.controller");

const router = Router();

router.get("/:id_assistant", getAssistantList);

module.exports = router;
