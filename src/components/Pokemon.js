import React from "react";
import { useHistory } from "react-router";
import PropTypes from "prop-types";
import picture from "../assets/picture.png";
import Chart from "react-google-charts";

const Pokemon = ({ pokemon }) => {
  const history = useHistory();

  const goBackHandle = () => {
    history.goBack();
  };

  const pieOptions = {
    title: "",
    pieHole: 0.6,
    slices: [
      {
        color: "#2BB673",
      },
      {
        color: "#d91e48",
      },
      {
        color: "#007fad",
      },
      {
        color: "#e9a227",
      },
      {
        color: "#E38627",
      },
      {
        color: "#C13C37",
      },
      {
        color: "#6A2135",
      },
    ],
    backgroundColor: "none",
    legend: {
      position: "labeled",
      alignment: "center",
      textStyle: {
        color: "233238",
        fontSize: 14,
      },
    },
    pieSliceText: "value",
    tooltip: {
      showColorCode: true,
    },
    chartArea: {
      left: 0,
      top: 0,
      width: "100%",
      height: "100%",
    },
    fontName: "Roboto",
  };

  const buildData = (pokemon) => {
    const array = [["name", "base_stat"]];
    pokemon.stats.map((stats) =>
      array.push([stats.stat.name, stats.base_stat])
    );
    return array;
  };

  return (
    <div className="container pokemon-detailed max-w-sm m-2 shadow-lg overflow-hidden rounded-md d-flex p-5 justify-content-center">
      <div className="pokemon-container w-25 d-flex ">
        <img
          src={
            pokemon.sprites.front_default
              ? pokemon.sprites.front_default
              : picture
          }
          alt={pokemon.name}
          className="pokemon-pic w-100 d-block m-auto"
        />
      </div>

      <div className="d-flex flex-column align-items-start">
        <div className="text-capitalize pb-3">{pokemon.name}</div>
        <div className="text-center mb-2">Abilities:</div>
        <ul className="d-flex justify-content-center mb-4">
          {pokemon.abilities.map((item) => (
            <li
              key={item.ability.name}
              className="abilities bg-success mr-2 p-2 rounded font-weight-bold"
            >
              {item.ability.name}
            </li>
          ))}
        </ul>
        <div className="d-flex flex-column align-items-start">
          <div className="text-center mb-2">Stats:</div>
          <ul className="d-flex flex-wrap">
            <Chart
              chartType="PieChart"
              data={buildData(pokemon)}
              options={pieOptions}
              graph_id="PieChart"
              width={"100%"}
              height={"100%"}
              legend_toggle
            />
          </ul>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={goBackHandle}
          >
            Go back
          </button>
        </div>
      </div>
    </div>
  );
};

Pokemon.defaultProps = {
  pokemon: {
    name: "pikachu",
    abilities: [],
    stats: [],
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    },
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
