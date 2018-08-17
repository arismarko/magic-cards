import { combineReducers } from 'redux';
import weather from './weather.jsx';
import cities from './cities.jsx';

const rootReducer = combineReducers({
  // short hand property names
  weather,
  cities
});

export default rootReducer;