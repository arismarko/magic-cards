import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function pagesReducer(state = initialState.cities, action) {
  switch (action.type) {
    case types.LOAD_CITIES_SUCCESS:
      console.log(action);
      return action.results;
    default:
      return state;
  }
}