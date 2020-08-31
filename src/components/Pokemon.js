import React from 'react';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';

const Pokemon = ({ pokemon }) => {
  const history = useHistory();

  const goBackHandle = () => {
    history.goBack();
  };

  return (
    <div className="container pokemon-detailed">
      <div className="pokemon-container d-flex justify-content-center align-items-center">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <h1>{pokemon.name}</h1>
      </div>

      <div className="d-flex flex-column">
        <h2 className="text-center">Abilities:</h2>
        <ul className="d-flex justify-content-center">
          {pokemon.abilities.map(item => <li key={item.ability.name} className="abilities">{item.ability.name}</li>)}
        </ul>
      </div>

      <div className="d-flex flex-column">
        <h2 className="text-center">Stats</h2>
        <ul className="d-flex justify-content-center">
          {pokemon.stats.map(stats => (
            <li key={stats.stat.name} className="stats mb-3">
              <span>
                {stats.stat.name}
                :
              </span>
              {' '}
              {stats.base_stat}
            </li>
          ))}
        </ul>
      </div>
      <button type="button" className="btn btn-secondary" onClick={goBackHandle}>Go back</button>
    </div>
  );
};

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
