import {
  GET_POKEMONS,
  CHECK_POKEMONS,
  ERROR_POKEMONS,
} from '../actions/index';

export function pokemonsListReducer(state = {}, action) {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        isPokemonPending: true,
      };
    case CHECK_POKEMONS:
      return {
        ...state,
        isPokemonPending: false,
        pokemons: action.payload,
      };
    case ERROR_POKEMONS:
      return {
        ...state,
        isPokemonPending: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

export const getPokemons = state => state.pokemons;
export const getPokemonsPending = state => state.isPokemonPending;
export const getPokemonsError = state => state.error;
