import { Router } from "express";

import {
  getFeedback,
  getFeedbackHistory,
  postFeedback,
  getAllFeedbacks,
} from "../controllers/feedback.controller";

const router = Router();

router.get("/:id_user/:id_periodo", getFeedback);
router.get("/:id_user", getFeedbackHistory);
router.get("/", getAllFeedbacks);
router.post("/", postFeedback);

export default router;
