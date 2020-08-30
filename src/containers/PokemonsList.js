import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Spinner from 'react-bootstrap/Spinner';
import pokemonsApi from '../api/pokemonApi';
import { getPokemonsError, getPokemons, getPokemonsPending } from '../reducers/pokes';
import PokemonSlim from '../components/PokemonSlim';

class PokemonsList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { pokemonApi } = this.props;
    pokemonApi('electric');
  }

  render() {
    const { data } = this.props;
    const { error, pending, pokemons } = data;
    if (error) {
      return (
        <div>
          {error}
        </div>
      );
    }

    if (pending) {
      return <div>loading..</div>;
    }

    return (
      <div className="pokemon-list-wrapper">
        <ul className="pokemon-list">
          {pokemons.map(pokemon => (
            <PokemonSlim
              className="pokemon-view"
              key={pokemon.name}
              pokemon={pokemon}
            />
          ))}
        </ul>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  pokemonApi: pokemonsApi.pokemonApi,
}, dispatch);

const mapStateToProps = state => ({
  data: {
    error: getPokemonsError(state.data),
    pokemons: getPokemons(state.data),
    pending: getPokemonsPending(state.data),
  },
});

PokemonsList.defaultProps = {
  data: {
    pending: true,
    error: null,
    pokemons: [],
  },
};

PokemonsList.propTypes = {
  data: PropTypes.shape({
    pending: PropTypes.bool,
    error: PropTypes.string,
    pokemons: PropTypes.arrayOf(PropTypes.object),
  }),
  pokemonApi: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonsList);
