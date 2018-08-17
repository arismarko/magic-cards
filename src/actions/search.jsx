import * as types from './actionTypes.jsx';
import WeatherApi from '../api/weatherApi.jsx';

export function loadSearchSuccess(results) {
  return { type: types.LOAD_CITIES_SUCCESS, results };
}

export function fetchSearchRequest() {
  return {
    type: types.LOAD_CITIES_REQUEST,
  };
}

export function searchForWeather(query) {
   // make async call to api, handle promise, dispatch action when promise is resolved
   return dispatch => {
    dispatch(fetchSearchRequest());
    return WeatherApi.getAllPeople().then(weather => {
      let results = weather.results.filter((weather) => {
        return weather.name.toLowerCase().includes(query.toLowerCase());
      });
      return dispatch(loadSearchSuccess(results));
    });
  };
}
