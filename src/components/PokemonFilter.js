import React from 'react';
import PropTypes from 'prop-types';

const PokemonFilter = props => {
  const pokemonGroup = [
    'normal',
    'fighting',
    'flying',
    'poison',
    'ground',
    'rock',
    'bug',
    'ghost',
    'steel',
    'fire',
    'water',
    'grass',
    'electric',
    'psychic',
    'ice',
    'dragon',
    'dark',
    'fairy',
    'unknown',
    'shadow',
  ];
  const { onClick, type } = props;
  return (
    <div className="dropdown-container form-group d-flex justify-content-center">
      <label htmlFor="type" className="type">
        Pokemon Type
        <select
          name="type"
          className="filter-menu"
          onChange={event => onClick(event)}
          value={type}
        >
          {pokemonGroup.map(type => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

PokemonFilter.defaultProps = {
  type: 'normal',
};

PokemonFilter.propTypes = {
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
};

export default PokemonFilter;
