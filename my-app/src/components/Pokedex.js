import React from 'react'
import style from './Pokedex.module.css'
import { useState, useEffect } from 'react';
import PokemonInfo from './pokeInfo';


const Pokedex = ({name, url, type}) => {
  const [sprite, setSprite] = useState(null);
  const [hp, setHp] = useState('')

  useEffect(() => {
    const fetchSprite = async () => {
      const response = await fetch(url);
      const pokemon = await response.json();
      setSprite(pokemon.sprites.front_default);
      setHp(pokemon.stats[0].base_stat)
      
    };
    fetchSprite();
  }, [url]);


  return (
    
    <div className={style.pokemon}>
    
    

    <img className={style.pokeImg} src={sprite} alt={name}></img>

    <p className={style.pokeName}>
    {name}
    </p>

    
    <PokemonInfo hp={hp} type={type}/>

    </div>
  )
}

export default Pokedex
