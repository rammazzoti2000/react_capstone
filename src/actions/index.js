export const GET_POKEMONS = 'GET_POKEMONS';
export const CHECK_POKEMONS = 'CHECK_POKEMONS';
export const ERROR_POKEMONS = 'ERROR_POKEMONS';
export const GET_SINGLE_POKEMON = 'GET_POKEMONS';
export const CHECK_SINGLE_POKEMON = 'CHECK_POKEMONS';
export const ERROR_SINGLE_POKEMON = 'ERROR_POKEMONS';
export const POKEMONS_FILTER = 'POKEMONS_FILTER';

const getPokemons = () => ({
  type: GET_POKEMONS,
});

const checkPokemons = data => ({
  type: CHECK_POKEMONS,
  pokemons: data,
});

const errorPokemons = error => ({
  type: ERROR_POKEMONS,
  error,
});

const getSinglePokemon = () => ({
  type: GET_SINGLE_POKEMON,
});

const checkSinglePokemon = pokemon => ({
  type: CHECK_SINGLE_POKEMON,
  pokemons: pokemon,
});

const errorSinglePokemon = error => ({
  type: ERROR_SINGLE_POKEMON,
  error,
});

const filterChange = type => ({
  type: POKEMONS_FILTER,
  category: type,
});

export {
  getPokemons,
  checkPokemons,
  errorPokemons,
  getSinglePokemon,
  checkSinglePokemon,
  errorSinglePokemon,
  filterChange,
};
