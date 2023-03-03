import {clientAxios} from "../config/axiosConfig";

export const getPokemons = async () => {
    const response = await clientAxios.get("/pokemon");
    return response.data;
}