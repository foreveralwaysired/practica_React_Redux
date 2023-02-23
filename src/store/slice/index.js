import { authSlice } from "./authSlice/authSlice";
import { configuracionTemaSlice } from "./configuracionTemaSlice/configuracionTemaSlice";

export const sliceRoot = {
    configuracionTema: configuracionTemaSlice.reducer,
    auth: authSlice.reducer,
}