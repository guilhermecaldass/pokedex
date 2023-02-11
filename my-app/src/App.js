import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Loading from './components/Loading';
import Pokedex from './components/Pokedex';
import getpokemons from './services/pokeapi';

function App() {
  const [pokemons, setPokemons] = useState(null);

  useEffect(() => {
    async function fetchPokemons() {
      const pokemon = await getpokemons();
      setPokemons(pokemon.results);
    }
    fetchPokemons();
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="pokedex">
        {!pokemons ? <Loading /> : (
          <>
            {pokemons.map(pokemon => (
              <Pokedex key={pokemon.name} name={pokemon.name} url={pokemon.url} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default App;