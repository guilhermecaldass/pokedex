import React from 'react'
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
    <div className='pokemon'>
    
    
    <p>
    {name}
    </p>

    <img src={sprite} alt={name}></img>

    

    </div>
  )
}

export default Pokedex
