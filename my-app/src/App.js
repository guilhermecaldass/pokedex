import "./App.css";
import Header from "./components/Header";
import Loading from "./components/Loading";
import Pokedex from "./components/Pokedex";
import Footer from "./components/Footer";
import usePokemons from "./services/usePokemons";
import img from "./imgs/imgFooter.png";
 import imgg from "./imgs/f6a18ac56651ce4f9ca7e0230706a0b6.png";

const App = () => {
  const pokemons = usePokemons();

  return (
    <div className="App">
      <div>

      <img src={imgg} alt="" className="capa"></img>
      </div>
      <Header />
      <div className="pokedex">
        {!pokemons ? (
          <Loading />
        ) : (
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
      <img
        style={{ margin: "15px" }}
        className="img"
        src={img}
        alt="pokeball"
      ></img>
    </div>
  );
};

export default App;
