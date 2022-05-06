import api from "./api";

export async function getPerfil(id) {
  try {
    const res = await api.get(`/perfil/${id}`);
    return res.data;
  } catch (error) {
    throw { error };
  }
}

export async function updatePass(body) {
  try {
    const res = await api.put("/empleado/updatePass", body);
    return res;
  } catch (error) {
    throw { error };
  }
}
