import redux, { createStore } from 'redux';

import {
  GET_POKEMONS,
  CHECK_POKEMONS,
  ERROR_POKEMONS,
  getPokemons,
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

const store = createStore(pokemonsListReducer);
store.subscribe(() => console.log(store.getState()));
store.dispatch(getPokemons());

export default store;

export const getPokemo = state => state.pokemons;
export const getPokemonsPending = state => state.isPokemonPending;
export const getPokemonsError = state => state.error;
