const getpokemons = async ()=>{
   

// url da api com todos os pokemons  
// const dado  = await fetch(' https://pokeapi.co/api/v2/pokemon/?limit=100000&offset=0.')
const dado  = await fetch('https://pokeapi.co/api/v2/pokemon/')
const response = await dado.json()
console.log(response);
return response
}

export default getpokemons;


