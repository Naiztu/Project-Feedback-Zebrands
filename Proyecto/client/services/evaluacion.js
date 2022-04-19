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
<<<<<<< HEAD
        const { data } = await api.get(`/evaluar/${id_periodo}/${id_user}`);
=======
        const { data} = await api.get(`/evaluar/${id_periodo}/${id_user}`);
>>>>>>> bed6a464331454fa5861b13e0e5dc4ccc2bee225
        return data
    } catch (error) {
        throw { error }
    }
}