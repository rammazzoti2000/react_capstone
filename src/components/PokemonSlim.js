import React from 'react';
import { Link } from 'react-router-dom';

const PokemonSlim = ({ pokemon }) => (
  <li
    className="pokemon"
  >
    <Link to={`/pokemon/${pokemon.name}`}>
      <img className="pokemon-pic" src="" alt="slim" />
      {pokemon.name}
    </Link>
  </li>
);

export default PokemonSlim;
