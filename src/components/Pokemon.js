import React from 'react';
import { useHistory } from 'react-router';

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
          {pokemon.stats.map(stat => (
            <li key={stat.stat.name}>
              <span>
                {stat.stat.name}
                :
              </span>
              {stat.base_stat}
            </li>
          ))}
        </ul>
      </div>
      <button type="button" onClick={handlePrevious}>Home</button>
    </div>
  );
}

export default Pokemon;
