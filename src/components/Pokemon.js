import React from 'react';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';
import picture from '../assets/picture.png';

const Pokemon = ({ pokemon }) => {
  const history = useHistory();

  const goBackHandle = () => {
    history.goBack();
  };

  return (
    <div className="container pokemon-detailed max-w-sm m-2 shadow-lg overflow-hidden rounded-md d-flex p-5 justify-content-center">
      <div className="pokemon-container w-25 d-flex ">
        <img src={pokemon.sprites.front_default ? pokemon.sprites.front_default : picture} alt={pokemon.name} className="pokemon-pic w-100 d-block m-auto" />
      </div>

      <div className="d-flex flex-column align-items-start">
        <h1 className="text-capitalize pb-3">{pokemon.name}</h1>
        <h2 className="text-center">Abilities:</h2>
        <ul className="d-flex justify-content-center">
          {pokemon.abilities.map(item => <li key={item.ability.name} className="abilities bg-success mr-2 p-2 rounded font-weight-bold">{item.ability.name}</li>)}
        </ul>
        <div className="d-flex flex-column align-items-start">
          <h2 className="text-center">Stats</h2>
          <ul className="d-flex flex-wrap">
            {pokemon.stats.map(stats => (
              <li key={stats.stat.name} className="stats mb-3 bg-primary mr-2 p-2 rounded font-weight-bold">
                <span>
                  {stats.stat.name}
                  :
                </span>
                {' '}
                {stats.base_stat}
              </li>
            ))}
          </ul>
          <button type="button" className="btn btn-secondary" onClick={goBackHandle}>Go back</button>
        </div>
      </div>
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
