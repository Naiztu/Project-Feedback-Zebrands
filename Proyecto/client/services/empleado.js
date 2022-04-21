import api from "./api"
import Cookies from "js-cookie"

export async function currentEmpleado() {
    const token = Cookies.get("token")
    if (token) {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`
    } else {
        throw {
            error: {
                message: "Token missing"
            }
        }
    }
    try {
        const { data } = await api.get("/empleado/me");
        return data;
    } catch (error) {
        console.log(error)
        throw { error }
    }
}

export async function getEmpleado(id) {
    try {
        const { data } = await api.get(`/empleado/${id}`);
        return data;
    } catch (error) {
        throw { error }
    }
}

export async function getAllEmpleados(page) {
    try {
        const { data } = await api.get(`/empleado/all`)
        console.log(data)
        return data;
    } catch (error) {
        console.log(error)
        throw { error }
    }

}