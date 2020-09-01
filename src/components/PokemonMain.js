import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import picture from '../assets/picture.png';

const generateID = () => Math.floor((Math.random() * 10000) + 1);

const PokemonMain = ({ pokemon }) => (
  <li className="col mb-5" id="container-list rounded" key={generateID.toString()}>
    <Link to={`/pokemon/${pokemon.name}`}>
      <div className="d-flex flex-column align-items-center rounded" id="inner-list">
        <div className="bg-dark w-100 h-75 mb-2 rounded-top">
          <img className="pokemon-pic d-block m-auto" src={pokemon.image ? pokemon.image : picture} alt={pokemon.name} />
        </div>
        <p className="text-capitalize font-weight-bold">{pokemon.name}</p>
      </div>
    </Link>
  </li>
);

PokemonMain.defaultProps = {
  pokemon: {
    name: 'pikachu',
  },
};

PokemonMain.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
  }),
};

export default PokemonMain;
