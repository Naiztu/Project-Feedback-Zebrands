import Axios from "axios";

const api = Axios.create({
    baseURL: process.env.HOSTBACK,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

export default api;