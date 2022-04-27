import Axios from "axios";

const api = Axios.create({
  baseURL: process.env.HOSTBACK,
});

export default api;
