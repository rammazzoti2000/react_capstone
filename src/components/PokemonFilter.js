import React from 'react';
import PropTypes from 'prop-types';

const PokemonFilter = props => {
  const pokemonCategories = [
    'normal',
    'fire',
    'water',
    'grass',
    'electric',
    'ice',
    'fighting',
    'poison',
    'ground',
    'psychic',
    'bug',
    'rock',
    'ghost',
    'dark',
    'dragon',
    'steel',
    'fairy',
  ];
  const { onClick, category } = props;
  return (
    <div className="form-group w-75 m-auto">
      <h3 className="d-flex justify-content-center align-items-center">
        Pokemon Type:
        <span className="ml-2">
          <select name="category" className="custom-select" value={category} onChange={e => onClick(e)}>
            <option value="">Select category</option>
            {pokemonCategories.map(type => (<option key={type} value={type}>{type}</option>))}
          </select>
        </span>
      </h3>
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
