import axios from "axios";

export const clientAxios = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
});