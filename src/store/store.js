import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import pokemonsListReducer from '../reducers/pokes';

const middleware = [thunk];

const store = createStore(pokemonsListReducer, applyMiddleware(...middleware));
console.log(store.getState());
export default store;
