import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = props => {
  const pokemonCategories = [
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
  ];
  const { onClick, category } = props;
  return (
    <div className="form-group d-flex justify-content-center">
      <label htmlFor="category" className="category">
        Select Pokemon Category

        <select name="category" className="custom-select" value={category} onChange={e => onClick(e)}>
          <option value="">Select category</option>
          {pokemonCategories.map(cat => (<option key={cat} value={cat}>{cat}</option>))}
        </select>
      </label>
    </div>
  );
};

CategoryFilter.defaultProps = {
  category: 'normal',
};

CategoryFilter.propTypes = {
  onClick: PropTypes.func.isRequired,
  category: PropTypes.string,
};

export default CategoryFilter;
