import * as types from './actionTypes';
import defCities from '../api/defCities';
import WeatherApi from '../api/weatherApi';

export function loadSearchSuccess(results) {
  return { type: types.LOAD_CITIES_SUCCESS, results };
}

export function fetchSearchRequest() {
  return {
    type: types.LOAD_CITIES_REQUEST,
  };
}

export  function loadDefaultCities(query) {

  const test = defCities.loadDefaultCities();

   // make async call to api, handle promise, dispatch action when promise is resolved
   return   dispatch => {
    dispatch(fetchSearchRequest());

    const cities = test.map(async city => {
      const response = await WeatherApi.getWeather(city.id).then(result => {
        return result;
      });

      console.log(response);

      return response;
    });

    return dispatch(loadSearchSuccess(cities));
  
  };
}
