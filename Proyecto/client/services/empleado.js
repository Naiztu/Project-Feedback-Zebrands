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
    console.log("Services: " + data);
    return data;
  } catch (error) {
    console.log(error);
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

export async function getEmpleadosNotRequested(page, filterName, id_periodo) {
  if (filterName === "") {
    filterName = 0;
  }
  try {
    const { data } = await api.get(
      `/empleado/notrequested/${page}/${filterName}/${id_periodo}`
    );
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
    return data;
  } catch (error) {
    console.log(error);
    throw { error };
  }
}
export async function getEmpleadosNotAssigned(page, filterName) {
  console.log("iawdojijeaodj");
  if (filterName === "") {
    filterName = 0;
  }
  try {
    const { data } = await api.get(
      `/empleado/get/notassigned/${page}/${filterName}`
    );
    return data;
  } catch (error) {
    console.log(error);
    throw { error };
  }
}

export async function createMember(body) {
  try {
    const res = await api.post(`/empleado`, body);
    return (res.data);
  } catch (error) {
    console.log(error);
    throw { error };
  }
}


export async function updateMember(body) {
  try {
    const data_up = await api.put("/empleado/update", body);
    return data_up;
  } catch (error) {
    throw { error };
  }
}

