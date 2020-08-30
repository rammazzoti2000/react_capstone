import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import pokemonsApi from '../api/pokemonApi';
import { getPokemonsError, getPokemons, getPokemonsPending } from '../reducers/pokes';
import PokemonSlim from '../components/PokemonSlim';

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

class PokemonsList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { pokemonApi } = this.props;
    pokemonApi('electric');
  }

  render() {
    const {error, pending, pokemons} = this.props.data;
    if (error) {
      return (
        <div>
          Error!
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
              key={pokemon.pokemon.name}
              pokemon={pokemon.pokemon}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonsList);
