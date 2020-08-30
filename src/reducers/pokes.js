import {
  GET_POKEMONS,
  CHECK_POKEMONS,
  ERROR_POKEMONS,
  GET_SINGLE_POKEMON,
  CHECK_SINGLE_POKEMON,
  ERROR_SINGLE_POKEMON,
} from '../actions/index';

export const pokemonsListReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        pending: true,
      };
    case CHECK_POKEMONS:
      return {
        ...state,
        pending: false,
        pokemons: action.pokemons,
      };
    case ERROR_POKEMONS:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    case GET_SINGLE_POKEMON:
      return {
        ...state,
        pendingPokemon: true,
      };
    case CHECK_SINGLE_POKEMON:
      return {
        ...state,
        pendingPokemon: false,
        pokemons: [action.pokemons],
      };
    case ERROR_SINGLE_POKEMON:
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
