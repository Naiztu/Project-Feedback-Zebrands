import { Router } from "express";

import {
  getFeedback,
  getFeedbackHistory,
  postFeedback,
  getAllFeedbacks,
  getFeedbackGraph
} from "../controllers/feedback.controller";

const router = Router();

router.get("/:id_user/:id_periodo", getFeedback);
router.get("/:id_user", getFeedbackHistory);
router.get("/", getAllFeedbacks);
router.post("/", postFeedback);
router.get("/graph/get/:id_user", getFeedbackGraph);

export default router;
