import api from "./api";

export async function getIdPeriodo(id_chapter) {
  try {
    const res = await api.get(`/periodo/currentperiodo/${id_chapter}`);
    return res.data;
  } catch (error) {
    throw { error };
  }
}
export async function postPeriodo(id_chapter) {
  try {
  } catch (error) {}
}
