const getpokemons = async ()=>{
const dado  = await fetch(' https://pokeapi.co/api/v2/pokemon/1')
const response = await dado.json()
console.log(response);
return response
}
getpokemons()
export default getpokemons;