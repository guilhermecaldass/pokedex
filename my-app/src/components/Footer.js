import React from "react";
import style from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={style.footer}>
      <p>
        Este é um projeto que manipula a PokéApi uma api de pokemons. Ela é uma API
        publica, e esse projeto não tem fins lucrativos.
      </p>
    </footer>
  );
};

export default Footer;
