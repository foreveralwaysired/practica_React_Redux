import React from 'react';
import { Provider } from 'react-redux';
import { AppRoutes } from './routes/appRoutes';
import { store } from './store/store';

export const PokemonApp = () => {

    return (
        <Provider store={store}>
            <AppRoutes />
        </Provider>
    );
}

export default PokemonApp;

