import React from 'react'
import { PokemonForm } from '../components/pokemon/pokemonForm'

export const PokemonPage = () => {
    return (
        <div className='card'>
            <h1 className='text-center'>Pokemon</h1>
            <div className='grid'>
                <div className='col-12'>
                    <PokemonForm />
                </div>
            </div>
        </div>
    )
}
