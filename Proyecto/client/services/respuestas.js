import api from "./api";

export async function enviarRespuestas(body) {
  try {
    const res = await api.post(`/respuestas/registrar`, body);
    return res;
  } catch (error) {}
}
export async function getRespuestas(id_evaluador, id_evaluado, id_periodo) {
  try {
    const res = await api.get(
      `/respuestas/${id_evaluador}/${id_evaluado}/${id_periodo}`
    );
    return res.data;
  } catch (error) {
    throw { error };
  }
}
