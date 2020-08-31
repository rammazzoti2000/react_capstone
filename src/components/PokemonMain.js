import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const pokemonItem = ({ pokemon }) => (
  <li
    className="pokemon col-4"
  >
    <Link to={`/pokemon/${pokemon.name}`}>

      <div className="d-flex flex-column align-items-center">
        <div>
          <img className="pokemon-pic" src={pokemon.image ? pokemon.image : 'whoIs'} alt={pokemon.name} />
        </div>

        <p>{pokemon.name}</p>
      </div>

    </Link>
  </li>
);

pokemonItem.defaultProps = {
  pokemon: {
    name: 'pikachu',
  },
};

pokemonItem.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
  }),
};

export default pokemonItem;
