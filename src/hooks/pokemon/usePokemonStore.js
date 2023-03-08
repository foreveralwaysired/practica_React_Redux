import { useDispatch, useSelector } from "react-redux";
import { onChangeName } from "../../store/slice/pokemon/pokemonSlice";

export const usePokemonStore = () => {
    const { nombre } = useSelector((state) => state.pokemon);
    const dispatch = useDispatch();

    const ObtenerPokemonId = (id) => {
        if (id === "1") {
            dispatch(onChangeName("Bulbasaur"));
        }
    };

    return {
        /**Propiedades **/
        nombre,
        /**Metodos **/
        ObtenerPokemonId,
    };
};