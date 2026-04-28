import React from 'react'
import { gql } from '@apollo/client'
import { useQuery } from '@apollo/client/react'
import { GET_POKEMONS } from './queries'

export default function PokemonList() {

    const { data, loading, error } = useQuery(GET_POKEMONS);

    if (loading) return <p>Cargando...</p>
    if (error) return <p>Error</p>

    const pokemons = data?.pokemons || [];

    return (
        <div>
            <h2>Pokémon</h2>
            {pokemons.map((poke) => (
                <div key={ poke.id }>
                    <img src={poke.image} alt="Imagen pokemon" width="90" />
                    <p>{ poke.name }</p>
                </div>
            ))}
        </div>
    )
}
