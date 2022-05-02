import api from "./api";

export async function getFeedbackLead() {
  try {
    const { data } = await api.get(`/feedback/`);
    return data;
  } catch (error) {
    throw { error };
  }
}
export async function getLastFeedback() {
  try {
    const { data } = await api.get(`/feedback/last`);
    return data;
  } catch (error) {
    throw { error };
  }
}

export async function getFeedbackHistory(id) {
  try {
    const res = await api.get(`/feedback/${id}`);
    return res.data;
  } catch (err) {
    throw { error };
  }
}

export async function getFeedback(id_user, id_periodo) {
  try {
    const res = await api.get(`/feedback/${id_user}/${id_periodo}`);
    return res.data;
  } catch (error) {
    throw { error };
  }
}

export async function getDataToGraph(id) {
  try {
    const { data } = await api.get(`/feedback/${id}/graph`);
    return data;
  } catch (error) {
    throw { error };
  }
}

export async function getAVGLead() {
  try {
    const { data } = await api.get(`/feedback/generalgraph`);
    return data;
  } catch (error) {
    throw { error };
  }
}
