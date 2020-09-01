import api from '../../api/pokemonApi';

jest.mock('../../api/pokemonApi');

describe('Api Response', () => {
  it('happy path -> returns a list of pokemon', async () => {
    const pokemons = [
      {
        pokemon: {
          name: 'pidgey',
          url: 'https://pokeapi.co/api/v2/pokemon/16/',
        },
        slot: 1,
      },
      {
        pokemon: {
          name: 'pidgeotto',
          url: 'https://pokeapi.co/api/v2/pokemon/17/',
        },
        slot: 1,
      },
      {
        pokemon: {
          name: 'pidgeot',
          url: 'https://pokeapi.co/api/v2/pokemon/18/',
        },
        slot: 1,
      },
      {
        pokemon: {
          name: 'rattata',
          url: 'https://pokeapi.co/api/v2/pokemon/19/',
        },
        slot: 1,
      },
    ];
    api.fetchPokemons.mockResolvedValue({ pokemons });
    const pokemonList = await api.fetchPokemons('normal');
    expect(pokemonList).toEqual({ pokemons });
  });

  it('unhappy path -> returns error when type not found', async () => {
    const error = 'Not Found';
    api.fetchPokemons.mockResolvedValue({ error });
    const pokemonListError = await api.fetchPokemons('n');
    expect(pokemonListError).toEqual({ error });
  });

  it('happy path -> returns single pokemon object', async () => {
    const pokemon = {
      name: 'squirtle',
      abilities: [{
        ability: {
          name: 'rain-dish',
          url: 'https://pokeapi.co/api/v2/ability/44/',
        },
        is_hidden: true,
        slot: 3,
      },
      {
        ability: {
          name: 'torrent',
          url: 'https://pokeapi.co/api/v2/ability/67/',
        },
        is_hidden: false,
        slot: 1,
      }],
      sprites: {
        back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/7.png',
        back_female: null,
        back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/7.png',
        back_shiny_female: null,
        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
        front_female: null,
        front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/7.png',
        front_shiny_female: null,
      },
      stats: [
        {
          base_stat: 43,
          effort: 0,
          stat: {
            name: 'speed',
            url: 'https://pokeapi.co/api/v2/stat/6/',
          },
        },
      ],
    };

    api.fetchPokemon.mockResolvedValue({ pokemon });
    const pokemonObject = await api.fetchPokemon('squirtle');
    expect(pokemonObject).toEqual({ pokemon });
  });

  it('unhappy path -> returns error when pokemon not found by name', async () => {
    const error = 'Not Found';

    api.fetchPokemon.mockResolvedValue({ error });
    const pokemonError = await api.fetchPokemon('jjjjjj');
    expect(pokemonError).toEqual({ error });
  });
});
