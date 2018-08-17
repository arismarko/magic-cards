import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function pagesReducer(state = initialState.weather, action) {
  switch (action.type) {
    case types.LOAD_FORECAST_SUCCESS:
      return action.results;
    default:
      return state;
  }
}