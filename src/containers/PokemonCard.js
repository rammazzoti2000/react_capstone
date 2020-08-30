import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Pokemon from '../components/Pokemon';
import { getPokemonsError, getPokemons, getPokemonsPending } from '../reducers/pokes';
import pokemonsApi from '../api/pokemonApi';

const PokemonCard = ({ pokemonApi, data }) => {
  const { error, pending, pokemons } = data;
  console.log(error, pending, pokemons);
  const { name } = useParams();

  useEffect(() => {
    setTimeout(() => pokemonApi(name), 2000);
  }, []);

  if (error) {
    return (
      <div>
        Error!
        {error}
      </div>
    );
  } else if (pending) {
    return (
      <div>
        Loading...
      </div>
    );
  } else {
    return <Pokemon pokemon={pokemons[0]} />
  }
};

const mapDispatchToProps = dispatch => bindActionCreators({
  pokemonApi: pokemonsApi.pokemonApi,
}, dispatch);

const mapStateToProps = state => ({
  data: {
    error: getPokemonsError(state),
    pokemons: getPokemons(state),
    pending: getPokemonsPending(state),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonCard);
