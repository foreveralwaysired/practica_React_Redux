import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    habilidades: [],
    nombre: "",
};

export const pokemonSlice = createSlice({
    name: "pokemon", initialState,
    reducers: {
        onChangeHabilidades: (state, { payload }) => {
            state.habilidades = payload;
        },
        onChangeName: (state, { payload }) => {
            state.nombre = payload;
        },
    },
})

export const { onChangeHabilidades, onChangeName } = pokemonSlice.actions;