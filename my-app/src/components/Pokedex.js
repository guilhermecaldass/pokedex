import React from 'react'

const Pokedex = ({name, url}) => {

  return (
    <div className='pokemon'>
    <p>
    {name}
    </p>

    <p>
    {url} 
    </p>
    </div>
  )
}

export default Pokedex
