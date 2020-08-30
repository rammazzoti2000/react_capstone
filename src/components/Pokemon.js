import React from 'react';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';

function Pokemon({ pokemon }) {
  const history = useHistory();
  const handlePrevious = () => {
    history.goBack();
  };

  return (
    <div>
      <div className="pokemon-container">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <h1>{pokemon.name}</h1>
      </div>

      <div>
        <h2>Abilities:</h2>
        <ul className="stats">
          {pokemon.abilities.map(item => <li key={item.ability.name}>{item.ability.name}</li>)}
        </ul>
      </div>

      <div>
        <h2>Stats</h2>
        <ul>
          {pokemon.stats.map(stats => (
            <li key={stats.stat.name}>
              <span>
                {stats.stat.name}
                :
              </span>
              {stats.base_stat}
            </li>
          ))}
        </ul>
      </div>
      <button type="button" onClick={handlePrevious}>Home</button>
    </div>
  );
}

Pokemon.defaultProps = {
  pokemon: {
    name: 'pikachu',
    abilities: [],
    stats: [],
    sprites: { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png' },
  },
};

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    abilities: PropTypes.arrayOf(PropTypes.object),
    stats: PropTypes.arrayOf(PropTypes.object),
    sprites: PropTypes.objectOf(PropTypes.string),
  }),
};

export default Pokemon;
