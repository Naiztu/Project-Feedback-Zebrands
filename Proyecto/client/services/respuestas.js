import api from "./api";


export async function enviarRespuestas(body) {
    try {
        const res = await api.post(`/respuestas/registrar`, body);
        return res;
    } catch (error) {

    }
}