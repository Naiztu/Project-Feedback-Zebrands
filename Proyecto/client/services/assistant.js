import api from "./api";

export async function desasignar(body) {
  try {
    const { data } = await api.put(`/assistant_list/desasignar`, body);
    return data;
  } catch (error) {
    throw { error };
  }
}

export async function getMyAssistant(id) {
  try {
    const res = await api.get(`/assistant_list/myassistant/${id}`);
    return res.data;
  } catch (error) {
    throw { error };
  }
}
