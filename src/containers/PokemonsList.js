import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Spinner from 'react-bootstrap/Spinner';
import pokemonsApi from '../api/pokemonApi';
import { getPokemonsError, getPokemons, getPokemonsPending } from '../reducers/pokes';
import { pokemonType } from '../reducers/filter';
import PokemonSlim from '../components/PokemonSlim';
import PokemonFilter from '../components/PokemonFilter';

class PokemonsList extends React.Component {
  constructor(props) {
    super(props);
    this.handleType = this.handleType.bind(this);
  }

  componentDidMount() {
    const { pokemonApi } = this.props;
    pokemonApi('electric');
  }

  handleType(event) {
    event.preventDefault();
    const { pokemonApi } = this.props;
    if (event.target.value !== '') {
      getPokemons(event.target.value);
    }
  }

  render() {
    const { data, type } = this.props;
    const { error, pending, pokemons } = data;
    if (error) {
      return (
        <div>
          {error}
        </div>
      );
    }

    if (pending) {
      return (
        <div>
          <Spinner animation="grow" />
        </div>
      );
    }

    return (
      <div className="pokemon-list-wrapper">
        <PokemonFilter onClick={this.handleType} category={type} />
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
  type: pokemonType(state.type),
});

PokemonsList.defaultProps = {
  data: {
    pending: true,
    error: null,
    pokemons: [],
  },
  type: 'normal',
};

PokemonsList.propTypes = {
  data: PropTypes.shape({
    pending: PropTypes.bool,
    error: PropTypes.string,
    pokemons: PropTypes.arrayOf(PropTypes.object),
  }),
  pokemonApi: PropTypes.func.isRequired,
  type: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonsList);
