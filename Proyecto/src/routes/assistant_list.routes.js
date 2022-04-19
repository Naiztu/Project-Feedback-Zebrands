import { Router } from "express";

import { getAssistantList } from "../controllers/assistant_list.controller";

const router = Router();

router.get("/", getAssistantList);

export default router;
