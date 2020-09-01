import { mount } from 'enzyme';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { PokemonCard } from '../../containers/PokemonCard';
import store from '../../store/store';

describe('Detailed View testing', () => {
  let wrapper;
  const mockFetchPokemonFn = jest.fn();
  let data = {
    error: null,
    pending: true,
    pokemons: [],
  };
  beforeEach(() => {
    wrapper = mount(
      <Router>
        <PokemonCard store={store} data={data} fetchPokemon={mockFetchPokemonFn} />
      </Router>,
    );
  });

  it('should call the mock fetch pokemon function to populate data', () => {
    expect(mockFetchPokemonFn.mock.calls.length).toBe(1);
  });

  it('renders error when fetching fails', () => {
    data = {
      error: 'Not Found',
    };
    const wrapper = mount(
      <Router>
        <PokemonCard store={store} data={data} fetchPokemon={mockFetchPokemonFn} />
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
        <PokemonCard store={store} data={data} fetchPokemon={mockFetchPokemonFn} />
      </Router>,
    );
    expect(wrapper.find('.spinner-grow')).toHaveLength(1);
  });

  it('renders single pokemon data', () => {
    data = {
      error: null,
      pending: false,
      pokemons: [{
        name: 'charizard',
        sprites: { front_default: '' },
        abilities: [],
        stats: [],
      }],
    };

    wrapper = mount(
      <Router>
        <PokemonCard store={store} data={data} fetchPokemon={mockFetchPokemonFn} />
      </Router>,
    );

    expect(wrapper.find('h1').text()).toBe('charizard');
  });
});
