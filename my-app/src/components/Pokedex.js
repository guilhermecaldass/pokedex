import React from 'react'
import style from './Pokedex.module.css'
import { useState, useEffect } from 'react';


const Pokedex = ({name, url}) => {
  const [sprite, setSprite] = useState(null);

  useEffect(() => {
    const fetchSprite = async () => {
      const response = await fetch(url);
      const pokemon = await response.json();
      setSprite(pokemon.sprites.front_default);
    };
    fetchSprite();
  }, [url]);

  return (
    
    <div className={style.pokemon}>
    
    

    <img className={style.pokeImg} src={sprite} alt={name}></img>

    <p className={style.pokeInf}>
    {name}
    </p>
    

    </div>
  )
}

export default Pokedex
