import { useDispatch, useSelector } from "react-redux";
import { onChangeId, onChangeName } from "../../store/slice/pokemon/pokemonSlice";

export const usePokemonStore = () => {
    const { nombre } = useSelector((state) => state.pokemon);
    const dispatch = useDispatch();

    const ObtenerPokemonId = (id,nombre) => {
        dispatch(onChangeId(id));
        dispatch(onChangeName(nombre));
    };

    return {
        /**Propiedades **/
        nombre,
        /**Metodos **/
        ObtenerPokemonId,
    };
};