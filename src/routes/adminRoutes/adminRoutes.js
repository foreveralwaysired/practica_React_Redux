import { PokemonPage } from "../../pages/pokemonPage";

export const adminRoutes = [
    {
        to: "principal",
        path: "/",
        Component: "",
    },
    {
        to: "user",
        path: "user",
        Component: PokemonPage,
    },
];
