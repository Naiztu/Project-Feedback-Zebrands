import api from "./api";

export async function postAsignados(body) {
  try {
    const res = await api.post("/evaluar", body);
    return res;
  } catch (error) {
    throw { error };
  }
}
export async function getPendientes(id_periodo, id_user) {
  try {
    const { data } = await api.get(`/evaluar/${id_periodo}/${id_user}`);
    return data;
  } catch (error) {
    throw { error };
  }
}

export async function getEvaluaciones(id_periodo, id_user) {
  try {
    const res = await api.get(`/evaluar/all/${id_periodo}/${id_user}`);
    return res.data;
  } catch (error) {
    throw { error };
  }
}

export async function getResumenData (id_periodo, id_user) {
  try {
    const {data} = await api.get(`/evaluar/resumen/${id_periodo}/${id_user}`);
    return data;
  } catch (error) {
    throw { error };
  }
}
