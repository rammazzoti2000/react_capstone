import {
  getPokemons,
  checkPokemons,
  errorPokemons,
  getSinglePokemon,
  checkSinglePokemon,
  errorSinglePokemon,
  filterChange,
} from '../actions/index';

const pokemonType = async type => {
  const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);

  if (response.ok) return response.json();

  throw new Error(response.status);
};

const pokemonProps = async name => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

  if (response.ok) return response.json();

  throw new Error(response.status);
};

const pokemonApi = type => async dispatch => {
  dispatch(getPokemons());
  try {
    const response = await pokemonType(type);

    const pokemons = response.pokemon.map(async item => {
      const res = await fetch(item.pokemon.url);
      return res.json();
    });
    const pokemonsData = await Promise.all(pokemons);

    const payload = pokemonsData.map(data => ({
      name: data.name,
      image: data.sprites.front_default,
    }));
    dispatch(checkPokemons(payload));
    dispatch(filterChange(type));
    return response;
  } catch (error) {
    dispatch(errorPokemons(error));
    return error;
  }
};

const pokemonItemApi = name => async dispatch => {
  dispatch(getSinglePokemon());
  try {
    const response = await pokemonProps(name);
    const pokemon = {
      name: response.name,
      abilities: response.abilities,
      sprites: response.sprites,
      stats: response.stats,
    };
    dispatch(checkSinglePokemon(pokemon));
    return pokemon;
  } catch (error) {
    dispatch(errorSinglePokemon(error));
    return error;
  }
};

export default { pokemonApi, pokemonItemApi };
