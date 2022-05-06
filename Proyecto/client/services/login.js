import api from "./api";

export async function getAuth(body) {
  try {
    const { data } = await api.post("/login/auth", body);
    return data;
  } catch (error) {
    throw { error };
  }
}
