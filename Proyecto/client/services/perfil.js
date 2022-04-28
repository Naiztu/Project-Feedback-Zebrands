import api from "./api";

export async function getPerfil(id) {
    try {
      const { data } = await api.get(`/perfil/${id}`);
      return data;
    } catch (error) {
      throw { error };
    }
  }

  export async function updateChapterMember(body) {
    try {
      const res = await api.put("/empleado/updateCM", body);
      return res;
    } catch (error) {
      throw { error };
    }
  }
