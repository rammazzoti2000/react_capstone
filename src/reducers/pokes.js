import {
  FETCH_POKEMONS_PENDING,
  FETCH_POKEMONS_SUCCESS,
  FETCH_POKEMONS_ERROR,
  FETCH_SINGLE_POKEMON_ERROR,
  FETCH_SINGLE_POKEMON_PENDING,
  FETCH_SINGLE_POKEMON_SUCCESS,
} from '../actions/index';

export const pokemonsReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_POKEMONS_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_POKEMONS_SUCCESS:
      return {
        ...state,
        pending: false,
        pokemons: action.pokemons,
      };
    case FETCH_POKEMONS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    case FETCH_SINGLE_POKEMON_PENDING:
      return {
        ...state,
        pendingPokemon: true,
      };
    case FETCH_SINGLE_POKEMON_SUCCESS:
      return {
        ...state,
        pendingPokemon: false,
        pokemons: [action.pokemons],
      };
    case FETCH_SINGLE_POKEMON_ERROR:
      return {
        ...state,
        pendingPokemon: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export const getPokemons = state => state.pokemons;
export const getPokemonsPending = state => state.pending;
export const getPokemonPending = state => state.pendingPokemon;
export const getPokemonsError = state => state.error;
