import { getPokemons, checkPokemons, errorPokemons } from '../actions/index';

const typePokemons = async type => {
  const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);

  if (response.ok) return response.json();

  throw new Error(response.status);
};

const pokemonApi = type => {
  return async dispatch => {
    dispatch(getPokemons());
    try {
      const response = await typePokemons(type);
      dispatch(checkPokemons(response.pokemon));
      return response.pokemon;
    } catch (e) {
      dispatch(errorPokemons(e));
    }
  };
};

export default pokemonApi;
