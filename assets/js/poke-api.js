const pokeApi = {}

pokeApi.getPokemonDetail = (pokemon) =>{
    fetch(pokemon.url).then((response) => response.json())
}

pokeApi.getPokemons = (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    return fetch(url)
    .then((response) => response.json()) 
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => pokemons.map((pokemon) => ))
    .then((detailRequests) => Promise.all(detailRequests))
    .then((pokemonDetails) =>  {
        debugger
        console.log(pokemonDetails)
    })
    .catch((error) => console.error(error))
}
