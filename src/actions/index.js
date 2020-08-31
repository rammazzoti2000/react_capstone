const GET_POKEMONS_PENDING = 'GET_POKEMONS_PENDING';
const GET_POKEMONS_SUCCESS = 'GET_POKEMONS_SUCCESS';
const GET_POKEMONS_ERROR = 'GET_POKEMONS_ERROR';
const GET_SINGLE_POKEMON_PENDING = 'GET_SINGLE_POKEMON_PENDING';
const GET_SINGLE_POKEMON_SUCCESS = 'GET_SINGLE_POKEMON_SUCCESS';
const GET_SINGLE_POKEMON_ERROR = 'GET_SINGLE_POKEMON_ERROR';
const FILTER_TYPE = 'FILTER_TYPE';

const fetchPokemonsPending = () => ({
  type: GET_POKEMONS_PENDING,
});

const fetchPokemonsSuccess = data => ({
  type: GET_POKEMONS_SUCCESS,
  pokemons: data,
});

const fetchPokemonsError = error => ({
  type: GET_POKEMONS_ERROR,
  error,
});

const fetchSinglePokemonPending = () => ({
  type: GET_SINGLE_POKEMON_PENDING,
});

const fetchSinglePokemonSuccess = pokemon => ({
  type: GET_SINGLE_POKEMON_SUCCESS,
  pokemons: pokemon,
});

const fetchSinglePokemonError = error => ({
  type: GET_SINGLE_POKEMON_ERROR,
  error,
});

const changeType = type => ({
  type: FILTER_TYPE,
  category: type,
});

export {
  GET_POKEMONS_PENDING,
  GET_POKEMONS_SUCCESS,
  GET_POKEMONS_ERROR,
  GET_SINGLE_POKEMON_ERROR,
  GET_SINGLE_POKEMON_PENDING,
  GET_SINGLE_POKEMON_SUCCESS,
  FILTER_TYPE,
  fetchPokemonsPending,
  fetchPokemonsSuccess,
  fetchPokemonsError,
  fetchSinglePokemonError,
  fetchSinglePokemonPending,
  fetchSinglePokemonSuccess,
  changeType,
};
