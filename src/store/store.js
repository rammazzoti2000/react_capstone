import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

const middleware = [thunk];

const initialState = {
  pending: true,
  pendingPokemon: true,
  pokemons: [],
  error: null,
};

const store = createStore(rootReducer, {
  data: initialState,
  filter: 'normal',
}, applyMiddleware(...middleware));

export default store;
