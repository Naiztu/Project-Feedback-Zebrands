import { Router } from "express";
import leadAssistantMe from "../middlewares/leadAssistantMe";

import {
  getFeedback,
  getFeedbackHistory,
  postFeedback,
  getAllFeedbacks,
  getFeedbackGraph,
  getAllGraph,
  getLastFeedback,
} from "../controllers/feedback.controller";

const router = Router();

router.get("/", getAllFeedbacks);
router.get("/last", getLastFeedback);
router.get("/generalgraph", getAllGraph);
router.get("/:id_user/graph", getFeedbackGraph);
router.get("/:id_user/:id_periodo", getFeedback);
router.get("/:id_user", leadAssistantMe, getFeedbackHistory);
router.post("/", postFeedback);

// /feedback/graph/get/${iduser}

export default router;
