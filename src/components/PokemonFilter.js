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
  const { handleClick } = props;
  return (
    <div className="dropdown-container">
      <label htmlFor="dropdown-menu">
        Pokemon Type
        <select name="dropdown-menu" className="dropdown-menu" onChange={event => handleClick(event)}>
          <option value="select">Select Type</option>
          {pokemonGroup.map(type => (
            <option key="type" value="type">
              {type}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

PokemonFilter.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default PokemonFilter;
