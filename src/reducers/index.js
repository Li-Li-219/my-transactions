import { combineReducers } from 'redux';
import data from './data';
import filterArray from './filter';

const rootReducer = combineReducers({
  data,
  filterArray
})

export default rootReducer;
