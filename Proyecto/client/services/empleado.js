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
    console.log("Services: "+data);
    return data;
  } catch (error) {
    console.log(error)
    throw { error };
  }
}

export async function getAllEmpleados(page, id_periodo) {
  try {
    const { data } = await api.get(`/empleado/all`);
    //console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    throw { error };
  }
}

export async function getFilterEmpleados(page, filterName, id_periodo) {
  if (filterName === "") {
    filterName = 0;
  }
  try {
    const { data } = await api.get(
      `/empleado/search/${page}/${filterName}/${id_periodo}`
    );
    ;console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    throw { error };
  }
}
