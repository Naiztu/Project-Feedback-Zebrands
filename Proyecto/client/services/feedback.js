import api from "./api";

export async function getFeedbackLead() {
    try {
        const { data } = await api.get("/feedback");
        return data;
    } catch (error) {
        throw { error }
    }

}