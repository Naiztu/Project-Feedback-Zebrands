import api from "./api";

export async function desasignar(body) {
  try {
    const { data } = await api.put(`assistant_list/desasignar`,body );
    return data;
  } catch (error) {
    throw { error };
  }
}