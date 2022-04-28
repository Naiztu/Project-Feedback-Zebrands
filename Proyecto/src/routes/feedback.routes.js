import { Router } from "express";

import {
  getFeedback,
  getFeedbackHistory,
  postFeedback,
  getAllFeedbacks,
  getFeedbackGraph,
} from "../controllers/feedback.controller";

const router = Router();

router.get("/:id_user/graph", getFeedbackGraph);
router.get("/:id_user/:id_periodo", getFeedback);
router.get("/:id_user", getFeedbackHistory);
router.get("/", getAllFeedbacks);
router.post("/", postFeedback);

// /feedback/graph/get/${iduser}

export default router;
