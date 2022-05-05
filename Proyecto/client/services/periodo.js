import api from "./api";

export async function getIdPeriodo(id_chapter) {
  try {
    const res = await api.get(`/periodo/currentperiodo/${id_chapter}`);
    return res.data;
  } catch (error) {
    throw { error };
  }
}

export async function postPeriodo(body) {
  try {
    const res = await api.post("/periodo/newperiodo", body);
    return res.data;
  } catch (error) {
    throw { error };
  }
}

export async function getAllPeriodos(id_chapter) {
  try {
    const res = await api.get(`/periodo/periodos/${id_chapter}`);
    return res.data;
  } catch (error) {
    throw { error };
  }
}

export async function updateEstatus(body) {
  try {
    const res = await api.put(`/periodo/update_estatus`, body);
    return res.data;
  } catch (error) {
    throw { error };
  }
}
