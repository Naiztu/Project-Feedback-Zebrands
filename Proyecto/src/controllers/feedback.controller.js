import {
  get_AllFeedbacks,
  get_Feedback,
  get_FeedbackHistory,
  post_Feedback,
} from "../models/feedback.model";

export async function getFeedback(req, res) {
  const { id_user, id_periodo } = req.params;
  const feedback = new get_Feedback(id_user, id_periodo);
  try {
    const data_feedback = await feedback.getDataFeedback();
    res.send({ data_feedback });
  } catch (err) {
    res.status(500).send({ err });
  }
}

export async function getFeedbackHistory(req, res) {
  const { id_user } = req.params;
  const feedbackHistory = new get_FeedbackHistory(id_user);
  try {
    const data_feedbackHistory = await feedbackHistory.getDataHistoryFeedback();
    res.status(200).send({ data_feedbackHistory });
  } catch (err) {
    res.status(500).send({ err });
  }
}

export async function getAllFeedbacks(req, res) {
  try {
    const data_feedbackAll = await get_AllFeedbacks.getDataAllFeedback();
    res.send({ data_feedbackAll });
  } catch (err) {
    res.status(500).send({ err });
  }
}

export async function postFeedback(req, res) {
  const {
    calificacion_craft,
    calificacion_personal,
    calificacion_business,
    calificacion_promedio,
    comentario_craft,
    comentario_personal,
    comentario_business,
    comentario_general,
    id_member,
    id_assistant,
    id_periodo,
  } = req.body;
  const postfeedback = new post_Feedback(
    calificacion_craft,
    calificacion_personal,
    calificacion_business,
    calificacion_promedio,
    comentario_craft,
    comentario_personal,
    comentario_business,
    comentario_general,
    id_member,
    id_assistant,
    id_periodo
  );
  try {
    const data_post_feedback = await postfeedback.postDataFeedback();
    res.send({ data_post_feedback });
  } catch (err) {
    res.status(500).send({ err });
  }
}
