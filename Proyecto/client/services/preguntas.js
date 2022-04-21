import axios from "axios";
import api from "./api";

export async function getPreguntaNivelDimension(nivel, dimension) {
    try {
        const { data } = await api.get(`/preguntas/${nivel}/${dimension}`);
        return data;
    } catch (err) {
        throw { err }
    }
}
export async function getPreguntasToEmpleado(nivel_business, nivel_craft, nivel_people) {
    const peticiones = [
        `/preguntas/${Math.trunc(nivel_craft)}/craft`,
        `/preguntas/${Math.trunc(nivel_people)}/people`,
        `/preguntas/${Math.trunc(nivel_business)}/business`,
    ];

    try {
        const res = await axios.all(peticiones.map((item) => api.get(item)));
        return res[0].data.preguntas.concat(res[1].data.preguntas).concat(res[2].data.preguntas)
    } catch (err) {
        throw { err }
    }
};