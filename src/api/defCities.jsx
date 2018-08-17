import cities from '../assets/json/cities.json';
import config from './config';

export default {
    loadDefaultCities(){
        let pciked =  cities.filter((city) => {
            return config.defaultCities.includes(city.name);
        });
        return pciked;
    }
}