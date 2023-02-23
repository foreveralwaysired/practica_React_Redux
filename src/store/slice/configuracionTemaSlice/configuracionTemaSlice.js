import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allConfig: null,
    componentTheme: 'blue',
    ripple: true,
    colorSchema: 'dark'
}

export const configuracionTemaSlice = createSlice({
    name: "configuracionTemaSlice", initialState,
    reducers: {
        onChangeAllConfig: (state, { payload }) => {
            state.allConfig = payload;
        },
        onChangeComponentTheme: (state, { payload }) => {
            state.componentTheme = payload;
        },
        onChangeRipple: (state, { payload }) => {
            state.ripple = payload;
        },
        onChangeColorSchema: (state, { payload }) => {
            state.colorSchema = payload;
        },
        onResetConfiguracionTema: () => {
            return initialState;
        }
    }
})

export const {
    onChangeAllConfig,
    onChangeComponentTheme,
    onChangeRipple,
    onChangeColorSchema,
    onResetConfiguracionTema
} = configuracionTemaSlice.actions;