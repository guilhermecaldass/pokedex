import React from "react";
import style from './Footer.module.css'
import img from '../imgs/icons8-github-90.png'


const Footer = () => {
  return (
    <footer className={style.footer}>
      <p className={style.p}>
        Este é um projeto que manipula a PokéApi uma api de pokemons. Ela é uma API
        publica, e esse projeto não tem fins lucrativos.
      </p>
      <nav>
        <a href='https://github.com/guilhermecaldass' target='blank' > <img className={style.imgFooter} alt="gitHub" src={img}/></ a>
      </nav>
    
      <p className={style.p}>Desenvolvedor: Guilherme Caldas</p>
    </footer>
  );
};

export default Footer;
