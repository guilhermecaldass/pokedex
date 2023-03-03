import React from "react";
import style from './Footer.module.css'
import img from '../imgs/imgFooter.png'

const Footer = () => {
  return (
    <footer className={style.footer}>
      <p className={style.p}>
        Este é um projeto que manipula a PokéApi uma api de pokemons. Ela é uma API
        publica, e esse projeto não tem fins lucrativos.
      </p>
      <img className={style.imgFooter} src={img} alt='pokeball'></img>
      <p className={style.p}>Desenvolvedor: Guilherme Caldas</p>
    </footer>
  );
};

export default Footer;
