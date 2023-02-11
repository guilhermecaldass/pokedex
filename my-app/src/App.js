import './App.css';
import Header from './components/Header';
import Loading from './components/Loading';
import Pokedex from './components/Pokedex';
import usePokemons from './services/usePokemons';

function App() {
  
  const pokemons = usePokemons()

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




