import fetch from 'isomorphic-fetch';
import config from './config';

class WeatherApi {

  static getWeather(id) {
    const request = new Request(`${config.apiUrl}id=524901&APPID=${config.apiToken}`, {
      method: 'GET',
      mode: 'cors',
    });

    const getResponse = (response) => {
      console.log(response);
      return response.json();
    };

    const getError = (error) => {
      console.log(error);
      return error;
    };

    return fetch(request)
      .then(getResponse)
      .catch(getError);
  }

}

export default WeatherApi;