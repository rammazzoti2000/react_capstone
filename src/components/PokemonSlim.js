import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const PokemonSlim = ({ pokemon }) => (
  <li
    className="pokemon-item"
  >
    <Link to={`/pokemon/${pokemon.name}`}>
      <img className="pokemon-pic" src="" alt="slim" />
      {pokemon.name}
    </Link>
  </li>
);

PokemonSlim.defaultProps = {
  pokemon: {
    name: 'pikachu',
  },
};

PokemonSlim.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
  }),
};

export default PokemonSlim;
