import api from "./api";

export async function getAsignados() {
    try {
        const { data } = await api.get(`/assistant_list`);
        return data;
    } catch (error) {
        throw { error }
    }

}