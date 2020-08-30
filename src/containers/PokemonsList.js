import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import pokemonApi from '../api/pokemonApi';
import { getPokemonsError, getPokemons, getPokemonsPending } from '../reducers/pokes';
import PokemonSlim from '../components/PokemonSlim';

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
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  async componentDidMount() {
    const { pokemonApi } = this.props;
    pokemonApi('electric');
  }

  handleClick(event) {
    console.log('handle view');
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
            <li
              className="pokemon-item"
              key={pokemon.pokemon.name}
              onClick={this.handleClick}
            >
              <Link to={`/pokemon/${pokemon.pokemon.name}`}>
                <img className="pokemon-pic" src="#" alt="bau" />
                {pokemon.pokemon.name}
              </Link>
              <PokemonSlim />

            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonsList);
