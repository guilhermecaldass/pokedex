import React from 'react'
import style from './Header.module.css'
import img from '../imgs/imgFooter.png'

const Header = () => {
  return (
    <header>
       <img className={style.img} src={img} alt='pokeball'></img>
      <h1 className={style.title}> pokedex</h1>
    </header>
  )
}

export default Header
