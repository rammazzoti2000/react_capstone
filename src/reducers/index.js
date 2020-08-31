import { combineReducers } from 'redux';
import { pokemonsListReducer } from './pokes';
import { filter } from './filter';

const rootReducer = combineReducers({
  data: pokemonsListReducer,
  filter,
});

export default rootReducer;
