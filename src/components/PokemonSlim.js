import React from 'react';
import { Link } from 'react-router-dom';

const PokemonSlim = ({ pokemon }) => (
  <li
    className="pokemon-item"
  >
    <Link to={`/pokemon/${pokemon.name}`}>
      <img className="pokemon-pic" src="" alt="slim" />
      {pokemon.name}
    </Link>
  </li>
);

export default PokemonSlim;
