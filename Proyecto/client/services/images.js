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
