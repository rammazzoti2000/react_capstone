import { mount } from 'enzyme';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { PokemonList } from '../../containers/PokemonsList';
import store from '../../store/store';

describe('PokemonList testing', () => {
  const mockFetchPokemonsFn = jest.fn();
  let data = {
    error: null,
    pending: true,
    pokemons: [],
  };
  beforeEach(() => {
    mount(
      <Router>
        <PokemonList store={store} data={data} filter="normal" fetchPokemons={mockFetchPokemonsFn} />
      </Router>,
    );
  });

  it('should call the mock fetch pokemons function to populate data', () => {
    expect(mockFetchPokemonsFn.mock.calls.length).toBe(1);
  });

  it('renders error when fetching fails', () => {
    data = {
      error: 'Not Found',
    };
    const wrapper = mount(
      <Router>
        <PokemonList store={store} data={data} filter="normal" fetchPokemons={mockFetchPokemonsFn} />
      </Router>,
    );
    expect(wrapper.find('.error').text()).toBe('Not Found');
  });

  it('renders spinner while waiting for data', () => {
    data = {
      pending: true,
    };
    const wrapper = mount(
      <Router>
        <PokemonList store={store} data={data} filter="normal" fetchPokemons={mockFetchPokemonsFn} />
      </Router>,
    );
    expect(wrapper.find('.spinner-grow')).toHaveLength(1);
  });

  it('renders category filter and list of pokemons when data is obtained', () => {
    data = {
      pending: false,
      error: null,
      pokemons: [
        {
          pokemon: {
            name: 'squirtle',
          },
        },
        {
          pokemon: {
            name: 'charmander',
          },
        },
        {
          pokemon: {
            name: 'pikachu',
          },
        },
      ],
    };

    const wrapper = mount(
      <Router>
        <PokemonList store={store} data={data} filter="normal" fetchPokemons={mockFetchPokemonsFn} />
      </Router>,
    );
    expect(wrapper.find('.custom-select')).toHaveLength(1);
    expect(wrapper.find('Link').at(0).text()).not.toBe('squirtle');
    expect(wrapper.find('Link').at(1).text()).not.toBe('charmander');
    expect(wrapper.find('Link').at(2).text()).not.toBe('pikachu');
  });
});
