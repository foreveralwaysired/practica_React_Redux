import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    habilidades: [],
    id:"",
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
        onChangeId: (state, { payload }) => {
            state.id = payload;
        },
    },
})

export const { onChangeHabilidades, onChangeName, onChangeId } = pokemonSlice.actions;