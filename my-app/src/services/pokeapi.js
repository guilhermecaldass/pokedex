const getpokemons = async () => {
  // url da api com todos os pokemons
  // const dado  = await fetch(' https://pokeapi.co/api/v2/pokemon/?limit=100000&offset=0.')
  try {
    const dado = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const response = await dado.json();
    
    return response;
    
  } catch (error) {
    console.error(error);
  }
};

export default getpokemons;
