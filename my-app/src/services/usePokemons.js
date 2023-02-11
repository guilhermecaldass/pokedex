import { useEffect, useState } from "react";
import getpokemons from "./pokeapi";

const usePokemons=()=>{

    const [pokemon, setPokemons] =useState(null)

    useEffect(() => {
        const fetchPokemons= async()=> {
            const pokemon = await getpokemons()
            setPokemons(pokemon.results)
        }
        fetchPokemons()
    }, [])
    return pokemon
}

export default usePokemons