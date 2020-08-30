import { createStore } from 'redux';
import pokemonsListReducer from '../reducers/pokes';

const store = createStore(pokemonsListReducer);
console.log(store.getState());
export default store;
