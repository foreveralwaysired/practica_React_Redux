import {clientAxios} from "../config/axiosConfig";

export const getPokemons = async (id) => {
    const response = await clientAxios.get(`/pokemon/${id}`);
    return response.data;
}