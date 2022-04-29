import api from "./api";

export async function getFeedbackLead() {
  try {
    const { data } = await api.get("/feedback");
    return data;
  } catch (error) {
    throw { error };
  }
}

export async function getDataToGraph(id) {
  try {
    const { data } = await api.get(`/feedback/graph/get/${id}`);
    return data;
  } catch (error) {
    throw { error };
  }
}
