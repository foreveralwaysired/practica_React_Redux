import { configuracionTemaSlice } from "./configuracionTemaSlice/configuracionTemaSlice";
import { authSlice } from "./authSlice/authSlice";
import { pokemonSlice } from "./pokemon/pokemonSlice";

export const sliceRoot = {
  configuracionTema: configuracionTemaSlice.reducer,
  auth: authSlice.reducer,
  pokemon: pokemonSlice.reducer,
};
