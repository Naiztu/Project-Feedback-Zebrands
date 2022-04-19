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
        const { data} = await api.get(`/evaluar/${id_periodo}/${id_user}`);
        return data
    } catch (error) {
        throw { error }
    }
}