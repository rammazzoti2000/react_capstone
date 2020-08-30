import React from 'react';

const Pokemon = ({ pokemon }) => (
  <div>
    <h1>{pokemon.name}</h1>
    <div>
      <h2>Abilities:</h2>
      <ul className="pokemon-details">
        <li>Thunderbolt</li>
      </ul>
    </div>
  </div>
);

export default Pokemon;
