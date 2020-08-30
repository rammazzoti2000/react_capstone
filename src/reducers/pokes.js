import {
  GET_POKEMONS,
  CHECK_POKEMONS,
  ERROR_POKEMONS,
} from '../actions/index';

const initialState = {
  pending: false,
  pokemons: [],
  error: null,
};

export default function pokemonsListReducer(state = initialState, action) {
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

export const getPokemo = state => state.pokemons;
export const getPokemonsPending = state => state.isPokemonPending;
export const getPokemonsError = state => state.error;
