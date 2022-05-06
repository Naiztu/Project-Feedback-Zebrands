import api from "./api";

export async function getAsignados(id) {
  try {
    const { data } = await api.get(`/assistant_list/${id}`);
    return data;
  } catch (error) {
    throw { error };
  }
}

export async function postAsignacion(body) {
  try {
    const { data } = await api.post(`/rol/asignacion`, body);
    return data;
  } catch (error) {
    throw { error };
  }
}
