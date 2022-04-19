import api from "./api";

export async function getPreguntaNivelDimension(nivel, dimension) {
    try {
        const { data } = await api.get(`/preguntas/${nivel}/${dimension}`);
        return data;
    } catch (err) {
        throw { err }
    }
}