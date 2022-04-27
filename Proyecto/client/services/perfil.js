import api from "./api";

export async function getPerfil(id) {
    try {
      const { data } = await api.get(`/perfil/${id}`);
      return data;
    } catch (error) {
      throw { error };
    }
  }