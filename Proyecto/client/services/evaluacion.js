import api from "./api";



export async function postAsignados(body) {
    try {
        const res = await api.post("/evaluar", body);
        return res;
    } catch (error) {
        throw { error }
    }

}
export async function getPendientes(id_periodo, id_user) {

    try {
        const { data: data_evalua } = await api.get(`/evaluar/${id_periodo}/${id_user}`);
        return data_evalua
    } catch (error) {
        throw { error }
    }
}