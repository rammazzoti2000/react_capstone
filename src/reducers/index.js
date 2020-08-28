import { combineReducers } from 'redux';
import { pokemonsListReducer } from './pokes';

const rootReducer = combineReducers({ data: pokemonsListReducer });

export default rootReducer;
