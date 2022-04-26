import api from "./api";
import Cookies from "js-cookie";
import { filter } from "../../src/util/query";

export async function currentEmpleado() {
  const token = Cookies.get("token");
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    throw {
      error: {
        message: "Token missing",
      },
    };
  }
  try {
    const { data } = await api.get("/empleado/me");
    return data;
  } catch (error) {
    console.log(error);
    throw { error };
  }
}

export async function getEmpleado(id) {
  try {
    const { data } = await api.get(`/empleado/${id}`);
    return data;
  } catch (error) {
    throw { error };
  }
}

export async function getAllEmpleados(page,filterName) {
  try {
    const { data } = await api.get(`/empleado/all/${page}/${filterName}`);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    throw { error };
  }
}

export async function getEmpleadosNotAsigned(page,filterName) {
  if (filterName === "") {
    filterName = 0;
  }
  try {
    const { data } = await api.get(`empleado/notAsigned/${page}/${filterName}`);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    throw { error };
  }
}

export async function getFilterEmpleados(page, filterName) {
  if (filterName === "") {
    filterName = 0;
  }
  try {
    const { data } = await api.get(`/empleado/search/${page}/${filterName}`);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    throw { error };
  }
}
