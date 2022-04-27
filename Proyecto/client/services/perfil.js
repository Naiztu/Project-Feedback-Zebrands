import api from "./api";

export async function getPerfil(id) {
  try {
    const res = await api.get(`/perfil/${id}`);
    console.log(res);
    return res.data;
  } catch (error) {
    throw { error };
  }
}
