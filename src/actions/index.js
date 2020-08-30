export const GET_POKEMONS = 'GET_POKEMONS';
export const CHECK_POKEMONS = 'CHECK_POKEMONS';
export const ERROR_POKEMONS = 'ERROR_POKEMONS';
export const GET_SINGLE_POKEMON = 'GET_POKEMONS';
export const CHECK_SINGLE_POKEMON = 'CHECK_POKEMONS';
export const ERROR_SINGLE_POKEMON = 'ERROR_POKEMONS';

const getPokemons = () => ({
  type: GET_POKEMONS,
});

const checkPokemons = pokemon => ({
  type: CHECK_POKEMONS,
  payload: pokemon,
});

const errorPokemons = error => ({
  type: ERROR_POKEMONS,
  payload: error,
});

const getSinglePokemon = () => ({
  type: GET_SINGLE_POKEMON,
});

const checkSinglePokemon = pokemon => ({
  type: CHECK_SINGLE_POKEMON,
  payload: pokemon,
});

const errorSinglePokemon = error => ({
  type: ERROR_SINGLE_POKEMON,
  payload: error,
});

export {
  getPokemons,
  checkPokemons,
  errorPokemons,
  getSinglePokemon,
  checkSinglePokemon,
  errorSinglePokemon,
};
