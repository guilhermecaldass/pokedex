
import './App.css';
import Header from './components/Header';
import Loading from './components/Loading';
// import getpokemons from './services/pokeapi';
import Pokedex from './components/Pokedex';


function App() {
  // const response =await getpokemons()
  
  const l=0
  return (
    <div className="App">
      <Header />
     
      <div className='pokedex'>
        { l ?<Loading />:(
        <>
        <Pokedex name='c' url='c'/>
       <p>ok</p>
        </>
        )}</div>
    </div>
  );
}

export default App;
