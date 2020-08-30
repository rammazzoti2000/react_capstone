import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import pokemonApi from '../api/pokemonApi';
import { getPokemonsError, getPokemons, getPokemonsPending } from '../reducers/pokes';

const mapDispatchToProps = dispatch => bindActionCreators({
  pokemonApi,
}, dispatch);

const mapStateToProps = state => ({
  data: {
    error: getPokemonsError(state),
    pokemons: getPokemons(state),
    pending: getPokemonsPending(state),
  },
});

class PokemonsList extends React.Component {
  constructor(props){
    super(props)
  }

  async componentDidMount() {
    const {pokemonApi} = this.props;
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
      <div>
        <ul>
          {pokemons.map(pokemon => <li key={pokemon.pokemon.name}>{pokemon.pokemon.name}</li>)}
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonsList);
