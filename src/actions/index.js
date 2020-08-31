const FETCH_POKEMONS_PENDING = 'FETCH_POKEMONS_PENDING';
const FETCH_POKEMONS_SUCCESS = 'FETCH_POKEMONS_SUCCESS';
const FETCH_POKEMONS_ERROR = 'FETCH_POKEMONS_ERROR';
const FETCH_SINGLE_POKEMON_PENDING = 'FETCH_SINGLE_POKEMON_PENDING';
const FETCH_SINGLE_POKEMON_SUCCESS = 'FETCH_SINGLE_POKEMON_SUCCESS';
const FETCH_SINGLE_POKEMON_ERROR = 'FETCH_SINGLE_POKEMON_ERROR';
const FILTER_TYPE = 'FILTER_TYPE';

const fetchPokemonsPending = () => ({
  type: FETCH_POKEMONS_PENDING,
});

const fetchPokemonsSuccess = data => ({
  type: FETCH_POKEMONS_SUCCESS,
  pokemons: data,
});

const fetchPokemonsError = error => ({
  type: FETCH_POKEMONS_ERROR,
  error,
});

const fetchSinglePokemonPending = () => ({
  type: FETCH_SINGLE_POKEMON_PENDING,
});

const fetchSinglePokemonSuccess = pokemon => ({
  type: FETCH_SINGLE_POKEMON_SUCCESS,
  pokemons: pokemon,
});

const fetchSinglePokemonError = error => ({
  type: FETCH_SINGLE_POKEMON_ERROR,
  error,
});

const changeType = type => ({
  type: FILTER_TYPE,
  category: type,
});

export {
  FETCH_POKEMONS_PENDING,
  FETCH_POKEMONS_SUCCESS,
  FETCH_POKEMONS_ERROR,
  FETCH_SINGLE_POKEMON_ERROR,
  FETCH_SINGLE_POKEMON_PENDING,
  FETCH_SINGLE_POKEMON_SUCCESS,
  FILTER_TYPE,
  fetchPokemonsPending,
  fetchPokemonsSuccess,
  fetchPokemonsError,
  fetchSinglePokemonError,
  fetchSinglePokemonPending,
  fetchSinglePokemonSuccess,
  changeType,
};
