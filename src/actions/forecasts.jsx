import * as types from './actionTypes';
import WeatherApi from '../api/weatherApi';

export function loadSearchSuccess(results) {
  return { type: types.LOAD_FORECASTS_SUCCESS, results };
}

export function fetchSearchRequest() {
  return {
    type: types.LOAD_FORECASTS_REQUEST,
  };
}

export function loadAllForecasts() {
   // make async call to api, handle promise, dispatch action when promise is resolved
   return dispatch => {
    dispatch(fetchSearchRequest());
    return WeatherApi.getAllPeople().then(weather => {
      return dispatch(loadSearchSuccess(weather.results));
    });
  };
}
