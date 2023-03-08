import "./App.css";
import Header from "./components/Header";
import Loading from "./components/Loading";
import Pokedex from "./components/Pokedex";
import Footer from "./components/Footer";
import usePokemons from "./services/usePokemons";
import img from './imgs/imgFooter.png'

const App=()=> {
  const pokemons = usePokemons();

  return (
    <div className="App">
      {/* <img src='' className="capa">

      </img> */}
      <Header />
      <div className="pokedex">

        {!pokemons ? <Loading />  : 
        (
          <>
            {pokemons.map((pokemon) => (
              <Pokedex
                key={pokemon.name}
                name={pokemon.name}
                url={pokemon.url}
              />
          ))}
          </>
        )}

      </div>
        <Footer />
      <img  style={{margin:'15px'}} className='img' src={img} alt='pokeball'></img>
    </div>
  );
}

export default App;
