import api from "./api";

export async function postImage(formData) {
  try {
    const res = await api.post("/images", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data;
  } catch (error) {
    throw error;
  }
}

export async function postDefault() {
  try {
    const res = await api.post("/default");
    return res;
  } catch (error) {
    throw error;
  }
}
