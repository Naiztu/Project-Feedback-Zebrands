import { Router } from "express";

import { getAssistantList } from "../controllers/assistant_list.controller";

const router = Router();

router.get("/:id_assistant", getAssistantList);

export default router;
