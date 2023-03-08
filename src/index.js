import React from 'react';
import { createRoot } from 'react-dom/client';
import PokemonApp from './pokemonApp';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <PokemonApp />
);