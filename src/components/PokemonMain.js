import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const PokemonMain = ({ pokemon }) => (
  <li
    className="pokemon col-4"
  >
    <Link to={`/pokemon/${pokemon.name}`}>

      <div className="d-flex flex-column align-items-center">
        <div>
          <img className="pokemon-pic" src={pokemon.image ? pokemon.image : 'picture'} alt={pokemon.name} />
        </div>
        <p>{pokemon.name}</p>
      </div>

    </Link>
  </li>
);

PokemonMain.defaultProps = {
  pokemon: {
    name: 'pikachu',
  },
};

PokemonMain.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
  }),
};

export default PokemonMain;
