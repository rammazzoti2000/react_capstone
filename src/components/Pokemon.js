import React from 'react';

function Pokemon(props) {
  return (
    <div>
      <h1>Pikachu</h1>
      <div>
        <h2>Abilities:</h2>
        <ul className="pokemon-details">
          <li>Thunderbolt</li>
        </ul>
      </div>
    </div>
  );
}

export default Pokemon;
