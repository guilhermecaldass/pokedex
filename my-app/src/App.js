
import './App.css';
import Header from './components/Header';
import Loading from './components/Loading';

function App() {
  const l=1
  return (
    <div className="App">
      <Header />
      <div className='pokedex'>
        { l ?<Loading />:(
        <p>ok</p>
        )}</div>
    </div>
  );
}

export default App;
