import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Spinner from 'react-bootstrap/Spinner';
import { getPokemonsError, getPokemons, getPokemonPending } from '../reducers/pokes';
import fetchPokemonsActions from '../api/pokemonApi';
import Pokemon from '../components/Pokemon';

export const PokemonCard = ({ fetchPokemon, data }) => {
  const { error, pending, pokemons = [] } = data;

  const { name } = useParams();

  useEffect(() => {
    fetchPokemon(name); // eslint-disable-next-line
  }, []);

  if (error) {
    return (
      <div className="error">
        {error}
      </div>
    );
  }
  if (pending) {
    return (
      <div className="d-flex justify-content-center">
        <Spinner animation="grow" />
      </div>
    );
  }
  if (pokemons.length === 1) {
    return <Pokemon pokemon={pokemons[0]} />;
  }

  return (
    <div className="d-flex justify-content-center">
      <Spinner animation="grow" />
    </div>
  );
};

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchPokemon: fetchPokemonsActions.fetchPokemon,
}, dispatch);

const mapStateToProps = state => ({
  data: {
    error: getPokemonsError(state.data),
    pokemons: getPokemons(state.data),
    pending: getPokemonPending(state.data),
  },
});

PokemonCard.defaultProps = {
  data: {
    error: null,
    pending: true,
    pokemons: [],
  },
};

PokemonCard.propTypes = {
  data: PropTypes.shape({
    error: PropTypes.string,
    pending: PropTypes.bool,
    pokemons: PropTypes.arrayOf(PropTypes.object),
  }),
  fetchPokemon: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonCard);
