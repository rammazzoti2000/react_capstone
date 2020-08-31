import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Spinner from 'react-bootstrap/Spinner';
import fetchPokemonsActions from '../api/pokemonApi';
import { getPokemonsError, getPokemons, getPokemonsPending } from '../reducers/pokes';
import { getPokemonType } from '../reducers/filter';
import PokemonCompactView from '../components/PokemonMain';
import CategoryFilter from '../components/PokemonFilter';

export class Catalog extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  componentDidMount() {
    const { fetchPokemons } = this.props;
    fetchPokemons('normal');
  }

  handleFilterChange(e) {
    const { fetchPokemons } = this.props;
    if (e.target.value !== '') {
      fetchPokemons(e.target.value);
    }
    e.preventDefault();
  }

  render() {
    const { data, filter } = this.props;
    const { error, pending, pokemons } = data;
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

    if (pokemons.length < 2) {
      return (
        <div className="d-flex justify-content-center">
          <Spinner animation="grow" />
        </div>
      );
    }

    return (
      <div className="catalogue">
        <CategoryFilter onClick={this.handleFilterChange} category={filter} />
        <ul className="pokelist container row mx-auto">
          {pokemons.map(pokemon => (
            <PokemonCompactView
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
  fetchPokemons: fetchPokemonsActions.fetchPokemons,
}, dispatch);

const mapStateToProps = state => ({
  data: {
    error: getPokemonsError(state.data),
    pokemons: getPokemons(state.data),
    pending: getPokemonsPending(state.data),
  },
  filter: getPokemonType(state.filter),
});

Catalog.defaultProps = {
  data: {
    pending: true,
    error: null,
    pokemons: [],
  },
  filter: 'normal',
};

Catalog.propTypes = {
  data: PropTypes.shape({
    pending: PropTypes.bool,
    error: PropTypes.string,
    pokemons: PropTypes.arrayOf(PropTypes.object),
  }),
  filter: PropTypes.string,
  fetchPokemons: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
