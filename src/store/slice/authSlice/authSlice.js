import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    usuarioData: null,
    perfiles: null,
    configuracionTemplate: null,
}

export const authSlice = createSlice({
    name: "auth", initialState,
    reducers: {
        onChangeUsuarioData: (state, { payload }) => {
            state.allConfig = payload;
        },
        onChangePerfiles: (state, { payload }) => {
            state.componentTheme = payload;
        },
        onChangeConfiguracionTemplate: (state, { payload }) => {
            state.ripple = payload;
        },
        onResetAuthSlice: () => {
            return initialState;
        }
    }
})

export const {
    onChangeUsuarioData,
    onChangePerfiles,
    onChangeConfiguracionTemplate,
    onResetAuthSlice,
} = authSlice.actions;