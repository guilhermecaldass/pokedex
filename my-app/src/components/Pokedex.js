import React from "react";
import style from "./Pokedex.module.css";
import { useState, useEffect } from "react";
import PokeInfo from "./pokeInfo";


const Pokedex = ({ name, url }) => {
  const [pokeImg, setPokeImg] = useState(null);
  const [hp, setHp] = useState(null);
  const [type, setType] = useState(null);


  useEffect(() => {
    const fetchInfo = async () => {
      const response = await fetch(url);
      const pokemon = await response.json();
      setPokeImg(pokemon.sprites.front_default);
      setHp(pokemon.stats[0].base_stat);
      setType(pokemon.types[0].type.name);
    };
    fetchInfo();
  }, [url]);

  return (
    <div className={style.pokemon}>
     

      <img className={style.pokeImg} src={pokeImg} alt={`foto de ${name}`}></img>

      <p className={style.pokeName}>{name}</p>

      <PokeInfo hp={hp} type={type} />
    </div>
  );
};

export default Pokedex;
