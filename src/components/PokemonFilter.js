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
  const { onClick, category } = props;
  return (
    <div className="dropdown-container form-group d-flex justify-content-center">
      <label htmlFor="category" className="type">
        Pokemon Type
        <select
          name="category"
          className="filter-menu"
          onChange={event => onClick(event)}
          value={category}
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
  category: 'normal',
};

PokemonFilter.propTypes = {
  onClick: PropTypes.func.isRequired,
  category: PropTypes.string,
};

export default PokemonFilter;
