import { configuracionTemaSlice } from "./configuracionTemaSlice/configuracionTemaSlice";
import { authSlice } from "./authSlice/authSlice";

export const sliceRoot = {
  configuracionTema: configuracionTemaSlice.reducer,
  auth: authSlice.reducer,
};
