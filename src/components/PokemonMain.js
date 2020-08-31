import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Pokemon = ({ pokemon }) => (
  <li
    className="pokemon-item"
  >
    <Link to={`/pokemon/${pokemon.name}`}>
      <img className="pokemon-pic" src={pokemon.image} alt={pokemon.id} />
      <p>{pokemon.name}</p>
    </Link>
  </li>
);

Pokemon.defaultProps = {
  pokemon: {
    name: 'pikachu',
  },
};

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.node,
    id: PropTypes.number,
  }),
};

export default Pokemon;
