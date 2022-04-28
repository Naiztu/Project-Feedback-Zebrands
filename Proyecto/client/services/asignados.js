import api from "./api";

export async function getAsignados(id) {
  try {
    const { data } = await api.get(`/assistant_list/${id}`);
    console.log(data)
    return data;
  } catch (error) {
    throw { error };
  }
}
