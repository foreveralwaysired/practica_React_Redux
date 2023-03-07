import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   habilidades: []
};

export const pokemonSlice = createSlice({
    name: "pokemon", initialState,
    reducers: {
        onChangeHabilidades: (state, { payload }) => {
            state.habilidades = payload;
        }
    },
})

export const { onChangeHabilidades,} = pokemonSlice.actions;