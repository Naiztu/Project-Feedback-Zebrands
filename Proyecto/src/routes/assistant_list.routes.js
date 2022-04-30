import { Router } from "express";

import { getAssistantList, updateAssistant, getVigente} from "../controllers/assistant_list.controller";

const router = Router();

router.get("/:id_assistant", getAssistantList);
router.put("/desasignar", updateAssistant);
router.get("/vigente/:id_member", getVigente);

export default router;
