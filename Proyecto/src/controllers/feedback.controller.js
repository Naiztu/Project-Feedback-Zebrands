import { Feedback } from "../models/feedback.model";

export async function getFeedback(req, res) {
  const { id_user, id_periodo } = req.params;
  try {
    const data_feedback = await Feedback.getDataFeedback(id_user, id_periodo);
    res.send({ data_feedback });
  } catch (err) {
    res.status(500).send({ err });
  }
}


export async function getFeedbackGraph(req, res) {
  const { id_user } = req.params;
  try {
    const data_feedbackGraph = await Feedback.getDataFeedbackGraph(id_user);
    res.send({ data_feedbackGraph });
  } catch (err) {
    res.status(500).send({ err });
  }
}


export async function getAllGraph(req, res) {
  const { id_user } = req.params;
  try {
    const data_AllGraph = await Feedback.getDataAllGraph(id_user);
    res.send({ data_AllGraph });
  } catch (err) {
    res.status(500).send({ err });
  }
}


export async function getFeedbackHistory(req, res) {
  const { id_user } = req.params;
  try {
    const data_feedbackHistory = await Feedback.getDataHistoryFeedback(id_user);
    res.send({ data_feedbackHistory });
  } catch (err) {
    res.status(500).send({ err });
  }
}

export async function getAllFeedbacks(req, res) {
  const {
    id_empleado,
    apellido_paterno,
    nivel_business,
    nivel_craft,
    nivel_people,
  } = req.data
  try {
    const data_feedbackAll = await Feedback.getDataAllFeedback();
    res.send({ data_feedbackAll });
  } catch (err) {
    res.status(500).send({ err });
  }

}

export async function postFeedback(req, res) {
  const { calificacion_craft, calificacion_personal, calificacion_business, calificacion_promedio, comentario_craft, comentario_personal, comentario_business, comentario_general, id_member, id_assistant, id_periodo } = req.body;
  const feedback = new Feedback(calificacion_craft, calificacion_personal, calificacion_business, calificacion_promedio, comentario_craft, comentario_personal, comentario_business, comentario_general, id_member, id_assistant, id_periodo);
  try {
    const data_post_feedback = await feedback.postDataFeedback();
    res.send({ data_post_feedback });
  } catch (err) {
    res.status(500).send({ err });
  }
}


