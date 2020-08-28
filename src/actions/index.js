export const GET_POKEMONS = 'GET_POKEMONS';
export const CHECK_POKEMONS = 'CHECK_POKEMONS';
export const ERROR_POKEMONS = 'ERROR_POKEMONS';

function getPokemons() {
  return {
    type: GET_POKEMONS,
  };
}

function checkPokemons(pokemon) {
  return {
    type: CHECK_POKEMONS,
    payload: pokemon,
  };
}

function errorPokemons(error) {
  return {
    type: ERROR_POKEMONS,
    payload: error,
  };
}

export { getPokemons, checkPokemons, errorPokemons };
