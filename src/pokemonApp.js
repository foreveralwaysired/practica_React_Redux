import React from 'react'
import { Provider } from 'react-redux';
import { store } from './sotre/store'

const PokemonApp = () => {

    return (
        <Provider store={store}>
            <AppRoutes />
        </Provider>
    );
}

export default PokemonApp;

