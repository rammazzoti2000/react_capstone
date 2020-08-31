import {
  fetchPokemonsPending,
  fetchPokemonsSuccess,
  fetchPokemonsError,
  fetchSinglePokemonError,
  fetchSinglePokemonPending,
  fetchSinglePokemonSuccess,
  changeType,
} from '../actions/index';

const pokemonsType = async type => {
  const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);

  if (response.ok) return response.json();

  throw new Error(response.status);
};

const pokemonProps = async name => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

  if (response.ok) return response.json();

  throw new Error(response.status);
};

const fetchPokemons = type => async dispatch => {
  dispatch(fetchPokemonsPending());
  try {
    const response = await pokemonsType(type);
    const pokemons = response.pokemon.map(async pok => {
      const res = await fetch(pok.pokemon.url);
      return res.json();
    });
    const pokemonsData = await Promise.all(pokemons);
    const payload = pokemonsData.map(data => ({
      name: data.name,
      image: data.sprites.front_default,
    }));
    dispatch(fetchPokemonsSuccess(payload));
    dispatch(changeType(type));
    return response;
  } catch (e) {
    dispatch(fetchPokemonsError(e));
    return e;
  }
};

const fetchPokemon = name => async dispatch => {
  dispatch(fetchSinglePokemonPending());
  try {
    const response = await pokemonProps(name);
    const pokemon = {
      name: response.name,
      abilities: response.abilities,
      sprites: response.sprites,
      stats: response.stats,
    };
    dispatch(fetchSinglePokemonSuccess(pokemon));
    return pokemon;
  } catch (e) {
    dispatch(fetchSinglePokemonError(e));
    return e;
  }
};

export default {
  fetchPokemons,
  fetchPokemon,
};
