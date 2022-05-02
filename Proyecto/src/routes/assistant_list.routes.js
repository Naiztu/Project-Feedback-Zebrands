import { Router } from "express";

import {
  getAssistantList,
  updateAssistant,
  getVigente,
  getMyAssistantID,
} from "../controllers/assistant_list.controller";

const router = Router();

router.get("/:id_assistant", getAssistantList);
router.put("/desasignar", updateAssistant);
router.get("/vigente/:id_member", getVigente);
router.get("/getMyAssistantId/:id_member", getMyAssistantID);

export default router;
