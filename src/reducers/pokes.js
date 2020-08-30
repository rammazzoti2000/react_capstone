import {
  GET_POKEMONS,
  CHECK_POKEMONS,
  ERROR_POKEMONS,
  GET_SINGLE_POKEMON,
  CHECK_SINGLE_POKEMON,
  ERROR_SINGLE_POKEMON,
} from '../actions/index';

const initialState = {
  pending: true,
  pokemons: [],
  error: null,
};

export const pokemonsListReducer = (state = initialState, action) => {
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
    case GET_SINGLE_POKEMON:
      return {
        ...state,
        isPokemonPending: true,
      };
    case CHECK_SINGLE_POKEMON:
      return {
        ...state,
        isPokemonPending: false,
        pokemons: [action.payload],
      };
    case ERROR_SINGLE_POKEMON:
      return {
        ...state,
        isPokemonPending: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getPokemons = state => state.pokemons;
export const getPokemonsPending = state => state.isPokemonPending;
export const getPokemonsError = state => state.error;
