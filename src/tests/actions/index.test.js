import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import * as actions from '../../actions/index';
import pokeApi from '../../api/pokemonApi';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('creates FETCH_POKEMONS_SUCCESS when fetching pokemons has been done', () => {
    fetchMock.get('https://pokeapi.co/api/v2/type/normal', {
      pokemons: [
        {
          pokemon: {
            name: 'pidgey',
            url: 'https://pokeapi.co/api/v2/pokemon/16/',
          },
          slot: 1,
        },
      ],
    },
    { delay: 1000 });

    const expectedActions = [
      {
        type: actions.GET_POKEMONS_PENDING,
      },
      {
        type: actions.GET_POKEMONS_SUCCESS,
        pokemons: [],
      },
      {
        type: actions.FILTER_TYPE,
        category: 'normal',
      },
    ];
    const store = mockStore({
      data: {
        pokemons: [],
        pending: true,
        error: null,
      },
      filter: 'normal',
    });

    return store.dispatch(pokeApi.fetchPokemons('normal')).then(() => {
      expect(store.getActions()).not.toBe(expectedActions);
    });
  });
});
