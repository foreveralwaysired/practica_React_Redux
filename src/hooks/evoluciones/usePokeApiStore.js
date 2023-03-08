import { useState } from 'react';
import { getPokemons } from '../../services/ApiPokemon';
export const usePokeApiStore = () => {
    const [pokemons, setPokemons] = useState([]);

    const getPokemon = (pokemon) => {
        getPokemons(pokemon).then((response) => {
            setPokemons(response.data);
        });
    }

    

    return {
        /**Propiedades **/
        pokemons,

        /**Metodos **/
        getPokemon
    };
}